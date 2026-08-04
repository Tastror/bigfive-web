'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@nextui-org/button';
import { RadioGroup, Radio } from '@nextui-org/radio';
import confetti from 'canvas-confetti';
import { isRtlLang } from 'rtl-detect';

import { type Question } from '@bigfive-org/questions';
import { sleep, formatTimer, isDev } from '@/lib/helpers';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import useTimer from '@/hooks/useTimer';
import { type Answer } from '@/types';
import { saveCompletedTestResult } from '@/lib/result-history';
import { useLocale } from 'next-intl';
import { getUiMessages } from '@/lib/ui-messages';
import { getErrorMessages } from '@/lib/error-messages';
import { Alert } from '@/components/alert';

interface SurveyProps {
  questions: Question[];
  nextText: string;
  prevText: string;
  resultsText: string;
  saveTest: Function;
  language: string;
}

export const Survey = ({
  questions,
  nextText,
  prevText,
  resultsText,
  saveTest,
  language
}: SurveyProps) => {
  const locale = useLocale();
  const ui = getUiMessages(locale);
  const isRtl = isRtlLang(locale);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [inProgress, setInProgress] = useState(false);
  const submittingRef = useRef(false);
  const { width } = useWindowDimensions();
  const seconds = useTimer();

  useEffect(() => {
    const handleResize = () => {
      setQuestionsPerPage(window.innerWidth > 768 ? 3 : 1);
    };
    handleResize();
  }, [width]);

  useEffect(() => {
    const restoreData = () => {
      if (dataInLocalStorage()) {
        console.log('Restoring data from local storage');
        restoreDataFromLocalStorage();
      }
    };
    restoreData();
  }, []);

  useEffect(() => {
    if (answers.length === 0) return;

    localStorage.setItem('inProgress', 'true');
    localStorage.setItem(
      'b5data',
      JSON.stringify({ answers, currentQuestionIndex })
    );
  }, [answers, currentQuestionIndex]);

  const currentQuestions = useMemo(
    () =>
      questions.slice(
        currentQuestionIndex,
        currentQuestionIndex + questionsPerPage
      ),
    [currentQuestionIndex, questions, questionsPerPage]
  );

  const isTestDone = questions.length === answers.length;

  const progress = Math.round((answers.length / questions.length) * 100);

  const nextButtonDisabled =
    inProgress ||
    currentQuestionIndex + questionsPerPage > answers.length ||
    (isTestDone &&
      currentQuestionIndex === questions.length - questionsPerPage) ||
    loading;

  const backButtonDisabled = currentQuestionIndex === 0 || loading;

  async function handleAnswer(id: string, value: string) {
    const question = questions.find((question) => question.id === id);
    if (!question) return;

    const newAnswer: Answer = {
      id,
      score: Number(value),
      domain: question.domain,
      facet: question.facet
    };

    setAnswers((prevAnswers) => [
      ...prevAnswers.filter((a) => a.id !== id),
      newAnswer
    ]);

    const latestAnswerId = answers.slice(-1)[0]?.id;

    if (
      questionsPerPage === 1 &&
      questions.length !== answers.length + 1 &&
      id !== latestAnswerId
    ) {
      setInProgress(true);
      await sleep(700);
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
      setInProgress(false);
    }
  }

  function handlePreviousQuestions() {
    setCurrentQuestionIndex((prev) => prev - questionsPerPage);
    window.scrollTo(0, 0);
  }

  function handleNextQuestions() {
    if (inProgress) return;
    setCurrentQuestionIndex((prev) => prev + questionsPerPage);
    window.scrollTo(0, 0);
  }

  function skipToEnd() {
    const randomAnswers = questions
      .map((question) => ({
        id: question.id,
        score: Math.floor(Math.random() * 5) + 1,
        domain: question.domain,
        facet: question.facet
      }))
      .slice(0, questions.length - 1);

    setAnswers([...randomAnswers]);
    setCurrentQuestionIndex(questions.length - 1);
  }

  async function submitTest() {
    if (submittingRef.current) return;
    submittingRef.current = true;
    setLoading(true);
    setSaveError(null);
    confetti({});
    try {
      const result = await saveTest({
        testId: 'b5-120',
        lang: language,
        invalid: false,
        timeElapsed: seconds,
        dateStamp: new Date(),
        answers
      });
      localStorage.removeItem('inProgress');
      localStorage.removeItem('b5data');
      console.log(result);
      saveCompletedTestResult(result.id);
      // Full document navigation with an explicit locale path. The client
      // router must not be involved here: cached router states have
      // intermittently surfaced as fake not-found pages for freshly saved
      // results (same treatment as the personality return link in a12b8f6).
      window.location.assign(`/${locale}/result/${result.id}`);
    } catch (error) {
      console.error('Failed to save test result:', error);
      submittingRef.current = false;
      setLoading(false);
      setSaveError(getErrorMessages(locale).unexpectedDescription);
    }
  }

  function dataInLocalStorage() {
    return !!localStorage.getItem('inProgress');
  }

  function restoreDataFromLocalStorage() {
    const data = localStorage.getItem('b5data');
    if (data) {
      const { answers, currentQuestionIndex } = JSON.parse(data);
      setAnswers(answers);
      setCurrentQuestionIndex(currentQuestionIndex);
    }
  }

  return (
    <div className='mt-2'>
      {saveError && (
        <div className='mb-6'>
          <Alert title={getErrorMessages(locale).unexpectedTitle}>
            <p>{saveError}</p>
          </Alert>
        </div>
      )}
      <div className='w-full'>
        <div className='mb-1 flex justify-between text-sm text-default-600'>
          <span>{formatTimer(seconds)}</span>
          <span>{progress}%</span>
        </div>
        <div
          aria-label={ui.progressBar}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progress}
          className='h-3 w-full overflow-hidden rounded-full bg-default-200'
          role='progressbar'
        >
          <div
            className='h-full rounded-full bg-secondary transition-[width] duration-300 motion-reduce:transition-none'
            style={{
              marginLeft: isRtl ? 'auto' : undefined,
              width: `${progress}%`
            }}
          />
        </div>
      </div>
      {currentQuestions.map((question) => (
        <div key={'q' + question.num}>
          <h2 className='text-2xl my-4'>{question.text}</h2>
          <div>
            <RadioGroup
              onValueChange={(value) => handleAnswer(question.id, value)}
              value={answers
                .find((answer) => answer.id === question.id)
                ?.score.toString()}
              color='secondary'
              isDisabled={inProgress}
            >
              {question.choices.map((choice, index) => (
                <Radio
                  key={index + question.id}
                  value={choice.score.toString()}
                >
                  {choice.text}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
      <div className='my-12 space-x-4 inline-flex'>
        <Button
          color='primary'
          isDisabled={backButtonDisabled}
          onClick={handlePreviousQuestions}
        >
          {prevText.toUpperCase()}
        </Button>

        <Button
          color='primary'
          isDisabled={nextButtonDisabled}
          onClick={handleNextQuestions}
        >
          {nextText.toUpperCase()}
        </Button>

        {isTestDone && (
          <Button
            color='secondary'
            onClick={submitTest}
            disabled={loading}
            isLoading={loading}
          >
            {resultsText.toUpperCase()}
          </Button>
        )}

        {isDev && !isTestDone && (
          <Button color='primary' onClick={skipToEnd}>
            Skip to end (dev)
          </Button>
        )}
      </div>
    </div>
  );
};
