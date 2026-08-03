import { serbianObjectToLatin } from '@/lib/serbian';

export interface PersonalityFacetInsight {
  low: string;
  high: string;
}

const insightsByLocale: Record<
  string,
  Record<string, PersonalityFacetInsight>
> = {
  en: {
    'N.1': {
      low: 'A lower score can help you stay calm and keep uncertainty from taking over. If that calm leads you to underestimate risks or prepare too little, list the most likely risk and one fallback before an important decision.',
      high: 'A higher score can help you notice risks and warning signs early. If worry repeatedly consumes your attention, separate what is possible from what is probable, set a limit on worry time, and choose one concrete next action; seek professional support if it persistently disrupts daily life.'
    },
    'N.2': {
      low: 'A lower score can make you even-tempered and hard to provoke. If you tend to suppress legitimate anger or leave boundaries unstated, name the problem early and describe the behavior you want changed.',
      high: 'A higher score can make you quick to detect unfairness and defend what matters. If anger escalates conflicts or drives impulsive reactions, pause before responding and state the specific behavior, impact, and need instead of attacking the person.'
    },
    'N.3': {
      low: "A lower score often supports emotional recovery and steady energy. If it makes another person's sadness or your own need for rest easy to overlook, slow down, listen, and acknowledge the loss before trying to solve it.",
      high: 'A higher score may make disappointment and loss especially salient, which can reveal what matters deeply to you. Persistent low mood is not something you have to treat as merely a trait: keep routines and tasks small, stay connected to trusted people, and seek professional support when it lasts or impairs daily life.'
    },
    'N.4': {
      low: "A lower score can make social situations feel relaxed and reduce fear of judgment. If you sometimes miss how you come across, ask for specific feedback and check the other person's response rather than assuming everything landed well.",
      high: "A higher score can make you attentive to social expectations and other people's reactions. If self-monitoring turns into rumination or avoidance, shift attention to the shared task, approach difficult situations gradually, and judge the interaction by evidence rather than imagined scrutiny."
    },
    'N.5': {
      low: 'A lower score supports restraint and the ability to delay gratification. If restraint becomes overcontrol or leaves too little room for enjoyment, deliberately make space for harmless spontaneity instead of waiting until pressure builds.',
      high: 'A higher score can bring spontaneity, appetite, and enjoyment of immediate experience. If urges repeatedly create costs you later regret, add friction before acting: wait, remove triggers, set limits in advance, or make the desired long-term choice easier to reach.'
    },
    'N.6': {
      low: 'A lower score can help you think clearly and act steadily under pressure. If it leads you to underestimate strain in yourself or others, plan contingencies and make time to debrief and recover after demanding periods.',
      high: 'A higher score can make you notice overload early and seek support before resources run out. If pressure causes freezing or confusion, reduce simultaneous demands, rehearse the first few steps in advance, and use a simple written plan when stress is high.'
    },
    'E.1': {
      low: 'A lower score can support independence and a small, selective social circle. If reserve is mistaken for disinterest or keeps useful relationships from forming, signal warmth explicitly and maintain a few regular points of contact.',
      high: 'A higher score can make rapport, trust, and new connections come easily. If friendliness leads to overcommitment or trust before it is earned, pace self-disclosure, verify important claims, and leave room to say no.'
    },
    'E.2': {
      low: 'A lower score can provide focus, comfort with solitude, and less dependence on group stimulation. If solitude turns into isolation or groups become increasingly difficult, choose smaller gatherings and plan recovery time rather than avoiding contact altogether.',
      high: 'A higher score can bring energy to groups and help create social momentum. If company crowds out focused work or makes solitude uncomfortable, protect uninterrupted time and practice listening without needing to keep the interaction moving.'
    },
    'E.3': {
      low: "A lower score can make room for listening, cooperation, and other people's leadership. If your needs or expertise remain invisible, prepare one clear sentence, make a direct request, or speak once near the start of the discussion.",
      high: 'A higher score can help a group make decisions and give direction when others hesitate. If you take up too much space, ask for dissenting views, wait before answering, and make ownership explicit rather than assuming agreement.'
    },
    'E.4': {
      low: 'A lower score can support an unhurried pace and sustained attention without constant motion. If important work is repeatedly delayed, choose a small number of priorities and give them visible deadlines or time blocks.',
      high: 'A higher score can create momentum and a strong capacity for action. If activity becomes overload or busyness without progress, distinguish motion from outcomes and schedule buffers and recovery as deliberately as tasks.'
    },
    'E.5': {
      low: 'A lower score can favor safety, stability, and satisfaction without intense stimulation. If avoiding novelty narrows your choices, try small, reversible experiments whose risks are known in advance.',
      high: 'A higher score can support courage, exploration, and enjoyment of vivid experiences. If boredom drives unnecessary risk, set limits before excitement rises and seek stimulation in settings where the downside is contained.'
    },
    'E.6': {
      low: 'A lower score can bring seriousness and a realistic tone when optimism would feel false. If appreciation or warmth stays hidden, say it plainly and create small occasions for enjoyment instead of expecting positive feeling to appear on its own.',
      high: 'A higher score can lift group morale and make positive experiences easy to notice. If cheerfulness glosses over pain or risk, acknowledge what is difficult first, then look for hope without denying the facts.'
    },
    'O.1': {
      low: 'A lower score can support concrete thinking and attention to what is practical and observable. If familiar answers crowd out better possibilities, generate several alternatives before evaluating which one is realistic.',
      high: 'A higher score can support creativity, mental simulation, and original connections. If ideas remain in daydreams or scatter attention, capture them, choose one, and turn it into the smallest tangible test.'
    },
    'O.2': {
      low: 'A lower score can keep attention on function, clarity, and direct usefulness. If aesthetic experience or restorative beauty is consistently neglected, sample it in short, low-pressure ways and notice what genuinely holds your attention.',
      high: 'A higher score can sharpen sensitivity to form, beauty, and subtle detail. If aesthetic standards consume too much time or override function, define the practical constraints first and decide where refinement is truly worth it.'
    },
    'O.3': {
      low: "A lower score can support composure and decisions that are less swayed by the mood of the moment. If feelings become hard to identify or other people's signals are missed, pause for a brief body-and-emotion check before deciding what is needed.",
      high: 'A higher score can support emotional awareness, empathy, and a nuanced inner life. If feelings become overwhelming or dictate decisions, name the emotion, allow it to settle, and distinguish what you feel from what the evidence shows.'
    },
    'O.4': {
      low: 'A lower score can support continuity, mastery, and dependable routines. If routine becomes rigidity or fear of novelty, introduce one small, reversible change while keeping the rest of the structure familiar.',
      high: 'A higher score can support adaptability and learning through exploration. If novelty creates instability or unfinished commitments, keep a few non-negotiable anchors for time, money, and responsibilities.'
    },
    'O.5': {
      low: 'This facet concerns interest in complex and abstract ideas, not intelligence or IQ. A lower score can favor practical decisions; if unfamiliar ideas are dismissed too quickly, ask what evidence would change your mind and learn only what the decision requires.',
      high: 'A higher score can support analysis, curiosity, and comfort with complexity. If thinking turns into endless debate or analysis paralysis, define the decision criterion and deadline before exploring further.'
    },
    'O.6': {
      low: 'A lower score can preserve useful traditions, shared expectations, and social continuity. If convention goes unquestioned or excludes relevant perspectives, revisit the reason for the rule and ask who is affected by it.',
      high: 'A higher score can support critical examination of norms and constructive reform. If novelty is treated as automatically better, test changes in small steps and preserve the parts of existing practice that still work.'
    },
    'A.1': {
      low: 'A lower score can help you notice inconsistency and protect yourself when stakes are high. If suspicion blocks cooperation, calibrate trust instead of granting or withholding it all at once: begin with small commitments and update from evidence.',
      high: 'A higher score can make openness and cooperation easier. If good faith leaves you open to exploitation, verify high-stakes claims, make expectations explicit, and keep boundaries even with people you like.'
    },
    'A.2': {
      low: 'A lower score can support tact, negotiation, and strategic privacy. If it creates manipulation or ambiguity, distinguish a legitimate boundary from deception and make commitments in language the other person can verify.',
      high: 'A higher score can build reliability through directness and transparency. If honesty becomes bluntness or oversharing, combine truth with timing, relevance, and care for how it is delivered.'
    },
    'A.3': {
      low: "A lower score can protect limited time and encourage other people's autonomy. If others experience you as unavailable or reciprocity erodes, choose a form of help you can sustain and state its scope clearly.",
      high: 'A higher score can create strong support and a sense of community. If helping causes burnout or prevents others from taking responsibility, ask whether help is wanted, agree on limits, and do not make every need your obligation.'
    },
    'A.4': {
      low: 'A lower score can help defend standards and address conflict directly. If disagreement becomes chronic friction, separate non-negotiable needs from flexible options and use shared criteria rather than force.',
      high: 'A higher score can de-escalate conflict and protect cooperation. If harmony is purchased by conceding important needs, state the boundary plainly and allow respectful disagreement without treating it as relationship failure.'
    },
    'A.5': {
      low: "A lower score can support self-advocacy and make contributions visible. If confidence is heard as superiority or others' work disappears, make claims with evidence and share credit precisely.",
      high: 'A higher score can keep attention on the work and make collaboration easier. If your contribution is repeatedly overlooked, describe what you did and its effect factually; accurate self-representation is not arrogance.'
    },
    'A.6': {
      low: 'A lower score can support objectivity and difficult decisions that cannot satisfy everyone. If people experience the decision as cold or its human cost is missed, ask who bears the burden and pair the reasoning with a clear explanation.',
      high: 'A higher score can support compassion and quick recognition of suffering. If empathy becomes exhaustion or overrides relevant facts, set emotional boundaries and verify what help will actually improve the situation.'
    },
    'C.1': {
      low: 'A lower score can encourage caution, preparation, and asking for help when it is needed. If self-doubt keeps you from starting, break the task into small pieces and use completed steps as evidence of capability.',
      high: 'A higher score can support ownership, persistence, and confidence in solving problems. If confidence becomes overestimation or reluctance to seek help, run a brief pre-mortem and ask a knowledgeable person to challenge the plan.'
    },
    'C.2': {
      low: 'A lower score can support flexibility and improvisation when plans change. If disorder costs time or makes obligations disappear, create only a few reliable homes, lists, and routines for the things that matter most.',
      high: 'A higher score can make work clear, reliable, and easy to resume. If order turns into perfectionism or change becomes distressing, define what is good enough and leave deliberate slack in the plan.'
    },
    'C.3': {
      low: 'A lower score can help question rules and adapt obligations to context. If others cannot rely on your commitments or ethical corners are cut, make promises explicit and reconnect each obligation to the reason it matters.',
      high: 'A higher score can support integrity and dependable follow-through. If duty creates rigidity or an unsustainable load, rank competing obligations and renegotiate them early instead of silently carrying all of them.'
    },
    'C.4': {
      low: 'A lower score can protect balance and allow satisfaction without constant competition. If it becomes stagnation or leaves valued abilities unused, choose a personally meaningful target and define the next small milestone.',
      high: 'A higher score can support mastery and sustained effort toward demanding goals. If self-worth becomes tied to output or effort becomes burnout, define what counts as enough and protect rest and roles unrelated to achievement.'
    },
    'C.5': {
      low: "A lower score can support spontaneity and responsiveness to changing priorities. If starting or finishing is repeatedly difficult, shrink the first step, change the environment, and add a visible cue or another person's accountability.",
      high: 'A higher score can support follow-through even when motivation is low. If persistence continues past diminishing returns, set stopping rules and review whether the goal still deserves the effort.'
    },
    'C.6': {
      low: 'A lower score can support speed, experimentation, and action with incomplete information. If preventable errors recur, add a short pause and checklist before decisions that are costly or hard to reverse.',
      high: 'A higher score can support risk analysis and careful, high-quality decisions. If caution causes missed timing or repeated rumination, set a decision deadline and prefer a reversible pilot over waiting for certainty.'
    }
  },
  'zh-hans': {
    'N.1': {
      low: '较低时的优势是临场更镇定，不容易被不确定性拖住。如果这种镇定让你低估风险或准备不足，可以在重要决定前列出最可能的风险，并准备一项备用方案。',
      high: '较高时的优势是能更早察觉风险和异常。如果担忧开始反复占用注意力，可以区分“可能发生”和“很可能发生”，限定担忧的时间，然后只确定下一步可执行的行动；若长期明显影响日常生活，适合寻求专业支持。'
    },
    'N.2': {
      low: '较低时通常情绪平稳，不容易被激怒。如果你因此压下了合理的愤怒，或一直没有说清界限，可以尽早指出问题，并具体说明希望对方改变什么行为。',
      high: '较高时能迅速察觉不公平，也更愿意维护重要的人和事。如果愤怒容易使冲突升级或催生冲动反应，回应前先停一下，描述具体行为、造成的影响和你的需要，而不是攻击对方本人。'
    },
    'N.3': {
      low: '较低时通常恢复得较快，情绪和精力也更稳定。如果这让你忽略了自己需要休息，或低估了别人的难过，可以先放慢速度、倾听并承认损失，再急着解决问题。',
      high: '较高时可能对失望和失去格外敏感，这也能提示你什么对自己真正重要。持续低落不必被简单当作性格的一部分：维持基本作息，把任务缩小，并与信任的人保持联系；若持续或明显影响生活，应寻求专业支持。'
    },
    'N.4': {
      low: '较低时在社交场合更放松，也较少害怕他人的评价。如果你有时没有注意到自己给人的感受，可以主动询问具体反馈，并观察对方的反应，而不要默认表达一定到位。',
      high: '较高时更能留意社交规范和他人的反应。如果自我关注变成反复回想或回避，可以把注意力转向共同任务，循序渐进地接触困难场合，并用实际证据而非想象中的审视来评价这次互动。'
    },
    'N.5': {
      low: '较低时更能克制冲动，也更容易延迟满足。如果克制变成了过度控制，生活中几乎没有轻松和享受，可以主动给无害的即兴安排留出空间，而不是等压力积累后反弹。',
      high: '较高时更有即兴性，也更容易享受当下。如果冲动反复带来事后后悔的代价，可以在行动前增加一点阻力：先等一会儿、移开诱因、预先设定上限，或让长期想要的选择更容易执行。'
    },
    'N.6': {
      low: '较低时在压力下更容易保持清晰和稳定。如果这使你低估了自己或他人的负荷，可以事先准备备用方案，并在高压阶段结束后安排复盘和恢复。',
      high: '较高时能更早意识到自己已经超负荷，也更可能及时求助。如果压力会让你僵住或思路混乱，可以减少同时处理的事情，事先演练最先要做的几步，并在高压时只按一份简单的书面计划行动。'
    },
    'E.1': {
      low: '较低时更独立，也可能更珍惜少而深入的关系。如果含蓄被误解为冷淡，或妨碍了有价值的关系形成，可以更明确地表达善意，并固定维护少数重要联系。',
      high: '较高时更容易建立亲近感、信任和新联系。如果友善让你过度承诺，或在了解不足时就信任他人，可以放慢自我披露的速度，核实重要信息，也给自己保留拒绝的空间。'
    },
    'E.2': {
      low: '较低时更能独处和专注，不太依赖群体带来的刺激。如果独处逐渐变成隔离，或越来越难进入群体，可以选择规模较小的聚会，并预留恢复时间，而不是完全回避接触。',
      high: '较高时能给群体带来活力，也容易推动互动。如果社交挤占了专注工作，或独处变得难以忍受，可以保护不被打断的时间，也练习倾听，而不是总要让互动继续热闹下去。'
    },
    'E.3': {
      low: '较低时更愿意倾听、配合，也能给别人留下带领的空间。如果自己的需要或专业意见总是没有被看见，可以事先准备一句清晰的话，直接提出请求，或在讨论开始不久先发言一次。',
      high: '较高时能在他人犹豫时给出方向，推动群体作出决定。如果自己占据了过多发言空间，可以主动邀请反对意见，回答前多等一会儿，并明确确认由谁负责，而不要把沉默当作同意。'
    },
    'E.4': {
      low: '较低时步调更从容，不需要一直忙碌也能保持注意力。如果重要工作反复被推迟，可以只选择少数优先事项，并为它们设置看得见的期限或固定时间段。',
      high: '较高时行动力强，容易形成推进事情的势头。如果活动变成过载，或只是忙而没有进展，可以区分忙碌本身和实际结果，并像安排任务一样认真安排缓冲和恢复。'
    },
    'E.5': {
      low: '较低时更重视安全和稳定，不需要强烈刺激也能满足。如果回避新鲜事物逐渐限制了选择，可以尝试风险可控、随时可以撤回的小实验。',
      high: '较高时更敢探索，也更能享受鲜明的新体验。如果无聊会驱使你承担不必要的风险，可以在兴奋上升前先设好界限，并选择后果可控的方式获得刺激。'
    },
    'E.6': {
      low: '较低时更严肃，也能在乐观显得虚假时保持现实。如果欣赏与好感总是没有表达出来，可以直接说出口，并主动创造一些小的愉快时刻，而不是等好心情自行出现。',
      high: '较高时容易注意到积极体验，也能提升群体的士气。如果开朗掩盖了痛苦或风险，可以先承认困难确实存在，再在不否认事实的前提下寻找希望。'
    },
    'O.1': {
      low: '较低时更擅长具体思考，也更关注实际和可观察的事物。如果熟悉的答案挤掉了更好的可能性，可以先列出几种不同方案，再判断哪一种现实可行。',
      high: '较高时更有创造力，善于在脑中模拟情境并建立新联系。如果想法总停留在幻想中，或让注意力四处分散，可以先记录下来，只选择一个，再用最小的实际行动来验证。'
    },
    'O.2': {
      low: '较低时更关注功能、清晰和直接用途。如果长期忽略审美体验带来的放松，可以用短暂、没有压力的方式接触艺术或自然，观察什么真的能吸引自己。',
      high: '较高时对形式、美感和细微之处更敏锐。如果审美标准耗费了过多时间，或压过了实际功能，可以先确定必须满足的现实限制，再决定哪些地方真正值得精细打磨。'
    },
    'O.3': {
      low: '较低时更沉着，作决定也较少被当下情绪左右。如果自己很难辨认感受，或容易漏掉他人的情绪信号，可以在作决定前短暂停一下，检查身体感受、情绪和真正的需要。',
      high: '较高时更能觉察情绪，也更容易共情，内心体验通常更细腻。如果感受变得压倒一切或替你作了决定，可以先说出情绪的名称，等它稍微平复，再区分“我的感受”和“证据表明的事实”。'
    },
    'O.4': {
      low: '较低时更能保持连续性，在熟悉的做法中积累熟练度。如果规律变成僵化，或对新事物的担心限制了选择，可以只引入一项可撤回的小变化，其余结构保持熟悉。',
      high: '较高时适应性更强，也善于通过探索学习。如果追求新鲜造成生活不稳定，或留下太多未完成的承诺，可以为时间、金钱和责任保留几项不可随意打破的基本安排。'
    },
    'O.5': {
      low: '这一项描述的是对复杂、抽象观念的兴趣，不等同于智力或智商。较低时更偏向实际和快速决断；如果因此过早排斥陌生观点，可以问自己“什么证据会让我改变看法”，并只学习当前决定真正需要的部分。',
      high: '较高时更善于分析，对复杂问题也更有好奇心。如果思考变成无休止的争论或迟迟无法决定，可以在继续探索前先确定判断标准和截止时间。'
    },
    'O.6': {
      low: '较低时有助于保留有用的传统、共同预期和社会连续性。如果惯例从未受到检验，或遗漏了相关人群的处境，可以重新追问规则存在的理由，以及它实际影响了谁。',
      high: '较高时更愿意审视规范，也可能推动有建设性的改革。如果把新做法自动当成更好，可以先小范围验证，同时保留现有做法中仍然有效的部分。'
    },
    'A.1': {
      low: '较低时更容易发现前后不一，在利害较大时也能保护自己。如果怀疑妨碍了合作，不必一次性选择完全信任或完全不信任；可以从小承诺开始，再根据实际证据逐步调整。',
      high: '较高时更容易开放地相处和合作。如果善意让你容易被利用，可以核实事关重大的说法，明确双方预期，并且即使面对喜欢的人也保留必要界限。'
    },
    'A.2': {
      low: '较低时可能更有策略，懂得谈判并保留必要隐私。如果这造成操纵或含糊，可以区分合理的隐私界限与欺骗，并用对方能够核实的语言作出承诺。',
      high: '较高时的直接和透明容易建立可靠感。如果实话实说变成了生硬，或透露了不必透露的内容，可以同时考虑真实、时机、相关性和表达方式。'
    },
    'A.3': {
      low: '较低时能保护有限的时间，也能让别人保留自主性。如果他人总觉得你无法提供支持，或关系中的互助逐渐消失，可以选择一种自己能够持续的帮助方式，并把范围说清楚。',
      high: '较高时能给他人有力支持，也容易形成互助感。如果帮助造成耗竭，或替别人承担了本应由其负责的事情，可以先问对方是否需要，约定界限，不把每一种需要都变成自己的义务。'
    },
    'A.4': {
      low: '较低时更能坚持标准，也敢于直接处理冲突。如果分歧变成长期摩擦，可以区分不能让步的需要和可以调整的方案，并依据共同标准，而不是靠施压解决。',
      high: '较高时善于缓和冲突并维持合作。如果和谐是靠放弃重要需要换来的，可以清楚说出界限，也允许有礼貌的分歧存在，不必把意见不同等同于关系失败。'
    },
    'A.5': {
      low: '较低时更敢于为自己发声，也能让贡献被人看见。如果自信被听成优越感，或无意中掩盖了别人的贡献，可以用事实说明成绩，并准确地分享功劳。',
      high: '较高时不容易抢占注意力，通常也更利于合作。如果自己的贡献反复被忽略，可以客观说明做了什么、产生了什么效果；准确呈现自己并不等于傲慢。'
    },
    'A.6': {
      low: '较低时更容易保持客观，也能作出无法让所有人满意的艰难决定。如果决定显得冷漠，或遗漏了人的实际代价，可以追问负担最终由谁承担，并在给出理由时把这种影响说清楚。',
      high: '较高时更富有同情心，也能迅速发现他人的痛苦。如果共情造成耗竭，或压过了同样重要的事实，可以保持情绪界限，并先核实哪种帮助真正能改善处境。'
    },
    'C.1': {
      low: '较低时可能更谨慎，愿意准备，也更能在需要时求助。如果自我怀疑让你迟迟不开始，可以把任务拆小，并把已经完成的步骤当作能力证据。',
      high: '较高时更愿意承担责任，也相信自己能解决问题。如果信心变成高估能力或不愿求助，可以提前设想计划失败的原因，并请了解情况的人专门指出漏洞。'
    },
    'C.2': {
      low: '较低时更灵活，在计划变化时也善于随机应变。如果杂乱反复浪费时间，或让承诺从视野中消失，只需为最重要的物品和事项建立少数固定位置、清单和流程。',
      high: '较高时工作更清晰、可靠，也容易从中断处继续。如果秩序变成完美主义，或变化会带来明显困扰，可以先定义“足够好”，并在计划中主动留出余量。'
    },
    'C.3': {
      low: '较低时更敢质疑规则，也能根据情境调整义务。如果他人无法依赖你的承诺，或为了方便而突破基本原则，可以把承诺明确说出，并重新确认这项义务为什么重要。',
      high: '较高时更有原则，也能可靠地履行承诺。如果责任感带来僵化或无法持续的负担，可以给相互冲突的义务排序，并尽早重新协商，而不是默默全部扛下。'
    },
    'C.4': {
      low: '较低时更能维持生活平衡，也不需要不断竞争才能满足。如果这变成停滞，或珍视的能力一直没有发挥，可以选择一个对自己有意义的目标，并确定下一个小里程碑。',
      high: '较高时更能持续投入，在困难目标上追求精进。如果自我价值完全系于产出，或努力走向耗竭，可以提前定义什么叫“已经足够”，并保护休息以及与成就无关的生活角色。'
    },
    'C.5': {
      low: '较低时更有即兴性，也能响应不断变化的优先事项。如果开始或完成任务反复遇到困难，可以把第一步缩得更小，调整环境，加入看得见的提示，或与他人约定检查进度。',
      high: '较高时即使动力不足也能把事情做完。如果坚持已经明显得不偿失，可以预先设定停止条件，并定期重新判断这个目标是否仍值得投入。'
    },
    'C.6': {
      low: '较低时决断更快，也敢于在信息不完整时试验和行动。如果可以避免的错误反复出现，可以在代价高或难以撤回的决定前加入短暂停顿和一份简短检查清单。',
      high: '较高时更善于分析风险，也容易作出细致、高质量的决定。如果谨慎导致错过时机或反复纠结，可以设定决定期限，并优先采用可撤回的小规模试行，而不是一直等待确定性。'
    }
  },
  'zh-hant': {
    'N.1': {
      low: '較低時的優勢是臨場更鎮定，不容易被不確定性拖住。如果這種鎮定讓你低估風險或準備不足，可以在重要決定前列出最可能的風險，並準備備用方案。',
      high: '較高時的優點是能更早察覺風險和異常。如果擔憂開始反覆佔用注意力，可以區分「可能發生」和「很可能發生」，限定擔憂的時間，然後只確定下一步可執行的行動；若長期明顯影響日常生活，適合尋求專業支持。'
    },
    'N.2': {
      low: '較低時通常情緒平穩，不容易被激怒。如果你因此壓下了合理的憤怒，或一直沒有說清界限，可以儘早指出問題，並具體說明希望對方改變什麼行為。',
      high: '較高時能迅速察覺不公平，也更願意維護重要的人事物。如果憤怒容易使衝突升級或催生衝動反應，回應前先停一下，描述具體行為、造成的影響和你的需要，而不是攻擊對方本人。'
    },
    'N.3': {
      low: '較低時通常會恢復得較快，情緒和精力也較穩定。如果這讓你忽略了自己需要休息，或低估了別人的難過，可以先放慢速度、傾聽並承認損失，再急著解決問題。',
      high: '較高時可能對失望和失去格外敏感，這也能提示你什麼對自己真正重要。持續低落不必簡單當作性格的一部分：維持基本作息，把任務縮小，並與信任的人保持聯繫；若持續或明顯影響生活，應尋求專業支持。'
    },
    'N.4': {
      low: '較低時在社交場合較放鬆，也較少害怕他人的評價。如果你有時沒有留意到自己給人的感受，可以主動詢問具體回饋，並觀察對方的反應，不要預設自己的表達一定到位。',
      high: '較高時更能留意社交規範和他人的反應。如果自我關注變成反覆回想或迴避，可以把注意力轉向共同任務，循序漸進地接觸困難場合，並用實際證據而非想像中的審視來評價這次互動。'
    },
    'N.5': {
      low: '較低時較能克制衝動，也較容易延遲滿足。如果克制變成了過度控制，生活中幾乎沒有輕鬆和享受，可以主動給無害的即興安排留出空間，而不是等壓力積累後反彈。',
      high: '較高時更有即興性，也更容易享受當下。如果衝動反覆帶來事後後悔的代價，可以在行動前增加一點阻力：先等一會兒、移開誘因、預先設定上限，或讓長期想要的選擇更容易執行。'
    },
    'N.6': {
      low: '較低時在壓力下更容易保持清晰和穩定。如果這使你低估了自己或他人的負荷，可以事先準備備用方案，並在高壓階段結束後安排回顧和恢復。',
      high: '較高時能更早意識到自己已經超負荷，也更有可能及時求助。如果壓力會讓你僵住或思路混亂，可以減少同時處理的事情，事先演練最先要做的幾步，並在高壓時只按一份簡單的書面計劃行動。'
    },
    'E.1': {
      low: '較低時較獨立，也可能更珍惜少而深入的關係。如果含蓄被誤解為冷淡，或妨礙了有價值的關係形成，可以更明確地表達善意，並固定維護少數重要聯繫。',
      high: '較高時較容易建立親近感、信任和新連結。如果友善讓你過度承諾，或在了解不足時就信任他人，可以放慢自我揭露的速度，核實重要訊息，也給自己保留拒絕的空間。'
    },
    'E.2': {
      low: '較低時更能獨處和專注，不太依賴團體帶來的刺激。如果獨處逐漸變成隔離，或越來越難融入群體，可以選擇規模較小的聚會，並預留恢復時間，而不是完全迴避接觸。',
      high: '較高時能為群體帶來活力，也容易推動互動。如果社交擠佔了專注工作，或獨處變得難以忍受，可以保護不被打斷的時間，也練習傾聽，而不是總要讓互動繼續熱鬧下去。'
    },
    'E.3': {
      low: '較低時更願意傾聽、配合，也能給別人留下帶領的空間。如果自己的需求或專業意見總是沒有被看見，可以事先準備一句清晰的話，直接提出請求，或在討論開始不久先發言一次。',
      high: '較高時能在他人猶豫時給予方向，並推動群體做出決定。如果自己佔據了過多發言空間，可以主動邀請反對意見，回答前多等一會兒，並明確確認由誰負責，而不要把沉默當作同意。'
    },
    'E.4': {
      low: '較低時步調更從容，不需要一直忙碌也能保持專注。如果重要工作一再被推遲，可以只選擇少數優先事項，並為它們設定看得見的期限或固定時間段。',
      high: '較高時行動力強，容易形成推進事情的動力。如果活動變成過載，或只是忙碌而沒有進展，可以區分忙碌本身和實際結果，並像安排任務一樣認真安排緩衝和恢復。'
    },
    'E.5': {
      low: '較低時更重視安全穩定，不需要強烈刺激也能滿足。如果迴避新事物逐漸限制了選擇，可以嘗試風險可控、隨時可以撤回的小實驗。',
      high: '較高時更敢探索，也更能享受鮮明的新體驗。如果無聊會驅使你承擔不必要的風險，可以在興奮上升前先設好界限，並選擇後果可控的方式獲得刺激。'
    },
    'E.6': {
      low: '較低時較嚴肅，也能在樂觀顯得虛假時保持現實。如果欣賞與好感總是沒有表達出來，可以直接說出口，並主動創造一些小的愉快時刻，而不是等好心情自行出現。',
      high: '較高時容易注意到正向體驗，也能提升群體的士氣。如果開朗掩蓋了痛苦或風險，可以先承認困難確實存在，再在不否認事實的前提下尋找希望。'
    },
    'O.1': {
      low: '較低時較擅長具體思考，也較關注實際可觀察的事物。如果熟悉的答案擠掉了更好的可能性，可以先列出幾種不同方案，再判斷哪一種現實可行。',
      high: '較高時更有創造力，善於在腦中模擬情境並建立新連結。如果想法總是停留在幻想中，或讓注意力四處分散，可以先記錄下來，只選擇一個，再用最小的實際行動來驗證。'
    },
    'O.2': {
      low: '較低時較關注功能、清晰和直接用途。如果長期忽略美感體驗帶來的放鬆，可以用短暫、沒有壓力的方式接觸藝術或自然，觀察什麼真的能吸引自己。',
      high: '較高時對形式、美感和細微之處更敏銳。如果審美標準耗費了太多時間，或壓過了實際功能，可以先確定必須滿足的現實限制，再決定哪些地方真正值得精細打磨。'
    },
    'O.3': {
      low: '較低時較沉著，作決定也較少被當下情緒左右。如果自己很難辨認感受，或容易錯過他人的情緒訊號，可以在做決定前短暫停留一下，檢視身體感受、情緒和真正的需求。',
      high: '較高時更能覺察情緒，也更容易共情，內心體驗通常更細膩。如果感受變得壓倒一切或替你作了決定，可以先說出情緒的名稱，等它稍微平復，再區分「我的感受」和「證據顯示的事實」。'
    },
    'O.4': {
      low: '較低時更能保持連續性，在熟悉的做法中累積熟練度。如果規律變成僵化，或對新事物的擔憂限制了選擇，可以只引入一項可撤回的小變化，其餘結構保持熟悉。',
      high: '較高時適應性較強，也善於透過探索學習。如果追求新鮮造成生活不穩定，或留下太多未完成的承諾，可以為時間、金錢和責任保留幾項不可隨意打破的基本安排。'
    },
    'O.5': {
      low: '這一項描述的是對複雜、抽象觀念的興趣，不等於智力或智商。較低時更偏向實際和快速決斷；如果因此過早排斥陌生觀點，可以問自己「什麼證據會讓我改變看法」，並只學習當前決定真正需要的部分。',
      high: '較高時較善於分析，對複雜問題也較好奇。如果思考變成無止盡的爭論或遲遲無法決定，可以在繼續探索前先確定判斷標準和截止時間。'
    },
    'O.6': {
      low: '較低時有助於保留有用的傳統、共同預期和社會連續性。如果慣例從未受到檢驗，或遺漏了相關人群的處境，可以重新追問規則存在的理由，以及它實際上影響了誰。',
      high: '較高時較願意檢視規範，也可能推動有建設性的改革。如果把新做法自動當成更好，可以先小範圍驗證，同時保留現有做法中仍然有效的部分。'
    },
    'A.1': {
      low: '較低時較容易發現前後不一，在利害較大時也能保護自己。如果懷疑妨礙了合作，不必一次就選擇完全信任或完全不信任；可以從小承諾開始，再根據實際證據逐步調整。',
      high: '較高時較容易開放地相處合作。如果善意讓你容易被利用，可以核實事關重大的說法，明確雙方預期，並且即使面對喜歡的人也保留必要界限。'
    },
    'A.2': {
      low: '較低時可能更有策略，懂得談判並保留必要隱私。如果這造成操縱或含糊，可以區分合理的隱私界線與欺騙，並用對方能夠核實的語言作出承諾。',
      high: '較高時的直接和透明容易建立可靠感。如果實話實說變成了生硬，或透露了不必透露的內容，可以同時考慮真實、時機、相關性和表達方式。'
    },
    'A.3': {
      low: '較低時能保護有限的時間，也能讓別人保留自主性。如果他人總覺得你無法提供支持，或關係中的互助逐漸消失，可以選擇一種自己能夠持續的幫助方式，並把範圍說清楚。',
      high: '較高時能給他人有力支持，也容易形成互助感。如果幫助造成耗竭，或替別人承擔了本應由其負責的事情，可以先問對方是否需要，約定界限，不把每一種需要都變成自己的義務。'
    },
    'A.4': {
      low: '較低時更能堅持標準，也敢於直接處理衝突。如果分歧變成長期摩擦，可以區分不能讓步的需要和可以調整的方案，並依據共同標準，而不是靠施壓解決。',
      high: '較高時善於緩和衝突並維持合作。如果和諧是靠放棄重要需要換來的，可以清楚說出界限，也允許有禮貌的分歧存在，不必把意見不同等同於關係失敗。'
    },
    'A.5': {
      low: '較低時更敢為自己發聲，也能讓貢獻被看見。如果自信被聽成優越感，或無意中掩蓋了別人的貢獻，可以用事實說明成績，並準確地分享功勞。',
      high: '較高時不容易搶佔注意力，通常也更有利於合作。如果自己的貢獻一再被忽略，可以客觀說明做了什麼、產生了什麼效果；準確呈現自己並不等於傲慢。'
    },
    'A.6': {
      low: '較低時更容易保持客觀，也能做出無法讓所有人滿意的艱難決定。如果決定顯得冷漠，或遺漏了人的實際代價，可以追問負擔最終由誰承擔，並在給出理由時把這種影響說清楚。',
      high: '較高時更富同情心，也能迅速發現他人的痛苦。如果同理心造成耗竭，或壓過了同樣重要的事實，可以保持情緒界限，並先核實哪種幫助真正能改善處境。'
    },
    'C.1': {
      low: '較低時可能更謹慎，願意準備，也更能在需要時求助。如果自我懷疑讓你遲遲不開始，可以把任務拆小，並把已經完成的步驟當作能力證據。',
      high: '較高時更願意承擔責任，也相信自己能解決問題。如果信心變成高估能力或不願求助，可以提前設想計畫失敗的原因，並請了解情況的人特別指出漏洞。'
    },
    'C.2': {
      low: '較低時較靈活，在計畫變更時也善於隨機應變。如果雜亂一再浪費時間，或讓承諾從視野中消失，只需為最重要的物品和事項建立少數固定位置、清單和流程。',
      high: '較高時工作較清晰、可靠，也容易從中斷處繼續。如果秩序變成完美主義，或變化會帶來明顯困擾，可以先界定「足夠好」，並在計劃中主動留出餘量。'
    },
    'C.3': {
      low: '較低時更敢質疑規則，也能依照情境調整義務。如果他人無法依賴你的承諾，或為了方便而突破基本原則，可以把承諾明確說出，並重新確認這項義務為何重要。',
      high: '較高時更有原則，也能可靠地履行承諾。如果責任感帶來僵化或無法持續的負擔，可以給相互衝突的義務排序，並儘早重新協商，而不是默默全部扛下。'
    },
    'C.4': {
      low: '較低時更能維持生活平衡，也不需要不斷競爭才能滿足。如果這變成停滯，或珍視的能力一直沒有發揮，可以選擇一個對自己有意義的目標，並確定下一個小里程碑。',
      high: '較高時更能持續投入，在困難目標上追求精進。如果自我價值完全繫於產出，或努力走向耗竭，可以提前界定怎樣才算「已經足夠」，並保護休息以及與成就無關的生活角色。'
    },
    'C.5': {
      low: '較低時更有即興性，也能回應不斷變化的優先事項。如果開始或完成任務反覆遇到困難，可以把第一步縮得更小，調整環境，加入看得見的提示，或與他人約定檢查進度。',
      high: '較高時即使動力不足也能把事情做完。如果堅持已經明顯得不償失，可以預先設定停止條件，並定期重新判斷這個目標是否仍值得投入。'
    },
    'C.6': {
      low: '較低時決斷更快，也敢於在資訊不完整時試驗和行動。如果可以避免的錯誤反覆出現，可以在代價高或難以撤回的決定前加入短暫停頓和一份簡短檢查清單。',
      high: '較高時較善於分析風險，也容易做出細緻、高品質的決定。如果謹慎導致錯過時機或反覆糾結，可以設定決定期限，並優先採用可撤回的小規模試行，而不是一直等待確定性。'
    }
  },
  ar: {
    'N.1': {
      low: 'يمكن أن تساعدك النتيجة المنخفضة على البقاء هادئًا ومنع عدم اليقين من السيطرة. إذا كان هذا الهدوء يقودك إلى التقليل من شأن المخاطر أو الاستعداد بشكل قليل جدًا، فاذكر المخاطر الأكثر احتمالاً وواحدة احتياطية قبل اتخاذ قرار مهم.',
      high: 'يمكن أن تساعدك النتيجة الأعلى على ملاحظة المخاطر والعلامات التحذيرية مبكرًا. إذا كان القلق يستهلك انتباهك بشكل متكرر، فافصل بين ما هو ممكن وما هو محتمل، وضع حدًا لوقت القلق، واختر الإجراء التالي الملموس؛ اطلب الدعم المهني إذا كان يعطل الحياة اليومية باستمرار.'
    },
    'N.2': {
      low: 'يمكن أن تجعلك النتيجة المنخفضة عصبيًا ومن الصعب استفزازك. إذا كنت تميل إلى قمع الغضب المشروع أو ترك الحدود غير معلنة، قم بتسمية المشكلة مبكرًا ووصف السلوك الذي تريد تغييره.',
      high: 'يمكن أن تجعلك النتيجة الأعلى سريعة في اكتشاف الظلم والدفاع عما يهم. إذا كان الغضب يؤدي إلى تصعيد الصراعات أو يؤدي إلى ردود أفعال متهورة، فتوقف مؤقتًا قبل الرد واذكر السلوك المحدد والتأثير والحاجة بدلاً من مهاجمة الشخص.'
    },
    'N.3': {
      low: 'غالبًا ما تدعم الدرجة المنخفضة التعافي العاطفي والطاقة الثابتة. إذا كان ذلك يجعل من السهل التغاضي عن حزن شخص آخر أو حاجتك للراحة، فتباطأ واستمع واعترف بالخسارة قبل محاولة حلها.',
      high: 'إن الحصول على درجة أعلى قد يجعل خيبة الأمل والخسارة بارزة بشكل خاص، الأمر الذي يمكن أن يكشف عما يهمك بشدة. إن الحالة المزاجية المنخفضة المستمرة ليست شيئًا يجب عليك التعامل معه على أنه مجرد سمة: احتفظ بالروتين والمهام الصغيرة، وابق على اتصال مع الأشخاص الموثوق بهم، واطلب الدعم المهني عندما يستمر ذلك أو يضعف الحياة اليومية.'
    },
    'N.4': {
      low: 'يمكن أن تجعل النتيجة المنخفضة المواقف الاجتماعية تشعر بالاسترخاء وتقلل من الخوف من الحكم. إذا أخطأت في بعض الأحيان كيفية فهمك، فاطلب تعليقات محددة وتحقق من استجابة الشخص الآخر بدلاً من افتراض أن كل شيء تم على ما يرام.',
      high: 'يمكن أن تجعلك النتيجة الأعلى منتبهًا للتوقعات الاجتماعية وردود أفعال الآخرين. إذا تحولت المراقبة الذاتية إلى اجترار أو تجنب، حول الانتباه إلى المهمة المشتركة، وتعامل مع المواقف الصعبة تدريجيًا، واحكم على التفاعل من خلال الأدلة بدلاً من التدقيق المتخيل.'
    },
    'N.5': {
      low: 'تدعم الدرجة المنخفضة ضبط النفس والقدرة على تأخير الإشباع. إذا أصبح ضبط النفس مفرطًا في السيطرة أو لم يترك مجالًا كبيرًا للمتعة، فاحرص على إفساح المجال عمدًا للعفوية غير المؤذية بدلاً من الانتظار حتى يتزايد الضغط.',
      high: 'يمكن أن تجلب الدرجة الأعلى العفوية والشهية والاستمتاع بالتجربة المباشرة. إذا تسببت الحوافز المتكررة في خلق تكاليف تندم عليها لاحقًا، أضف الاحتكاك قبل التصرف: انتظر، أو أزل المحفزات، أو ضع حدودًا مقدمًا، أو اجعل الاختيار المرغوب على المدى الطويل أسهل للوصول.'
    },
    'N.6': {
      low: 'يمكن أن تساعدك النتيجة المنخفضة على التفكير بوضوح والتصرف بثبات تحت الضغط. إذا كان ذلك يقودك إلى التقليل من أهمية التوتر الذي تشعر به في نفسك أو في الآخرين، فخطط للطوارئ وخصص وقتًا لاستخلاص المعلومات والتعافي بعد فترات صعبة.',
      high: 'يمكن أن تجعلك النتيجة الأعلى تلاحظ الحمل الزائد مبكرًا وتطلب الدعم قبل نفاد الموارد. إذا كان الضغط يسبب التجمد أو الارتباك، فقلل من الطلبات المتزامنة، وتدرب على الخطوات القليلة الأولى مسبقًا، واستخدم خطة مكتوبة بسيطة عندما يكون التوتر مرتفعًا.'
    },
    'E.1': {
      low: 'يمكن أن تدعم النتيجة الأقل الاستقلالية ودائرة اجتماعية صغيرة انتقائية. إذا تم الخلط بين التحفظ وعدم الاهتمام أو منع تكوين علاقات مفيدة، فقم بالإشارة إلى الدفء بوضوح وحافظ على بعض نقاط الاتصال المنتظمة.',
      high: 'يمكن أن تؤدي النتيجة الأعلى إلى إنشاء علاقة وثقة واتصالات جديدة بسهولة. إذا أدى الود إلى الإفراط في الالتزام أو الثقة قبل اكتسابها، فسرع من الإفصاح عن الذات، وتحقق من الادعاءات المهمة، واترك مجالًا للقول لا.'
    },
    'E.2': {
      low: 'يمكن أن توفر النتيجة المنخفضة التركيز والراحة مع العزلة وتقليل الاعتماد على تحفيز المجموعة. إذا تحولت العزلة إلى عزلة أو أصبحت المجموعات صعبة بشكل متزايد، فاختر تجمعات أصغر وخطط لوقت للتعافي بدلاً من تجنب الاتصال تمامًا.',
      high: 'يمكن للنتيجة الأعلى أن تجلب الطاقة للمجموعات وتساعد في خلق زخم اجتماعي. إذا كانت الشركة تزاحم العمل المركّز أو تجعل العزلة غير مريحة، فاحرص على حماية الوقت دون انقطاع وممارسة الاستماع دون الحاجة إلى مواصلة التفاعل.'
    },
    'E.3': {
      low: 'يمكن للنتيجة المنخفضة أن تفسح المجال للاستماع والتعاون وقيادة الآخرين. إذا ظلت احتياجاتك أو خبرتك غير مرئية، فقم بإعداد جملة واحدة واضحة، أو قدم طلبًا مباشرًا، أو تحدث مرة واحدة بالقرب من بداية المناقشة.',
      high: 'يمكن أن تساعد النتيجة الأعلى المجموعة على اتخاذ القرارات وإعطاء التوجيه عندما يتردد الآخرون. إذا كنت تشغل مساحة كبيرة جدًا، فاطلب وجهات النظر المخالفة، وانتظر قبل الإجابة، واجعل الملكية واضحة بدلاً من افتراض الموافقة.'
    },
    'E.4': {
      low: 'يمكن أن تدعم الدرجة الأقل وتيرة بطيئة وانتباهًا مستمرًا دون حركة مستمرة. إذا تأخر العمل المهم بشكل متكرر، فاختر عددًا صغيرًا من الأولويات وأعطها مواعيد نهائية أو فترات زمنية واضحة.',
      high: 'يمكن أن تخلق النتيجة الأعلى زخمًا وقدرة قوية على العمل. إذا أصبح النشاط زائدًا أو مزدحمًا دون إحراز تقدم، فقم بتمييز الحركة عن النتائج وقم بجدولة المخازن المؤقتة والتعافي بشكل متعمد مثل المهام.'
    },
    'E.5': {
      low: 'يمكن أن تؤدي النتيجة المنخفضة إلى تعزيز السلامة والاستقرار والرضا دون تحفيز مكثف. إذا كان تجنب الابتكار يضيق نطاق اختياراتك، فجرب تجارب صغيرة قابلة للعكس تكون مخاطرها معروفة مسبقًا.',
      high: 'يمكن أن تدعم النتيجة الأعلى الشجاعة والاستكشاف والاستمتاع بالتجارب المفعمة بالحيوية. إذا كان الملل يؤدي إلى مخاطر غير ضرورية، فضع حدودًا قبل أن ترتفع الإثارة وابحث عن التحفيز في الأماكن التي يتم فيها احتواء الجانب السلبي.'
    },
    'E.6': {
      low: 'يمكن أن تجلب الدرجة المنخفضة الجدية والنبرة الواقعية عندما يبدو التفاؤل زائفًا. إذا ظل التقدير أو الدفء مخفيًا، فقل ذلك بوضوح واخلق مناسبات صغيرة للاستمتاع بدلاً من توقع ظهور المشاعر الإيجابية من تلقاء نفسها.',
      high: 'يمكن للنتيجة الأعلى أن ترفع معنويات المجموعة وتجعل من السهل ملاحظة التجارب الإيجابية. إذا كان البهجة تتغاضى عن الألم أو المخاطرة، فاعترف بما هو صعب أولاً، ثم ابحث عن الأمل دون إنكار الحقائق.'
    },
    'O.1': {
      low: 'يمكن أن تدعم الدرجة المنخفضة التفكير الملموس والاهتمام بما هو عملي ويمكن ملاحظته. إذا كانت الإجابات المألوفة تستبعد الاحتمالات الأفضل، فقم بتوليد عدة بدائل قبل تقييم أي منها واقعي.',
      high: 'يمكن أن تدعم النتيجة الأعلى الإبداع والمحاكاة العقلية والاتصالات الأصلية. إذا ظلت الأفكار في أحلام اليقظة أو تشتت الانتباه، فالتقطها واختر واحدة منها وحولها إلى أصغر اختبار ملموس.'
    },
    'O.2': {
      low: 'يمكن أن تؤدي الدرجة الأقل إلى جذب الانتباه إلى الوظيفة والوضوح والفائدة المباشرة. إذا تم إهمال التجربة الجمالية أو الجمال المجدد باستمرار، فجربها بطرق قصيرة ومنخفضة الضغط ولاحظ ما يلفت انتباهك حقًا.',
      high: 'يمكن أن تؤدي النتيجة الأعلى إلى زيادة الحساسية تجاه الشكل والجمال والتفاصيل الدقيقة. إذا كانت المعايير الجمالية تستهلك الكثير من الوقت أو تتجاوز الوظيفة، فحدد القيود العملية أولاً وقرر أين يستحق التحسين حقًا.'
    },
    'O.3': {
      low: 'يمكن أن تدعم النتيجة المنخفضة رباطة الجأش والقرارات التي تكون أقل تأثراً بالمزاج الحالي. إذا أصبح من الصعب التعرف على المشاعر أو تجاهل إشارات الآخرين، توقف مؤقتًا لفحص الجسد والعاطفة قبل أن تقرر ما هو مطلوب.',
      high: 'يمكن أن تدعم النتيجة الأعلى الوعي العاطفي والتعاطف والحياة الداخلية الدقيقة. إذا أصبحت المشاعر طاغية أو تملي عليك القرارات، قم بتسمية المشاعر، واسمح لها بالاستقرار، وميز بين ما تشعر به وبين ما تظهره الأدلة.'
    },
    'O.4': {
      low: 'يمكن أن تدعم الدرجة المنخفضة الاستمرارية والإتقان والروتين الذي يمكن الاعتماد عليه. إذا أصبح الروتين جمودًا أو خوفًا من الحداثة، قم بإجراء تغيير واحد صغير قابل للعكس مع الحفاظ على بقية الهيكل مألوفًا.',
      high: 'يمكن أن تدعم النتيجة الأعلى القدرة على التكيف والتعلم من خلال الاستكشاف. إذا أدت الحداثة إلى عدم الاستقرار أو الالتزامات غير المكتملة، فاحتفظ ببعض المراسي غير القابلة للتفاوض من حيث الوقت والمال والمسؤوليات.'
    },
    'O.5': {
      low: 'يتعلق هذا الجانب بالاهتمام بالأفكار المعقدة والمجردة، وليس الذكاء أو معدل الذكاء. يمكن أن تؤدي النتيجة الأقل إلى اتخاذ قرارات عملية؛ إذا تم رفض الأفكار غير المألوفة بسرعة كبيرة جدًا، فاسأل عن الأدلة التي قد تغير رأيك وتعرف فقط على ما يتطلبه القرار.',
      high: 'يمكن أن تدعم الدرجة الأعلى التحليل والفضول والراحة مع التعقيد. إذا تحول التفكير إلى نقاش لا نهاية له أو شلل في التحليل، فحدد معيار القرار والموعد النهائي قبل إجراء المزيد من الاستكشاف.'
    },
    'O.6': {
      low: 'يمكن أن تحافظ النتيجة الأقل على التقاليد المفيدة والتوقعات المشتركة والاستمرارية الاجتماعية. إذا لم يتم التشكيك في الاتفاقية أو استبعدت وجهات النظر ذات الصلة، قم بإعادة النظر في سبب القاعدة واسأل عمن يتأثر بها.',
      high: 'ومن الممكن أن تدعم النتيجة الأعلى الفحص النقدي للمعايير والإصلاح البناء. إذا تم التعامل مع الجدة على أنها أفضل تلقائيًا، فاختبر التغييرات في خطوات صغيرة واحتفظ بأجزاء الممارسة الحالية التي لا تزال فعالة.'
    },
    'A.1': {
      low: 'يمكن أن تساعدك النتيجة المنخفضة على ملاحظة عدم الاتساق وحماية نفسك عندما تكون المخاطر عالية. إذا كانت الشك يعيق التعاون، فقم بمعايرة الثقة بدلاً من منحها أو حجبها دفعة واحدة: ابدأ بالتزامات صغيرة وقم بالتحديث من الأدلة.',
      high: 'إن الحصول على درجة أعلى يمكن أن يجعل الانفتاح والتعاون أسهل. إذا تركتك حسن النية عرضة للاستغلال، فتحقق من الادعاءات عالية المخاطر، واجعل التوقعات واضحة، وحافظ على الحدود حتى مع الأشخاص الذين تحبهم.'
    },
    'A.2': {
      low: 'يمكن أن تدعم الدرجة الأقل اللباقة والتفاوض والخصوصية الإستراتيجية. إذا كان ذلك يخلق تلاعبًا أو غموضًا، فميز بين الحدود المشروعة والخداع وقدم التزامات باللغة التي يمكن للشخص الآخر التحقق منها.',
      high: 'يمكن للدرجة الأعلى أن تبني الموثوقية من خلال الصراحة والشفافية. إذا أصبح الصدق فظاظة أو مبالغة في المشاركة، فاجمع بين الحقيقة والتوقيت والأهمية والاهتمام بكيفية توصيلها.'
    },
    'A.3': {
      low: 'يمكن أن تحمي النتيجة الأقل وقتًا محدودًا وتشجع استقلالية الآخرين. إذا رأى الآخرون أنك غير متاح أو أن المعاملة بالمثل تتآكل، فاختر شكلاً من أشكال المساعدة التي يمكنك دعمها وتوضيح نطاقها بوضوح.',
      high: 'يمكن أن تخلق النتيجة الأعلى دعمًا قويًا وإحساسًا بالانتماء للمجتمع. إذا كانت المساعدة تسبب الإرهاق أو تمنع الآخرين من تحمل المسؤولية، اسأل عما إذا كانت المساعدة مطلوبة، واتفق على الحدود، ولا تجعل كل حاجة التزامًا عليك.'
    },
    'A.4': {
      low: 'يمكن أن تساعد النتيجة الأقل في الدفاع عن المعايير ومعالجة الصراع بشكل مباشر. إذا تحول الخلاف إلى احتكاك مزمن، يجب فصل الاحتياجات غير القابلة للتفاوض عن الخيارات المرنة واستخدام المعايير المشتركة بدلاً من القوة.',
      high: 'يمكن أن تؤدي النتيجة الأعلى إلى تهدئة الصراع وحماية التعاون. إذا تم شراء الانسجام عن طريق التنازل عن احتياجات مهمة، فاذكر الحدود بوضوح واسمح بالاختلاف المحترم دون التعامل معه على أنه فشل في العلاقة.'
    },
    'A.5': {
      low: 'يمكن أن تدعم الدرجة الأقل الدفاع عن الذات وتجعل المساهمات مرئية. إذا سمعت الثقة على أنها تفوق أو اختفاء عمل الآخرين، فقم بتقديم ادعاءات مدعومة بالأدلة وتقاسم الفضل بدقة.',
      high: 'يمكن أن تؤدي النتيجة الأعلى إلى جذب الانتباه إلى العمل وتسهيل التعاون. إذا تم تجاهل مساهمتك بشكل متكرر، قم بوصف ما فعلته وتأثيره بشكل واقعي؛ التمثيل الدقيق للذات ليس غطرسة.'
    },
    'A.6': {
      low: 'يمكن أن تدعم الدرجة المنخفضة الموضوعية والقرارات الصعبة التي لا يمكن أن ترضي الجميع. إذا اعتبر الناس القرار باردًا أو تم تجاهل تكلفته الإنسانية، فاسأل من يتحمل العبء واربط المنطق بتفسير واضح.',
      high: 'يمكن أن تدعم الدرجة الأعلى التعاطف والاعتراف السريع بالمعاناة. إذا أصبح التعاطف مرهقًا أو تجاوز الحقائق ذات الصلة، فضع حدودًا عاطفية وتحقق من المساعدة التي ستؤدي بالفعل إلى تحسين الوضع.'
    },
    'C.1': {
      low: 'يمكن أن تشجع النتيجة المنخفضة على توخي الحذر والاستعداد وطلب المساعدة عند الحاجة إليها. إذا كان الشك الذاتي يمنعك من البدء، فقم بتقسيم المهمة إلى أجزاء صغيرة واستخدم الخطوات المكتملة كدليل على القدرة.',
      high: 'يمكن أن تدعم الدرجة الأعلى الملكية والمثابرة والثقة في حل المشكلات. إذا أصبحت الثقة مبالغة في تقديرها أو إحجامًا عن طلب المساعدة، فقم بإجراء فحص ما قبل الوفاة لفترة وجيزة واطلب من شخص مطلع أن يتحدى الخطة.'
    },
    'C.2': {
      low: 'يمكن أن تدعم النتيجة الأقل المرونة والارتجال عندما تتغير الخطط. إذا كانت الفوضى تكلف وقتًا أو تجعل الالتزامات تختفي، فقم بإنشاء عدد قليل فقط من المنازل والقوائم والإجراءات الروتينية الموثوقة للأشياء الأكثر أهمية.',
      high: 'يمكن أن تجعل النتيجة الأعلى العمل واضحًا وموثوقًا وسهل الاستئناف. إذا تحول النظام إلى الكمال أو أصبح التغيير مزعجًا، فحدد ما هو جيد بما فيه الكفاية واترك التراخي المتعمد في الخطة.'
    },
    'C.3': {
      low: 'يمكن أن تساعد الدرجة المنخفضة في مساءلة القواعد وتكييف الالتزامات مع السياق. إذا لم يتمكن الآخرون من الاعتماد على التزاماتك أو تم قطع الزوايا الأخلاقية، فاقطع الوعود الصريحة وأعد ربط كل التزام بالسبب الذي يهمه.',
      high: 'يمكن أن تدعم النتيجة الأعلى النزاهة والمتابعة الموثوقة. إذا أدى الواجب إلى جمود أو عبء غير مستدام، فقم بترتيب الالتزامات المتنافسة وأعد التفاوض بشأنها مبكرًا بدلاً من تحملها جميعها بصمت.'
    },
    'C.4': {
      low: 'يمكن للدرجة المنخفضة أن تحمي التوازن وتسمح بالرضا دون منافسة مستمرة. إذا أصبح الأمر ركودًا أو ترك القدرات القيمة غير مستخدمة، فاختر هدفًا ذا معنى شخصيًا وحدد المعلم الصغير التالي.',
      high: 'يمكن أن تدعم النتيجة الأعلى الإتقان والجهد المستمر لتحقيق الأهداف الصعبة. إذا أصبحت القيمة الذاتية مرتبطة بالإنتاج أو أصبح الجهد مرهقًا، فحدد ما يعتبر كافيًا واحمي الراحة والأدوار التي لا علاقة لها بالإنجاز.'
    },
    'C.5': {
      low: 'يمكن أن تدعم الدرجة المنخفضة العفوية والاستجابة للأولويات المتغيرة. إذا كان البدء أو الانتهاء صعبًا بشكل متكرر، فقم بتقليص الخطوة الأولى، وقم بتغيير البيئة، وأضف إشارة مرئية أو مسؤولية شخص آخر.',
      high: 'يمكن أن تدعم النتيجة الأعلى المتابعة حتى عندما يكون الدافع منخفضًا. إذا استمرت المثابرة بعد العوائد المتناقصة، فضع قواعد التوقف وراجع ما إذا كان الهدف لا يزال يستحق الجهد.'
    },
    'C.6': {
      low: 'يمكن أن تدعم النتيجة الأقل السرعة والتجريب والإجراء بمعلومات غير كاملة. إذا تكررت الأخطاء التي يمكن تجنبها، أضف وقفة قصيرة وقائمة مرجعية قبل اتخاذ القرارات المكلفة أو التي يصعب التراجع عنها.',
      high: 'يمكن أن تدعم النتيجة الأعلى تحليل المخاطر واتخاذ قرارات دقيقة وعالية الجودة. إذا تسبب الحذر في تفويت التوقيت أو الاجترار المتكرر، فحدد موعدًا نهائيًا لاتخاذ القرار وفضل الطيار القابل للعكس على انتظار اليقين.'
    }
  },
  bg: {
    'N.1': {
      low: 'По-нисък резултат може да ви помогне да останете спокойни и да попречите на несигурността да ви завладее. Ако това спокойствие ви кара да подценявате рисковете или да се подготвите твърде малко, избройте най-вероятния риск и един резервен вариант преди важно решение.',
      high: 'По-висок резултат може да ви помогне да забележите рискове и предупредителни знаци рано. Ако притесненията постоянно поглъщат вниманието ви, отделете възможното от вероятното, задайте лимит на времето за притеснение и изберете едно конкретно следващо действие; потърсете професионална подкрепа, ако това постоянно нарушава ежедневието.'
    },
    'N.2': {
      low: 'По-нисък резултат може да ви направи уравновесени и трудни за провокация. Ако сте склонни да потискате основателния гняв или да оставяте границите неизяснени, назовете проблема рано и опишете поведението, което искате да промените.',
      high: 'По-висок резултат може да ви накара бързо да откриете несправедливостта и да защитите това, което има значение. Ако гневът ескалира конфликти или предизвиква импулсивни реакции, направете пауза, преди да отговорите, и заявете конкретното поведение, въздействие и нужда, вместо да атакувате човека.'
    },
    'N.3': {
      low: 'По-ниският резултат често подкрепя емоционалното възстановяване и постоянната енергия. Ако това прави лесно да пренебрегнете тъгата на друг човек или вашата собствена нужда от почивка, намалете темпото, изслушайте и признайте загубата, преди да се опитате да я разрешите.',
      high: 'По-висок резултат може да направи разочарованието и загубата особено забележими, което може да разкрие какво е важно за вас. Постоянното лошо настроение не е нещо, което трябва да третирате просто като черта: дръжте рутините и задачите малки, поддържайте връзка с доверени хора и потърсете професионална подкрепа, когато е продължителна или влошава ежедневието.'
    },
    'N.4': {
      low: 'По-ниският резултат може да накара социалните ситуации да се чувстват спокойни и да намали страха от осъждане. Ако понякога пропускате как сте се натъкнали, помолете за конкретна обратна връзка и проверете отговора на другия човек, вместо да приемате, че всичко е наред.',
      high: 'По-висок резултат може да ви направи внимателни към социалните очаквания и реакциите на другите хора. Ако самонаблюдението се превърне в размишление или избягване, насочете вниманието към споделената задача, подхождайте постепенно към трудни ситуации и преценявайте взаимодействието по доказателства, а не по въображаем преглед.'
    },
    'N.5': {
      low: 'По-нисък резултат подкрепя сдържаност и способност за забавяне на удовлетворението. Ако сдържаността се превърне в свръхконтрол или оставя твърде малко място за удоволствие, съзнателно направете място за безобидна спонтанност, вместо да чакате, докато натискът нарасне.',
      high: 'По-високият резултат може да донесе спонтанност, апетит и наслада от непосредственото преживяване. Ако поривите многократно създават разходи, за които по-късно съжалявате, добавете напрежение, преди да действате: изчакайте, премахнете задействащите фактори, задайте предварително ограничения или направете желания дългосрочен избор по-лесен за достигане.'
    },
    'N.6': {
      low: 'По-нисък резултат може да ви помогне да мислите ясно и да действате стабилно под напрежение. Ако това ви кара да подценявате напрежението в себе си или в другите, планирайте непредвидени ситуации и отделете време за разбор и възстановяване след трудни периоди.',
      high: 'По-високият резултат може да ви накара да забележите претоварването рано и да потърсите поддръжка, преди ресурсите да са свършили. Ако напрежението причинява замръзване или объркване, намалете едновременните изисквания, репетирайте първите няколко стъпки предварително и използвайте прост писмен план, когато стресът е силен.'
    },
    'E.1': {
      low: 'По-нисък резултат може да подкрепи независимост и малък, избирателен социален кръг. Ако сдържаността се приема погрешно за незаинтересованост или пречи на формирането на полезни взаимоотношения, изрично покажете топлина и поддържайте няколко редовни контактни точки.',
      high: 'По-високият резултат може да направи разбирателството, доверието и новите връзки лесни. Ако дружелюбието води до свръхангажиране или доверие, преди да бъде спечелено, ускорете саморазкриването, проверете важните твърдения и оставете място да кажете „не“.'
    },
    'E.2': {
      low: 'По-нисък резултат може да осигури фокус, комфорт със самота и по-малка зависимост от групова стимулация. Ако самотата се превърне в изолация или групите стават все по-трудни, изберете по-малки събирания и планирайте време за възстановяване, вместо да избягвате контакта изцяло.',
      high: 'По-високият резултат може да донесе енергия на групите и да помогне за създаването на социален импулс. Ако компанията измества фокусираната работа или прави самотата неудобна, запазете непрекъснато време и практикувайте слушане, без да е необходимо да поддържате взаимодействието.'
    },
    'E.3': {
      low: 'По-нисък резултат може да освободи място за изслушване, сътрудничество и лидерство на други хора. Ако вашите нужди или опит остават невидими, подгответе едно ясно изречение, направете директна заявка или говорете веднъж близо до началото на дискусията.',
      high: 'По-висок резултат може да помогне на групата да вземе решения и да даде насока, когато другите се колебаят. Ако заемате твърде много място, поискайте несъгласни мнения, изчакайте, преди да отговорите, и заявете изрично собствеността, вместо да приемате съгласие.'
    },
    'E.4': {
      low: 'По-нисък резултат може да поддържа бавно темпо и продължително внимание без постоянно движение. Ако важната работа многократно се отлага, изберете малък брой приоритети и им дайте видими крайни срокове или времеви блокове.',
      high: 'По-висок резултат може да създаде импулс и силен капацитет за действие. Ако дейността стане претоварена или натоварена без напредък, разграничете движението от резултатите и планирайте буферите и възстановяването толкова умишлено, колкото задачите.'
    },
    'E.5': {
      low: 'По-нисък резултат може да благоприятства безопасността, стабилността и удовлетворението без интензивна стимулация. Ако избягването на новости стеснява избора ви, опитайте малки, обратими експерименти, чиито рискове са известни предварително.',
      high: 'По-високият резултат може да подпомогне смелостта, изследването и насладата от ярки преживявания. Ако скуката води до ненужен риск, поставете граници, преди възбудата да се повиши, и потърсете стимулация в условия, където недостатъците са ограничени.'
    },
    'E.6': {
      low: 'По-нисък резултат може да донесе сериозност и реалистичен тон, когато оптимизмът би изглеждал фалшив. Ако признателността или топлотата остават скрити, кажете ги ясно и създайте малки поводи за наслада, вместо да очаквате положителното чувство да се появи от само себе си.',
      high: 'По-високият резултат може да повдигне морала на групата и да направи положителните преживявания лесни за забелязване. Ако радостта засенчва болката или риска, първо признайте кое е трудно, след това търсете надежда, без да отричате фактите.'
    },
    'O.1': {
      low: 'По-нисък резултат може да подкрепи конкретно мислене и внимание към това, което е практично и видимо. Ако познатите отговори изтласкват по-добри възможности, генерирайте няколко алтернативи, преди да прецените коя от тях е реалистична.',
      high: 'По-високият резултат може да подкрепи креативността, умствената симулация и оригиналните връзки. Ако идеите остават в блян или разсейват вниманието, уловете ги, изберете една и я превърнете в най-малкия осезаем тест.'
    },
    'O.2': {
      low: 'По-нисък резултат може да задържи вниманието върху функцията, яснотата и пряката полезност. Ако естетическото преживяване или възстановяващата красота постоянно се пренебрегват, изпробвайте ги накратко, без натиск и забележете какво наистина привлича вниманието ви.',
      high: 'По-високият резултат може да изостри чувствителността към формата, красотата и фините детайли. Ако естетическите стандарти отнемат твърде много време или отменят функцията, първо определете практическите ограничения и решете къде усъвършенстването наистина си заслужава.'
    },
    'O.3': {
      low: 'По-нисък резултат може да подпомогне спокойствието и решенията, които са по-малко повлияни от настроението на момента. Ако чувствата станат трудни за идентифициране или сигналите на други хора се пропускат, направете пауза за кратка проверка на тялото и емоциите, преди да решите какво е необходимо.',
      high: 'По-високият резултат може да подкрепи емоционалното осъзнаване, емпатията и нюансирания вътрешен живот. Ако чувствата станат преобладаващи или диктуват решения, назовете емоцията, оставете я да се успокои и разграничете това, което чувствате, от това, което показват доказателствата.'
    },
    'O.4': {
      low: 'По-нисък резултат може да поддържа приемственост, майсторство и надеждни рутинни процедури. Ако рутината се превърне в твърдост или страх от новости, въведете една малка, обратима промяна, като запазите останалата част от структурата позната.',
      high: 'По-високият резултат може да подпомогне адаптивността и ученето чрез изследване. Ако новостта създава нестабилност или незавършени ангажименти, запазете няколко неподлежащи на обсъждане котви за време, пари и отговорности.'
    },
    'O.5': {
      low: 'Този аспект се отнася до интереса към сложни и абстрактни идеи, а не към интелигентност или IQ. По-нисък резултат може да благоприятства практически решения; ако непознати идеи се отхвърлят твърде бързо, попитайте какви доказателства биха променили мнението ви и научете само какво изисква решението.',
      high: 'По-високият резултат може да подкрепи анализа, любопитството и комфорта със сложността. Ако мисленето се превърне в безкраен дебат или парализа на анализа, дефинирайте критерия за вземане на решение и крайния срок, преди да проучите по-нататък.'
    },
    'O.6': {
      low: 'По-нисък резултат може да запази полезни традиции, споделени очаквания и социална приемственост. Ако конвенцията остава неоспорима или изключва съответните гледни точки, преразгледайте причината за правилото и попитайте кой е засегнат от него.',
      high: 'По-високият резултат може да подпомогне критичното изследване на нормите и конструктивната реформа. Ако новостта се третира автоматично като по-добра, тествайте промените на малки стъпки и запазете частите от съществуващата практика, които все още работят.'
    },
    'A.1': {
      low: 'По-нисък резултат може да ви помогне да забележите непоследователност и да се защитите, когато залозите са високи. Ако подозрението блокира сътрудничеството, калибрирайте доверието, вместо да го давате или отказвате наведнъж: започнете с малки ангажименти и актуализирайте от доказателства.',
      high: 'По-висок резултат може да улесни откритостта и сътрудничеството. Ако добрата воля ви оставя отворени за експлоатация, проверете твърденията с високи залози, изрично изразете очакванията и спазвайте граници дори с хора, които харесвате.'
    },
    'A.2': {
      low: 'По-нисък резултат може да подкрепи такт, преговори и стратегическа поверителност. Ако създава манипулация или двусмислие, разграничете легитимната граница от измамата и поемете ангажименти на езика, който другият човек може да провери.',
      high: 'По-висок резултат може да изгради надеждност чрез директност и прозрачност. Ако честността се превърне в откровеност или прекомерно споделяне, съчетайте истината с времето, уместността и внимавайте как се предава.'
    },
    'A.3': {
      low: 'По-нисък резултат може да защити ограниченото време и да насърчи автономията на другите хора. Ако другите ви възприемат като недостъпни или реципрочността ерозира, изберете форма на помощ, която можете да поддържате, и посочете ясно нейния обхват.',
      high: 'По-висок резултат може да създаде силна подкрепа и чувство за общност. Ако помощта причинява прегаряне или пречи на другите да поемат отговорност, попитайте дали е необходима помощ, договорете се за ограничения и не превръщайте всяка нужда във свое задължение.'
    },
    'A.4': {
      low: 'По-нисък резултат може да помогне за защита на стандартите и директно справяне с конфликта. Ако несъгласието се превърне в хронично търкане, отделете нуждите, които не подлежат на обсъждане, от гъвкавите възможности и използвайте общи критерии, а не сила.',
      high: 'По-висок резултат може да намали ескалацията на конфликта и да защити сътрудничеството. Ако хармонията се купува чрез признаване на важни нужди, посочете ясно границата и позволете уважително несъгласие, без да го третирате като провал на връзката.'
    },
    'A.5': {
      low: 'По-нисък резултат може да подпомогне самозастъпничеството и да направи видим приноса. Ако доверието се чуе като превъзходство или работата на другите изчезне, предявете твърдения с доказателства и споделете заслугите точно.',
      high: 'По-висок резултат може да задържи вниманието върху работата и да улесни сътрудничеството. Ако вашият принос е многократно пренебрегван, опишете какво сте направили и неговия ефект фактически; точното самопредставяне не е арогантност.'
    },
    'A.6': {
      low: 'По-нисък резултат може да подкрепи обективността и трудни решения, които не могат да задоволят всички. Ако хората възприемат решението като хладно или неговата човешка цена е пропусната, попитайте кой носи тежестта и съчетайте аргументацията с ясно обяснение.',
      high: 'По-високият резултат може да подкрепи състраданието и бързото разпознаване на страданието. Ако емпатията се изтощи или отмени релевантните факти, поставете емоционални граници и проверете каква помощ действително ще подобри ситуацията.'
    },
    'C.1': {
      low: 'По-ниският резултат може да насърчи предпазливостта, подготовката и молбата за помощ, когато е необходима. Ако съмнението в себе си ви пречи да започнете, разделете задачата на малки части и използвайте завършените стъпки като доказателство за способности.',
      high: 'По-висок резултат може да подкрепи собствеността, постоянството и увереността при решаването на проблеми. Ако увереността се превърне в надценяване или нежелание да потърсите помощ, направете кратка предсмъртна проверка и помолете опитен човек да оспори плана.'
    },
    'C.2': {
      low: 'По-нисък резултат може да подпомогне гъвкавостта и импровизацията, когато плановете се променят. Ако разстройството коства време или кара задълженията да изчезнат, създайте само няколко надеждни домове, списъци и процедури за най-важните неща.',
      high: 'По-висок резултат може да направи работата ясна, надеждна и лесна за възобновяване. Ако редът се превърне в перфекционизъм или промяната стане изтощителна, определете кое е достатъчно добро и оставете умишлено забавяне в плана.'
    },
    'C.3': {
      low: 'По-нисък резултат може да помогне да се поставят под съмнение правилата и да се адаптират задълженията към контекста. Ако другите не могат да разчитат на вашите ангажименти или етичните ъгли са отрязани, направете изрични обещания и свържете отново всяко задължение с причината, поради която има значение.',
      high: 'По-висок резултат може да подкрепи почтеността и надеждното проследяване. Ако задължението създава твърдост или непоносимо натоварване, класирайте конкуриращите се задължения и ги предоговорете рано, вместо мълчаливо да ги носите всички.'
    },
    'C.4': {
      low: 'По-нисък резултат може да защити баланса и да позволи удовлетворение без постоянна конкуренция. Ако се превърне в застой или остави ценни способности неизползвани, изберете лично значима цел и определете следващия малък етап.',
      high: 'По-високият резултат може да подкрепи майсторството и постоянните усилия за постигане на взискателни цели. Ако самооценката се обвърже с резултатите или усилията се превърнат в прегаряне, определете какво се счита за достатъчно и защитете почивката и ролите, които не са свързани с постиженията.'
    },
    'C.5': {
      low: 'По-нисък резултат може да подкрепи спонтанността и отзивчивостта към променящите се приоритети. Ако започването или завършването е многократно трудно, свийте първата стъпка, променете средата и добавете видим знак или отговорност на друго лице.',
      high: 'По-висок резултат може да подпомогне изпълнението дори когато мотивацията е ниска. Ако постоянството продължава след намаляваща възвръщаемост, задайте правила за спиране и прегледайте дали целта все още заслужава усилието.'
    },
    'C.6': {
      low: 'По-нисък резултат може да поддържа скорост, експериментиране и действие с непълна информация. Ако предотвратимите грешки се появят отново, добавете кратка пауза и списък за проверка преди решения, които са скъпи или трудни за обръщане.',
      high: 'По-висок резултат може да подкрепи анализ на риска и внимателни, висококачествени решения. Ако предпазливостта причини пропуснато време или многократно обмисляне, задайте краен срок за вземане на решение и предпочетете обратим пилот пред изчакване за сигурност.'
    }
  },
  bn: {
    'N.1': {
      low: 'একটি কম স্কোর আপনাকে শান্ত থাকতে এবং দায়িত্ব নেওয়া থেকে অনিশ্চয়তা রাখতে সাহায্য করতে পারে। যদি সেই প্রশান্তি আপনাকে ঝুঁকিকে অবমূল্যায়ন করতে বা খুব কম প্রস্তুতির দিকে নিয়ে যায়, তাহলে একটি গুরুত্বপূর্ণ সিদ্ধান্তের আগে সবচেয়ে সম্ভাব্য ঝুঁকি এবং একটি ফলব্যাক তালিকাভুক্ত করুন।',
      high: 'একটি উচ্চ স্কোর আপনাকে ঝুঁকি এবং সতর্কতা চিহ্নগুলি প্রথম দিকে লক্ষ্য করতে সাহায্য করতে পারে। যদি দুশ্চিন্তা বারবার আপনার মনোযোগ গ্রাস করে, তাহলে সম্ভাব্য থেকে যা সম্ভব তা আলাদা করুন, দুশ্চিন্তার সময়ের একটি সীমা নির্ধারণ করুন এবং পরবর্তী একটি নির্দিষ্ট পদক্ষেপ বেছে নিন; এটি ক্রমাগত দৈনন্দিন জীবন ব্যাহত হলে পেশাদার সমর্থন সন্ধান করুন।'
    },
    'N.2': {
      low: 'কম স্কোর আপনাকে আরও মেজাজ এবং উত্তেজিত করা কঠিন করে তুলতে পারে। আপনি যদি বৈধ রাগ দমন করার প্রবণতা রাখেন বা সীমানা অব্যক্ত রেখে যান, তাহলে সমস্যাটির আগে নাম দিন এবং আপনি যে আচরণ পরিবর্তন করতে চান তা বর্ণনা করুন।',
      high: 'একটি উচ্চতর স্কোর আপনাকে দ্রুত অন্যায় শনাক্ত করতে এবং যা গুরুত্বপূর্ণ তা রক্ষা করতে পারে। যদি রাগ দ্বন্দ্ব বাড়ায় বা আবেগপ্রবণ প্রতিক্রিয়া চালায়, তবে প্রতিক্রিয়া জানানোর আগে বিরতি দিন এবং ব্যক্তিকে আক্রমণ করার পরিবর্তে নির্দিষ্ট আচরণ, প্রভাব এবং প্রয়োজনীয়তা বলুন।'
    },
    'N.3': {
      low: 'একটি কম স্কোর প্রায়ই মানসিক পুনরুদ্ধার এবং স্থির শক্তি সমর্থন করে। যদি এটি অন্য ব্যক্তির দুঃখ বা বিশ্রামের জন্য আপনার নিজের প্রয়োজনীয়তাকে উপেক্ষা করা সহজ করে তোলে, তবে তা সমাধান করার চেষ্টা করার আগে এটিকে ধীর করুন, শুনুন এবং ক্ষতি স্বীকার করুন।',
      high: 'একটি উচ্চ স্কোর হতাশা এবং ক্ষতিকে বিশেষভাবে উল্লেখযোগ্য করে তুলতে পারে, যা আপনার কাছে গভীরভাবে গুরুত্বপূর্ণ কী তা প্রকাশ করতে পারে। ক্রমাগত নিম্ন মেজাজ এমন কিছু নয় যা আপনাকে কেবল একটি বৈশিষ্ট্য হিসাবে বিবেচনা করতে হবে: রুটিন এবং কাজগুলিকে ছোট রাখুন, বিশ্বস্ত লোকেদের সাথে সংযুক্ত থাকুন এবং যখন এটি দীর্ঘস্থায়ী হয় বা দৈনন্দিন জীবনকে ব্যাহত করে তখন পেশাদার সহায়তা পান।'
    },
    'N.4': {
      low: 'একটি কম স্কোর সামাজিক পরিস্থিতিতে স্বাচ্ছন্দ্য বোধ করতে পারে এবং বিচারের ভয় কমাতে পারে। আপনি যদি কখনও কখনও মিস করেন যে আপনি কীভাবে এসেছেন, নির্দিষ্ট প্রতিক্রিয়া জিজ্ঞাসা করুন এবং সবকিছু ঠিকঠাক হয়েছে বলে ধরে না নিয়ে অন্য ব্যক্তির প্রতিক্রিয়া পরীক্ষা করুন।',
      high: 'একটি উচ্চ স্কোর আপনাকে সামাজিক প্রত্যাশা এবং অন্যান্য লোকের প্রতিক্রিয়ার প্রতি মনোযোগী করে তুলতে পারে। যদি স্ব-পর্যবেক্ষন গুজব বা পরিহারে পরিণত হয়, ভাগ করা কাজের দিকে মনোযোগ দিন, কঠিন পরিস্থিতিতে ধীরে ধীরে এগিয়ে যান এবং কল্পিত যাচাই-বাছাইয়ের পরিবর্তে প্রমাণের মাধ্যমে মিথস্ক্রিয়া বিচার করুন।'
    },
    'N.5': {
      low: 'একটি কম স্কোর সংযম এবং তৃপ্তি বিলম্বিত করার ক্ষমতা সমর্থন করে। যদি সংযম অত্যধিক নিয়ন্ত্রণ হয়ে যায় বা উপভোগের জন্য খুব কম জায়গা ছেড়ে দেয়, তাহলে চাপ তৈরি না হওয়া পর্যন্ত অপেক্ষা না করে ইচ্ছাকৃতভাবে ক্ষতিকারক স্বতঃস্ফূর্ততার জন্য জায়গা তৈরি করুন।',
      high: 'একটি উচ্চ স্কোর স্বতঃস্ফূর্ততা, ক্ষুধা এবং তাত্ক্ষণিক অভিজ্ঞতার উপভোগ আনতে পারে। যদি বারবার তাগিদ খরচ তৈরি করে তাহলে আপনি পরে অনুশোচনা করেন, অভিনয় করার আগে ঘর্ষণ যোগ করুন: অপেক্ষা করুন, ট্রিগারগুলি সরান, আগে থেকে সীমা নির্ধারণ করুন বা পছন্দসই দীর্ঘমেয়াদী পছন্দটি পৌঁছানো সহজ করুন।'
    },
    'N.6': {
      low: 'কম স্কোর আপনাকে স্পষ্টভাবে চিন্তা করতে এবং চাপের মধ্যে অবিচলিতভাবে কাজ করতে সাহায্য করতে পারে। যদি এটি আপনাকে নিজের বা অন্যদের মধ্যে চাপকে অবমূল্যায়ন করার দিকে নিয়ে যায়, তবে আনুষঙ্গিক পরিস্থিতির পরিকল্পনা করুন এবং ডিব্রিফ করার জন্য সময় করুন এবং পিরিয়ডের চাহিদার পরে পুনরুদ্ধার করুন।',
      high: 'উচ্চতর স্কোর আপনাকে তাড়াতাড়ি ওভারলোড লক্ষ্য করতে পারে এবং সংস্থান শেষ হওয়ার আগে সহায়তা চাইতে পারে। যদি চাপ হিমায়িত বা বিভ্রান্তির কারণ হয়, একযোগে চাহিদা কমিয়ে দিন, প্রথম কয়েকটি ধাপ আগে থেকেই অনুশীলন করুন এবং চাপ বেশি হলে একটি সহজ লিখিত পরিকল্পনা ব্যবহার করুন।'
    },
    'E.1': {
      low: 'একটি কম স্কোর স্বাধীনতা এবং একটি ছোট, নির্বাচনী সামাজিক বৃত্ত সমর্থন করতে পারে। যদি রিজার্ভ অনাগ্রহের জন্য ভুল হয় বা দরকারী সম্পর্ক গঠন থেকে বিরত রাখে, স্পষ্টভাবে উষ্ণতার সংকেত দিন এবং যোগাযোগের কয়েকটি নিয়মিত পয়েন্ট বজায় রাখুন।',
      high: 'একটি উচ্চ স্কোর সম্পর্ক তৈরি করতে পারে, বিশ্বাস করতে পারে, এবং নতুন সংযোগগুলি সহজেই আসতে পারে। যদি বন্ধুত্ব অর্জিত হওয়ার আগে অতিরিক্ত প্রতিশ্রুতি বা বিশ্বাসের দিকে নিয়ে যায়, তবে স্ব-প্রকাশের গতি বাড়ান, গুরুত্বপূর্ণ দাবিগুলি যাচাই করুন এবং না বলার জন্য জায়গা ছেড়ে দিন।'
    },
    'E.2': {
      low: 'একটি কম স্কোর ফোকাস, নির্জনতার সাথে আরাম এবং গ্রুপ উদ্দীপনার উপর কম নির্ভরতা প্রদান করতে পারে। যদি নির্জনতা বিচ্ছিন্নতায় পরিণত হয় বা গোষ্ঠীগুলি ক্রমশ কঠিন হয়ে যায়, তবে ছোট সমাবেশগুলি বেছে নিন এবং সম্পূর্ণভাবে যোগাযোগ এড়িয়ে যাওয়ার পরিবর্তে পুনরুদ্ধারের সময় পরিকল্পনা করুন।',
      high: 'একটি উচ্চ স্কোর গ্রুপগুলিতে শক্তি আনতে পারে এবং সামাজিক গতি তৈরি করতে সহায়তা করতে পারে। যদি কোম্পানী মনোযোগ কেন্দ্রীভূত কাজকে ভিড় করে বা একাকীত্বকে অস্বস্তিকর করে তোলে, তাহলে নিরবচ্ছিন্ন সময় রক্ষা করুন এবং মিথস্ক্রিয়াকে চলমান রাখার প্রয়োজন ছাড়াই শোনার অভ্যাস করুন।'
    },
    'E.3': {
      low: 'একটি কম স্কোর শ্রবণ, সহযোগিতা এবং অন্যান্য লোকেদের নেতৃত্বের জন্য জায়গা তৈরি করতে পারে। যদি আপনার প্রয়োজন বা দক্ষতা অদৃশ্য থেকে যায়, একটি স্পষ্ট বাক্য প্রস্তুত করুন, একটি সরাসরি অনুরোধ করুন বা আলোচনার শুরুর কাছাকাছি একবার কথা বলুন।',
      high: 'একটি উচ্চ স্কোর একটি গোষ্ঠীকে সিদ্ধান্ত নিতে সাহায্য করতে পারে এবং অন্যরা যখন দ্বিধায় পড়ে তখন নির্দেশনা দিতে পারে। আপনি যদি খুব বেশি জায়গা নেন, তাহলে ভিন্নমতের মতামতের জন্য জিজ্ঞাসা করুন, উত্তর দেওয়ার আগে অপেক্ষা করুন এবং চুক্তির পরিবর্তে মালিকানাকে সুস্পষ্ট করুন।'
    },
    'E.4': {
      low: 'একটি কম স্কোর অবিরাম গতি এবং অবিরাম গতি ছাড়াই স্থির মনোযোগ সমর্থন করতে পারে। গুরুত্বপূর্ণ কাজ বারবার বিলম্বিত হলে, অল্প সংখ্যক অগ্রাধিকার নির্বাচন করুন এবং তাদের দৃশ্যমান সময়সীমা বা সময় ব্লক দিন।',
      high: 'একটি উচ্চ স্কোর গতি এবং কর্মের জন্য একটি শক্তিশালী ক্ষমতা তৈরি করতে পারে। যদি কার্যকলাপ অগ্রগতি ছাড়াই ওভারলোড বা ব্যস্ততায় পরিণত হয়, তবে ফলাফল এবং সময়সূচী বাফার থেকে গতিকে আলাদা করুন এবং ইচ্ছাকৃতভাবে কাজের মতো পুনরুদ্ধার করুন।'
    },
    'E.5': {
      low: 'একটি কম স্কোর তীব্র উদ্দীপনা ছাড়াই নিরাপত্তা, স্থিতিশীলতা এবং সন্তুষ্টির পক্ষে হতে পারে। যদি অভিনবত্ব এড়ানো আপনার পছন্দগুলিকে সংকুচিত করে, তবে ছোট, বিপরীতমুখী পরীক্ষাগুলি চেষ্টা করুন যার ঝুঁকিগুলি আগে থেকেই জানা যায়।',
      high: 'একটি উচ্চতর স্কোর সাহস, অন্বেষণ এবং প্রাণবন্ত অভিজ্ঞতার উপভোগকে সমর্থন করতে পারে। একঘেয়েমি যদি অপ্রয়োজনীয় ঝুঁকি নিয়ে যায়, উত্তেজনা বাড়ার আগে সীমা নির্ধারণ করুন এবং যেখানে নেতিবাচক দিক রয়েছে সেখানে উদ্দীপনা সন্ধান করুন।'
    },
    'E.6': {
      low: 'আশাবাদ মিথ্যা মনে হলে কম স্কোর গুরুতরতা এবং বাস্তবসম্মত সুর আনতে পারে। যদি উপলব্ধি বা উষ্ণতা লুকিয়ে থাকে, তবে এটি পরিষ্কারভাবে বলুন এবং ইতিবাচক অনুভূতিটি নিজে থেকে প্রদর্শিত হবে বলে আশা না করে আনন্দের জন্য ছোট উপলক্ষ তৈরি করুন।',
      high: 'একটি উচ্চ স্কোর গ্রুপের মনোবল বাড়াতে পারে এবং ইতিবাচক অভিজ্ঞতাগুলি সহজে লক্ষ্য করা যায়। যদি প্রফুল্লতা ব্যথা বা ঝুঁকির উপর চকচকে হয়ে যায়, তাহলে প্রথমে কী কঠিন তা স্বীকার করুন, তারপর সত্যকে অস্বীকার না করে আশার সন্ধান করুন।'
    },
    'O.1': {
      low: 'একটি কম স্কোর বাস্তব এবং পর্যবেক্ষণযোগ্য বিষয়গুলির প্রতি সুনির্দিষ্ট চিন্তাভাবনা এবং মনোযোগ সমর্থন করতে পারে। যদি পরিচিত উত্তরগুলি আরও ভাল সম্ভাবনার ভিড় তৈরি করে তবে কোনটি বাস্তবসম্মত তা মূল্যায়ন করার আগে বেশ কয়েকটি বিকল্প তৈরি করুন।',
      high: 'একটি উচ্চ স্কোর সৃজনশীলতা, মানসিক সিমুলেশন এবং মূল সংযোগ সমর্থন করতে পারে। যদি ধারণাগুলি দিবাস্বপ্নের মধ্যে থাকে বা মনোযোগ ছড়িয়ে দেয় তবে সেগুলিকে ক্যাপচার করুন, একটি বেছে নিন এবং এটিকে সবচেয়ে ছোট বাস্তব পরীক্ষায় পরিণত করুন।'
    },
    'O.2': {
      low: 'একটি কম স্কোর ফাংশন, স্পষ্টতা এবং সরাসরি উপযোগিতার উপর মনোযোগ রাখতে পারে। যদি নান্দনিক অভিজ্ঞতা বা পুনরুদ্ধারের সৌন্দর্য ধারাবাহিকভাবে অবহেলিত হয়, তাহলে সংক্ষিপ্ত, নিম্ন-চাপের উপায়ে এটির নমুনা নিন এবং লক্ষ্য করুন যে কী সত্যিই আপনার মনোযোগ ধরে রেখেছে।',
      high: 'একটি উচ্চ স্কোর গঠন, সৌন্দর্য এবং সূক্ষ্ম বিবরণের প্রতি সংবেদনশীলতাকে তীক্ষ্ণ করতে পারে। যদি নান্দনিক মানগুলি খুব বেশি সময় নেয় বা ফাংশনকে ওভাররাইড করে, তাহলে প্রথমে ব্যবহারিক সীমাবদ্ধতাগুলি সংজ্ঞায়িত করুন এবং ঠিক করুন যেখানে পরিমার্জন সত্যিই মূল্যবান।'
    },
    'O.3': {
      low: 'একটি কম স্কোর মানসিকতা এবং সিদ্ধান্তগুলিকে সমর্থন করতে পারে যা এই মুহূর্তের মেজাজ দ্বারা কম প্রভাবিত হয়। যদি অনুভূতিগুলি সনাক্ত করা কঠিন হয়ে যায় বা অন্য লোকের সংকেত মিস হয়ে যায়, তাহলে কী প্রয়োজন তা সিদ্ধান্ত নেওয়ার আগে একটি সংক্ষিপ্ত শরীর-ও-আবেগ পরীক্ষা করার জন্য বিরতি দিন।',
      high: 'একটি উচ্চ স্কোর মানসিক সচেতনতা, সহানুভূতি এবং একটি সংক্ষিপ্ত অভ্যন্তরীণ জীবনকে সমর্থন করতে পারে। যদি অনুভূতিগুলি অপ্রতিরোধ্য হয়ে ওঠে বা সিদ্ধান্তগুলি নির্দেশ করে, আবেগের নাম দিন, এটিকে স্থির হতে দিন এবং প্রমাণগুলি যা দেখায় তার থেকে আপনি কী অনুভব করেন তা আলাদা করুন।'
    },
    'O.4': {
      low: 'একটি কম স্কোর ধারাবাহিকতা, দক্ষতা এবং নির্ভরযোগ্য রুটিন সমর্থন করতে পারে। যদি রুটিন অনমনীয়তা বা অভিনবত্বের ভয়ে পরিণত হয়, বাকি কাঠামোকে পরিচিত রেখে একটি ছোট, বিপরীত পরিবর্তন আনুন।',
      high: 'একটি উচ্চ স্কোর অন্বেষণের মাধ্যমে অভিযোজন এবং শেখার সমর্থন করতে পারে। যদি অভিনবত্ব অস্থিরতা বা অসমাপ্ত প্রতিশ্রুতি তৈরি করে, তবে সময়, অর্থ এবং দায়িত্বের জন্য কিছু অ-আলোচনাযোগ্য অ্যাঙ্কর রাখুন।'
    },
    'O.5': {
      low: 'এই দিকটি জটিল এবং বিমূর্ত ধারণার প্রতি আগ্রহের বিষয়, বুদ্ধিমত্তা বা আইকিউ নয়। একটি কম স্কোর ব্যবহারিক সিদ্ধান্তের পক্ষে হতে পারে; যদি অপরিচিত ধারণাগুলি খুব দ্রুত খারিজ করা হয়, তাহলে জিজ্ঞাসা করুন কোন প্রমাণ আপনার মন পরিবর্তন করবে এবং সিদ্ধান্তের জন্য কী প্রয়োজন তা শিখুন।',
      high: 'একটি উচ্চ স্কোর জটিলতার সাথে বিশ্লেষণ, কৌতূহল এবং আরাম সমর্থন করতে পারে। চিন্তাভাবনা অবিরাম বিতর্ক বা বিশ্লেষণ পক্ষাঘাতে পরিণত হলে, আরও অন্বেষণ করার আগে সিদ্ধান্তের মানদণ্ড এবং সময়সীমা নির্ধারণ করুন।'
    },
    'O.6': {
      low: 'একটি কম স্কোর দরকারী ঐতিহ্য, ভাগ করা প্রত্যাশা এবং সামাজিক ধারাবাহিকতা রক্ষা করতে পারে। যদি কনভেনশন প্রশ্নাতীত হয় বা প্রাসঙ্গিক দৃষ্টিভঙ্গি বাদ দেয়, তাহলে নিয়মের কারণটি আবার দেখুন এবং জিজ্ঞাসা করুন কে এটি দ্বারা প্রভাবিত হয়।',
      high: 'একটি উচ্চ স্কোর আদর্শের সমালোচনামূলক পরীক্ষা এবং গঠনমূলক সংস্কার সমর্থন করতে পারে। যদি অভিনবত্বকে স্বয়ংক্রিয়ভাবে আরও ভাল হিসাবে বিবেচনা করা হয়, তবে ছোট ছোট ধাপে পরিবর্তনগুলি পরীক্ষা করুন এবং বিদ্যমান অনুশীলনের অংশগুলি সংরক্ষণ করুন যা এখনও কাজ করে।'
    },
    'A.1': {
      low: 'একটি কম স্কোর আপনাকে অসঙ্গতি লক্ষ্য করতে এবং বাজি বেশি হলে নিজেকে রক্ষা করতে সাহায্য করতে পারে। যদি সন্দেহ সহযোগিতাকে বাধা দেয়, তবে একযোগে সব কিছু প্রদান বা আটকে রাখার পরিবর্তে বিশ্বাসকে ক্রমাঙ্কন করুন: ছোট প্রতিশ্রুতি দিয়ে শুরু করুন এবং প্রমাণ থেকে আপডেট করুন।',
      high: 'একটি উচ্চ স্কোর উন্মুক্ততা এবং সহযোগিতা সহজ করতে পারে। যদি সৎ বিশ্বাস আপনাকে শোষণের জন্য উন্মুক্ত করে দেয়, উচ্চ-স্তরের দাবিগুলি যাচাই করে, প্রত্যাশাগুলি স্পষ্ট করে তোলে এবং এমনকি আপনার পছন্দের লোকেদের সাথেও সীমানা বজায় রাখে।'
    },
    'A.2': {
      low: 'একটি কম স্কোর কৌশল, আলোচনা, এবং কৌশলগত গোপনীয়তা সমর্থন করতে পারে। যদি এটি ম্যানিপুলেশন বা অস্পষ্টতা তৈরি করে, তাহলে প্রতারণা থেকে একটি বৈধ সীমানা আলাদা করুন এবং অন্য ব্যক্তি যাচাই করতে পারে এমন ভাষায় প্রতিশ্রুতি দিন।',
      high: 'একটি উচ্চ স্কোর সরাসরিতা এবং স্বচ্ছতার মাধ্যমে নির্ভরযোগ্যতা তৈরি করতে পারে। যদি সততা ভোঁতা বা ওভারশেয়ারিং হয়ে যায়, তাহলে সময়, প্রাসঙ্গিকতার সাথে সত্যকে একত্রিত করুন এবং কীভাবে এটি বিতরণ করা হয় তার জন্য যত্ন নিন।'
    },
    'A.3': {
      low: 'একটি কম স্কোর সীমিত সময় রক্ষা করতে পারে এবং অন্যদের স্বায়ত্তশাসনকে উৎসাহিত করতে পারে। যদি অন্যরা আপনাকে অনুপলব্ধ বা পারস্পরিক ক্ষয়প্রাপ্ত হিসাবে অনুভব করে, তাহলে এমন একটি সাহায্য বেছে নিন যা আপনি বজায় রাখতে পারেন এবং এর সুযোগটি স্পষ্টভাবে জানান।',
      high: 'একটি উচ্চ স্কোর শক্তিশালী সমর্থন এবং সম্প্রদায়ের অনুভূতি তৈরি করতে পারে। যদি সাহায্য করার ফলে বার্নআউট হয় বা অন্যদের দায়িত্ব নিতে বাধা দেয়, তাহলে সাহায্য চাই কিনা জিজ্ঞাসা করুন, সীমাতে সম্মত হন এবং প্রতিটি প্রয়োজনকে আপনার বাধ্যবাধকতা করবেন না।'
    },
    'A.4': {
      low: 'একটি কম স্কোর মান রক্ষা করতে এবং সরাসরি বিরোধের সমাধান করতে সাহায্য করতে পারে। যদি মতবিরোধ দীর্ঘস্থায়ী ঘর্ষণে পরিণত হয়, নমনীয় বিকল্পগুলি থেকে অ-আলোচনাযোগ্য প্রয়োজনগুলিকে আলাদা করুন এবং বল প্রয়োগের পরিবর্তে ভাগ করা মানদণ্ড ব্যবহার করুন।',
      high: 'একটি উচ্চ স্কোর দ্বন্দ্ব কমাতে পারে এবং সহযোগিতা রক্ষা করতে পারে। যদি গুরুত্বপূর্ণ প্রয়োজনগুলি মেনে নিয়ে সম্প্রীতি কেনা হয়, তবে সীমানা স্পষ্টভাবে বর্ণনা করুন এবং সম্পর্ক ব্যর্থতা হিসাবে বিবেচনা না করে সম্মানজনক মতবিরোধের অনুমতি দিন।'
    },
    'A.5': {
      low: 'একটি কম স্কোর স্ব-উকিলতা সমর্থন করতে পারে এবং অবদানগুলিকে দৃশ্যমান করতে পারে। যদি আত্মবিশ্বাসকে শ্রেষ্ঠত্ব হিসাবে শোনা যায় বা অন্যের কাজ অদৃশ্য হয়ে যায়, তাহলে প্রমাণ সহ দাবি করুন এবং অবিকল ক্রেডিট শেয়ার করুন।',
      high: 'একটি উচ্চ স্কোর কাজের প্রতি মনোযোগ রাখতে পারে এবং সহযোগিতাকে সহজ করে তুলতে পারে। যদি আপনার অবদান বারবার উপেক্ষা করা হয়, তাহলে আপনি কী করেছেন এবং এর প্রভাব বাস্তবিকভাবে বর্ণনা করুন; সঠিক আত্ম-প্রতিনিধিত্ব অহংকার নয়।'
    },
    'A.6': {
      low: 'একটি কম স্কোর বস্তুনিষ্ঠতা এবং কঠিন সিদ্ধান্তগুলিকে সমর্থন করতে পারে যা সবাইকে সন্তুষ্ট করতে পারে না। লোকেরা যদি সিদ্ধান্তটি ঠান্ডা বলে অনুভব করে বা এর মানবিক খরচ মিস হয়, তাহলে কে বোঝা বহন করে তা জিজ্ঞাসা করুন এবং একটি স্পষ্ট ব্যাখ্যা সহ যুক্তি যুক্ত করুন।',
      high: 'একটি উচ্চ স্কোর সহানুভূতি এবং কষ্টের দ্রুত স্বীকৃতি সমর্থন করতে পারে। যদি সহানুভূতি ক্লান্ত হয়ে যায় বা প্রাসঙ্গিক তথ্যগুলিকে ওভাররাইড করে, মানসিক সীমানা সেট করুন এবং যাচাই করুন যে কী সাহায্য আসলে পরিস্থিতির উন্নতি করবে।'
    },
    'C.1': {
      low: 'কম স্কোর সতর্কতা, প্রস্তুতি এবং প্রয়োজনের সময় সাহায্যের জন্য অনুরোধ করতে উৎসাহিত করতে পারে। যদি আত্ম-সন্দেহ আপনাকে শুরু করা থেকে বিরত রাখে, কাজটিকে ছোট ছোট টুকরো টুকরো করে ফেলুন এবং সক্ষমতার প্রমাণ হিসাবে সম্পূর্ণ পদক্ষেপগুলি ব্যবহার করুন।',
      high: 'একটি উচ্চ স্কোর সমস্যা সমাধানে মালিকানা, অধ্যবসায় এবং আত্মবিশ্বাসকে সমর্থন করতে পারে। যদি আত্মবিশ্বাস অত্যধিক মূল্যায়ন বা সাহায্য চাইতে অনিচ্ছায় পরিণত হয়, একটি সংক্ষিপ্ত প্রি-মর্টেম চালান এবং একজন জ্ঞানী ব্যক্তিকে পরিকল্পনাটি চ্যালেঞ্জ করতে বলুন।'
    },
    'C.2': {
      low: 'পরিকল্পনা পরিবর্তনের সময় একটি কম স্কোর নমনীয়তা এবং ইমপ্রোভাইজেশনকে সমর্থন করতে পারে। যদি ব্যাধির জন্য সময় ব্যয় হয় বা বাধ্যবাধকতাগুলি অদৃশ্য হয়ে যায়, তবে সবচেয়ে গুরুত্বপূর্ণ জিনিসগুলির জন্য শুধুমাত্র কয়েকটি নির্ভরযোগ্য বাড়ি, তালিকা এবং রুটিন তৈরি করুন।',
      high: 'উচ্চ স্কোর কাজকে পরিষ্কার, নির্ভরযোগ্য এবং পুনরায় শুরু করা সহজ করে তুলতে পারে। যদি অর্ডার পরিপূর্ণতাবাদে পরিণত হয় বা পরিবর্তন বিরক্তিকর হয়ে ওঠে, তবে কী যথেষ্ট ভাল তা সংজ্ঞায়িত করুন এবং পরিকল্পনায় ইচ্ছাকৃত শিথিলতা ছেড়ে দিন।'
    },
    'C.3': {
      low: 'একটি কম স্কোর প্রশ্ন বিধি এবং প্রেক্ষাপটে বাধ্যবাধকতা মানিয়ে নিতে সাহায্য করতে পারে। যদি অন্যরা আপনার প্রতিশ্রুতিগুলির উপর নির্ভর করতে না পারে বা নৈতিক কোণগুলি কেটে যায়, তবে প্রতিশ্রুতিগুলি স্পষ্ট করুন এবং প্রতিটি বাধ্যবাধকতার সাথে এটি গুরুত্বপূর্ণ কারণটির সাথে পুনরায় সংযোগ করুন।',
      high: 'একটি উচ্চ স্কোর সততা এবং নির্ভরযোগ্য ফলো-থ্রু সমর্থন করতে পারে। যদি দায়িত্ব অনমনীয়তা বা একটি অস্থায়ী লোড তৈরি করে, তবে প্রতিযোগিতামূলক বাধ্যবাধকতাগুলিকে র‌্যাঙ্ক করুন এবং সেগুলিকে নীরবে বহন করার পরিবর্তে তাড়াতাড়ি পুনর্বিবেচনা করুন৷'
    },
    'C.4': {
      low: 'একটি কম স্কোর ভারসাম্য রক্ষা করতে পারে এবং অবিরাম প্রতিযোগিতা ছাড়াই সন্তুষ্টির অনুমতি দিতে পারে। যদি এটি স্থবির হয়ে পড়ে বা মূল্যবান ক্ষমতা অব্যবহৃত রেখে যায়, তাহলে একটি ব্যক্তিগতভাবে অর্থপূর্ণ লক্ষ্য নির্বাচন করুন এবং পরবর্তী ছোট মাইলফলকটি সংজ্ঞায়িত করুন।',
      high: 'একটি উচ্চ স্কোর দাবীকৃত লক্ষ্যগুলির দিকে দক্ষতা এবং টেকসই প্রচেষ্টাকে সমর্থন করতে পারে। যদি স্ব-মূল্য আউটপুটের সাথে আবদ্ধ হয়ে যায় বা প্রচেষ্টা বার্নআউট হয়ে যায়, তবে কী যথেষ্ট হিসাবে গণ্য হবে তা সংজ্ঞায়িত করুন এবং কৃতিত্বের সাথে সম্পর্কহীন বিশ্রাম এবং ভূমিকা রক্ষা করুন।'
    },
    'C.5': {
      low: 'একটি কম স্কোর পরিবর্তন অগ্রাধিকারের স্বতঃস্ফূর্ততা এবং প্রতিক্রিয়াশীলতা সমর্থন করতে পারে। যদি শুরু করা বা শেষ করা বারবার কঠিন হয়, তাহলে প্রথম ধাপটি সঙ্কুচিত করুন, পরিবেশ পরিবর্তন করুন এবং একটি দৃশ্যমান সংকেত বা অন্য ব্যক্তির দায়বদ্ধতা যোগ করুন।',
      high: 'অনুপ্রেরণা কম থাকলেও একটি উচ্চ স্কোর ফলো-থ্রু সমর্থন করতে পারে। যদি অধ্যবসায় ক্রমশ হ্রাসকারী রিটার্নের অতীত অব্যাহত থাকে, তবে থামার নিয়ম সেট করুন এবং লক্ষ্যটি এখনও প্রচেষ্টার যোগ্য কিনা তা পর্যালোচনা করুন।'
    },
    'C.6': {
      low: 'একটি কম স্কোর অসম্পূর্ণ তথ্য সহ গতি, পরীক্ষা এবং ক্রিয়া সমর্থন করতে পারে। প্রতিরোধযোগ্য ত্রুটিগুলি পুনরাবৃত্তি হলে, ব্যয়বহুল বা বিপরীত করা কঠিন সিদ্ধান্তের আগে একটি সংক্ষিপ্ত বিরতি এবং চেকলিস্ট যুক্ত করুন।',
      high: 'একটি উচ্চ স্কোর ঝুঁকি বিশ্লেষণ এবং সতর্ক, উচ্চ মানের সিদ্ধান্ত সমর্থন করতে পারে। যদি সতর্কতার কারণে সময় মিস হয় বা বারবার গুজব হয়, তাহলে একটি সিদ্ধান্তের সময়সীমা নির্ধারণ করুন এবং নিশ্চিততার জন্য অপেক্ষা করার চেয়ে একটি বিপরীত পাইলটকে পছন্দ করুন।'
    }
  },
  ca: {
    'N.1': {
      low: "Una puntuació més baixa us pot ajudar a mantenir la calma i evitar que la incertesa es faci càrrec. Si aquesta calma us porta a subestimar els riscos o preparar-vos massa poc, enumereu el risc més probable i una alternativa abans d'una decisió important.",
      high: "Una puntuació més alta us pot ajudar a notar els riscos i els signes d'alerta d'hora. Si la preocupació consumeix la vostra atenció repetidament, separeu el que és possible del que és probable, establiu un límit en el temps de preocupació i trieu una acció concreta a continuació; buscar suport professional si altera de manera persistent la vida diària."
    },
    'N.2': {
      low: 'Una puntuació més baixa pot fer-te equilibrat i difícil de provocar. Si tendeix a suprimir la ira legítima o deixar els límits sense declarar, nomeneu el problema aviat i descriu el comportament que voleu canviar.',
      high: "Una puntuació més alta pot fer que detecteu ràpidament les injustícies i defenseu allò que importa. Si la ira augmenta els conflictes o provoca reaccions impulsives, feu una pausa abans de respondre i indiqueu el comportament, l'impacte i la necessitat específics en lloc d'atacar la persona."
    },
    'N.3': {
      low: "Una puntuació més baixa sovint dóna suport a la recuperació emocional i una energia constant. Si fa que la tristesa d'una altra persona o la vostra pròpia necessitat de descans sigui fàcil de passar per alt, alentiu-la, escolteu i reconeixeu la pèrdua abans d'intentar resoldre-la.",
      high: "Una puntuació més alta pot fer que la decepció i la pèrdua siguin especialment rellevants, cosa que pot revelar allò que us importa profundament. El baix estat d'ànim persistent no és una cosa que hagis de tractar només com un tret: mantenir les rutines i les tasques petites, mantenir-se connectat amb persones de confiança i buscar suport professional quan duri o perjudiqui la vida diària."
    },
    'N.4': {
      low: "Una puntuació més baixa pot fer que les situacions socials se sentin relaxades i reduir la por al judici. Si de vegades trobeu a faltar com us trobeu, demaneu comentaris específics i comproveu la resposta de l'altra persona en lloc de suposar que tot ha anat bé.",
      high: "Una puntuació més alta pot fer que estiguis atent a les expectatives socials i a les reaccions dels altres. Si l'autocontrol es converteix en rumiació o evitació, desplaceu l'atenció cap a la tasca compartida, abordeu les situacions difícils de manera gradual i jutgeu la interacció per proves en lloc d'un escrutini imaginari."
    },
    'N.5': {
      low: "Una puntuació més baixa admet la moderació i la capacitat de retardar la gratificació. Si la moderació es converteix en un control excessiu o deixa massa poc espai per gaudir, feu espai deliberadament per a una espontaneïtat inofensiva en lloc d'esperar fins que s'augmenti la pressió.",
      high: "Una puntuació més alta pot aportar espontaneïtat, gana i gaudi de l'experiència immediata. Si les instàncies generen costos repetidament que després lamenteu, afegiu fricció abans d'actuar: espereu, elimineu els desencadenants, establiu límits per endavant o feu que l'elecció desitjada a llarg termini sigui més fàcil d'arribar."
    },
    'N.6': {
      low: 'Una puntuació més baixa us pot ajudar a pensar amb claredat i actuar de manera constant sota pressió. Si us porta a subestimar la tensió en vosaltres mateixos o en els altres, planifiqueu les contingències i preneu-vos temps per informar-vos i recuperar-vos després de períodes exigents.',
      high: "Una puntuació més alta pot fer que noteu una sobrecàrrega aviat i cerqueu suport abans que s'esgotin els recursos. Si la pressió provoca congelació o confusió, redueix les demandes simultànies, assaja els primers passos amb antelació i utilitza un pla escrit senzill quan l'estrès és alt."
    },
    'E.1': {
      low: 'Una puntuació més baixa pot donar suport a la independència i a un cercle social reduït i selectiu. Si la reserva es confon amb desinterès o impedeix que es formin relacions útils, senyaleu explícitament la calor i manteniu alguns punts de contacte regulars.',
      high: "Una puntuació més alta pot facilitar la relació, la confiança i les noves connexions. Si l'amistat condueix a un compromís excessiu o una confiança abans d'aconseguir-la, ritme l'auto-revelació, verifiqueu les afirmacions importants i deixeu espai per dir que no."
    },
    'E.2': {
      low: "Una puntuació més baixa pot proporcionar concentració, comoditat amb la solitud i menys dependència de l'estimulació del grup. Si la solitud es converteix en aïllament o els grups es tornen cada cop més difícils, trieu reunions més petites i planifiqueu el temps de recuperació en lloc d'evitar el contacte per complet.",
      high: "Una puntuació més alta pot aportar energia als grups i ajudar a crear un impuls social. Si l'empresa desborda el treball centrat o fa que la solitud sigui incòmoda, protegiu el temps ininterromput i practiqueu l'escolta sense necessitat de mantenir la interacció en moviment."
    },
    'E.3': {
      low: "Una puntuació més baixa pot donar lloc a l'escolta, la cooperació i el lideratge d'altres persones. Si les vostres necessitats o coneixements es mantenen invisibles, prepareu una frase clara, feu una sol·licitud directa o parleu una vegada a prop de l'inici de la discussió.",
      high: "Una puntuació més alta pot ajudar un grup a prendre decisions i donar direcció quan els altres dubten. Si ocupeu massa espai, demaneu opinions discrepants, espereu abans de respondre i feu que la propietat sigui explícita en lloc d'assumir l'acord."
    },
    'E.4': {
      low: 'Una puntuació més baixa pot suportar un ritme sense presses i una atenció sostinguda sense moviment constant. Si el treball important es retarda repetidament, trieu un nombre reduït de prioritats i doneu-los terminis o blocs de temps visibles.',
      high: "Una puntuació més alta pot crear impuls i una forta capacitat d'acció. Si l'activitat es converteix en una sobrecàrrega o ocupació sense progrés, distingeix el moviment dels resultats i programa els amortidors i la recuperació tan deliberadament com les tasques."
    },
    'E.5': {
      low: "Una puntuació més baixa pot afavorir la seguretat, l'estabilitat i la satisfacció sense una estimulació intensa. Si evitar la novetat redueix les vostres opcions, proveu experiments petits i reversibles els riscos dels quals es coneixen per endavant.",
      high: "Una puntuació més alta pot donar suport al coratge, l'exploració i el gaudi d'experiències vives. Si l'avorriment genera riscos innecessaris, estableixi límits abans que l'excitació augmenti i busqueu estimulació en entorns on es contingui el desavantatge."
    },
    'E.6': {
      low: "Una puntuació més baixa pot aportar serietat i un to realista quan l'optimisme se sentiria fals. Si l'apreciació o la calidesa romanen amagats, digueu-ho amb claredat i creeu petites ocasions per gaudir en comptes d'esperar que apareguin un sentiment positiu per si sol.",
      high: "Una puntuació més alta pot elevar la moral del grup i fer que les experiències positives siguin fàcils de notar. Si l'alegria passa per alt el dolor o el risc, primer reconeix el que és difícil i després busca l'esperança sense negar els fets."
    },
    'O.1': {
      low: "Una puntuació més baixa pot donar suport al pensament concret i l'atenció al que és pràctic i observable. Si les respostes conegudes exclouen millors possibilitats, genereu diverses alternatives abans d'avaluar quina és realista.",
      high: "Una puntuació més alta pot donar suport a la creativitat, la simulació mental i les connexions originals. Si les idees romanen en els somnis desperts o dispersen l'atenció, captureu-les, trieu-ne una i convertiu-la en la prova tangible més petita."
    },
    'O.2': {
      low: "Una puntuació més baixa pot mantenir l'atenció en la funció, la claredat i la utilitat directa. Si l'experiència estètica o la bellesa restauradora es descuiden constantment, mostreu-la de maneres breus i de baixa pressió i observeu allò que realment crida la vostra atenció.",
      high: 'Una puntuació més alta pot augmentar la sensibilitat a la forma, la bellesa i els detalls subtils. Si els estàndards estètics consumeixen massa temps o anul·len la funció, primer definiu les limitacions pràctiques i decidiu on val la pena el refinament.'
    },
    'O.3': {
      low: "Una puntuació més baixa pot donar suport a la compostura i les decisions que es veuen menys influenciades per l'estat d'ànim del moment. Si els sentiments es tornen difícils d'identificar o es perden els senyals d'altres persones, feu una pausa per a una breu comprovació del cos i les emocions abans de decidir què cal.",
      high: "Una puntuació més alta pot donar suport a la consciència emocional, l'empatia i una vida interior matisada. Si els sentiments es tornen aclaparadors o dicten decisions, poseu un nom a l'emoció, deixeu que s'assenti i distingeix el que sents del que mostra l'evidència."
    },
    'O.4': {
      low: "Una puntuació més baixa pot donar suport a la continuïtat, el domini i les rutines fiables. Si la rutina es converteix en rigidesa o por a la novetat, introduïu un petit canvi reversible mentre mantingueu familiaritzada la resta de l'estructura.",
      high: "Una puntuació més alta pot donar suport a l'adaptabilitat i l'aprenentatge mitjançant l'exploració. Si la novetat crea inestabilitat o compromisos inacabats, manteniu uns quants ancoratges no negociables per temps, diners i responsabilitats."
    },
    'O.5': {
      low: "Aquesta faceta es refereix a l'interès per idees complexes i abstractes, no a la intel·ligència o el coeficient intel·lectual. Una puntuació més baixa pot afavorir decisions pràctiques; si les idees desconegudes es descarten massa ràpidament, pregunteu quines proves canviaran d'opinió i apreneu només què requereix la decisió.",
      high: "Una puntuació més alta pot donar suport a l'anàlisi, la curiositat i la comoditat amb la complexitat. Si el pensament es converteix en un debat interminable o una paràlisi d'anàlisi, definiu el criteri de decisió i el termini abans d'explorar més."
    },
    'O.6': {
      low: 'Una puntuació més baixa pot preservar tradicions útils, expectatives compartides i continuïtat social. Si la convenció no es qüestiona o exclou les perspectives rellevants, reviseu el motiu de la regla i pregunteu a qui està afectat per ella.',
      high: 'Una puntuació més alta pot donar suport a un examen crític de les normes i una reforma constructiva. Si la novetat es tracta automàticament com a millor, prova els canvis en petits passos i conserva les parts de la pràctica existent que encara funcionen.'
    },
    'A.1': {
      low: "Una puntuació més baixa us pot ajudar a notar inconsistència i protegir-vos quan les apostes són altes. Si la sospita bloqueja la cooperació, calibra la confiança en comptes de concedir-la o retenir-la d'una vegada: comença amb petits compromisos i actualitza les proves.",
      high: "Una puntuació més alta pot facilitar l'obertura i la cooperació. Si la bona fe us deixa obert a l'explotació, verifiqueu les afirmacions d'alt risc, feu explícites les expectatives i mantingueu els límits fins i tot amb les persones que us agraden."
    },
    'A.2': {
      low: "Una puntuació més baixa pot donar suport al tacte, la negociació i la privadesa estratègica. Si crea manipulació o ambigüitat, distingeix un límit legítim de l'engany i pren compromisos amb un llenguatge que l'altra persona pugui verificar.",
      high: "Una puntuació més alta pot generar fiabilitat mitjançant la franquesa i la transparència. Si l'honestedat es converteix en contundència o compartició excessiva, combina la veritat amb el moment, la rellevància i la cura de com s'entrega."
    },
    'A.3': {
      low: "Una puntuació més baixa pot protegir un temps limitat i fomentar l'autonomia d'altres persones. Si els altres consideren que no estàs disponible o la reciprocitat s'erosiona, tria una forma d'ajuda que puguis mantenir i expliqui el seu abast amb claredat.",
      high: 'Una puntuació més alta pot crear un fort suport i un sentit de comunitat. Si ajudar provoca esgotament o impedeix que els altres es responsabilitzin, pregunteu si es vol ajuda, acordeu els límits i no feu que totes les necessitats siguin la vostra obligació.'
    },
    'A.4': {
      low: 'Una puntuació més baixa pot ajudar a defensar els estàndards i abordar els conflictes directament. Si el desacord es converteix en fricció crònica, separeu les necessitats no negociables de les opcions flexibles i utilitzeu criteris compartits en lloc de força.',
      high: "Una puntuació més alta pot desescalar el conflicte i protegir la cooperació. Si l'harmonia s'adquireix concedint necessitats importants, especifiqueu el límit clarament i permeteu un desacord respectuós sense tractar-lo com un fracàs de la relació."
    },
    'A.5': {
      low: "Una puntuació més baixa pot donar suport a l'autodefensa i fer visibles les contribucions. Si la confiança s'escolta com a superioritat o el treball dels altres desapareix, feu afirmacions amb proves i compartiu el crèdit amb precisió.",
      high: "Una puntuació més alta pot mantenir l'atenció en el treball i facilitar la col·laboració. Si la teva contribució es passa per alt repetidament, descriu el que has fet i el seu efecte de manera real; l'autorepresentació precisa no és arrogància."
    },
    'A.6': {
      low: "Una puntuació més baixa pot donar suport a l'objectivitat i a les decisions difícils que no poden satisfer tothom. Si la gent viu la decisió com a freda o no es té en compte el seu cost humà, pregunteu qui porta la càrrega i combina el raonament amb una explicació clara.",
      high: "Una puntuació més alta pot donar suport a la compassió i al reconeixement ràpid del patiment. Si l'empatia s'esgota o anul·la els fets rellevants, establiu límits emocionals i verifiqueu quina ajuda realment millorarà la situació."
    },
    'C.1': {
      low: 'Una puntuació més baixa pot fomentar la precaució, la preparació i demanar ajuda quan sigui necessari. Si el dubte de si mateix us impedeix començar, divideix la tasca en petits trossos i utilitza els passos completats com a prova de capacitat.',
      high: 'Una puntuació més alta pot donar suport a la propietat, la persistència i la confiança en la resolució de problemes. Si la confiança es converteix en una sobreestimació o reticència a buscar ajuda, feu una breu pre-mortem i demaneu a una persona ben informada que desafii el pla.'
    },
    'C.2': {
      low: 'Una puntuació més baixa pot donar suport a la flexibilitat i la improvisació quan canvien els plans. Si el desordre costa temps o fa desaparèixer les obligacions, creeu només unes poques cases, llistes i rutines fiables per a les coses que més importen.',
      high: "Una puntuació més alta pot fer que el treball sigui clar, fiable i fàcil de reprendre. Si l'ordre es converteix en perfeccionisme o el canvi es torna angoixant, definiu el que és prou bo i deixeu una manca deliberada en el pla."
    },
    'C.3': {
      low: 'Una puntuació més baixa pot ajudar a qüestionar les regles i adaptar les obligacions al context. Si els altres no poden confiar en els vostres compromisos o es tallen els racons ètics, feu promeses explícites i torneu a connectar cada obligació amb la raó que importa.',
      high: 'Una puntuació més alta pot donar suport a la integritat i a un seguiment fiable. Si el deure crea rigidesa o una càrrega insostenible, classifiqueu les obligacions en competència i renegocieu-les aviat en comptes de carregar-les en silenci.'
    },
    'C.4': {
      low: "Una puntuació més baixa pot protegir l'equilibri i permetre la satisfacció sense competència constant. Si s'estanca o deixa les habilitats valuoses sense utilitzar, trieu un objectiu personalment significatiu i definiu la següent petita fita.",
      high: "Una puntuació més alta pot recolzar el domini i l'esforç sostingut cap a objectius exigents. Si l'autoestima es vincula a la producció o l'esforç es converteix en un esgotament, defineix què compta com a suficient i protegeix el descans i els rols no relacionats amb l'assoliment."
    },
    'C.5': {
      low: "Una puntuació més baixa pot donar suport a l'espontaneïtat i la capacitat de resposta a les prioritats canviants. Si començar o acabar és difícil repetidament, reduïu el primer pas, canvieu l'entorn i afegiu un senyal visible o la responsabilitat d'una altra persona.",
      high: "Una puntuació més alta pot donar suport al seguiment fins i tot quan la motivació és baixa. Si la persistència continua més enllà dels rendiments decreixents, estableix regles d'aturada i revisa si l'objectiu encara mereix l'esforç."
    },
    'C.6': {
      low: "Una puntuació més baixa pot donar suport a la velocitat, l'experimentació i l'acció amb informació incompleta. Si es repeteixen errors evitables, afegiu una breu pausa i una llista de verificació abans de prendre decisions costoses o difícils de revertir.",
      high: "Una puntuació més alta pot donar suport a l'anàlisi de riscos i a prendre decisions acurades i d'alta qualitat. Si la precaució provoca la pèrdua de temps o la rumiació repetida, establiu una data límit de decisió i preferiu un pilot reversible a l'espera de certesa."
    }
  },
  cs: {
    'N.1': {
      low: 'Nižší skóre vám může pomoci zůstat v klidu a vyhnout se nejistotě. Pokud vás tento klid vede k tomu, že podceňujete rizika nebo se připravujete příliš málo, uveďte před důležitým rozhodnutím nejpravděpodobnější riziko a jeden záskok.',
      high: 'Vyšší skóre vám může pomoci včas zaznamenat rizika a varovné signály. Pokud starost opakovaně spotřebovává vaši pozornost, oddělte to, co je možné od toho, co je pravděpodobné, stanovte si limit pro dobu obav a zvolte jednu konkrétní další akci; vyhledejte odbornou podporu, pokud trvale narušuje každodenní život.'
    },
    'N.2': {
      low: 'Nižší skóre může způsobit, že budete vyrovnaní a bude těžké vyprovokovat. Pokud máte tendenci potlačovat legitimní hněv nebo nechávat hranice nevyjasněné, pojmenujte problém včas a popište chování, které chcete změnit.',
      high: 'Vyšší skóre vám pomůže rychle odhalit nespravedlnost a obhájit to, na čem záleží. Pokud hněv eskaluje konflikty nebo podněcuje impulzivní reakce, zastavte se před odpovědí a místo útoku na osobu uveďte konkrétní chování, dopad a potřebu.'
    },
    'N.3': {
      low: 'Nižší skóre často podporuje emoční zotavení a stálou energii. Pokud je smutek jiného člověka nebo vaši vlastní potřebu odpočinku snadno přehlédnutelné, zpomalte, poslouchejte a uznejte ztrátu, než se ji pokusíte vyřešit.',
      high: 'Vyšší skóre může způsobit, že zklamání a ztráta budou obzvláště výrazné, což může odhalit to, na čem vám hluboce záleží. Přetrvávající špatná nálada není něco, co musíte považovat za pouhou vlastnost: udržujte rutiny a úkoly malé, zůstaňte ve spojení s důvěryhodnými lidmi a vyhledejte odbornou podporu, když to trvá nebo narušuje každodenní život.'
    },
    'N.4': {
      low: 'Nižší skóre může způsobit uvolnění sociálních situací a snížit strach z úsudku. Pokud vám někdy uniká, jak jste se setkali, požádejte o konkrétní zpětnou vazbu a zkontrolujte reakci druhé osoby, spíše než předpokládejte, že vše dopadlo dobře.',
      high: 'Vyšší skóre může způsobit, že budete pozorní vůči společenským očekáváním a reakcím ostatních lidí. Pokud se sebemonitorování změní v přemítání nebo vyhýbání se, přesuňte pozornost na sdílený úkol, přistupujte k obtížným situacím postupně a posuzujte interakci spíše podle důkazů než domnělého zkoumání.'
    },
    'N.5': {
      low: 'Nižší skóre podporuje zdrženlivost a schopnost oddálit uspokojení. Pokud se zdrženlivost stane přehnanou kontrolou nebo ponechává příliš málo prostoru pro požitek, udělejte záměrně prostor pro neškodnou spontánnost, místo abyste čekali, až se zvýší tlak.',
      high: 'Vyšší skóre může přinést spontánnost, chuť k jídlu a požitek z bezprostředního zážitku. Pokud naléhání opakovaně vytváří náklady, kterých budete později litovat, přidejte tření, než začnete jednat: počkejte, odstraňte spouštěče, nastavte předem limity nebo usnadněte dosažení požadované dlouhodobé volby.'
    },
    'N.6': {
      low: 'Nižší skóre vám může pomoci jasně myslet a jednat stabilně pod tlakem. Pokud vás to vede k tomu, že podceňujete napětí u sebe nebo u druhých, naplánujte si nepředvídatelné události a udělejte si čas na rozbor a zotavení po náročných obdobích.',
      high: 'Vyšší skóre může způsobit, že si brzy všimnete přetížení a vyhledáte podporu dříve, než dojdou zdroje. Pokud tlak způsobí zmrazení nebo zmatek, snižte současné požadavky, nacvičte si prvních několik kroků předem a při vysokém stresu použijte jednoduchý písemný plán.'
    },
    'E.1': {
      low: 'Nižší skóre může podporovat nezávislost a malý, selektivní sociální okruh. Pokud je rezervovanost mylně považována za nezájem nebo brání vytváření užitečných vztahů, jasně signalizujte vřelost a udržujte několik pravidelných styčných bodů.',
      high: 'Vyšší skóre může snadno vytvořit vztah, důvěru a nová spojení. Pokud přátelskost vede k přehnanému závazku nebo důvěře dříve, než si ji vyděláte, urychlete sebeodhalení, ověřte důležitá tvrzení a ponechte prostor říci ne.'
    },
    'E.2': {
      low: 'Nižší skóre může poskytnout soustředění, pohodlí se samotou a menší závislost na skupinové stimulaci. Pokud se samota změní v izolaci nebo se skupiny stanou stále obtížnějšími, vyberte si menší setkání a naplánujte si čas na zotavení, než abyste se kontaktu úplně vyhýbali.',
      high: 'Vyšší skóre může skupinám přinést energii a pomoci vytvořit sociální impuls. Pokud společnost vytlačuje soustředěnou práci nebo znepříjemňuje samota, chraňte si nepřerušovaný čas a cvičte naslouchání, aniž byste museli udržovat interakci v pohybu.'
    },
    'E.3': {
      low: 'Nižší skóre může vytvořit prostor pro naslouchání, spolupráci a vedení ostatních lidí. Pokud vaše potřeby nebo odborné znalosti zůstanou neviditelné, připravte si jednu jasnou větu, podejte přímou žádost nebo promluvte jednou těsně před začátkem diskuse.',
      high: 'Vyšší skóre může skupině pomoci při rozhodování a dát směr, když ostatní váhají. Pokud zabíráte příliš mnoho místa, zeptejte se na nesouhlasné názory, počkejte, než odpovíte, a udělejte explicitní vlastnictví, nikoli předpokládejte souhlas.'
    },
    'E.4': {
      low: 'Nižší skóre může podpořit neuspěchané tempo a trvalou pozornost bez neustálého pohybu. Pokud se důležitá práce opakovaně zpožďuje, zvolte malý počet priorit a dejte jim viditelné termíny nebo časové bloky.',
      high: 'Vyšší skóre může vytvořit impuls a silnou schopnost akce. Pokud se činnost stane přetíženou nebo zaneprázdněnou bez pokroku, rozlišujte pohyb od výsledků a naplánujte vyrovnávací paměti a obnovu stejně záměrně jako úkoly.'
    },
    'E.5': {
      low: 'Nižší skóre může upřednostňovat bezpečnost, stabilitu a spokojenost bez intenzivní stimulace. Pokud vyhýbání se novinkám zužuje vaše možnosti, zkuste malé, vratné experimenty, jejichž rizika jsou předem známa.',
      high: 'Vyšší skóre může podpořit odvahu, průzkum a radost z živých zážitků. Pokud nuda vede ke zbytečným rizikům, stanovte si limity dříve, než vzrušení vzroste, a hledejte stimulaci v prostředí, kde je obsažena nevýhoda.'
    },
    'E.6': {
      low: 'Nižší skóre může přinést vážnost a realistický tón, když by se optimismus zdál falešný. Pokud uznání nebo vřelost zůstane skryta, řekněte to na rovinu a vytvořte si malé příležitosti k pobavení, místo abyste očekávali, že se pozitivní pocity dostaví samy.',
      high: 'Vyšší skóre může zvednout skupinovou morálku a usnadnit zaznamenávání pozitivních zážitků. Pokud veselost překrývá bolest nebo riziko, uznejte nejprve to, co je obtížné, a pak hledejte naději, aniž byste popírali fakta.'
    },
    'O.1': {
      low: 'Nižší skóre může podpořit konkrétní myšlení a pozornost k tomu, co je praktické a pozorovatelné. Pokud známé odpovědi vytlačují lepší možnosti, vygenerujte několik alternativ, než vyhodnotíte, která z nich je realistická.',
      high: 'Vyšší skóre může podpořit kreativitu, mentální simulaci a originální spojení. Pokud nápady zůstávají ve snech nebo rozptylují pozornost, zachyťte je, vyberte si jeden a proměňte jej v nejmenší hmatatelný test.'
    },
    'O.2': {
      low: 'Nižší skóre může udržet pozornost na funkci, srozumitelnosti a přímé užitečnosti. Pokud je estetický zážitek nebo obnovující krása důsledně zanedbávána, ochutnejte to krátkými, nízkotlakými způsoby a všimněte si, co skutečně upoutá vaši pozornost.',
      high: 'Vyšší skóre může zvýšit citlivost na tvar, krásu a jemné detaily. Pokud estetické standardy spotřebují příliš mnoho času nebo potlačují funkci, definujte nejprve praktická omezení a rozhodněte, kde se vylepšení skutečně vyplatí.'
    },
    'O.3': {
      low: 'Nižší skóre může podpořit vyrovnanost a rozhodnutí, která jsou méně ovlivněna momentální náladou. Pokud je obtížné identifikovat pocity nebo signály jiných lidí přehlédnete, zastavte se na krátkou kontrolu těla a emocí, než se rozhodnete, co je potřeba.',
      high: 'Vyšší skóre může podpořit emoční uvědomění, empatii a nuance vnitřního života. Pokud se pocity stanou ohromujícími nebo diktují rozhodnutí, pojmenujte emoci, nechte ji, aby se ustálila, a odlište, co cítíte, od toho, co ukazují důkazy.'
    },
    'O.4': {
      low: 'Nižší skóre může podporovat kontinuitu, zvládnutí a spolehlivé rutiny. Pokud se rutina stane strnulostí nebo strachem z novosti, zaveďte jednu malou, vratnou změnu, zatímco zbytek struktury zůstane známý.',
      high: 'Vyšší skóre může podporovat přizpůsobivost a učení prostřednictvím zkoumání. Pokud novinka vytváří nestabilitu nebo nedokončené závazky, ponechte si několik nesmlouvavých kotev pro čas, peníze a odpovědnost.'
    },
    'O.5': {
      low: 'Tento aspekt se týká zájmu o komplexní a abstraktní myšlenky, nikoli o inteligenci nebo IQ. Nižší skóre může upřednostňovat praktická rozhodnutí; pokud jsou neznámé myšlenky odmítnuty příliš rychle, zeptejte se, jaké důkazy by změnily váš názor, a zjistěte pouze to, co rozhodnutí vyžaduje.',
      high: 'Vyšší skóre může podpořit analýzu, zvědavost a pohodlí se složitostí. Pokud se myšlení změní v nekonečnou debatu nebo paralýzu analýzy, definujte rozhodovací kritérium a lhůtu, než budete dále zkoumat.'
    },
    'O.6': {
      low: 'Nižší skóre může zachovat užitečné tradice, sdílená očekávání a sociální kontinuitu. Pokud konvence nejsou zpochybněny nebo vylučují relevantní perspektivy, znovu se podívejte na důvod pravidla a zeptejte se, koho se to týká.',
      high: 'Vyšší skóre může podpořit kritické zkoumání norem a konstruktivní reformu. Pokud je novinka považována za automaticky lepší, testujte změny po malých krocích a zachovejte části stávající praxe, které stále fungují.'
    },
    'A.1': {
      low: 'Nižší skóre vám může pomoci zaznamenat nekonzistenci a chránit se, když jsou sázky vysoké. Pokud podezření blokuje spolupráci, kalibrujte důvěru místo toho, abyste ji udělili nebo odepřeli najednou: začněte malými závazky a aktualizujte na základě důkazů.',
      high: 'Vyšší skóre může usnadnit otevřenost a spolupráci. Pokud vás dobrá víra nechá vykořisťovat, ověřte si vysoké nároky, vyjadřujte očekávání a udržujte hranice i s lidmi, které máte rádi.'
    },
    'A.2': {
      low: 'Nižší skóre může podporovat takt, vyjednávání a strategické soukromí. Pokud to vytváří manipulaci nebo nejednoznačnost, odlište legitimní hranici od podvodu a udělejte závazky v jazyce, který si druhá osoba může ověřit.',
      high: 'Vyšší skóre může vybudovat spolehlivost prostřednictvím přímosti a transparentnosti. Pokud se upřímnost stane přímostí nebo přehnaným sdílením, spojte pravdu s načasováním, relevantností a péčí o to, jak je předávána.'
    },
    'A.3': {
      low: 'Nižší skóre může chránit omezený čas a podpořit autonomii ostatních lidí. Pokud vás ostatní vnímají jako nedostupného nebo narušuje reciprocitu, vyberte si formu pomoci, kterou dokážete udržet, a jasně uveďte její rozsah.',
      high: 'Vyšší skóre může vytvořit silnou podporu a pocit komunity. Pokud pomáhání způsobuje syndrom vyhoření nebo brání ostatním převzít odpovědnost, zeptejte se, zda je potřeba pomoc, dohodněte se na limitech a nedělejte z každé potřeby svou povinnost.'
    },
    'A.4': {
      low: 'Nižší skóre může pomoci bránit standardy a řešit konflikt přímo. Pokud se neshoda stane chronickým třením, oddělte nesmlouvatelné potřeby od flexibilních možností a použijte spíše sdílená kritéria než sílu.',
      high: 'Vyšší skóre může deeskalovat konflikt a chránit spolupráci. Pokud je harmonie vykoupena připuštěním důležitých potřeb, určete hranice jasně a dovolte uctivý nesouhlas, aniž byste to považovali za selhání vztahu.'
    },
    'A.5': {
      low: 'Nižší skóre může podpořit sebeobranu a zviditelnit příspěvky. Je-li důvěra slyšet, když převaha nebo práce druhých mizí, uvádějte tvrzení s důkazy a přesně sdílejte zásluhy.',
      high: 'Vyšší skóre může udržet pozornost na práci a usnadnit spolupráci. Pokud je váš příspěvek opakovaně přehlížen, popište věcně, co jste udělali a jeho účinek; přesná sebeprezentace není arogance.'
    },
    'A.6': {
      low: 'Nižší skóre může podpořit objektivitu a obtížná rozhodnutí, která nemohou uspokojit každého. Pokud lidé pociťují toto rozhodnutí jako chladné nebo jim chybí lidská cena, zeptejte se, kdo nese břemeno, a spojte odůvodnění s jasným vysvětlením.',
      high: 'Vyšší skóre může podpořit soucit a rychlé rozpoznání utrpení. Pokud se empatie stane vyčerpáním nebo převáží relevantní fakta, stanovte si emocionální hranice a ověřte si, jaká pomoc skutečně situaci zlepší.'
    },
    'C.1': {
      low: 'Nižší skóre může povzbudit k opatrnosti, přípravě a žádosti o pomoc, když je potřeba. Pokud vám sebevědomí brání začít, rozdělte úkol na malé kousky a použijte dokončené kroky jako důkaz své schopnosti.',
      high: 'Vyšší skóre může podpořit vlastnictví, vytrvalost a důvěru v řešení problémů. Pokud se důvěra stane přeceněním nebo neochotou vyhledat pomoc, proveďte krátkou předsmrtnou prohlídku a požádejte zkušenou osobu, aby plán zpochybnila.'
    },
    'C.2': {
      low: 'Nižší skóre může podpořit flexibilitu a improvizaci, když se plány změní. Pokud nepořádek stojí čas nebo mizí povinnosti, vytvořte si jen několik spolehlivých domovů, seznamů a rutin pro věci, na kterých záleží nejvíce.',
      high: 'Vyšší skóre může učinit práci jasnou, spolehlivou a snadno obnovitelnou. Pokud se pořádek změní v perfekcionismus nebo se změna stane stresující, definujte, co je dost dobré, a ponechte v plánu záměrnou volnost.'
    },
    'C.3': {
      low: 'Nižší skóre může pomoci zpochybnit pravidla a přizpůsobit povinnosti kontextu. Pokud se ostatní nemohou spolehnout na vaše závazky nebo jsou etická pravidla přerušena, udělejte jasné sliby a znovu spojte každý závazek s důvodem, na kterém záleží.',
      high: 'Vyšší skóre může podporovat integritu a spolehlivé sledování. Pokud povinnost vytváří strnulost nebo neudržitelnou zátěž, seřaďte konkurenční závazky a včas je znovu projednajte, místo abyste je všechny potichu přenášeli.'
    },
    'C.4': {
      low: 'Nižší skóre může chránit rovnováhu a umožnit spokojenost bez neustálého soupeření. Pokud dojde ke stagnaci nebo ponecháte cenné schopnosti nevyužité, vyberte si osobně smysluplný cíl a definujte další malý milník.',
      high: 'Vyšší skóre může podpořit mistrovství a trvalé úsilí o dosažení náročných cílů. Pokud se sebeúcta spojí s výstupem nebo z úsilí vyhoří, definujte, co se počítá jako dostatečné, a chraňte odpočinek a role nesouvisející s úspěchem.'
    },
    'C.5': {
      low: 'Nižší skóre může podpořit spontánnost a schopnost reagovat na měnící se priority. Pokud je zahájení nebo dokončení opakovaně obtížné, zmenšete první krok, změňte prostředí a přidejte viditelné vodítko nebo odpovědnost jiné osoby.',
      high: 'Vyšší skóre může podpořit pokračování, i když je motivace nízká. Pokud vytrvalost pokračuje i přes klesající výnosy, nastavte pravidla zastavení a zkontrolujte, zda si cíl stále zaslouží úsilí.'
    },
    'C.6': {
      low: 'Nižší skóre může podporovat rychlost, experimentování a akci s neúplnými informacemi. Pokud se chyby, kterým lze předejít, opakují, přidejte krátkou pauzu a kontrolní seznam před rozhodnutími, která jsou nákladná nebo obtížně vratná.',
      high: 'Vyšší skóre může podpořit analýzu rizik a pečlivá, vysoce kvalitní rozhodnutí. Pokud opatrnost způsobí zmeškané načasování nebo opakované přemítání, stanovte lhůtu pro rozhodnutí a dejte přednost reverzibilnímu pilotovi před čekáním na jistotu.'
    }
  },
  da: {
    'N.1': {
      low: 'En lavere score kan hjælpe dig med at bevare roen og forhindre usikkerhed i at tage overhånd. Hvis den ro får dig til at undervurdere risici eller forberede dig for lidt, skal du liste den mest sandsynlige risiko og et tilbagefald før en vigtig beslutning.',
      high: 'En højere score kan hjælpe dig med at bemærke risici og advarselstegn tidligt. Hvis bekymring gentagne gange optager din opmærksomhed, skal du adskille det, der er muligt fra det, der er sandsynligt, sætte en grænse for bekymringstiden og vælge en konkret næste handling; søg professionel støtte, hvis det vedvarende forstyrrer dagligdagen.'
    },
    'N.2': {
      low: 'En lavere score kan gøre dig ligevægtig og svær at provokere. Hvis du har en tendens til at undertrykke legitim vrede eller lader grænser være uangivne, så navngiv problemet tidligt og beskriv den adfærd, du ønsker ændret.',
      high: 'En højere score kan gøre dig hurtig til at opdage uretfærdighed og forsvare det, der betyder noget. Hvis vrede eskalerer konflikter eller driver impulsive reaktioner, skal du holde pause før du reagerer og angive den specifikke adfærd, påvirkning og behov i stedet for at angribe personen.'
    },
    'N.3': {
      low: 'En lavere score understøtter ofte følelsesmæssig restitution og stabil energi. Hvis det gør en anden persons tristhed eller dit eget behov for hvile let at overse, sænk tempoet, lyt og erkend tabet, før du forsøger at løse det.',
      high: 'En højere score kan gøre skuffelse og tab særligt fremtrædende, hvilket kan afsløre, hvad der betyder meget for dig. Vedvarende lavt humør er ikke noget, du blot skal behandle som en egenskab: Hold rutiner og opgaver små, bevar forbindelsen til betroede mennesker, og søg professionel støtte, når det varer ved eller forringer dagligdagen.'
    },
    'N.4': {
      low: 'En lavere score kan få sociale situationer til at føles afslappede og reducere frygten for at dømme. Hvis du nogle gange savner, hvordan du støder på det, så bed om specifik feedback og tjek den anden persons svar i stedet for at antage, at alt er landet godt.',
      high: 'En højere score kan gøre dig opmærksom på sociale forventninger og andres reaktioner. Hvis selvovervågning bliver til drøvtygger eller unddragelse, så skift opmærksomheden til den fælles opgave, nærmer dig svære situationer gradvist, og bedøm interaktionen ud fra beviser snarere end forestillet granskning.'
    },
    'N.5': {
      low: 'En lavere score understøtter tilbageholdenhed og evnen til at forsinke tilfredsstillelse. Hvis tilbageholdenhed bliver overkontrol eller efterlader for lidt plads til nydelse, så giv bevidst plads til harmløs spontanitet i stedet for at vente, indtil presset opbygger.',
      high: 'En højere score kan bringe spontanitet, appetit og nydelse af umiddelbar oplevelse. Hvis opfordringer gentagne gange skaber omkostninger, du senere fortryder, skal du tilføje friktion, før du handler: vent, fjern triggere, sæt grænser på forhånd, eller gør det ønskede langsigtede valg nemmere at nå.'
    },
    'N.6': {
      low: 'En lavere score kan hjælpe dig til at tænke klart og handle stabilt under pres. Hvis det får dig til at undervurdere belastningen hos dig selv eller andre, så planlæg uforudsete begivenheder og få tid til at debriefe og komme dig efter krævende perioder.',
      high: 'En højere score kan få dig til at bemærke overbelastning tidligt og søge support, før ressourcerne løber tør. Hvis tryk forårsager frysning eller forvirring, skal du reducere samtidige krav, øve de første par trin på forhånd og bruge en enkel skriftlig plan, når stress er højt.'
    },
    'E.1': {
      low: 'En lavere score kan understøtte uafhængighed og en lille, selektiv omgangskreds. Hvis forbehold forveksles med uinteresse eller forhindrer nyttige relationer i at dannes, signalér varme eksplicit og bevar nogle få regelmæssige kontaktpunkter.',
      high: 'En højere score kan gøre rapport, tillid og nye forbindelser let. Hvis venlighed fører til overengagement eller tillid, før den er fortjent, skal du fremskynde selvafsløringen, verificere vigtige påstande og give plads til at sige nej.'
    },
    'E.2': {
      low: 'En lavere score kan give fokus, komfort med ensomhed og mindre afhængighed af gruppestimulering. Hvis ensomhed bliver til isolation, eller grupper bliver stadig sværere, så vælg mindre forsamlinger og planlæg restitutionstid i stedet for helt at undgå kontakt.',
      high: 'En højere score kan bringe energi til grupper og hjælpe med at skabe social fremdrift. Hvis virksomheden fortrænger fokuseret arbejde eller gør ensomhed ubehagelig, beskyt uafbrudt tid og øv dig i at lytte uden at skulle holde interaktionen i gang.'
    },
    'E.3': {
      low: 'En lavere score kan give plads til lytning, samarbejde og andre menneskers lederskab. Hvis dine behov eller ekspertise forbliver usynlige, skal du forberede en klar sætning, fremsætte en direkte anmodning eller tale én gang nær starten af ​​diskussionen.',
      high: 'En højere score kan hjælpe en gruppe med at træffe beslutninger og give retning, når andre tøver. Hvis du fylder for meget, så bed om afvigende synspunkter, vent med at svare, og gør ejerskabet eksplicit i stedet for at antage enighed.'
    },
    'E.4': {
      low: 'En lavere score kan understøtte et roligt tempo og vedvarende opmærksomhed uden konstant bevægelse. Hvis vigtigt arbejde gentagne gange bliver forsinket, skal du vælge et lille antal prioriteter og give dem synlige deadlines eller tidsblokke.',
      high: 'En højere score kan skabe momentum og en stærk handlekraft. Hvis aktivitet bliver overbelastet eller travlhed uden fremskridt, skal du skelne bevægelse fra resultater og planlægge buffere og restitution lige så bevidst som opgaver.'
    },
    'E.5': {
      low: 'En lavere score kan favorisere sikkerhed, stabilitet og tilfredshed uden intens stimulering. Hvis undgåelse af nyhed indsnævrer dine valgmuligheder, så prøv små, reversible eksperimenter, hvis risici er kendt på forhånd.',
      high: 'En højere score kan understøtte mod, udforskning og nydelse af levende oplevelser. Hvis kedsomhed skaber unødvendig risiko, så sæt grænser, før spændingen stiger, og søg stimulation i omgivelser, hvor ulempen er begrænset.'
    },
    'E.6': {
      low: 'En lavere score kan bringe seriøsitet og en realistisk tone, når optimisme ville føles falsk. Hvis påskønnelse eller varme forbliver skjult, så sig det rent ud og skab små lejligheder til nydelse i stedet for at forvente, at en positiv følelse dukker op af sig selv.',
      high: 'En højere score kan løfte gruppemoralen og gøre positive oplevelser nemme at bemærke. Hvis munterhed overskygger smerte eller risiko, så anerkend først, hvad der er svært, og søg derefter efter håb uden at benægte fakta.'
    },
    'O.1': {
      low: 'En lavere score kan understøtte konkret tænkning og opmærksomhed på, hvad der er praktisk og observerbart. Hvis velkendte svar fortrænger bedre muligheder, skal du generere flere alternativer, før du vurderer, hvilken der er realistisk.',
      high: 'En højere score kan understøtte kreativitet, mental simulering og originale forbindelser. Hvis ideer forbliver i dagdrømme eller spreder opmærksomhed, skal du fange dem, vælge en og gøre den til den mindste håndgribelige test.'
    },
    'O.2': {
      low: 'En lavere score kan holde opmærksomheden på funktion, klarhed og direkte anvendelighed. Hvis æstetisk oplevelse eller genoprettende skønhed konsekvent forsømmes, så prøv det på korte, lavtryksmåder og læg mærke til, hvad der virkelig fanger din opmærksomhed.',
      high: 'En højere score kan skærpe følsomheden over for form, skønhed og subtile detaljer. Hvis æstetiske standarder bruger for meget tid eller tilsidesætter funktion, skal du først definere de praktiske begrænsninger og beslutte, hvor raffinement virkelig er det værd.'
    },
    'O.3': {
      low: 'En lavere score kan understøtte ro og beslutninger, der er mindre påvirket af øjeblikkets stemning. Hvis følelser bliver svære at identificere, eller andre menneskers signaler går glip af, skal du holde pause for et kort krops- og følelsestjek, før du beslutter dig for, hvad der er nødvendigt.',
      high: 'En højere score kan understøtte følelsesmæssig bevidsthed, empati og et nuanceret indre liv. Hvis følelser bliver overvældende eller dikterer beslutninger, så navngiv følelsen, lad den falde til ro, og skeln, hvad du føler fra, hvad beviserne viser.'
    },
    'O.4': {
      low: 'En lavere score kan understøtte kontinuitet, beherskelse og pålidelige rutiner. Hvis rutinen bliver til stivhed eller frygt for nyheder, så indfør en lille, reversibel ændring, mens du holder resten af ​​strukturen bekendt.',
      high: 'En højere score kan understøtte tilpasningsevne og læring gennem udforskning. Hvis nyheder skaber ustabilitet eller uafsluttede forpligtelser, skal du beholde et par ikke-omsættelige ankre for tid, penge og ansvar.'
    },
    'O.5': {
      low: 'Denne facet vedrører interesse for komplekse og abstrakte ideer, ikke intelligens eller IQ. En lavere score kan favorisere praktiske beslutninger; hvis ukendte ideer afvises for hurtigt, så spørg hvilke beviser der ville ændre din mening og lær kun hvad beslutningen kræver.',
      high: 'En højere score kan understøtte analyse, nysgerrighed og komfort med kompleksitet. Hvis tænkning bliver til endeløs debat eller analyselammelse, skal du definere beslutningskriteriet og deadline, før du udforsker yderligere.'
    },
    'O.6': {
      low: 'En lavere score kan bevare nyttige traditioner, fælles forventninger og social kontinuitet. Hvis konventionen forbliver ubestridt eller udelukker relevante perspektiver, skal du gense årsagen til reglen og spørge, hvem der er berørt af den.',
      high: 'En højere score kan understøtte kritisk undersøgelse af normer og konstruktiv reform. Hvis nyhed bliver behandlet som automatisk bedre, test ændringer i små trin og bevar de dele af eksisterende praksis, der stadig virker.'
    },
    'A.1': {
      low: 'En lavere score kan hjælpe dig med at bemærke inkonsekvens og beskytte dig selv, når indsatsen er høj. Hvis mistanke blokerer samarbejde, kalibrer tillid i stedet for at give eller tilbageholde det hele på én gang: Begynd med små forpligtelser og opdater fra beviser.',
      high: 'En højere score kan gøre åbenhed og samarbejde lettere. Hvis god tro lader dig være åben for udnyttelse, verificer påstande med høj indsats, gør forventninger eksplicitte, og hold grænser selv med mennesker, du kan lide.'
    },
    'A.2': {
      low: 'En lavere score kan understøtte takt, forhandling og strategisk privatliv. Hvis det skaber manipulation eller tvetydighed, skal du skelne mellem en legitim grænse fra bedrag og indgå forpligtelser i sproget, som den anden person kan verificere.',
      high: 'En højere score kan opbygge pålidelighed gennem direktehed og gennemsigtighed. Hvis ærlighed bliver sløvhed eller overdeling, så kombiner sandhed med timing, relevans og omsorg for, hvordan den leveres.'
    },
    'A.3': {
      low: 'En lavere score kan beskytte begrænset tid og fremme andre menneskers autonomi. Hvis andre oplever dig som utilgængelig, eller gensidigheden eroderer, så vælg en form for hjælp, du kan opretholde, og angiv dens omfang tydeligt.',
      high: 'En højere score kan skabe stærk opbakning og en følelse af fællesskab. Hvis hjælp forårsager udbrændthed eller forhindrer andre i at tage ansvar, så spørg, om der ønskes hjælp, aftal grænser, og gør ikke ethvert behov til din forpligtelse.'
    },
    'A.4': {
      low: 'En lavere score kan hjælpe med at forsvare standarder og løse konflikter direkte. Hvis uenighed bliver til kronisk friktion, adskil ikke-omsættelige behov fra fleksible muligheder og brug fælles kriterier i stedet for magt.',
      high: 'En højere score kan deeskalere konflikter og beskytte samarbejdet. Hvis harmoni købes ved at indrømme vigtige behov, så angiv grænsen tydeligt og tillad respektfuld uenighed uden at behandle det som svigt i forholdet.'
    },
    'A.5': {
      low: 'En lavere score kan understøtte selvfortalervirksomhed og synliggøre bidrag. Hvis tillid bliver hørt som overlegenhed, eller andres arbejde forsvinder, skal du fremsætte påstande med beviser og dele kreditten præcist.',
      high: 'En højere score kan holde opmærksomheden på arbejdet og gøre samarbejdet lettere. Hvis dit bidrag gentagne gange bliver overset, beskriv hvad du gjorde og dets faktiske virkning; nøjagtig selvrepræsentation er ikke arrogance.'
    },
    'A.6': {
      low: 'En lavere score kan understøtte objektivitet og svære beslutninger, der ikke kan tilfredsstille alle. Hvis folk oplever beslutningen som kold, eller dens menneskelige omkostninger er overset, så spørg, hvem der bærer byrden, og parrer begrundelsen med en klar forklaring.',
      high: 'En højere score kan understøtte medfølelse og hurtig erkendelse af lidelse. Hvis empati bliver udmattelse eller tilsidesætter relevante fakta, skal du sætte følelsesmæssige grænser og kontrollere, hvilken hjælp der rent faktisk vil forbedre situationen.'
    },
    'C.1': {
      low: 'En lavere score kan tilskynde til forsigtighed, forberedelse og bede om hjælp, når det er nødvendigt. Hvis selvtvivl afholder dig fra at starte, så bryd opgaven i små stykker og brug gennemførte trin som bevis på evner.',
      high: 'En højere score kan understøtte ejerskab, vedholdenhed og tillid til at løse problemer. Hvis tillid bliver til overvurdering eller modvilje mod at søge hjælp, kør en kort præ-mortem og bed en kyndig person om at udfordre planen.'
    },
    'C.2': {
      low: 'En lavere score kan understøtte fleksibilitet og improvisation, når planer ændres. Hvis uorden koster tid eller får forpligtelser til at forsvinde, så lav kun nogle få pålidelige hjem, lister og rutiner for de ting, der betyder mest.',
      high: 'En højere score kan gøre arbejdet klart, pålideligt og nemt at genoptage. Hvis orden bliver til perfektionisme, eller forandring bliver foruroligende, skal du definere, hvad der er godt nok, og lade planen være bevidst.'
    },
    'C.3': {
      low: 'En lavere score kan hjælpe med at stille spørgsmålstegn ved regler og tilpasse forpligtelser til konteksten. Hvis andre ikke kan stole på dine forpligtelser, eller de etiske hjørner er skåret over, så giv løfter eksplicitte og genskab forbindelsen mellem hver forpligtelse til grunden til, at den er vigtig.',
      high: 'En højere score kan understøtte integritet og pålidelig opfølgning. Hvis pligt skaber stivhed eller en uholdbar belastning, skal du rangordne konkurrerende forpligtelser og genforhandle dem tidligt i stedet for at bære dem alle i stilhed.'
    },
    'C.4': {
      low: 'En lavere score kan beskytte balancen og tillade tilfredshed uden konstant konkurrence. Hvis det bliver stagnation eller efterlader værdifulde evner ubrugte, skal du vælge et personligt meningsfuldt mål og definere den næste lille milepæl.',
      high: 'En højere score kan understøtte mestring og vedvarende indsats mod krævende mål. Hvis selvværd bliver bundet til output eller indsats bliver udbrændt, skal du definere, hvad der tæller som nok, og beskytte hvile og roller, der ikke er relateret til præstation.'
    },
    'C.5': {
      low: 'En lavere score kan understøtte spontanitet og lydhørhed over for ændrede prioriteter. Hvis det gentagne gange er svært at starte eller afslutte, skal du skrumpe det første skridt, ændre miljøet og tilføje et synligt signal eller en anden persons ansvarlighed.',
      high: 'En højere score kan understøtte opfølgning, selv når motivationen er lav. Hvis vedholdenheden fortsætter efter faldende afkast, skal du sætte stopperegler og gennemgå, om målet stadig fortjener indsatsen.'
    },
    'C.6': {
      low: 'En lavere score kan understøtte hastighed, eksperimentering og handling med ufuldstændig information. Hvis fejl, der kan forhindres, gentager sig, skal du tilføje en kort pause og tjekliste før beslutninger, der er dyre eller svære at omgøre.',
      high: 'En højere score kan understøtte risikoanalyse og omhyggelige beslutninger af høj kvalitet. Hvis forsigtighed forårsager manglende timing eller gentagne drøvtygninger, skal du indstille en beslutningsfrist og foretrække en reversibel pilot frem for at vente på sikkerhed.'
    }
  },
  de: {
    'N.1': {
      low: 'Ein niedrigerer Wert kann Ihnen helfen, ruhig zu bleiben und zu verhindern, dass die Unsicherheit überhand nimmt. Wenn diese Ruhe dazu führt, dass Sie Risiken unterschätzen oder sich zu wenig vorbereiten, listen Sie vor einer wichtigen Entscheidung das wahrscheinlichste Risiko und einen Ausweg auf.',
      high: 'Ein höherer Wert kann Ihnen helfen, Risiken und Warnzeichen frühzeitig zu erkennen. Wenn Sorgen Ihre Aufmerksamkeit immer wieder in Anspruch nehmen, trennen Sie das Mögliche vom Wahrscheinlichen, begrenzen Sie die Zeit, in der Sie sich Sorgen machen, und entscheiden Sie sich für eine konkrete nächste Aktion. Holen Sie sich professionelle Unterstützung, wenn es Ihr tägliches Leben nachhaltig beeinträchtigt.'
    },
    'N.2': {
      low: 'Eine niedrigere Punktzahl kann dazu führen, dass Sie ausgeglichener sind und sich nur schwer provozieren lassen. Wenn Sie dazu neigen, berechtigten Ärger zu unterdrücken oder Grenzen unausgesprochen zu lassen, nennen Sie das Problem frühzeitig und beschreiben Sie das Verhalten, das Sie ändern möchten.',
      high: 'Eine höhere Punktzahl kann dazu führen, dass Sie Ungerechtigkeiten schneller erkennen und das Wesentliche verteidigen können. Wenn Wut Konflikte eskaliert oder impulsive Reaktionen hervorruft, halten Sie inne, bevor Sie antworten, und geben Sie das spezifische Verhalten, die Auswirkungen und das Bedürfnis an, anstatt die Person anzugreifen.'
    },
    'N.3': {
      low: 'Ein niedrigerer Wert unterstützt häufig die emotionale Erholung und eine stabile Energie. Wenn dadurch die Traurigkeit einer anderen Person oder Ihr eigenes Bedürfnis nach Ruhe leicht übersehen werden können, sollten Sie langsamer werden, zuhören und den Verlust anerkennen, bevor Sie versuchen, ihn zu lösen.',
      high: 'Ein höherer Wert kann Enttäuschungen und Verluste besonders deutlich hervorheben und verdeutlichen, was Ihnen am Herzen liegt. Anhaltende Niedergeschlagenheit ist nicht etwas, das Sie einfach als eine Eigenschaft behandeln müssen: Halten Sie Routinen und Aufgaben klein, bleiben Sie mit vertrauenswürdigen Menschen in Kontakt und holen Sie sich professionelle Unterstützung, wenn die Stimmung anhält oder das tägliche Leben beeinträchtigt.'
    },
    'N.4': {
      low: 'Ein niedrigerer Wert kann dazu führen, dass sich soziale Situationen entspannt anfühlen und die Angst vor Urteilen verringert wird. Wenn Ihnen manchmal die Art und Weise, wie Sie wirken, entgeht, bitten Sie um konkretes Feedback und überprüfen Sie die Reaktion der anderen Person, anstatt davon auszugehen, dass alles gut gelaufen ist.',
      high: 'Eine höhere Punktzahl kann Sie auf soziale Erwartungen und die Reaktionen anderer Menschen aufmerksam machen. Wenn sich die Selbstüberwachung in Grübeln oder Vermeiden verwandelt, konzentrieren Sie sich auf die gemeinsame Aufgabe, gehen Sie schwierige Situationen schrittweise an und beurteilen Sie die Interaktion anhand von Beweisen und nicht anhand einer eingebildeten Prüfung.'
    },
    'N.5': {
      low: 'Ein niedrigerer Wert unterstützt Zurückhaltung und die Fähigkeit, Befriedigung hinauszuzögern. Wenn Zurückhaltung zur Überkontrolle wird oder zu wenig Raum für Genuss lässt, schaffen Sie bewusst Raum für harmlose Spontaneität, anstatt zu warten, bis sich Druck aufbaut.',
      high: 'Eine höhere Punktzahl kann zu Spontaneität, Appetit und Freude am unmittelbaren Erlebnis führen. Wenn Dränge immer wieder Kosten verursachen, die Sie später bereuen, erhöhen Sie die Reibung, bevor Sie handeln: Warten Sie, entfernen Sie Auslöser, setzen Sie im Voraus Grenzen oder sorgen Sie dafür, dass die gewünschte langfristige Entscheidung leichter zu erreichen ist.'
    },
    'N.6': {
      low: 'Ein niedrigerer Wert kann Ihnen helfen, klar zu denken und unter Druck standhaft zu handeln. Wenn dies dazu führt, dass Sie die Belastung für sich selbst oder andere unterschätzen, planen Sie Eventualitäten und nehmen Sie sich nach anstrengenden Phasen Zeit für die Nachbesprechung und Erholung.',
      high: 'Ein höherer Wert kann dazu führen, dass Sie frühzeitig eine Überlastung bemerken und Unterstützung suchen, bevor die Ressourcen ausgehen. Wenn Druck zu Erstarren oder Verwirrung führt, reduzieren Sie gleichzeitige Anforderungen, proben Sie die ersten paar Schritte im Voraus und verwenden Sie bei hohem Stress einen einfachen schriftlichen Plan.'
    },
    'E.1': {
      low: 'Ein niedrigerer Wert kann Unabhängigkeit und einen kleinen, selektiven sozialen Kreis unterstützen. Wenn Zurückhaltung mit Desinteresse verwechselt wird oder die Bildung nützlicher Beziehungen verhindert, signalisieren Sie ausdrücklich Wärme und pflegen Sie ein paar regelmäßige Kontaktpunkte.',
      high: 'Eine höhere Punktzahl kann dazu führen, dass Beziehungen, Vertrauen und neue Kontakte leichter entstehen. Wenn Freundlichkeit zu übermäßigem Engagement oder Vertrauen führt, bevor es verdient wird, beschleunigen Sie die Selbstoffenbarung, überprüfen Sie wichtige Behauptungen und lassen Sie Raum, um Nein zu sagen.'
    },
    'E.2': {
      low: 'Eine niedrigere Punktzahl kann für Konzentration, Komfort beim Alleinsein und eine geringere Abhängigkeit von Gruppenstimulation sorgen. Wenn die Einsamkeit zur Isolation wird oder Gruppen immer schwieriger werden, wählen Sie kleinere Zusammenkünfte und planen Sie Erholungszeiten ein, anstatt den Kontakt ganz zu meiden.',
      high: 'Eine höhere Punktzahl kann Gruppen mit Energie versorgen und dabei helfen, soziale Dynamik zu erzeugen. Wenn das Unternehmen die konzentrierte Arbeit verdrängt oder das Alleinsein unangenehm macht, achten Sie auf ununterbrochene Zeit und üben Sie das Zuhören, ohne dass die Interaktion in Bewegung bleiben muss.'
    },
    'E.3': {
      low: 'Eine niedrigere Punktzahl kann Raum für Zuhören, Zusammenarbeit und die Führung anderer Menschen schaffen. Wenn Ihre Bedürfnisse oder Ihr Fachwissen unsichtbar bleiben, bereiten Sie einen klaren Satz vor, stellen Sie eine direkte Anfrage oder sprechen Sie kurz zu Beginn der Diskussion.',
      high: 'Eine höhere Punktzahl kann einer Gruppe helfen, Entscheidungen zu treffen und Anweisungen zu geben, wenn andere zögern. Wenn Sie zu viel Platz einnehmen, bitten Sie um abweichende Meinungen, warten Sie mit der Antwort und machen Sie deutlich, dass Sie der Meinung sind, anstatt eine Zustimmung vorauszusetzen.'
    },
    'E.4': {
      low: 'Ein niedrigerer Wert kann ein gemächliches Tempo und anhaltende Aufmerksamkeit ohne ständige Bewegung unterstützen. Wenn sich wichtige Arbeiten immer wieder verzögern, wählen Sie eine kleine Anzahl von Prioritäten und geben Sie ihnen sichtbare Fristen oder Zeitblöcke.',
      high: 'Eine höhere Punktzahl kann Schwung und eine starke Handlungsfähigkeit erzeugen. Wenn die Aktivität zu Überlastung oder Geschäftigkeit ohne Fortschritt wird, unterscheiden Sie Bewegung von Ergebnissen und planen Sie Puffer und Erholung ebenso bewusst ein wie Aufgaben.'
    },
    'E.5': {
      low: 'Ein niedrigerer Wert kann Sicherheit, Stabilität und Zufriedenheit ohne intensive Stimulation begünstigen. Wenn die Vermeidung von Neuheiten Ihre Auswahl einschränkt, probieren Sie kleine, umkehrbare Experimente aus, deren Risiken im Voraus bekannt sind.',
      high: 'Eine höhere Punktzahl kann Mut, Erkundung und Freude an lebendigen Erlebnissen unterstützen. Wenn Langeweile zu unnötigen Risiken führt, setzen Sie Grenzen, bevor die Aufregung steigt, und suchen Sie nach Anregungen in Umgebungen, in denen die Nachteile begrenzt sind.'
    },
    'E.6': {
      low: 'Eine niedrigere Punktzahl kann Ernsthaftigkeit und einen realistischen Ton vermitteln, obwohl Optimismus falsch erscheint. Wenn Wertschätzung oder Wärme verborgen bleiben, sagen Sie es klar und schaffen Sie kleine Anlässe zum Genießen, anstatt zu erwarten, dass sich von selbst positive Gefühle einstellen.',
      high: 'Eine höhere Punktzahl kann die Gruppenmoral steigern und positive Erfahrungen deutlich sichtbar machen. Wenn Fröhlichkeit Schmerz oder Risiko überdeckt, erkennen Sie zuerst, was schwierig ist, und suchen Sie dann nach Hoffnung, ohne die Fakten zu leugnen.'
    },
    'O.1': {
      low: 'Eine niedrigere Punktzahl kann konkretes Denken und die Aufmerksamkeit für das Praktische und Beobachtbare unterstützen. Wenn bekannte Antworten bessere Möglichkeiten verdrängen, generieren Sie mehrere Alternativen, bevor Sie beurteilen, welche davon realistisch ist.',
      high: 'Eine höhere Punktzahl kann Kreativität, mentale Simulation und originelle Verbindungen unterstützen. Wenn Ideen in Tagträumen bleiben oder die Aufmerksamkeit zerstreuen, fangen Sie sie ein, wählen Sie eine aus und verwandeln Sie sie in den kleinsten greifbaren Test.'
    },
    'O.2': {
      low: 'Eine niedrigere Punktzahl kann die Aufmerksamkeit auf Funktion, Klarheit und unmittelbaren Nutzen lenken. Wenn das ästhetische Erlebnis oder die Wiederherstellung der Schönheit ständig vernachlässigt wird, probieren Sie es in kurzen, entspannten Momenten aus und achten Sie darauf, was Ihre Aufmerksamkeit wirklich fesselt.',
      high: 'Eine höhere Punktzahl kann die Sensibilität für Form, Schönheit und subtile Details schärfen. Wenn ästhetische Standards zu viel Zeit in Anspruch nehmen oder die Funktion außer Kraft setzen, definieren Sie zunächst die praktischen Einschränkungen und entscheiden Sie, wo sich eine Verfeinerung wirklich lohnt.'
    },
    'O.3': {
      low: 'Ein niedrigerer Wert kann Gelassenheit und Entscheidungen unterstützen, die weniger von der momentanen Stimmung beeinflusst werden. Wenn Gefühle schwer zu erkennen sind oder die Signale anderer Menschen übersehen werden, machen Sie eine kurze Pause für einen kurzen Körper- und Gefühlscheck, bevor Sie entscheiden, was nötig ist.',
      high: 'Ein höherer Wert kann emotionales Bewusstsein, Empathie und ein differenziertes Innenleben unterstützen. Wenn Gefühle überwältigend werden oder Entscheidungen diktieren, benennen Sie die Emotion, lassen Sie sie zur Ruhe kommen und unterscheiden Sie, was Sie fühlen, von dem, was die Beweise zeigen.'
    },
    'O.4': {
      low: 'Eine niedrigere Punktzahl kann Kontinuität, Beherrschung und zuverlässige Routinen unterstützen. Wenn Routine zu Starrheit oder Angst vor Neuem wird, nehmen Sie eine kleine, umkehrbare Änderung vor und lassen Sie dabei den Rest der Struktur vertraut.',
      high: 'Eine höhere Punktzahl kann die Anpassungsfähigkeit und das Lernen durch Erkundung unterstützen. Wenn Neuheit zu Instabilität oder unvollendeten Verpflichtungen führt, behalten Sie ein paar nicht verhandelbare Anker für Zeit, Geld und Verantwortlichkeiten bei.'
    },
    'O.5': {
      low: 'Dieser Aspekt betrifft das Interesse an komplexen und abstrakten Ideen, nicht an Intelligenz oder IQ. Eine niedrigere Punktzahl kann praktische Entscheidungen begünstigen; Wenn unbekannte Ideen zu schnell verworfen werden, fragen Sie, welche Beweise Ihre Meinung ändern würden, und erfahren Sie nur, was für die Entscheidung erforderlich ist.',
      high: 'Eine höhere Punktzahl kann Analyse, Neugier und Komfort im Umgang mit Komplexität unterstützen. Wenn das Nachdenken zu einer endlosen Debatte oder einer Lähmung der Analyse führt, definieren Sie das Entscheidungskriterium und die Frist, bevor Sie weitere Untersuchungen durchführen.'
    },
    'O.6': {
      low: 'Eine niedrigere Punktzahl kann nützliche Traditionen, gemeinsame Erwartungen und soziale Kontinuität bewahren. Wenn die Konvention nicht in Frage gestellt wird oder relevante Perspektiven ausschließt, überdenken Sie den Grund für die Regel und fragen Sie, wer davon betroffen ist.',
      high: 'Eine höhere Punktzahl kann die kritische Auseinandersetzung mit Normen und konstruktive Reformen unterstützen. Wenn Neuheit automatisch als besser behandelt wird, testen Sie Änderungen in kleinen Schritten und bewahren Sie die Teile der bestehenden Praxis, die noch funktionieren.'
    },
    'A.1': {
      low: 'Eine niedrigere Punktzahl kann Ihnen helfen, Inkonsistenzen zu erkennen und sich zu schützen, wenn viel auf dem Spiel steht. Wenn der Verdacht die Zusammenarbeit blockiert, kalibrieren Sie das Vertrauen, anstatt alles auf einmal zu gewähren oder vorzuenthalten: Beginnen Sie mit kleinen Verpflichtungen und aktualisieren Sie sie anhand von Beweisen.',
      high: 'Eine höhere Punktzahl kann Offenheit und Zusammenarbeit erleichtern. Wenn Sie nach Treu und Glauben der Gefahr ausgesetzt sind, ausgebeutet zu werden, überprüfen Sie hochriskante Behauptungen, machen Sie Erwartungen deutlich und halten Sie auch gegenüber Menschen, die Sie mögen, Grenzen.'
    },
    'A.2': {
      low: 'Eine niedrigere Punktzahl kann Taktgefühl, Verhandlungsgeschick und strategische Privatsphäre unterstützen. Wenn es zu Manipulation oder Mehrdeutigkeit kommt, unterscheiden Sie eine legitime Grenze von einer Täuschung und gehen Sie Verpflichtungen in einer Sprache ein, die die andere Person überprüfen kann.',
      high: 'Eine höhere Punktzahl kann durch Direktheit und Transparenz zu mehr Zuverlässigkeit führen. Wenn Ehrlichkeit zu Unverblümtheit oder Übertreibungen wird, kombinieren Sie die Wahrheit mit Timing, Relevanz und achten Sie darauf, wie sie vermittelt wird.'
    },
    'A.3': {
      low: 'Eine niedrigere Punktzahl kann begrenzte Zeit schützen und die Autonomie anderer Menschen fördern. Wenn andere Sie als nicht erreichbar empfinden oder die Gegenseitigkeit nachlässt, wählen Sie eine Form der Hilfe, die Sie aufrechterhalten können, und machen Sie den Umfang klar deutlich.',
      high: 'Eine höhere Punktzahl kann starke Unterstützung und ein Gemeinschaftsgefühl schaffen. Wenn Helfen zu Burnout führt oder andere daran hindert, Verantwortung zu übernehmen, fragen Sie, ob Hilfe gewünscht ist, vereinbaren Sie Grenzen und machen Sie nicht jedes Bedürfnis zu Ihrer Verpflichtung.'
    },
    'A.4': {
      low: 'Eine niedrigere Punktzahl kann dazu beitragen, Standards zu verteidigen und Konflikte direkt anzugehen. Wenn Meinungsverschiedenheiten zu chronischen Spannungen werden, trennen Sie nicht verhandelbare Bedürfnisse von flexiblen Optionen und nutzen Sie gemeinsame Kriterien statt Zwang.',
      high: 'Ein höherer Wert kann Konflikte deeskalieren und die Zusammenarbeit schützen. Wenn Harmonie durch das Zugeständnis wichtiger Bedürfnisse erkauft wird, geben Sie die Grenze deutlich an und lassen Sie respektvolle Meinungsverschiedenheiten zu, ohne sie als Beziehungsversagen zu betrachten.'
    },
    'A.5': {
      low: 'Eine niedrigere Punktzahl kann die Selbstvertretung unterstützen und Beiträge sichtbar machen. Wenn das Selbstvertrauen als Überlegenheit wahrgenommen wird oder die Arbeit anderer schwindet, machen Sie Behauptungen mit Beweisen geltend und teilen Sie die Anerkennung präzise mit.',
      high: 'Eine höhere Punktzahl kann die Aufmerksamkeit auf die Arbeit lenken und die Zusammenarbeit erleichtern. Wenn Ihr Beitrag immer wieder übersehen wird, beschreiben Sie sachlich, was Sie getan haben und welche Wirkung er hatte. Eine genaue Selbstdarstellung ist keine Arroganz.'
    },
    'A.6': {
      low: 'Eine niedrigere Punktzahl kann Objektivität und schwierige Entscheidungen unterstützen, die nicht alle zufriedenstellen können. Wenn Menschen die Entscheidung als kalt empfinden oder ihre menschlichen Kosten übersehen werden, fragen Sie, wer die Last trägt, und verbinden Sie die Begründung mit einer klaren Erklärung.',
      high: 'Ein höherer Wert kann Mitgefühl und das schnelle Erkennen von Leid unterstützen. Wenn Empathie zu Erschöpfung führt oder relevante Fakten außer Kraft setzt, setzen Sie emotionale Grenzen und prüfen Sie, welche Hilfe die Situation tatsächlich verbessert.'
    },
    'C.1': {
      low: 'Eine niedrigere Punktzahl kann zur Vorsicht, zur Vorbereitung und zum Bitten um Hilfe bei Bedarf ermutigen. Wenn Selbstzweifel Sie davon abhalten, anzufangen, teilen Sie die Aufgabe in kleine Teile auf und nutzen Sie die abgeschlossenen Schritte als Beweis Ihrer Leistungsfähigkeit.',
      high: 'Eine höhere Punktzahl kann Eigenverantwortung, Beharrlichkeit und Vertrauen bei der Lösung von Problemen unterstützen. Wenn das Selbstvertrauen zu einer Überschätzung oder Zurückhaltung bei der Suche nach Hilfe führt, führen Sie eine kurze Obduktion durch und bitten Sie eine sachkundige Person, den Plan in Frage zu stellen.'
    },
    'C.2': {
      low: 'Eine niedrigere Punktzahl kann Flexibilität und Improvisation unterstützen, wenn sich Pläne ändern. Wenn Unordnung Zeit kostet oder Verpflichtungen verschwinden lässt, schaffen Sie nur ein paar verlässliche Zuhause, Listen und Routinen für die Dinge, die am wichtigsten sind.',
      high: 'Eine höhere Punktzahl kann dazu führen, dass die Arbeit klar, zuverlässig und leicht fortzusetzen ist. Wenn aus Ordnung Perfektionismus wird oder die Veränderung belastend wird, definieren Sie, was gut genug ist, und lassen Sie im Plan absichtlich Spielraum.'
    },
    'C.3': {
      low: 'Eine niedrigere Punktzahl kann dazu beitragen, Regeln zu hinterfragen und Verpflichtungen an den Kontext anzupassen. Wenn andere sich nicht auf Ihre Zusagen verlassen können oder ethische Aspekte gekürzt werden, machen Sie Versprechen explizit und verknüpfen Sie jede Verpflichtung erneut mit dem Grund, warum sie wichtig ist.',
      high: 'Eine höhere Punktzahl kann Integrität und zuverlässige Nachverfolgung unterstützen. Wenn Pflichten zu Starrheit oder einer untragbaren Belastung führen, ordnen Sie konkurrierende Verpflichtungen frühzeitig ein und verhandeln Sie sie neu, anstatt sie alle stillschweigend auf sich zu nehmen.'
    },
    'C.4': {
      low: 'Eine niedrigere Punktzahl kann das Gleichgewicht schützen und Zufriedenheit ohne ständigen Wettbewerb ermöglichen. Wenn es zu Stagnation kommt oder wertvolle Fähigkeiten ungenutzt bleiben, wählen Sie ein persönlich bedeutsames Ziel und definieren Sie den nächsten kleinen Meilenstein.',
      high: 'Eine höhere Punktzahl kann die Meisterschaft und das nachhaltige Bemühen um anspruchsvolle Ziele unterstützen. Wenn das Selbstwertgefühl an Leistung gebunden wird oder Anstrengung zu Burnout führt, definieren Sie, was als ausreichend gilt, und schützen Sie Ruhe und Rollen, die nichts mit Leistung zu tun haben.'
    },
    'C.5': {
      low: 'Eine niedrigere Punktzahl kann Spontaneität und Reaktionsfähigkeit auf sich ändernde Prioritäten unterstützen. Wenn das Starten oder Beenden wiederholt schwierig ist, verkürzen Sie den ersten Schritt, ändern Sie die Umgebung und fügen Sie einen sichtbaren Hinweis oder die Verantwortung einer anderen Person hinzu.',
      high: 'Ein höherer Wert kann die Durchsetzung auch bei geringer Motivation unterstützen. Wenn die Beharrlichkeit über abnehmende Erträge hinaus anhält, legen Sie Stoppregeln fest und prüfen Sie, ob das Ziel die Anstrengung immer noch wert ist.'
    },
    'C.6': {
      low: 'Eine niedrigere Punktzahl kann Geschwindigkeit, Experimentierfreudigkeit und Aktion mit unvollständigen Informationen unterstützen. Wenn vermeidbare Fehler erneut auftreten, legen Sie eine kurze Pause ein und führen Sie eine Checkliste durch, bevor Sie Entscheidungen treffen, die kostspielig oder schwer rückgängig zu machen sind.',
      high: 'Eine höhere Punktzahl kann eine Risikoanalyse und sorgfältige, qualitativ hochwertige Entscheidungen unterstützen. Wenn Vorsicht zu verpasstem Timing oder wiederholtem Grübeln führt, legen Sie eine Entscheidungsfrist fest und ziehen Sie einen umkehrbaren Piloten dem Warten auf Gewissheit vor.'
    }
  },
  es: {
    'N.1': {
      low: 'Una puntuación más baja puede ayudarle a mantener la calma y evitar que la incertidumbre se apodere de usted. Si esa calma lo lleva a subestimar los riesgos o a prepararse muy poco, enumere el riesgo más probable y un recurso antes de tomar una decisión importante.',
      high: 'Una puntuación más alta puede ayudarle a notar los riesgos y las señales de advertencia de manera temprana. Si la preocupación consume repetidamente su atención, separe lo posible de lo probable, establezca un límite al tiempo de preocupación y elija una siguiente acción concreta; busque apoyo profesional si perturba persistentemente la vida diaria.'
    },
    'N.2': {
      low: 'Una puntuación más baja puede volverte ecuánime y difícil de provocar. Si tiende a reprimir la ira legítima o a no establecer límites, mencione el problema con anticipación y describa el comportamiento que desea cambiar.',
      high: 'Una puntuación más alta puede hacer que detectes rápidamente la injusticia y defiendas lo que importa. Si la ira intensifica los conflictos o genera reacciones impulsivas, haga una pausa antes de responder y exponga el comportamiento, el impacto y la necesidad específicos en lugar de atacar a la persona.'
    },
    'N.3': {
      low: 'Una puntuación más baja suele favorecer la recuperación emocional y la energía constante. Si hace que sea fácil pasar por alto la tristeza de otra persona o su propia necesidad de descanso, disminuya la velocidad, escuche y reconozca la pérdida antes de intentar resolverla.',
      high: 'Una puntuación más alta puede hacer que la decepción y la pérdida sean especialmente destacadas, lo que puede revelar lo que le importa profundamente. El bajo estado de ánimo persistente no es algo que deba tratar como un simple rasgo: mantenga pequeñas las rutinas y las tareas, manténgase conectado con personas de confianza y busque apoyo profesional cuando se prolongue o afecte la vida diaria.'
    },
    'N.4': {
      low: 'Una puntuación más baja puede hacer que las situaciones sociales se sientan relajadas y reducir el miedo a ser juzgado. Si a veces no comprende cómo se muestra, solicite comentarios específicos y verifique la respuesta de la otra persona en lugar de asumir que todo salió bien.',
      high: 'Una puntuación más alta puede hacer que estés atento a las expectativas sociales y a las reacciones de otras personas. Si el autocontrol se convierte en cavilación o evitación, desvíe la atención a la tarea compartida, aborde las situaciones difíciles de forma gradual y juzgue la interacción basándose en la evidencia en lugar de un escrutinio imaginario.'
    },
    'N.5': {
      low: 'Una puntuación más baja respalda la moderación y la capacidad de retrasar la gratificación. Si la moderación se convierte en un control excesivo o deja muy poco espacio para el disfrute, deje espacio deliberadamente para una espontaneidad inofensiva en lugar de esperar hasta que aumente la presión.',
      high: 'Una puntuación más alta puede aportar espontaneidad, apetito y disfrute de la experiencia inmediata. Si los impulsos crean repetidamente costos de los que luego se arrepiente, agregue fricción antes de actuar: espere, elimine los factores desencadenantes, establezca límites por adelantado o haga que la elección deseada a largo plazo sea más fácil de alcanzar.'
    },
    'N.6': {
      low: 'Una puntuación más baja puede ayudarle a pensar con claridad y actuar con firmeza bajo presión. Si esto le lleva a subestimar la tensión en usted mismo o en los demás, planifique contingencias y tómese el tiempo para reflexionar y recuperarse después de períodos exigentes.',
      high: 'Una puntuación más alta puede hacer que notes la sobrecarga desde el principio y busques apoyo antes de que se agoten los recursos. Si la presión provoca congelación o confusión, reduzca las exigencias simultáneas, ensaye los primeros pasos con antelación y utilice un plan escrito sencillo cuando el estrés sea elevado.'
    },
    'E.1': {
      low: 'Una puntuación más baja puede respaldar la independencia y un círculo social pequeño y selectivo. Si la reserva se confunde con desinterés o impide que se formen relaciones útiles, señale calidez explícitamente y mantenga algunos puntos de contacto regulares.',
      high: 'Una puntuación más alta puede hacer que la simpatía, la confianza y nuevas conexiones se produzcan fácilmente. Si la amistad conduce a un compromiso excesivo o a la confianza antes de ganarse la confianza, modere la divulgación, verifique las afirmaciones importantes y deje espacio para decir no.'
    },
    'E.2': {
      low: 'Una puntuación más baja puede proporcionar concentración, comodidad con la soledad y menos dependencia de la estimulación grupal. Si la soledad se convierte en aislamiento o los grupos se vuelven cada vez más difíciles, elija reuniones más pequeñas y planifique un tiempo de recuperación en lugar de evitar el contacto por completo.',
      high: 'Una puntuación más alta puede aportar energía a los grupos y ayudar a crear un impulso social. Si la compañía desplaza el trabajo concentrado o hace que la soledad sea incómoda, proteja el tiempo ininterrumpido y practique escuchar sin necesidad de mantener la interacción en movimiento.'
    },
    'E.3': {
      low: 'Una puntuación más baja puede dar lugar a la escucha, la cooperación y el liderazgo de otras personas. Si sus necesidades o experiencia permanecen invisibles, prepare una oración clara, haga una solicitud directa o hable una vez cerca del comienzo de la discusión.',
      high: 'Una puntuación más alta puede ayudar a un grupo a tomar decisiones y dar dirección cuando otros dudan. Si ocupa demasiado espacio, solicite opiniones discrepantes, espere antes de responder y haga explícita la propiedad en lugar de asumir que está de acuerdo.'
    },
    'E.4': {
      low: 'Una puntuación más baja puede respaldar un ritmo pausado y una atención sostenida sin movimiento constante. Si un trabajo importante se retrasa repetidamente, elija una pequeña cantidad de prioridades y asígneles plazos o bloques de tiempo visibles.',
      high: 'Una puntuación más alta puede generar impulso y una fuerte capacidad de acción. Si la actividad se vuelve sobrecarga o ajetreo sin progreso, distinga el movimiento de los resultados y programe los amortiguadores y la recuperación tan deliberadamente como las tareas.'
    },
    'E.5': {
      low: 'Una puntuación más baja puede favorecer la seguridad, la estabilidad y la satisfacción sin una estimulación intensa. Si evitar la novedad reduce sus opciones, pruebe pequeños experimentos reversibles cuyos riesgos se conozcan de antemano.',
      high: 'Una puntuación más alta puede respaldar el coraje, la exploración y el disfrute de experiencias vívidas. Si el aburrimiento genera riesgos innecesarios, establezca límites antes de que aumente la emoción y busque estimulación en entornos donde las desventajas estén contenidas.'
    },
    'E.6': {
      low: 'Una puntuación más baja puede aportar seriedad y un tono realista cuando el optimismo parecería falso. Si el aprecio o la calidez permanecen ocultos, dígalo claramente y cree pequeñas ocasiones para disfrutar en lugar de esperar que los sentimientos positivos aparezcan por sí solos.',
      high: 'Una puntuación más alta puede elevar la moral del grupo y hacer que las experiencias positivas sean fáciles de notar. Si la alegría pasa por alto el dolor o el riesgo, reconozca primero lo que es difícil y luego busque la esperanza sin negar los hechos.'
    },
    'O.1': {
      low: 'Una puntuación más baja puede respaldar el pensamiento concreto y la atención a lo que es práctico y observable. Si las respuestas familiares excluyen mejores posibilidades, genere varias alternativas antes de evaluar cuál es realista.',
      high: 'Una puntuación más alta puede favorecer la creatividad, la simulación mental y las conexiones originales. Si las ideas se quedan en ensueños o dispersan la atención, captúrelas, elija una y conviértala en la prueba tangible más pequeña.'
    },
    'O.2': {
      low: 'Una puntuación más baja puede mantener la atención en la función, la claridad y la utilidad directa. Si se descuida constantemente la experiencia estética o la belleza restauradora, pruébela de manera breve y sin presión y observe lo que realmente llama su atención.',
      high: 'Una puntuación más alta puede agudizar la sensibilidad a la forma, la belleza y los detalles sutiles. Si los estándares estéticos consumen demasiado tiempo o anulan la función, defina primero las limitaciones prácticas y decida dónde realmente vale la pena el refinamiento.'
    },
    'O.3': {
      low: 'Una puntuación más baja puede respaldar la compostura y tomar decisiones menos influenciadas por el estado de ánimo del momento. Si los sentimientos se vuelven difíciles de identificar o se pasan por alto las señales de otras personas, haga una pausa para realizar una breve revisión corporal y emocional antes de decidir qué es necesario.',
      high: 'Una puntuación más alta puede respaldar la conciencia emocional, la empatía y una vida interior matizada. Si los sentimientos se vuelven abrumadores o dictan decisiones, nombre la emoción, permita que se calme y distinga lo que siente de lo que muestra la evidencia.'
    },
    'O.4': {
      low: 'Una puntuación más baja puede respaldar la continuidad, el dominio y las rutinas confiables. Si la rutina se vuelve rigidez o miedo a la novedad, introduzca un cambio pequeño y reversible manteniendo familiar el resto de la estructura.',
      high: 'Una puntuación más alta puede respaldar la adaptabilidad y el aprendizaje a través de la exploración. Si la novedad crea inestabilidad o compromisos inconclusos, mantenga algunas anclas no negociables en materia de tiempo, dinero y responsabilidades.'
    },
    'O.5': {
      low: 'Esta faceta tiene que ver con el interés por ideas complejas y abstractas, no por la inteligencia o el coeficiente intelectual. Una puntuación más baja puede favorecer decisiones prácticas; Si las ideas desconocidas se descartan demasiado rápido, pregunte qué evidencia le haría cambiar de opinión y aprenda sólo lo que requiere la decisión.',
      high: 'Una puntuación más alta puede respaldar el análisis, la curiosidad y la comodidad con la complejidad. Si el pensamiento se convierte en un debate interminable o en una parálisis del análisis, defina el criterio de decisión y la fecha límite antes de seguir explorando.'
    },
    'O.6': {
      low: 'Una puntuación más baja puede preservar tradiciones útiles, expectativas compartidas y continuidad social. Si la convención no se cuestiona o excluye perspectivas relevantes, revise el motivo de la regla y pregunte a quién afecta.',
      high: 'Una puntuación más alta puede respaldar un examen crítico de las normas y una reforma constructiva. Si la novedad se considera automáticamente mejor, pruebe los cambios en pequeños pasos y preserve las partes de la práctica existente que aún funcionan.'
    },
    'A.1': {
      low: 'Una puntuación más baja puede ayudarle a notar la inconsistencia y protegerse cuando hay mucho en juego. Si la sospecha bloquea la cooperación, calibre la confianza en lugar de otorgarla o retenerla toda de una vez: comience con pequeños compromisos y actualícela a partir de la evidencia.',
      high: 'Una puntuación más alta puede facilitar la apertura y la cooperación. Si la buena fe lo deja expuesto a la explotación, verifique las afirmaciones de alto riesgo, haga explícitas las expectativas y mantenga límites incluso con las personas que le agradan.'
    },
    'A.2': {
      low: 'Una puntuación más baja puede respaldar el tacto, la negociación y la privacidad estratégica. Si crea manipulación o ambigüedad, distinga un límite legítimo del engaño y haga compromisos en un lenguaje que la otra persona pueda verificar.',
      high: 'Una puntuación más alta puede generar confiabilidad a través de la franqueza y la transparencia. Si la honestidad se convierte en franqueza o en compartir demasiado, combine la verdad con el momento oportuno, la relevancia y el cuidado de cómo se expresa.'
    },
    'A.3': {
      low: 'Una puntuación más baja puede proteger el tiempo limitado y fomentar la autonomía de otras personas. Si los demás lo consideran no disponible o la reciprocidad se erosiona, elija una forma de ayuda que pueda sostener y establezca claramente su alcance.',
      high: 'Una puntuación más alta puede generar un fuerte apoyo y un sentido de comunidad. Si ayudar causa agotamiento o impide que otros asuman responsabilidades, pregunte si necesitan ayuda, acuerden límites y no hagan de cada necesidad su obligación.'
    },
    'A.4': {
      low: 'Una puntuación más baja puede ayudar a defender los estándares y abordar los conflictos directamente. Si el desacuerdo se convierte en fricción crónica, separe las necesidades no negociables de las opciones flexibles y utilice criterios compartidos en lugar de la fuerza.',
      high: 'Una puntuación más alta puede reducir el conflicto y proteger la cooperación. Si la armonía se consigue admitiendo necesidades importantes, establezca claramente los límites y permita el desacuerdo respetuoso sin tratarlo como un fracaso de la relación.'
    },
    'A.5': {
      low: 'Una puntuación más baja puede respaldar la autodefensa y hacer visibles las contribuciones. Si la confianza se considera superioridad o el trabajo de otros desaparece, haga afirmaciones con evidencia y comparta el crédito con precisión.',
      high: 'Una puntuación más alta puede mantener la atención en el trabajo y facilitar la colaboración. Si su contribución se pasa por alto repetidamente, describa lo que hizo y su efecto de manera objetiva; La autorepresentación precisa no es arrogancia.'
    },
    'A.6': {
      low: 'Una puntuación más baja puede respaldar la objetividad y tomar decisiones difíciles que no pueden satisfacer a todos. Si las personas sienten que la decisión es fría o que se pasa por alto su costo humano, pregunte quién soporta la carga y combine el razonamiento con una explicación clara.',
      high: 'Una puntuación más alta puede respaldar la compasión y el reconocimiento rápido del sufrimiento. Si la empatía se convierte en agotamiento o anula los hechos relevantes, establezca límites emocionales y verifique qué ayuda realmente mejorará la situación.'
    },
    'C.1': {
      low: 'Una puntuación más baja puede fomentar la precaución, la preparación y pedir ayuda cuando sea necesaria. Si las dudas le impiden comenzar, divida la tarea en partes pequeñas y utilice los pasos completados como prueba de su capacidad.',
      high: 'Una puntuación más alta puede respaldar la propiedad, la perseverancia y la confianza en la resolución de problemas. Si la confianza se convierte en sobreestimación o renuencia a buscar ayuda, realice una breve autopsia y pida a una persona con conocimientos que cuestione el plan.'
    },
    'C.2': {
      low: 'Una puntuación más baja puede favorecer la flexibilidad y la improvisación cuando cambian los planes. Si el desorden cuesta tiempo o hace desaparecer las obligaciones, cree sólo unos pocos hogares, listas y rutinas confiables para las cosas que más importan.',
      high: 'Una puntuación más alta puede hacer que el trabajo sea claro, confiable y fácil de reanudar. Si el orden se convierte en perfeccionismo o el cambio se vuelve angustioso, defina qué es lo suficientemente bueno y deje un margen deliberado en el plan.'
    },
    'C.3': {
      low: 'Una puntuación más baja puede ayudar a cuestionar las reglas y adaptar las obligaciones al contexto. Si los demás no pueden confiar en sus compromisos o se toman atajos éticos, haga promesas explícitas y reconecte cada obligación con la razón por la que es importante.',
      high: 'Una puntuación más alta puede respaldar la integridad y un seguimiento confiable. Si el deber crea rigidez o una carga insostenible, clasifique las obligaciones en competencia y renegocíelas temprano en lugar de asumirlas todas en silencio.'
    },
    'C.4': {
      low: 'Una puntuación más baja puede proteger el equilibrio y permitir la satisfacción sin una competencia constante. Si se estanca o deja sin usar habilidades valiosas, elija un objetivo personalmente significativo y defina el próximo pequeño hito.',
      high: 'Una puntuación más alta puede respaldar el dominio y el esfuerzo sostenido hacia metas exigentes. Si la autoestima se vincula al rendimiento o el esfuerzo se convierte en agotamiento, defina lo que cuenta como suficiente y proteja el descanso y los roles no relacionados con el logro.'
    },
    'C.5': {
      low: 'Una puntuación más baja puede respaldar la espontaneidad y la capacidad de respuesta a las prioridades cambiantes. Si comenzar o terminar es repetidamente difícil, reduzca el primer paso, cambie el entorno y agregue una señal visible o la responsabilidad de otra persona.',
      high: 'Una puntuación más alta puede respaldar el seguimiento incluso cuando la motivación es baja. Si la perseverancia continúa más allá de los rendimientos decrecientes, establezca reglas para detenerlo y revise si el objetivo aún merece el esfuerzo.'
    },
    'C.6': {
      low: 'Una puntuación más baja puede respaldar la velocidad, la experimentación y la acción con información incompleta. Si se repiten errores evitables, agregue una breve pausa y una lista de verificación antes de tomar decisiones que sean costosas o difíciles de revertir.',
      high: 'Una puntuación más alta puede respaldar el análisis de riesgos y decisiones cuidadosas y de alta calidad. Si la precaución hace que se pierda el tiempo o se repitan las reflexiones, establezca una fecha límite para tomar la decisión y prefiera un piloto reversible en lugar de esperar a tener certeza.'
    }
  },
  et: {
    'N.1': {
      low: 'Madalam punktisumma võib aidata teil jääda rahulikuks ja hoida ebakindlust võimust võtmast. Kui see rahu paneb teid riske alahindama või liiga vähe valmistuma, loetlege enne tähtsat otsust kõige tõenäolisem risk ja üks varu.',
      high: 'Kõrgem skoor võib aidata teil riske ja hoiatusmärke varakult märgata. Kui mure kulutab korduvalt teie tähelepanu, eraldage võimalikust tõenäolisest, seadke muretsemisajale piir ja valige üks konkreetne järgmine tegevus; otsige professionaalset tuge, kui see häirib pidevalt igapäevaelu.'
    },
    'N.2': {
      low: 'Madalam punktisumma võib muuta teid tasakaalukaks ja raskesti provotseeritavaks. Kui kipute õigustatud viha alla suruma või piire märkimata jätma, nimetage probleem varakult ja kirjeldage käitumist, mida soovite muuta.',
      high: 'Kõrgem skoor võimaldab teil kiiresti ebaõiglust tuvastada ja olulist kaitsta. Kui viha suurendab konflikte või põhjustab impulsiivseid reaktsioone, tehke enne reageerimist paus ja öelge inimese ründamise asemel konkreetne käitumine, mõju ja vajadus.'
    },
    'N.3': {
      low: 'Madalam punktisumma toetab sageli emotsionaalset taastumist ja püsivat energiat. Kui see muudab teise inimese kurbuse või teie enda puhkusevajaduse kergesti kahe silma vahele, aeglustage, kuulake ja tunnistage kaotust enne, kui proovite seda lahendada.',
      high: 'Kõrgem skoor võib muuta pettumuse ja kaotuse eriti silmapaistvaks, mis võib paljastada selle, mis on teie jaoks väga oluline. Pidevalt madal tuju ei pea käsitlema pelgalt omadusena: hoidke rutiinid ja ülesanded väikesed, hoidke ühendust usaldusväärsete inimestega ja otsige professionaalset tuge, kui see kestab või igapäevaelu kahjustab.'
    },
    'N.4': {
      low: 'Madalam punktisumma võib muuta sotsiaalsed olukorrad pingevabaks ja vähendada hirmu hinnangute ees. Kui tunnete mõnikord puudust, siis küsige konkreetset tagasisidet ja kontrollige teise inimese vastust, selle asemel, et eeldada, et kõik läks hästi.',
      high: 'Kõrgem punktisumma võib muuta teid tähelepanelikuks sotsiaalsete ootuste ja teiste inimeste reaktsioonide suhtes. Kui enesejälgimine muutub mäletsemiseks või vältimiseks, suunake tähelepanu jagatud ülesandele, lähenege keerulistele olukordadele järk-järgult ja hinnake suhtlemist tõendite, mitte kujuteldava kontrolli põhjal.'
    },
    'N.5': {
      low: 'Madalam punktisumma toetab vaoshoitust ja võimet rahulolu edasi lükata. Kui vaoshoitus muutub ülekontrollitavaks või jätab liiga vähe ruumi nautimiseks, tehke teadlikult ruumi kahjutule spontaansusele, selle asemel, et oodata, kuni surve tekib.',
      high: 'Kõrgem punktisumma võib tuua spontaansust, isu ja vahetu kogemuse nautimist. Kui tungid tekitavad korduvalt kulusid, mida hiljem kahetsete, lisage enne tegutsemist hõõrdumist: oodake, eemaldage päästikud, määrake ette piirangud või tehke soovitud pikaajaline valik lihtsamini saavutatavaks.'
    },
    'N.6': {
      low: 'Madalam skoor aitab teil selgelt mõelda ja pinge all stabiilselt tegutseda. Kui see paneb teid enda või teiste pinget alahindama, planeerige ettenägematuid sündmusi ja leidke aega arutamiseks ja pärast raskeid perioode taastumiseks.',
      high: 'Kõrgem skoor võib panna teid varakult märkama ülekoormust ja otsima tuge enne, kui ressursid otsa saavad. Kui surve põhjustab külmetust või segadust, vähendage samaaegseid nõudmisi, harjutage paar esimest sammu eelnevalt ja kasutage lihtsat kirjalikku plaani, kui stress on kõrge.'
    },
    'E.1': {
      low: 'Madalam punktisumma võib toetada iseseisvust ja väikest valikulist suhtlusringkonda. Kui reservi peetakse ekslikult mittehuvituks või see takistab kasulike suhete tekkimist, andke selgelt märku soojusest ja säilitage paar regulaarset kontaktpunkti.',
      high: 'Kõrgem skoor võib muuta suhte, usalduse ja uute sidemete tekkimise hõlpsaks. Kui sõbralikkus põhjustab liigset pühendumist või usaldust enne, kui see on välja teenitud, kiirendage eneseavamist, kontrollige olulisi väiteid ja jätke ruumi ei öelda.'
    },
    'E.2': {
      low: 'Madalam punktisumma võib pakkuda keskendumist, mugavust üksinduses ja vähem sõltuvust rühma stimulatsioonist. Kui üksiolemine muutub isolatsiooniks või rühmad muutuvad üha raskemaks, valige väiksemad koosviibimised ja planeerige taastumisaega, selle asemel, et kontakte üldse vältida.',
      high: 'Kõrgem punktisumma võib tuua rühmadesse energiat ja aidata luua sotsiaalset hoogu. Kui ettevõte tõrjub välja keskendunud töö või muudab üksioleku ebamugavaks, kaitske katkematut aega ja harjutage kuulamist, ilma et peaksite suhtlemist liikuma.'
    },
    'E.3': {
      low: 'Madalam punktisumma võib teha ruumi kuulamisele, koostööle ja teiste inimeste juhtimisele. Kui teie vajadused või teadmised jäävad nähtamatuks, valmistage ette üks selge lause, esitage otsene taotlus või rääkige arutelu alguses.',
      high: 'Kõrgem punktisumma võib aidata rühmal teha otsuseid ja anda juhiseid, kui teised kõhklevad. Kui võtate liiga palju ruumi, küsige eriarvamusi, oodake enne vastamist ja tehke omandiõigus selgesõnaliseks, mitte nõustuma eeldama.'
    },
    'E.4': {
      low: 'Madalam punktisumma võib toetada kiirustamata tempot ja pidevat tähelepanu ilma pideva liikumiseta. Kui olulised tööd jäävad korduvalt hiljaks, valige väike arv prioriteete ja andke neile nähtavad tähtajad või ajablokid.',
      high: 'Kõrgem punktisumma võib anda hoogu ja tugevat tegutsemisvõimet. Kui tegevus muutub ilma edenemiseta ülekoormuseks või hõivatuks, eristage liikumist tulemustest ning ajastage puhvrid ja taastumine sama tahtlikult kui ülesanded.'
    },
    'E.5': {
      low: 'Madalam skoor võib soodustada turvalisust, stabiilsust ja rahulolu ilma intensiivse stimulatsioonita. Kui uudsuse vältimine kitsendab teie valikuid, proovige väikeseid, pöörduvaid katseid, mille riskid on ette teada.',
      high: 'Kõrgem punktisumma võib toetada julgust, avastamist ja elavate kogemuste nautimist. Kui igavus tekitab tarbetuid riske, seadke piirangud enne põnevuse tõusu ja otsige stimulatsiooni kohtades, kus negatiivsed küljed on piiratud.'
    },
    'E.6': {
      low: 'Madalam punktisumma võib tuua tõsidust ja realistlikku tooni, kui optimism tundub vale. Kui tunnustus või soojus jääb varjatuks, öelge see selgelt ja looge nautimiseks väikesed sündmused, selle asemel, et oodata positiivse tunde ilmnemist.',
      high: 'Kõrgem punktisumma võib tõsta grupi moraali ja muuta positiivsed kogemused kergesti märgatavaks. Kui rõõmsameelsus varjutab valu või riski, tunnistage esmalt, mis on raske, ja seejärel otsige lootust ilma fakte eitamata.'
    },
    'O.1': {
      low: 'Madalam punktisumma võib toetada konkreetset mõtlemist ja tähelepanu sellele, mis on praktiline ja jälgitav. Kui tuttavad vastused tõrjuvad välja paremad võimalused, looge mitu alternatiivi, enne kui hindate, milline neist on realistlik.',
      high: 'Kõrgem skoor võib toetada loovust, vaimset simulatsiooni ja originaalseid seoseid. Kui ideed jäävad unistustesse või hajutavad tähelepanu, püüdke need kinni, valige üks ja muutke see väikseimaks käegakatsutavaks proovikiviks.'
    },
    'O.2': {
      low: 'Madalam punktisumma võib hoida tähelepanu funktsioonile, selgusele ja otsesele kasulikkusele. Kui esteetilist kogemust või taastavat ilu jäetakse järjekindlalt tähelepanuta, proovige seda lühidalt ja madala rõhuga viisidel ja märkige, mis teie tähelepanu tõeliselt köidab.',
      high: 'Kõrgem skoor võib teravdada tundlikkust vormi, ilu ja peente detailide suhtes. Kui esteetilised standardid võtavad liiga palju aega või tühistavad funktsiooni, määratlege esmalt praktilised piirangud ja otsustage, kus on viimistlemine seda tõesti väärt.'
    },
    'O.3': {
      low: 'Madalam punktisumma võib toetada meelerahu ja otsuseid, mida hetketuju vähem mõjutab. Kui tundeid on raske tuvastada või teiste inimeste signaale ei võeta, tehke enne vajaliku üle otsustamist lühike keha ja emotsioonide kontroll.',
      high: 'Kõrgem punktisumma võib toetada emotsionaalset teadlikkust, empaatiat ja nüansirikast siseelu. Kui tunded muutuvad valdavaks või dikteerivad otsuseid, nimetage emotsioon, laske sellel settida ja eristage seda, mida tunnete tõenditest.'
    },
    'O.4': {
      low: 'Madalam punktisumma võib toetada järjepidevust, meisterlikkust ja töökindlat rutiini. Kui rutiin muutub jäikus või hirm uudsuse ees, tehke üks väike pöörduv muudatus, hoides ülejäänud struktuuri tuttavana.',
      high: 'Kõrgem punktisumma võib toetada kohanemisvõimet ja õppimist uurimise kaudu. Kui uudsus tekitab ebastabiilsust või täitmata kohustusi, hoidke aja, raha ja kohustuste jaoks mõned mitte-kaubeldavad ankrud.'
    },
    'O.5': {
      low: 'See tahk puudutab huvi keeruliste ja abstraktsete ideede, mitte intelligentsuse või IQ vastu. Madalam punktisumma võib soodustada praktilisi otsuseid; Kui võõrad ideed lükatakse liiga kiiresti kõrvale, küsige, millised tõendid muudaksid teie meelt ja õppige ainult seda, mida otsus nõuab.',
      high: 'Kõrgem skoor võib toetada analüüsi, uudishimu ja keerukuse mugavust. Kui mõtlemine muutub lõputuks aruteluks või analüüsi halvatuks, määrake enne edasist uurimist otsustamise kriteerium ja tähtaeg.'
    },
    'O.6': {
      low: 'Madalam punktisumma võib säilitada kasulikke traditsioone, ühiseid ootusi ja sotsiaalset järjepidevust. Kui konventsioon jääb kahtluse alla või välistab asjakohased vaatenurgad, vaadake uuesti reegli põhjust ja küsige, keda see mõjutab.',
      high: 'Kõrgem punktisumma võib toetada normide kriitilist uurimist ja konstruktiivset reformi. Kui uudsust käsitletakse automaatselt paremana, testige muudatusi väikeste sammude kaupa ja säilitage olemasoleva praktika osad, mis veel töötavad.'
    },
    'A.1': {
      low: 'Madalam punktisumma võib aidata teil märgata ebakõlasid ja kaitsta end, kui panused on suured. Kui kahtlus takistab koostööd, kalibreerige usaldust selle asemel, et seda korraga lubada või tagasi lükata: alustage väikestest kohustustest ja ajakohastage tõendite põhjal.',
      high: 'Kõrgem punktisumma võib muuta avatuse ja koostöö lihtsamaks. Kui heausksus jätab teid ärakasutamiseks avatud, kontrollige kõrge panusega väiteid, tehke ootused selgeks ja hoidke piire isegi inimestega, kes teile meeldivad.'
    },
    'A.2': {
      low: 'Madalam punktisumma võib toetada taktitunnet, läbirääkimisi ja strateegilist privaatsust. Kui see tekitab manipuleerimist või ebaselgust, eristage legitiimne piir pettusest ja võtke endale kohustusi keeles, mida teine ​​inimene saab kontrollida.',
      high: 'Kõrgem punktisumma võib suurendada usaldusväärsust otsesuse ja läbipaistvuse kaudu. Kui ausus muutub nüriks või liigseks jagamiseks, ühendage tõde ajastuse, asjakohasuse ja selle edastamise eest hoolitsemisega.'
    },
    'A.3': {
      low: 'Madalam punktisumma võib kaitsta piiratud aega ja julgustada teiste inimeste autonoomiat. Kui teised tunnevad, et olete kättesaamatu või vastastikkus väheneb, valige abi vorm, mida saate toetada, ja kirjeldage selgelt selle ulatust.',
      high: 'Kõrgem punktisumma võib tekitada tugeva toetuse ja kogukonnatunde. Kui abistamine põhjustab läbipõlemist või takistab teistel vastutust võtmast, küsige, kas abi soovitakse, leppige kokku piirides ja ärge tehke iga vajadust enda kohustuseks.'
    },
    'A.4': {
      low: 'Madalam punktisumma võib aidata kaitsta standardeid ja lahendada konflikte otse. Kui erimeelsused muutuvad krooniliseks hõõrdumiseks, eraldage läbirääkimatud vajadused paindlikest valikutest ja kasutage jõu asemel ühiseid kriteeriume.',
      high: 'Kõrgem punktisumma võib leevendada konflikte ja kaitsta koostööd. Kui harmooniat ostetakse oluliste vajaduste tunnistamisega, öelge piir selgelt ja lubage lugupidavaid lahkarvamusi, käsitlemata seda suhte ebaõnnestumisena.'
    },
    'A.5': {
      low: 'Madalam punktisumma võib toetada enesekaitset ja muuta panuse nähtavaks. Kui kindlustunnet on kuulda üleolekuna või teiste töö kaob, esitage tõenditega väiteid ja jagage krediiti täpselt.',
      high: 'Kõrgem punktisumma võib hoida tähelepanu tööl ja teha koostööd lihtsamaks. Kui teie panus jäetakse korduvalt tähelepanuta, kirjeldage tehtut ja selle mõju faktiliselt; täpne eneseesitus ei ole ülbus.'
    },
    'A.6': {
      low: 'Madalam punktisumma võib toetada objektiivsust ja raskeid otsuseid, mis ei suuda kõiki rahuldada. Kui inimesed kogevad otsust külmana või selle inimlik hind jääb tegemata, küsige, kes selle koorma kannab, ja siduge põhjendus selge selgitusega.',
      high: 'Kõrgem punktisumma võib toetada kaastunnet ja kannatuste kiiret äratundmist. Kui empaatia muutub kurnatuks või alistab olulised faktid, seadke emotsionaalsed piirid ja kontrollige, milline abi tegelikult olukorda parandab.'
    },
    'C.1': {
      low: 'Madalam punktisumma võib julgustada ettevaatust, ettevalmistust ja vajaduse korral abi küsimist. Kui enesekahtlus ei lase teil alustada, jagage ülesanne väikesteks tükkideks ja kasutage lõpetatud samme võimekuse tõestuseks.',
      high: 'Kõrgem punktisumma võib toetada omavastutust, püsivust ja kindlustunnet probleemide lahendamisel. Kui enesekindlus muutub ülehindamiseks või vastumeelseks abi otsida, viige läbi lühike surmaeelne uuring ja paluge asjatundlikul inimesel plaan vaidlustada.'
    },
    'C.2': {
      low: 'Madalam punktisumma võib plaanide muutumisel toetada paindlikkust ja improvisatsiooni. Kui korratus maksab aega või kaotab kohustused, looge kõige olulisemate asjade jaoks vaid mõned usaldusväärsed kodud, nimekirjad ja rutiinid.',
      high: 'Kõrgem punktisumma võib muuta töö selgeks, usaldusväärseks ja hõlpsasti jätkatavaks. Kui kord muutub perfektsionismiks või muutus muutub ängistavaks, määratlege, mis on piisavalt hea, ja jätke plaanis tahtlik lõtk.'
    },
    'C.3': {
      low: 'Madalam punktisumma võib aidata seada reeglid kahtluse alla ja kohandada kohustusi kontekstiga. Kui teised ei saa teie kohustustele loota või eetilised nurgad on ära lõigatud, andke selgesõnalised lubadused ja seostage iga kohustus uuesti olulise põhjusega.',
      high: 'Kõrgem skoor võib toetada terviklikkust ja usaldusväärset järge. Kui kohustus tekitab jäikust või jätkusuutmatut koormust, reastage konkureerivad kohustused ja tehke need varakult uuesti läbi, selle asemel et neid kõiki vaikselt kanda.'
    },
    'C.4': {
      low: 'Madalam punktisumma võib kaitsta tasakaalu ja võimaldada rahulolu ilma pideva konkurentsita. Kui see muutub stagnatsiooniks või jätab hinnatud võimed kasutamata, valige isiklikult tähendusrikas sihtmärk ja määratlege järgmine väike verstapost.',
      high: 'Kõrgem skoor võib toetada meisterlikkust ja pidevat pingutust nõudlike eesmärkide saavutamiseks. Kui eneseväärtus on seotud väljunditega või pingutusest saab läbipõlemine, määratlege, mis on piisav, ning kaitske puhkust ja saavutustega mitteseotud rolle.'
    },
    'C.5': {
      low: 'Madalam punktisumma võib toetada spontaansust ja reageerimisvõimet muutuvatele prioriteetidele. Kui alustamine või lõpetamine on korduvalt keeruline, vähendage esimest sammu, muutke keskkonda ja lisage nähtav vihje või teise inimese vastutus.',
      high: 'Kõrgem skoor võib toetada jälgimist isegi siis, kui motivatsioon on madal. Kui püsivus jätkub ka kahanevast tulust, määrake peatamise reeglid ja vaadake, kas eesmärk ikka väärib pingutust.'
    },
    'C.6': {
      low: 'Madalam skoor võib toetada kiirust, katsetamist ja puuduliku teabega tegevust. Kui välditavad vead korduvad, lisage enne kulukaid või raskesti ümberpööratavaid otsuseid lühike paus ja kontrollnimekiri.',
      high: 'Kõrgem punktisumma võib toetada riskianalüüsi ja hoolikaid ning kvaliteetseid otsuseid. Kui ettevaatus põhjustab ajastuse vahelejäämist või korduvat mäletsemist, määrake otsustamise tähtaeg ja eelistage kindluse ootamisele pööratavat pilooti.'
    }
  },
  fa: {
    'N.1': {
      low: 'نمره کمتر می تواند به شما کمک کند آرام بمانید و از عدم اطمینان جلوگیری کنید. اگر این آرامش باعث می‌شود خطرات را دست کم بگیرید یا خیلی کم آماده شوید، محتمل‌ترین خطر و یک بار دیگر را قبل از تصمیم مهم فهرست کنید.',
      high: 'نمره بالاتر می تواند به شما کمک کند تا خطرات و علائم هشدار دهنده را زود متوجه شوید. اگر نگرانی مکرراً توجه شما را به خود جلب کرد، آنچه ممکن است را از آنچه که محتمل است جدا کنید، محدودیتی برای زمان نگرانی تعیین کنید و یک اقدام مشخص بعدی را انتخاب کنید. اگر به طور مداوم زندگی روزمره را مختل می کند، به دنبال پشتیبانی حرفه ای باشید.'
    },
    'N.2': {
      low: 'نمره کمتر می تواند شما را یکنواخت و تحریک کردن را سخت کند. اگر تمایل دارید خشم مشروع را سرکوب کنید یا مرزها را ناگفته رها کنید، مشکل را زودتر نام ببرید و رفتاری را که می خواهید تغییر کند توصیف کنید.',
      high: 'نمره بالاتر می تواند شما را به سرعت تشخیص بی عدالتی و دفاع از آنچه مهم است. اگر خشم باعث تشدید تعارض ها یا واکنش های تکانشی می شود، قبل از پاسخ دادن مکث کنید و به جای حمله به فرد، رفتار، تأثیر و نیاز خاصی را بیان کنید.'
    },
    'N.3': {
      low: 'نمره کمتر اغلب از بازیابی عاطفی و انرژی پایدار پشتیبانی می کند. اگر نادیده گرفتن غم و اندوه شخص دیگری یا نیاز شما به استراحت را آسان می کند، سرعت خود را کم کنید، گوش دهید و قبل از تلاش برای حل آن فقدان را تصدیق کنید.',
      high: 'نمره بالاتر ممکن است ناامیدی و باخت را به ویژه برجسته کند، که می تواند آنچه را عمیقاً برای شما مهم است نشان دهد. خلق و خوی ضعیف مداوم چیزی نیست که شما باید آن را صرفاً به عنوان یک ویژگی در نظر بگیرید: روال‌ها و وظایف را کوچک نگه دارید، با افراد مورد اعتماد در ارتباط باشید و هنگامی که زندگی روزمره ادامه پیدا کرد یا به آن آسیب می‌رساند، به دنبال حمایت حرفه‌ای باشید.'
    },
    'N.4': {
      low: 'نمره کمتر می تواند موقعیت های اجتماعی را آرام کند و ترس از قضاوت را کاهش دهد. اگر گاهی اوقات از نحوه برخورد خود غافل می شوید، به جای اینکه فرض کنید همه چیز به خوبی انجام شده است، بازخورد خاص بخواهید و پاسخ طرف مقابل را بررسی کنید.',
      high: 'نمره بالاتر می تواند شما را به انتظارات اجتماعی و واکنش های دیگران توجه کند. اگر خودنظارتی به نشخوار فکری یا اجتناب تبدیل شد، توجه خود را به کار مشترک معطوف کنید، به تدریج به موقعیت های دشوار نزدیک شوید و تعامل را با شواهد به جای بررسی تخیلی قضاوت کنید.'
    },
    'N.5': {
      low: 'نمره پایین تر از محدودیت و توانایی به تاخیر انداختن رضایت پشتیبانی می کند. اگر محدودیت به کنترل بیش از حد تبدیل می‌شود یا فضای کمی برای لذت باقی می‌گذارد، به‌جای اینکه منتظر بمانید تا فشار زیاد شود، عمداً فضایی برای خودانگیختگی بی‌ضرر ایجاد کنید.',
      high: 'نمره بالاتر می تواند خودانگیختگی، اشتها و لذت بردن از تجربه فوری را به همراه داشته باشد. اگر اصرارها مکرراً هزینه‌هایی را ایجاد می‌کنند که بعداً پشیمان می‌شوید، قبل از اقدام، اصطکاک را اضافه کنید: صبر کنید، محرک‌ها را حذف کنید، محدودیت‌هایی را از قبل تعیین کنید، یا دستیابی به انتخاب بلندمدت مورد نظر را آسان‌تر کنید.'
    },
    'N.6': {
      low: 'نمره کمتر می تواند به شما کمک کند که به وضوح فکر کنید و تحت فشار به طور پیوسته عمل کنید. اگر باعث می‌شود فشار وارده بر خود یا دیگران را دست کم بگیرید، برای موارد احتمالی برنامه‌ریزی کنید و زمانی را برای بازیابی و بهبودی پس از دوره‌های سخت اختصاص دهید.',
      high: 'امتیاز بالاتر می تواند باعث شود شما زودتر متوجه اضافه بار شوید و قبل از تمام شدن منابع به دنبال پشتیبانی باشید. اگر فشار باعث یخ زدگی یا سردرگمی می شود، تقاضاهای همزمان را کاهش دهید، چند قدم اول را از قبل تمرین کنید، و زمانی که استرس زیاد است از یک برنامه مکتوب ساده استفاده کنید.'
    },
    'E.1': {
      low: 'نمره کمتر می تواند از استقلال و یک دایره اجتماعی انتخابی کوچک حمایت کند. اگر ذخیره با بی علاقگی اشتباه گرفته می شود یا از شکل گیری روابط مفید جلوگیری می کند، صریحاً به گرمی پیام دهید و چند نقطه تماس منظم را حفظ کنید.',
      high: 'امتیاز بالاتر می تواند باعث ایجاد رابطه، اعتماد و ارتباطات جدید به راحتی شود. اگر دوستی قبل از به دست آوردن آن منجر به تعهد یا اعتماد بیش از حد می شود، خودافشایی را سرعت دهید، ادعاهای مهم را تأیید کنید و جایی برای نه گفتن بگذارید.'
    },
    'E.2': {
      low: 'نمره کمتر می تواند تمرکز، راحتی همراه با تنهایی و وابستگی کمتر به تحریک گروهی را فراهم کند. اگر تنهایی به انزوا تبدیل می‌شود یا گروه‌ها به طور فزاینده‌ای دشوار می‌شوند، به جای اجتناب از تماس، مجالس کوچک‌تری را انتخاب کنید و زمان بهبودی را برنامه‌ریزی کنید.',
      high: 'نمره بالاتر می تواند برای گروه ها انرژی بیاورد و به ایجاد حرکت اجتماعی کمک کند. اگر شرکت کار متمرکز را از بین می برد یا تنهایی را ناراحت می کند، از زمان بی وقفه محافظت کنید و بدون نیاز به تداوم تعامل، گوش دادن را تمرین کنید.'
    },
    'E.3': {
      low: 'نمره کمتر می تواند فضایی را برای گوش دادن، همکاری و رهبری دیگران باز کند. اگر نیازها یا تخصص شما نامرئی باقی می ماند، یک جمله واضح آماده کنید، یک درخواست مستقیم بکنید یا یک بار نزدیک شروع بحث صحبت کنید.',
      high: 'نمره بالاتر می تواند به یک گروه کمک کند تا در تصمیم گیری و جهت دادن به زمانی که دیگران تردید دارند. اگر فضای زیادی را اشغال کردید، نظرات مخالف را بخواهید، قبل از پاسخ دادن صبر کنید و به جای فرض توافق، مالکیت را صریح بیان کنید.'
    },
    'E.4': {
      low: 'نمره پایین تر می تواند از سرعت بدون عجله و توجه پایدار بدون حرکت ثابت پشتیبانی کند. اگر کار مهم به طور مکرر به تأخیر می افتد، تعداد کمی از اولویت ها را انتخاب کنید و به آنها مهلت های قابل مشاهده یا بلوک های زمانی بدهید.',
      high: 'نمره بالاتر می تواند حرکت و ظرفیت قوی برای عمل ایجاد کند. اگر فعالیت بدون پیشرفت بیش از حد یا شلوغ شد، حرکت را از نتایج و بافرهای برنامه زمان بندی و بازیابی به عمد وظایف تشخیص دهید.'
    },
    'E.5': {
      low: 'نمره پایین تر می تواند به نفع ایمنی، ثبات و رضایت بدون تحریک شدید باشد. اگر اجتناب از تازگی انتخاب‌های شما را محدود می‌کند، آزمایش‌های کوچک و برگشت‌پذیری را امتحان کنید که خطرات آنها از قبل شناخته شده است.',
      high: 'نمره بالاتر می تواند از شجاعت، کاوش و لذت بردن از تجربیات زنده پشتیبانی کند. اگر بی حوصلگی باعث ایجاد خطر غیرضروری می شود، قبل از افزایش هیجان، محدودیت هایی را تعیین کنید و به دنبال تحریک در محیط هایی باشید که جنبه منفی آن وجود دارد.'
    },
    'E.6': {
      low: 'امتیاز کمتر می تواند جدیت و لحن واقع بینانه به همراه داشته باشد، زمانی که خوش بینی نادرست است. اگر قدردانی یا گرمی پنهان ماند، آن را به صراحت بیان کنید و به جای اینکه انتظار داشته باشید احساس مثبت به خودی خود ظاهر شود، موقعیت های کوچکی برای لذت ایجاد کنید.',
      high: 'نمره بالاتر می تواند روحیه گروه را بالا ببرد و تجربیات مثبت را آسان کند. اگر شادی بر درد یا خطر غلبه کرد، ابتدا آنچه را دشوار است تصدیق کنید، سپس بدون انکار واقعیت ها به دنبال امید باشید.'
    },
    'O.1': {
      low: 'نمره کمتر می تواند از تفکر واقعی و توجه به آنچه عملی و قابل مشاهده است حمایت کند. اگر پاسخ های آشنا احتمالات بهتری را از بین می برد، قبل از ارزیابی اینکه کدام یک واقع بینانه است، چندین گزینه ایجاد کنید.',
      high: 'نمره بالاتر می تواند از خلاقیت، شبیه سازی ذهنی و ارتباطات اصلی پشتیبانی کند. اگر ایده ها در رویاها باقی می مانند یا توجه را پراکنده می کنند، آنها را جذب کنید، یکی را انتخاب کنید و آن را به کوچکترین آزمون ملموس تبدیل کنید.'
    },
    'O.2': {
      low: 'نمره کمتر می تواند توجه را به عملکرد، وضوح و سودمندی مستقیم جلب کند. اگر تجربه زیبایی شناختی یا زیبایی ترمیمی به طور مداوم نادیده گرفته می شود، آن را به روش های کوتاه و کم فشار نمونه برداری کنید و متوجه شوید که واقعاً چه چیزی توجه شما را به خود جلب می کند.',
      high: 'نمره بالاتر می تواند حساسیت به فرم، زیبایی و جزئیات ظریف را تشدید کند. اگر استانداردهای زیبایی شناسی زمان زیادی را صرف می کند یا عملکرد را نادیده می گیرد، ابتدا محدودیت های عملی را تعریف کنید و تصمیم بگیرید که اصلاح واقعاً ارزش آن را دارد.'
    },
    'O.3': {
      low: 'نمره کمتر می تواند از خونسردی و تصمیماتی حمایت کند که کمتر تحت تاثیر حال و هوای لحظه هستند. اگر تشخیص احساسات سخت شد یا سیگنال های افراد دیگر از دست رفت، قبل از تصمیم گیری در مورد آنچه لازم است، برای بررسی مختصر بدن و احساسات خود مکث کنید.',
      high: 'نمره بالاتر می تواند از آگاهی عاطفی، همدلی و زندگی درونی ظریف حمایت کند. اگر احساسات طاقت فرسا شدند یا تصمیم‌گیری‌ها را دیکته می‌کنند، آن احساس را نام ببرید، اجازه دهید آرام شود و آنچه را که احساس می‌کنید از آنچه شواهد نشان می‌دهد متمایز کنید.'
    },
    'O.4': {
      low: 'نمره پایین تر می تواند از تداوم، تسلط و روال های قابل اعتماد پشتیبانی کند. اگر روال به سختی یا ترس از تازگی تبدیل شد، یک تغییر کوچک و برگشت پذیر را در حالی که بقیه ساختار را آشنا نگه دارید، وارد کنید.',
      high: 'نمره بالاتر می تواند از سازگاری و یادگیری از طریق اکتشاف حمایت کند. اگر تازگی باعث بی ثباتی یا تعهدات ناتمام می شود، چند لنگر غیرقابل مذاکره برای زمان، پول و مسئولیت ها نگه دارید.'
    },
    'O.5': {
      low: 'این جنبه مربوط به علاقه به ایده های پیچیده و انتزاعی است، نه هوش یا IQ. نمره کمتر می تواند به نفع تصمیمات عملی باشد. اگر ایده‌های ناآشنا خیلی سریع رد می‌شوند، بپرسید چه شواهدی نظر شما را تغییر می‌دهد و فقط آنچه را که تصمیم می‌خواهد بیاموزید.',
      high: 'نمره بالاتر می تواند از تجزیه و تحلیل، کنجکاوی و راحتی با پیچیدگی پشتیبانی کند. اگر تفکر به بحث بی پایان یا فلج تحلیل تبدیل می شود، قبل از بررسی بیشتر، معیار تصمیم گیری و ضرب الاجل را مشخص کنید.'
    },
    'O.6': {
      low: 'نمره کمتر می تواند سنت های مفید، انتظارات مشترک و تداوم اجتماعی را حفظ کند. اگر قرارداد بدون تردید باقی ماند یا دیدگاه های مرتبط را حذف کرد، دلیل این قانون را مجدداً بررسی کنید و بپرسید چه کسی تحت تأثیر آن است.',
      high: 'نمره بالاتر می تواند از بررسی انتقادی هنجارها و اصلاحات سازنده حمایت کند. اگر نوآوری به‌طور خودکار بهتر تلقی می‌شود، تغییرات را در مراحل کوچک آزمایش کنید و بخش‌هایی از تمرین موجود را که هنوز کار می‌کنند حفظ کنید.'
    },
    'A.1': {
      low: 'امتیاز کمتر می تواند به شما کمک کند تا متوجه ناهماهنگی شوید و از خود در هنگام بالا بودن ریسک محافظت کنید. اگر سوء ظن مانع همکاری می شود، اعتماد را به جای اعطای یا خودداری یکباره تنظیم کنید: با تعهدات کوچک شروع کنید و از شواهد به روز کنید.',
      high: 'نمره بالاتر می تواند باز بودن و همکاری را آسان تر کند. اگر حسن نیت شما را در معرض بهره کشی قرار می دهد، ادعاهای پرمخاطره را تأیید کنید، انتظارات را صریح بیان کنید و حتی با افرادی که دوست دارید مرزها را حفظ کنید.'
    },
    'A.2': {
      low: 'نمره کمتر می تواند از درایت، مذاکره و حریم خصوصی استراتژیک پشتیبانی کند. اگر دستکاری یا ابهامی ایجاد کرد، مرز مشروع را از فریب متمایز کنید و به زبانی که طرف مقابل می تواند آن را تأیید کند، تعهد کنید.',
      high: 'نمره بالاتر می تواند از طریق مستقیم بودن و شفافیت، قابلیت اطمینان ایجاد کند. اگر صداقت به صراحت یا به اشتراک گذاری بیش از حد تبدیل شد، حقیقت را با زمان بندی، ارتباط و مراقبت از نحوه ارائه آن ترکیب کنید.'
    },
    'A.3': {
      low: 'امتیاز کمتر می تواند از زمان محدود محافظت کند و استقلال دیگران را تشویق کند. اگر دیگران شما را در دسترس نبودند یا رفتار متقابل از بین می رود، شکلی از کمک را انتخاب کنید که بتوانید آن را حفظ کنید و دامنه آن را به وضوح بیان کنید.',
      high: 'نمره بالاتر می تواند حمایت قوی و احساس جامعه ایجاد کند. اگر کمک کردن باعث فرسودگی شغلی می‌شود یا دیگران را از مسئولیت‌پذیری باز می‌دارد، بپرسید که آیا کمک می‌خواهید، روی محدودیت‌ها توافق کنید، و هر نیازی را وظیفه خود نکنید.'
    },
    'A.4': {
      low: 'نمره کمتر می تواند به دفاع از استانداردها و رسیدگی مستقیم به تعارض کمک کند. اگر اختلاف به اصطکاک مزمن تبدیل شد، نیازهای غیرقابل مذاکره را از گزینه های انعطاف پذیر جدا کنید و به جای زور از معیارهای مشترک استفاده کنید.',
      high: 'نمره بالاتر می تواند تنش را کاهش دهد و از همکاری محافظت کند. اگر هماهنگی با پذیرش نیازهای مهم به دست می‌آید، مرز را به صراحت بیان کنید و اجازه دهید اختلاف نظر محترمانه‌ای وجود داشته باشد بدون اینکه آن را به عنوان شکست رابطه تلقی کنید.'
    },
    'A.5': {
      low: 'نمره پایین تر می تواند از خود دفاعی پشتیبانی کند و مشارکت ها را قابل مشاهده کند. اگر اعتماد به عنوان برتری شنیده می شود یا کار دیگران از بین می رود، با شواهد و مدارک ادعا کنید و اعتبار را دقیقاً به اشتراک بگذارید.',
      high: 'نمره بالاتر می تواند توجه را روی کار حفظ کند و همکاری را آسان تر کند. اگر سهم شما به طور مکرر نادیده گرفته می شود، آنچه را که انجام دادید و تأثیر آن را به طور واقعی توصیف کنید. خودنمایی دقیق، تکبر نیست.'
    },
    'A.6': {
      low: 'نمره پایین تر می تواند از عینیت و تصمیمات دشوار حمایت کند که نمی تواند همه را راضی کند. اگر مردم تصمیم را سرد می دانند یا هزینه انسانی آن را نادیده می گیرند، بپرسید چه کسی این بار را به دوش می کشد و استدلال را با توضیح واضح همراه کنید.',
      high: 'نمره بالاتر می تواند از شفقت و تشخیص سریع رنج حمایت کند. اگر همدلی به فرسودگی تبدیل شد یا حقایق مرتبط را نادیده گرفت، مرزهای احساسی را تعیین کنید و بررسی کنید که چه کمکی واقعاً وضعیت را بهبود می بخشد.'
    },
    'C.1': {
      low: 'نمره پایین تر می تواند احتیاط، آمادگی و درخواست کمک را در صورت نیاز تشویق کند. اگر شک به خود شما را از شروع باز می دارد، کار را به قطعات کوچک تقسیم کنید و از مراحل تکمیل شده به عنوان مدرکی از توانایی استفاده کنید.',
      high: 'نمره بالاتر می تواند از مالکیت، پشتکار و اعتماد به نفس در حل مشکلات حمایت کند. اگر اعتماد به نفس بیش از حد برآورد یا بی میلی به کمک گرفتن شد، یک پیش مرگ کوتاه انجام دهید و از یک فرد آگاه بخواهید که طرح را به چالش بکشد.'
    },
    'C.2': {
      low: 'نمره پایین تر می تواند از انعطاف پذیری و بداهه گویی در هنگام تغییر برنامه پشتیبانی کند. اگر بی نظمی به زمان نیاز دارد یا باعث ناپدید شدن تعهدات می شود، فقط چند خانه، فهرست و روال قابل اعتماد برای چیزهایی که مهم هستند ایجاد کنید.',
      high: 'نمره بالاتر می تواند کار را واضح، قابل اعتماد و از سرگیری آسان کند. اگر نظم به کمال گرایی تبدیل شد یا تغییر ناراحت کننده شد، آنچه را که به اندازه کافی خوب است تعریف کنید و سستی عمدی را در برنامه رها کنید.'
    },
    'C.3': {
      low: 'نمره پایین تر می تواند به سؤال کردن قوانین و انطباق تعهدات با زمینه کمک کند. اگر دیگران نمی توانند به تعهدات شما تکیه کنند یا زوایای اخلاقی بریده می شود، قول ها را صریح بدهید و هر تعهدی را به دلیل اهمیتش دوباره مرتبط کنید.',
      high: 'نمره بالاتر می تواند از یکپارچگی و پیگیری قابل اعتماد پشتیبانی کند. اگر وظیفه سختی یا بار ناپایدار ایجاد می کند، تعهدات رقیب را رتبه بندی کنید و به جای اینکه بی سر و صدا همه آنها را به دوش بکشید، زودتر با آنها مذاکره کنید.'
    },
    'C.4': {
      low: 'نمره پایین تر می تواند از تعادل محافظت کند و بدون رقابت مداوم رضایت شما را فراهم کند. اگر دچار رکود شد یا توانایی‌های ارزشمند را بدون استفاده گذاشت، یک هدف شخصی معنادار انتخاب کنید و نقطه عطف کوچک بعدی را مشخص کنید.',
      high: 'امتیاز بالاتر می تواند از تسلط و تلاش مداوم برای رسیدن به اهداف مهم حمایت کند. اگر عزت نفس با خروجی گره خورد یا تلاش به فرسودگی شغلی تبدیل شد، آنچه را که کافی است تعریف کنید و از استراحت و نقش های غیرمرتبط با موفقیت محافظت کنید.'
    },
    'C.5': {
      low: 'نمره کمتر می تواند از خودانگیختگی و پاسخگویی به تغییر اولویت ها حمایت کند. اگر شروع یا به پایان رساندن بارها و بارها دشوار است، مرحله اول را کوچک کنید، محیط را تغییر دهید و یک نشانه قابل مشاهده یا مسئولیت پذیری شخص دیگری را اضافه کنید.',
      high: 'نمره بالاتر می تواند حتی زمانی که انگیزه پایین است، از پیگیری پشتیبانی کند. اگر پشتکار در گذشته بازدهی رو به کاهش ادامه داشت، قوانین توقف را تنظیم کنید و بررسی کنید که آیا هدف هنوز سزاوار تلاش است یا خیر.'
    },
    'C.6': {
      low: 'امتیاز کمتر می تواند از سرعت، آزمایش و عمل با اطلاعات ناقص پشتیبانی کند. اگر خطاهای قابل پیشگیری تکرار می‌شوند، قبل از تصمیم‌هایی که پرهزینه یا سخت هستند، یک مکث کوتاه و چک لیست اضافه کنید.',
      high: 'نمره بالاتر می تواند از تجزیه و تحلیل ریسک و تصمیم گیری های دقیق و با کیفیت پشتیبانی کند. اگر احتیاط باعث از دست دادن زمان یا نشخوارهای مکرر می شود، یک ضرب الاجل برای تصمیم گیری تعیین کنید و یک خلبان برگشت پذیر را به انتظار برای اطمینان ترجیح دهید.'
    }
  },
  fi: {
    'N.1': {
      low: 'Alempi pistemäärä voi auttaa sinua pysymään rauhallisena ja estämään epävarmuuden valtaamisesta. Jos tämä tyyneys saa sinut aliarvioimaan riskejä tai valmistautumaan liian vähän, luettele todennäköisin riski ja yksi varavaihtoehto ennen tärkeää päätöstä.',
      high: 'Korkeampi pistemäärä voi auttaa sinua huomaamaan riskit ja varoitusmerkit ajoissa. Jos huoli toistuvasti kuluttaa huomiosi, erota se, mikä on mahdollista todennäköisestä, aseta huolen aikaraja ja valitse yksi konkreettinen seuraava toimenpide; hakea ammattiapua, jos se jatkuvasti häiritsee jokapäiväistä elämää.'
    },
    'N.2': {
      low: 'Alempi pistemäärä voi tehdä sinusta tasaisen ja vaikeasti provosoitavan. Jos sinulla on tapana tukahduttaa oikeutettua vihaa tai jättää rajoja mainitsematta, nimeä ongelma ajoissa ja kuvaile käyttäytymistä, jota haluat muuttaa.',
      high: 'Korkeampi pistemäärä voi saada sinut nopeasti havaitsemaan epäoikeudenmukaisuuden ja puolustamaan sitä, mikä on tärkeää. Jos viha lisää konflikteja tai ajaa impulsiivisia reaktioita, pysähdy ennen vastaamista ja kerro konkreettinen käyttäytyminen, vaikutus ja tarve sen sijaan, että hyökkäät henkilöä vastaan.'
    },
    'N.3': {
      low: 'Alempi pistemäärä tukee usein emotionaalista palautumista ja tasaista energiaa. Jos se tekee toisen surun tai oman lepotarpeesi helposti huomiotta, hidasta, kuuntele ja tunnusta menetys ennen kuin yrität ratkaista sen.',
      high: 'Korkeampi pistemäärä voi tehdä pettymyksestä ja menetyksestä erityisen näkyvää, mikä voi paljastaa sinulle tärkeitä asioita. Jatkuvaa huonoa mielialaa ei tarvitse pitää pelkkänä ominaisuutena: pidä rutiinit ja tehtävät pieninä, pysy yhteydessä luotettuihin ihmisiin ja hae ammattiapua, kun se kestää tai heikentää jokapäiväistä elämää.'
    },
    'N.4': {
      low: 'Alempi pistemäärä voi saada sosiaaliset tilanteet tuntemaan olonsa rentoutuneeksi ja vähentää tuomitsemisen pelkoa. Jos et joskus huomaa tapaasi, pyydä erityistä palautetta ja tarkista toisen henkilön vastaus sen sijaan, että oletat, että kaikki meni hyvin.',
      high: 'Korkeampi pistemäärä voi saada sinut huomioimaan sosiaaliset odotukset ja muiden ihmisten reaktiot. Jos itsevalvonta muuttuu märehtimiseksi tai välttämiseksi, siirrä huomio yhteiseen tehtävään, lähesty vaikeita tilanteita asteittain ja arvioi vuorovaikutusta todisteiden perusteella kuvitellun tarkastelun sijaan.'
    },
    'N.5': {
      low: 'Alempi pistemäärä tukee pidättymistä ja kykyä viivyttää tyydytystä. Jos hillitseminen tulee ylihallitukseksi tai jättää liian vähän tilaa nautinnolle, jätä tarkoituksella tilaa vaarattomalle spontaanisuudelle sen sijaan, että odotat paineen muodostumista.',
      high: 'Korkeampi pistemäärä voi tuoda spontaanisuutta, ruokahalua ja välittömästä kokemuksesta nauttimista. Jos kehotukset aiheuttavat toistuvasti kustannuksia, joita kadut myöhemmin, lisää kitkaa ennen kuin toimit: odota, poista laukaisimet, aseta rajoja etukäteen tai tee haluamasi pitkän aikavälin valinta helpommin saavutettavaksi.'
    },
    'N.6': {
      low: 'Alempi pistemäärä voi auttaa sinua ajattelemaan selkeästi ja toimimaan vakaasti paineen alla. Jos se saa sinut aliarvioimaan itsesi tai muiden rasitusta, suunnittele varautumiset ja varaa aikaa selvittelyyn ja toipumiseen vaativien jaksojen jälkeen.',
      high: 'Korkeampi pistemäärä voi saada sinut huomaamaan ylikuormituksen ajoissa ja hakemaan tukea ennen kuin resurssit loppuvat. Jos paine aiheuttaa jäätymistä tai hämmennystä, vähennä samanaikaisia ​​vaatimuksia, harjoittele ensimmäiset askeleet etukäteen ja käytä yksinkertaista kirjallista suunnitelmaa, kun stressi on korkea.'
    },
    'E.1': {
      low: 'Alempi pistemäärä voi tukea itsenäisyyttä ja pientä, valikoivaa sosiaalista piiriä. Jos reservi erehtyy välinpitämättömyyteen tai se estää hyödyllisten suhteiden muodostumisen, osoita selkeästi lämpöä ja säilytä muutama säännöllinen kontaktipiste.',
      high: 'Korkeampi pistemäärä voi saada suhdetta, luottamusta ja uusia yhteyksiä helposti syntymään. Jos ystävällisyys johtaa ylisitoutumiseen tai luottamukseen ennen kuin se on ansaittu, ryhdy paljastamaan itsesi, tarkista tärkeät väitteet ja jätä tilaa sanoa ei.'
    },
    'E.2': {
      low: 'Pienempi pistemäärä voi tarjota keskittymistä, mukavuutta yksinäisyyteen ja vähemmän riippuvuutta ryhmästimulaatiosta. Jos yksinäisyys muuttuu eristäytyneeksi tai ryhmistä tulee yhä vaikeampaa, valitse pienempiä kokoontumisia ja suunnittele toipumisaika sen sijaan, että vältät kontakteja kokonaan.',
      high: 'Korkeampi pistemäärä voi tuoda energiaa ryhmiin ja auttaa luomaan sosiaalista vauhtia. Jos yritys syrjäyttää keskittyneen työn tai tekee yksinolosta epämukavaa, suojele keskeytymätöntä aikaa ja harjoittele kuuntelua ilman, että sinun tarvitsee pitää vuorovaikutusta liikkeellä.'
    },
    'E.3': {
      low: 'Alempi pistemäärä voi tehdä tilaa kuuntelemiselle, yhteistyölle ja muiden ihmisten johtajuudelle. Jos tarpeesi tai asiantuntemuksesi jää näkymättömiin, valmistele yksi selkeä lause, esitä suora pyyntö tai puhu kerran keskustelun alussa.',
      high: 'Korkeampi pistemäärä voi auttaa ryhmää tekemään päätöksiä ja ohjata, kun muut epäröivät. Jos viet liikaa tilaa, kysy eriäviä näkemyksiä, odota ennen vastaamista ja kerro omistajuus selkeästi sen sijaan, että oletat samaa mieltä.'
    },
    'E.4': {
      low: 'Pienempi pistemäärä voi tukea kiireetöntä vauhtia ja jatkuvaa huomiota ilman jatkuvaa liikettä. Jos tärkeä työ viivästyy toistuvasti, valitse pieni määrä prioriteetteja ja anna niille näkyvät määräajat tai aikalohkot.',
      high: 'Korkeampi pistemäärä voi luoda vauhtia ja vahvaa toimintakykyä. Jos toiminnasta tulee ylikuormitusta tai kiirettä ilman edistymistä, erota liike tuloksista ja ajoita puskurit ja palautuminen yhtä tarkoituksella kuin tehtävät.'
    },
    'E.5': {
      low: 'Alempi pistemäärä voi edistää turvallisuutta, vakautta ja tyytyväisyyttä ilman voimakasta stimulaatiota. Jos uutuuden välttäminen kaventaa valintojasi, kokeile pieniä, palautuvia kokeita, joiden riskit ovat tiedossa etukäteen.',
      high: 'Korkeampi pistemäärä voi tukea rohkeutta, tutkimista ja elävien kokemusten nauttimista. Jos ikävystyminen aiheuttaa tarpeettomia riskejä, aseta rajat ennen kuin jännitys nousee ja etsi stimulaatiota ympäristöissä, joissa haittapuoli on hillitty.'
    },
    'E.6': {
      low: 'Alempi pistemäärä voi tuoda vakavuutta ja realistista sävyä, kun optimismi tuntuu väärältä. Jos arvostus tai lämpö jää piiloon, sano se selkeästi ja luo pieniä tilaisuuksia nautintoon sen sijaan, että odotat positiivisen tunteen ilmaantuvan itsestään.',
      high: 'Korkeampi pistemäärä voi kohottaa ryhmän moraalia ja tehdä positiivisista kokemuksista helposti havaittavissa. Jos iloisuus hämärtää kipua tai riskiä, ​​tunnusta ensin, mikä on vaikeaa, ja etsi sitten toivoa tosiasiaa kiistämättä.'
    },
    'O.1': {
      low: 'Alempi pistemäärä voi tukea konkreettista ajattelua ja huomiota siihen, mikä on käytännöllistä ja havaittavissa. Jos tutut vastaukset syrjäyttävät parempia mahdollisuuksia, luo useita vaihtoehtoja ennen kuin arvioit, mikä niistä on realistinen.',
      high: 'Korkeampi pistemäärä voi tukea luovuutta, henkistä simulaatiota ja alkuperäisiä yhteyksiä. Jos ideat jäävät päiväunelmiin tai hajauttaa huomiota, vangitse ne, valitse yksi ja tee siitä pienin konkreettinen testi.'
    },
    'O.2': {
      low: 'Alempi pistemäärä voi pitää huomion toiminnassa, selkeydessä ja suorassa hyödyllisyydessä. Jos esteettinen kokemus tai korjaava kauneus laiminlyödään jatkuvasti, kokeile sitä lyhyillä, matalapaineisilla tavoilla ja huomaa, mikä aidosti kiinnittää huomiosi.',
      high: 'Korkeampi pistemäärä voi terävöidä muotoherkkyyttä, kauneutta ja hienovaraisia yksityiskohtia. Jos esteettiset standardit vievät liikaa aikaa tai ohittavat toiminnot, määritä ensin käytännön rajoitukset ja päätä, missä hienosäätö on todella sen arvoista.'
    },
    'O.3': {
      low: 'Alhaisempi pistemäärä voi tukea malttia ja päätöksiä, joita hetken tunnelma vaikuttaa vähemmän. Jos tunteita on vaikea tunnistaa tai muiden ihmisten signaalit jäävät huomaamatta, keskeytä lyhyt kehon ja tunteiden tarkistus ennen kuin päätät, mitä tarvitaan.',
      high: 'Korkeampi pistemäärä voi tukea emotionaalista tietoisuutta, empatiaa ja vivahteikkaana sisäistä elämää. Jos tunteet muuttuvat ylivoimaisiksi tai sanelevat päätöksiä, nimeä tunne, anna sen asettua ja erottaa tuntemasi todisteista.'
    },
    'O.4': {
      low: 'Alempi pistemäärä voi tukea jatkuvuutta, hallintaa ja luotettavia rutiineja. Jos rutiinista tulee jäykkyyttä tai uutuuden pelkoa, tee yksi pieni, palautuva muutos ja pidä muu rakenne tuttuina.',
      high: 'Korkeampi pistemäärä voi tukea sopeutumiskykyä ja oppimista tutkimisen kautta. Jos uutuus aiheuttaa epävakautta tai keskeneräisiä sitoumuksia, säilytä muutama ei-neuvoteltavissa oleva ankkuri ajalle, rahalle ja vastuulle.'
    },
    'O.5': {
      low: 'Tämä näkökohta koskee kiinnostusta monimutkaisiin ja abstrakteihin ideoihin, ei älykkyyteen tai älykkyysosamäärään. Alempi pistemäärä voi suosia käytännön päätöksiä; Jos tuntemattomat ideat hylätään liian nopeasti, kysy, mitkä todisteet muuttaisivat mielesi ja opit vain sen, mitä päätös vaatii.',
      high: 'Korkeampi pistemäärä voi tukea analyysiä, uteliaisuutta ja mukavuutta monimutkaisuuden kanssa. Jos ajattelu muuttuu loputtomaksi keskusteluksi tai analyysin halvaantumiseksi, määrittele päätöksen kriteeri ja määräaika ennen kuin jatkat tutkimista.'
    },
    'O.6': {
      low: 'Pienempi pistemäärä voi säilyttää hyödylliset perinteet, yhteiset odotukset ja sosiaalinen jatkuvuus. Jos sopimusta ei kyseenalaista tai se sulkee pois asiaankuuluvat näkökulmat, tarkista säännön syy ja kysy, ketä se koskee.',
      high: 'Korkeampi pistemäärä voi tukea normien kriittistä tarkastelua ja rakentavaa uudistusta. Jos uutuus käsitellään automaattisesti parempana, testaa muutoksia pienin askelin ja säilytä olemassa olevan käytännön osat, jotka vielä toimivat.'
    },
    'A.1': {
      low: 'Pienempi pistemäärä voi auttaa sinua huomaamaan epäjohdonmukaisuudet ja suojella itseäsi, kun panokset ovat korkeat. Jos epäily estää yhteistyön, kalibroi luottamus sen sijaan, että myönnät tai pidättäisit sen kerralla: aloita pienillä sitoumuksilla ja päivitä todisteista.',
      high: 'Korkeampi pistemäärä voi helpottaa avoimuutta ja yhteistyötä. Jos hyvässä uskossa olet avoin hyväksikäytölle, tarkista korkean panoksen väitteet, tee odotukset selväksi ja pidä rajat jopa sellaisten ihmisten kanssa, joista pidät.'
    },
    'A.2': {
      low: 'Alempi pistemäärä voi tukea tahdikkuutta, neuvottelua ja strategista yksityisyyttä. Jos se luo manipulointia tai epäselvyyttä, erota laillinen raja petoksesta ja tee sitoumuksia kielellä, jonka toinen henkilö voi tarkistaa.',
      high: 'Korkeampi pistemäärä voi lisätä luotettavuutta suoruuden ja läpinäkyvyyden avulla. Jos rehellisyys muuttuu suoraselkäisyydestä tai ylijakamisesta, yhdistä totuus ajoitukseen, merkityksellisyyteen ja huolehdi siitä, miten se välitetään.'
    },
    'A.3': {
      low: 'Pienempi pistemäärä voi suojata rajoitetun ajan ja edistää muiden ihmisten autonomiaa. Jos muut kokevat sinut saavuttamattomiksi tai vastavuoroisuus heikkenee, valitse avun muoto, jota voit tukea, ja kerro sen laajuus selkeästi.',
      high: 'Korkeampi pistemäärä voi luoda vahvaa tukea ja yhteisöllisyyden tunnetta. Jos auttaminen aiheuttaa työuupumusta tai estää muita ottamasta vastuuta, kysy, halutaanko apua, sovi rajoista, äläkä tee jokaisesta tarpeesta velvollisuuttasi.'
    },
    'A.4': {
      low: 'Alempi pistemäärä voi auttaa puolustamaan standardeja ja ratkaisemaan konflikteja suoraan. Jos erimielisyydestä tulee krooninen kitka, erota neuvottelemattomat tarpeet joustavista vaihtoehdoista ja käytä yhteisiä kriteerejä voiman sijaan.',
      high: 'Korkeampi pistemäärä voi lieventää konflikteja ja suojata yhteistyötä. Jos harmoniaa hankitaan myöntämällä tärkeitä tarpeita, ilmoita raja selkeästi ja salli kunnioittava erimielisyys käsittelemättä sitä suhteen epäonnistumisena.'
    },
    'A.5': {
      low: 'Alempi pistemäärä voi tukea itsensä puolustamista ja tehdä panokset näkyväksi. Jos luottamus kuullaan ylivoimana tai muiden työ katoaa, esitä väitteitä todisteilla ja jaa luotto tarkasti.',
      high: 'Korkeampi pistemäärä voi pitää huomion työssä ja helpottaa yhteistyötä. Jos panoksesi jää toistuvasti huomiotta, kuvaile tekosi ja sen vaikutus tosiasiallisesti; tarkka itsensä esittäminen ei ole ylimielisyyttä.'
    },
    'A.6': {
      low: 'Alempi pistemäärä voi tukea objektiivisuutta ja vaikeita päätöksiä, jotka eivät voi tyydyttää kaikkia. Jos ihmiset kokevat päätöksen kylmäksi tai sen inhimillinen hinta jää huomaamatta, kysy, kuka kantaa taakan ja yhdistä perustelut selkeään selitykseen.',
      high: 'Korkeampi pistemäärä voi tukea myötätuntoa ja kärsimyksen nopeaa tunnustamista. Jos empatia väsyy tai ohittaa olennaiset tosiasiat, aseta tunnerajat ja tarkista, mikä apu todella parantaa tilannetta.'
    },
    'C.1': {
      low: 'Alempi pistemäärä voi kannustaa varovaisuuteen, valmistautumiseen ja avun pyytämiseen, kun sitä tarvitaan. Jos itseluottamus estää sinua aloittamasta, pilkko tehtävä pieniksi paloiksi ja käytä suoritettuja vaiheita todisteena kyvystäsi.',
      high: 'Korkeampi pistemäärä voi tukea omistajuutta, sinnikkyyttä ja luottamusta ongelmien ratkaisemiseen. Jos luottamus muuttuu yliarviointiksi tai haluttomuus hakea apua, suorita lyhyt esikuolema ja pyydä asiantuntevaa henkilöä haastamaan suunnitelma.'
    },
    'C.2': {
      low: 'Alempi pistemäärä voi tukea joustavuutta ja improvisaatiota suunnitelmien muuttuessa. Jos epäjärjestys maksaa aikaa tai saa velvollisuudet katoamaan, luo vain muutama luotettava koti, luettelo ja rutiinit tärkeimmille asioille.',
      high: 'Korkeampi pistemäärä voi tehdä työstä selkeää, luotettavaa ja helpon jatkaa. Jos järjestys muuttuu perfektionismiksi tai muutoksesta tulee ahdistavaa, määrittele mikä on tarpeeksi hyvää ja jätä suunnitelmaan tietoinen löysyys.'
    },
    'C.3': {
      low: 'Alempi pistemäärä voi auttaa kyseenalaistamaan sääntöjä ja mukauttamaan velvoitteita kontekstiin. Jos muut eivät voi luottaa sitoumuksiisi tai eettisiä kulmia leikataan, lupaa selkeästi ja yhdistä jokainen velvollisuus uudelleen siihen tarkoitukseen, jolla sillä on merkitystä.',
      high: 'Korkeampi pistemäärä voi tukea eheyttä ja luotettavaa seurantaa. Jos velvollisuus luo jäykkyyttä tai kestämätöntä kuormaa, aseta kilpailevat velvoitteet tärkeysjärjestykseen ja neuvottele ne uudelleen ajoissa sen sijaan, että kantaisit niitä kaikkia hiljaa.'
    },
    'C.4': {
      low: 'Alempi pistemäärä voi suojella tasapainoa ja mahdollistaa tyytyväisyyden ilman jatkuvaa kilpailua. Jos se pysähtyy tai jättää arvostetut kyvyt käyttämättä, valitse henkilökohtaisesti merkityksellinen tavoite ja määritä seuraava pieni virstanpylväs.',
      high: 'Korkeampi pistemäärä voi tukea mestaruutta ja jatkuvaa pyrkimystä vaativiin tavoitteisiin. Jos itsetunto sidotaan tuotoksiin tai vaivannäöstä tulee työuupumusta, määrittele mikä lasketaan riittäväksi ja suojele lepoa ja saavutuksiin liittymättömiä rooleja.'
    },
    'C.5': {
      low: 'Alempi pistemäärä voi tukea spontaanisuutta ja reagointikykyä muuttuviin prioriteetteihin. Jos aloittaminen tai lopettaminen on toistuvasti vaikeaa, pienennä ensimmäistä askelta, muuta ympäristöä ja lisää näkyvä vihje tai toisen henkilön vastuu.',
      high: 'Korkeampi pistemäärä voi tukea seurantaa myös silloin, kun motivaatio on alhainen. Jos sinnikkyys jatkuu pienenevän tuoton jälkeen, aseta pysäytyssäännöt ja tarkista, ansaitseeko tavoite edelleen vaivaa.'
    },
    'C.6': {
      low: 'Pienempi pistemäärä voi tukea nopeutta, kokeilua ja toimintaa epätäydellisillä tiedoilla. Jos estettävissä olevat virheet toistuvat, lisää lyhyt tauko ja tarkistuslista ennen kalliita tai vaikeasti peruttavia päätöksiä.',
      high: 'Korkeampi pistemäärä voi tukea riskianalyysiä ja huolellisia, laadukkaita päätöksiä. Jos varovaisuus aiheuttaa ajoituksen myöhästymisen tai toistuvan märehtimisen, aseta päätöksenteolle määräaika ja valitse käännettävä pilotti varmuuden odottamisen sijaan.'
    }
  },
  fr: {
    'N.1': {
      low: 'Un score inférieur peut vous aider à rester calme et à empêcher l’incertitude de prendre le dessus. Si ce calme vous amène à sous-estimer les risques ou à vous préparer trop peu, énumérez le risque le plus probable et une solution de repli avant de prendre une décision importante.',
      high: 'Un score plus élevé peut vous aider à détecter rapidement les risques et les signes avant-coureurs. Si l’inquiétude consomme votre attention à plusieurs reprises, séparez ce qui est possible de ce qui est probable, fixez une limite au temps d’inquiétude et choisissez une prochaine action concrète ; demandez l’aide d’un professionnel si cela perturbe de manière persistante la vie quotidienne.'
    },
    'N.2': {
      low: "Un score inférieur peut vous rendre d'humeur égale et difficile à provoquer. Si vous avez tendance à réprimer une colère légitime ou à ne pas énoncer de limites, nommez le problème dès le début et décrivez le comportement que vous souhaitez modifier.",
      high: "Un score plus élevé peut vous permettre de détecter rapidement l’injustice et de défendre ce qui compte. Si la colère exacerbe les conflits ou entraîne des réactions impulsives, faites une pause avant de répondre et indiquez le comportement spécifique, l'impact et le besoin au lieu d'attaquer la personne."
    },
    'N.3': {
      low: "Un score inférieur favorise souvent la récupération émotionnelle et une énergie stable. Si cela rend la tristesse d'une autre personne ou votre propre besoin de repos facile à ignorer, ralentissez, écoutez et reconnaissez la perte avant d'essayer de la résoudre.",
      high: "Un score plus élevé peut rendre la déception et la perte particulièrement marquantes, ce qui peut révéler ce qui compte profondément pour vous. Une mauvaise humeur persistante n'est pas quelque chose que vous devez traiter comme un simple trait de caractère : limitez vos routines et vos tâches, restez en contact avec des personnes de confiance et recherchez l'aide d'un professionnel lorsque cela dure ou nuit à la vie quotidienne."
    },
    'N.4': {
      low: "Un score inférieur peut rendre les situations sociales plus détendues et réduire la peur du jugement. Si vous manquez parfois la façon dont vous vous présentez, demandez des commentaires spécifiques et vérifiez la réponse de l'autre personne plutôt que de supposer que tout s'est bien passé.",
      high: 'Un score plus élevé peut vous rendre attentif aux attentes sociales et aux réactions des autres. Si l’autosurveillance se transforme en rumination ou en évitement, portez votre attention sur la tâche partagée, abordez les situations difficiles progressivement et jugez l’interaction sur la base de preuves plutôt que d’un examen minutieux imaginaire.'
    },
    'N.5': {
      low: "Un score inférieur soutient la retenue et la capacité de retarder la gratification. Si la retenue devient un excès de contrôle ou laisse trop peu de place au plaisir, faites délibérément de la place à une spontanéité inoffensive au lieu d'attendre que la pression monte.",
      high: "Un score plus élevé peut apporter de la spontanéité, de l’appétit et du plaisir d’une expérience immédiate. Si des envies répétées créent des coûts que vous regretterez plus tard, ajoutez des frictions avant d'agir : attendez, supprimez les déclencheurs, fixez des limites à l'avance ou rendez le choix souhaité à long terme plus facile à atteindre."
    },
    'N.6': {
      low: 'Un score inférieur peut vous aider à penser clairement et à agir de manière constante sous pression. Si cela vous amène à sous-estimer la tension chez vous ou chez les autres, planifiez des imprévus et prenez le temps de faire un débriefing et de récupérer après des périodes exigeantes.',
      high: "Un score plus élevé peut vous faire remarquer rapidement une surcharge et demander de l'aide avant que les ressources ne s'épuisent. Si la pression provoque un blocage ou une confusion, réduisez les demandes simultanées, répétez les premières étapes à l'avance et utilisez un plan écrit simple lorsque le stress est élevé."
    },
    'E.1': {
      low: 'Un score inférieur peut favoriser l’indépendance et un cercle social restreint et sélectif. Si la réserve est confondue avec du désintérêt ou empêche la formation de relations utiles, signalez explicitement votre chaleur et maintenez quelques points de contact réguliers.',
      high: "Un score plus élevé peut faciliter l’établissement de relations, de confiance et de nouvelles connexions. Si la convivialité conduit à un engagement excessif ou à une confiance avant qu'elle ne soit gagnée, ralentissez la divulgation, vérifiez les affirmations importantes et laissez la possibilité de dire non."
    },
    'E.2': {
      low: "Un score inférieur peut apporter de la concentration, du confort dans la solitude et moins de dépendance à l’égard de la stimulation de groupe. Si la solitude se transforme en isolement ou si les groupes deviennent de plus en plus difficiles, choisissez des rassemblements plus petits et prévoyez un temps de récupération plutôt que d'éviter complètement les contacts.",
      high: "Un score plus élevé peut apporter de l’énergie aux groupes et contribuer à créer une dynamique sociale. Si l'entreprise évince le travail ciblé ou rend la solitude inconfortable, protégez le temps ininterrompu et entraînez-vous à écouter sans avoir besoin de maintenir l'interaction en mouvement."
    },
    'E.3': {
      low: 'Un score inférieur peut laisser place à l’écoute, à la coopération et au leadership des autres. Si vos besoins ou votre expertise restent invisibles, préparez une phrase claire, faites une demande directe ou parlez une fois au début de la discussion.',
      high: 'Un score plus élevé peut aider un groupe à prendre des décisions et à donner une direction lorsque d’autres hésitent. Si vous prenez trop de place, demandez des opinions dissidentes, attendez avant de répondre et explicitez la propriété plutôt que de supposer un accord.'
    },
    'E.4': {
      low: 'Un score inférieur peut favoriser un rythme tranquille et une attention soutenue sans mouvement constant. Si un travail important est retardé à plusieurs reprises, choisissez un petit nombre de priorités et fixez-leur des délais ou des plages de temps visibles.',
      high: "Un score plus élevé peut créer une dynamique et une forte capacité d’action. Si l'activité devient une surcharge ou une activité sans progrès, distinguez le mouvement des résultats et planifiez des tampons et une récupération aussi délibérément que les tâches."
    },
    'E.5': {
      low: 'Un score inférieur peut favoriser la sécurité, la stabilité et la satisfaction sans stimulation intense. Si éviter la nouveauté restreint vos choix, essayez de petites expériences réversibles dont les risques sont connus à l’avance.',
      high: 'Un score plus élevé peut soutenir le courage, l’exploration et le plaisir d’expériences vives. Si l’ennui entraîne des risques inutiles, fixez des limites avant que l’excitation ne monte et recherchez une stimulation dans des contextes où les inconvénients sont contenus.'
    },
    'E.6': {
      low: 'Un score inférieur peut apporter du sérieux et un ton réaliste alors que l’optimisme semble faux. Si l’appréciation ou la chaleur restent cachées, dites-le clairement et créez de petites occasions de plaisir au lieu d’attendre que des sentiments positifs apparaissent d’eux-mêmes.',
      high: 'Un score plus élevé peut remonter le moral du groupe et rendre les expériences positives faciles à remarquer. Si la joie occulte la douleur ou le risque, reconnaissez d’abord ce qui est difficile, puis cherchez l’espoir sans nier les faits.'
    },
    'O.1': {
      low: 'Un score inférieur peut soutenir une réflexion concrète et une attention portée à ce qui est pratique et observable. Si des réponses familières évincent de meilleures possibilités, générez plusieurs alternatives avant d’évaluer laquelle est réaliste.',
      high: 'Un score plus élevé peut soutenir la créativité, la simulation mentale et les connexions originales. Si des idées restent dans les rêveries ou dispersent l’attention, capturez-les, choisissez-en une et transformez-la en le plus petit test tangible.'
    },
    'O.2': {
      low: 'Un score inférieur peut attirer l’attention sur la fonction, la clarté et l’utilité directe. Si l’expérience esthétique ou la beauté réparatrice est systématiquement négligée, goûtez-y de manière brève et sans pression et remarquez ce qui retient véritablement votre attention.',
      high: "Un score plus élevé peut aiguiser la sensibilité à la forme, à la beauté et aux détails subtils. Si les normes esthétiques prennent trop de temps ou prennent le pas sur la fonction, définissez d'abord les contraintes pratiques et décidez où le raffinement en vaut vraiment la peine."
    },
    'O.3': {
      low: 'Un score inférieur peut favoriser le sang-froid et des décisions moins influencées par l’humeur du moment. Si les sentiments deviennent difficiles à identifier ou si les signaux des autres sont manqués, faites une pause pour un bref examen de votre corps et de vos émotions avant de décider ce qui est nécessaire.',
      high: 'Un score plus élevé peut favoriser la conscience émotionnelle, l’empathie et une vie intérieure nuancée. Si les sentiments deviennent accablants ou dictent des décisions, nommez l’émotion, laissez-la s’installer et distinguez ce que vous ressentez de ce que montrent les preuves.'
    },
    'O.4': {
      low: 'Un score inférieur peut soutenir la continuité, la maîtrise et des routines fiables. Si la routine devient rigidité ou peur de la nouveauté, introduisez un petit changement réversible tout en gardant le reste de la structure familier.',
      high: "Un score plus élevé peut favoriser l’adaptabilité et l’apprentissage par l’exploration. Si la nouveauté crée de l'instabilité ou des engagements inachevés, conservez quelques points d'ancrage non négociables pour le temps, l'argent et les responsabilités."
    },
    'O.5': {
      low: 'Cette facette concerne l’intérêt pour les idées complexes et abstraites, et non l’intelligence ou le QI. Un score inférieur peut favoriser des décisions pratiques ; si des idées peu familières sont rejetées trop rapidement, demandez quelles preuves pourraient vous faire changer d’avis et apprenez uniquement ce qu’exige la décision.',
      high: 'Un score plus élevé peut soutenir l’analyse, la curiosité et l’aisance face à la complexité. Si la réflexion se transforme en débat sans fin ou en paralysie de l’analyse, définissez le critère de décision et le délai avant d’approfondir votre réflexion.'
    },
    'O.6': {
      low: 'Un score inférieur peut préserver les traditions utiles, les attentes partagées et la continuité sociale. Si la convention n’est pas remise en question ou exclut des perspectives pertinentes, revisitez la raison de la règle et demandez qui en est affecté.',
      high: 'Un score plus élevé peut soutenir un examen critique des normes et une réforme constructive. Si la nouveauté est automatiquement considérée comme meilleure, testez les changements par petites étapes et préservez les parties des pratiques existantes qui fonctionnent encore.'
    },
    'A.1': {
      low: 'Un score inférieur peut vous aider à remarquer des incohérences et à vous protéger lorsque les enjeux sont élevés. Si les soupçons bloquent la coopération, calibrez la confiance au lieu de l’accorder ou de la refuser d’un seul coup : commencez par de petits engagements et mettez à jour les preuves.',
      high: 'Un score plus élevé peut faciliter l’ouverture et la coopération. Si la bonne foi vous expose à l’exploitation, vérifiez les allégations à enjeux élevés, explicitez vos attentes et gardez des limites même avec les personnes que vous aimez.'
    },
    'A.2': {
      low: "Un score inférieur peut favoriser le tact, la négociation et la confidentialité stratégique. Si cela crée une manipulation ou une ambiguïté, distinguez une frontière légitime de la tromperie et prenez des engagements dans un langage que l'autre personne peut vérifier.",
      high: 'Un score plus élevé peut renforcer la fiabilité grâce à la franchise et à la transparence. Si l’honnêteté se transforme en franchise ou en partage excessif, combinez la vérité avec le timing, la pertinence et le soin apporté à la manière dont elle est transmise.'
    },
    'A.3': {
      low: "Un score inférieur peut protéger un temps limité et encourager l'autonomie des autres. Si les autres vous considèrent comme indisponible ou si la réciprocité s’érode, choisissez une forme d’aide que vous pouvez soutenir et indiquez clairement sa portée.",
      high: "Un score plus élevé peut créer un fort soutien et un sentiment de communauté. Si aider provoque un épuisement professionnel ou empêche les autres d'assumer leurs responsabilités, demandez si de l'aide est nécessaire, convenez des limites et ne faites pas de chaque besoin votre obligation."
    },
    'A.4': {
      low: 'Un score inférieur peut aider à défendre les normes et à résoudre directement les conflits. Si le désaccord devient une friction chronique, séparez les besoins non négociables des options flexibles et utilisez des critères partagés plutôt que la force.',
      high: 'Un score plus élevé peut désamorcer les conflits et protéger la coopération. Si l’harmonie s’achète en concédant des besoins importants, énoncez clairement les limites et autorisez les désaccords respectueux sans les considérer comme un échec relationnel.'
    },
    'A.5': {
      low: 'Un score inférieur peut soutenir l’auto-représentation et rendre les contributions visibles. Si la confiance se manifeste alors que la supériorité ou le travail des autres disparaît, faites des réclamations avec des preuves et partagez le crédit avec précision.',
      high: 'Un score plus élevé peut maintenir l’attention sur le travail et faciliter la collaboration. Si votre contribution est négligée à plusieurs reprises, décrivez ce que vous avez fait et ses effets de manière factuelle ; une représentation exacte de soi n’est pas de l’arrogance.'
    },
    'A.6': {
      low: 'Un score inférieur peut favoriser l’objectivité et prendre des décisions difficiles qui ne peuvent pas satisfaire tout le monde. Si les gens considèrent la décision comme froide ou si son coût humain est oublié, demandez-vous qui porte le fardeau et associez le raisonnement à une explication claire.',
      high: 'Un score plus élevé peut soutenir la compassion et la reconnaissance rapide de la souffrance. Si l’empathie s’épuise ou l’emporte sur les faits pertinents, fixez des limites émotionnelles et vérifiez quelle aide améliorera réellement la situation.'
    },
    'C.1': {
      low: 'Un score inférieur peut encourager la prudence, la préparation et la demande d’aide lorsque cela est nécessaire. Si le doute vous empêche de commencer, divisez la tâche en petits morceaux et utilisez les étapes terminées comme preuve de votre capacité.',
      high: 'Un score plus élevé peut soutenir l’appropriation, la persévérance et la confiance dans la résolution des problèmes. Si la confiance devient une surestimation ou une réticence à demander de l’aide, effectuez une brève autopsie et demandez à une personne bien informée de contester le plan.'
    },
    'C.2': {
      low: 'Un score inférieur peut favoriser la flexibilité et l’improvisation lorsque les plans changent. Si le désordre coûte du temps ou fait disparaître les obligations, créez seulement quelques foyers, listes et routines fiables pour les choses qui comptent le plus.',
      high: 'Un score plus élevé peut rendre le travail clair, fiable et facile à reprendre. Si l’ordre se transforme en perfectionnisme ou si le changement devient pénible, définissez ce qui est suffisant et laissez délibérément du temps libre dans le plan.'
    },
    'C.3': {
      low: 'Un score inférieur peut aider à remettre en question les règles et à adapter les obligations au contexte. Si les autres ne peuvent pas compter sur vos engagements ou si des compromis éthiques sont rognés, faites des promesses explicites et reconnectez chaque obligation à la raison pour laquelle elle compte.',
      high: 'Un score plus élevé peut garantir l’intégrité et un suivi fiable. Si le devoir crée une rigidité ou une charge insoutenable, classez les obligations concurrentes et renégociez-les tôt au lieu de les assumer toutes en silence.'
    },
    'C.4': {
      low: 'Un score inférieur peut protéger l’équilibre et permettre la satisfaction sans concurrence constante. Si cela devient une stagnation ou laisse des capacités précieuses inutilisées, choisissez un objectif personnellement significatif et définissez la prochaine petite étape.',
      high: 'Un score plus élevé peut soutenir la maîtrise et un effort soutenu vers des objectifs exigeants. Si l’estime de soi devient liée au rendement ou si l’effort devient un épuisement professionnel, définissez ce qui compte comme suffisant et protégez le repos et les rôles sans rapport avec la réussite.'
    },
    'C.5': {
      low: "Un score inférieur peut favoriser la spontanéité et la réactivité aux priorités changeantes. Si commencer ou terminer est difficile à plusieurs reprises, réduisez la première étape, modifiez l'environnement et ajoutez un indice visible ou la responsabilité d'une autre personne.",
      high: 'Un score plus élevé peut favoriser le suivi même lorsque la motivation est faible. Si la persévérance persiste au-delà des rendements décroissants, définissez des règles d’arrêt et vérifiez si l’objectif mérite toujours l’effort.'
    },
    'C.6': {
      low: 'Un score inférieur peut favoriser la rapidité, l’expérimentation et l’action avec des informations incomplètes. Si des erreurs évitables se reproduisent, ajoutez une courte pause et une liste de contrôle avant les décisions coûteuses ou difficiles à annuler.',
      high: 'Un score plus élevé peut soutenir une analyse des risques et des décisions prudentes et de haute qualité. Si la prudence entraîne des manques de timing ou des ruminations répétées, fixez un délai de décision et préférez un pilote réversible plutôt que d’attendre la certitude.'
    }
  },
  he: {
    'N.1': {
      low: 'ציון נמוך יותר יכול לעזור לך להישאר רגוע ולמנוע אי ודאות להשתלט. אם הרוגע הזה מוביל אותך לזלזל בסיכונים או להתכונן מעט מדי, רשום את הסיכון הסביר ביותר וכשל אחד לפני החלטה חשובה.',
      high: 'ציון גבוה יותר יכול לעזור לך להבחין בסיכונים ובסימני אזהרה מוקדם. אם דאגה גוזלת את תשומת הלב שלך שוב ושוב, הפרידו את האפשרי מהסביר, הגדירו מגבלה על זמן הדאגה ובחרו פעולה קונקרטית אחת הבאה; חפש תמיכה מקצועית אם זה משבש בהתמדה את חיי היומיום.'
    },
    'N.2': {
      low: 'ציון נמוך יותר יכול לגרום לך להיות שקול וקשה להתגרות. אם אתה נוטה להדחיק כעס לגיטימי או להשאיר גבולות לא ברורים, שם את הבעיה מוקדם ותאר את ההתנהגות שאתה רוצה לשנות.',
      high: 'ציון גבוה יותר יכול לגרום לך למהר לזהות חוסר הוגנות ולהגן על מה שחשוב. אם הכעס מסלים קונפליקטים או מניע תגובות אימפולסיביות, השהה לפני שתגיב וציין את ההתנהגות, ההשפעה והצורך הספציפיים במקום לתקוף את האדם.'
    },
    'N.3': {
      low: 'ציון נמוך יותר תומך לרוב בהתאוששות רגשית ובאנרגיה יציבה. אם זה הופך את העצב של אדם אחר או את הצורך שלך למנוחה בקלות להתעלם ממנו, האטו, הקשיבו והכירו באובדן לפני שתנסו לפתור אותו.',
      high: 'ציון גבוה יותר עשוי להפוך את האכזבה וההפסד לבולטים במיוחד, מה שיכול לחשוף מה חשוב לך מאוד. מצב רוח ירוד מתמשך אינו משהו שאתה צריך להתייחס אליו כאל תכונה בלבד: הקפידו על שגרה ומשימות קטנות, הישארו מחוברים לאנשים מהימנים, וחפשו תמיכה מקצועית כאשר זה נמשך או פוגע בחיי היומיום.'
    },
    'N.4': {
      low: 'ציון נמוך יותר יכול לגרום למצבים חברתיים להרגיש רגועים ולהפחית את הפחד משיפוטיות. אם לפעמים אתה מתגעגע לאופן שבו אתה נתקל, בקש משוב ספציפי ובדוק את תגובתו של האדם האחר במקום להניח שהכל נחת כמו שצריך.',
      high: 'ציון גבוה יותר יכול לגרום לך להיות קשוב לציפיות החברתיות ולתגובות של אנשים אחרים. אם ניטור עצמי הופך להרהור או הימנעות, העבירו את תשומת הלב למשימה המשותפת, גשו למצבים קשים בהדרגה ושפטו את האינטראקציה לפי ראיות ולא בדיקה מדומה.'
    },
    'N.5': {
      low: 'ציון נמוך יותר תומך באיפוק וביכולת לדחות סיפוקים. אם האיפוק הופך לשליטה יתר או מותיר מעט מדי מקום להנאה, פנה בכוונה מקום לספונטניות בלתי מזיקה במקום לחכות עד שהלחץ יגדל.',
      high: 'ציון גבוה יותר יכול להביא ספונטניות, תיאבון והנאה מחוויה מיידית. אם דחפים חוזרים ונשנים יוצרים עלויות שאתה מתחרט עליהן מאוחר יותר, הוסף חיכוך לפני שאתה פועל: המתן, הסר טריגרים, הגדר מראש גבולות או הפוך את הבחירה הרצויה לטווח ארוך קלה יותר להשגה.'
    },
    'N.6': {
      low: 'ציון נמוך יותר יכול לעזור לך לחשוב בבהירות ולפעול בהתמדה תחת לחץ. אם זה מוביל אותך לזלזל במתח בעצמך או באחרים, תכננו מקרים ופנו זמן לתחקיר ולהתאושש לאחר תקופות תובעניות.',
      high: 'ציון גבוה יותר יכול לגרום לך להבחין בעומס יתר מוקדם ולחפש תמיכה לפני שהמשאבים נגמרים. אם לחץ גורם להקפאה או לבלבול, צמצם דרישות בו-זמנית, עשה חזרות על הצעדים הראשונים מראש, והשתמש בתוכנית כתובה פשוטה כאשר הלחץ גבוה.'
    },
    'E.1': {
      low: 'ציון נמוך יותר יכול לתמוך בעצמאות ובמעגל חברתי קטן וסלקטיבי. אם מילואים טועים בטעות כחוסר עניין או מונעים מיצירת קשרים שימושיים, אותת חום במפורש ושמרו על כמה נקודות מגע קבועות.',
      high: 'ציון גבוה יותר יכול לגרום לקרבה, אמון וקשרים חדשים להגיע בקלות. אם ידידותיות מובילה למחויבות יתר או לאמון לפני שהיא מרוויחה, קצב חשיפה עצמית, אמת טענות חשובות והשאיר מקום לומר לא.'
    },
    'E.2': {
      low: 'ציון נמוך יותר יכול לספק מיקוד, נוחות עם בדידות ופחות תלות בגירוי קבוצתי. אם הבדידות הופכת לבידוד או שקבוצות הופכות לקשות יותר ויותר, בחרו בהתכנסויות קטנות יותר ותכננו את זמן ההתאוששות במקום להימנע לחלוטין ממגע.',
      high: 'ציון גבוה יותר יכול להביא אנרגיה לקבוצות ולעזור ליצור מומנטום חברתי. אם החברה דוחפת עבודה ממוקדת או גורם להתבודדות לא נוחה, הגן על זמן ללא הפרעה ותרגל הקשבה ללא צורך לשמור על האינטראקציה.'
    },
    'E.3': {
      low: 'ציון נמוך יותר יכול לפנות מקום להקשבה, שיתוף פעולה ומנהיגות של אנשים אחרים. אם הצרכים או המומחיות שלך נשארים בלתי נראים, הכינו משפט אחד ברור, הגש בקשה ישירה או דבר פעם אחת סמוך לתחילת הדיון.',
      high: 'ציון גבוה יותר יכול לעזור לקבוצה לקבל החלטות ולתת כיוון כאשר אחרים מהססים. אם אתה תופס יותר מדי מקום, בקש דעות סותרות, המתן לפני שתענה, והפוך את הבעלות למפורשת במקום להניח הסכמה.'
    },
    'E.4': {
      low: 'ציון נמוך יותר יכול לתמוך בקצב לא נמהר ובתשומת לב מתמשכת ללא תנועה מתמדת. אם עבודה חשובה מתעכבת שוב ושוב, בחר מספר קטן של סדרי עדיפויות ותן להם מועדים גלויים או בלוקים של זמן.',
      high: 'ציון גבוה יותר יכול ליצור מומנטום ויכולת פעולה חזקה. אם הפעילות הופכת לעומס יתר או לעמוס ללא התקדמות, הבדיל בין תנועה לתוצאות ותזמן מאגרים והתאוששות במכוון כמו משימות.'
    },
    'E.5': {
      low: 'ציון נמוך יותר יכול להעדיף בטיחות, יציבות ושביעות רצון ללא גירוי אינטנסיבי. אם הימנעות מחידוש מצמצמת את אפשרויות הבחירה שלך, נסה ניסויים קטנים הפיכים שהסיכונים שלהם ידועים מראש.',
      high: 'ציון גבוה יותר יכול לתמוך באומץ, חקירה והנאה מחוויות חיות. אם השעמום גורם לסיכון מיותר, הגדירו גבולות לפני שההתרגשות תעלה וחפשו גירוי בהגדרות שבהן החיסרון מוכל.'
    },
    'E.6': {
      low: 'ציון נמוך יותר יכול להביא רצינות וטון ריאלי כאשר אופטימיות תרגיש כוזבת. אם הערכה או חום נשארים חבויים, אמרו זאת בצורה ברורה וצרו אירועים קטנים להנאה במקום לצפות לתחושה חיובית שתופיע מעצמה.',
      high: 'ציון גבוה יותר יכול להעלות את המורל של הקבוצה ולהפוך חוויות חיוביות קלות להבחין בהן. אם העליזות מעלימה את הכאב או הסיכון, הכירו קודם במה שקשה, ואז חפשו תקווה מבלי להכחיש את העובדות.'
    },
    'O.1': {
      low: 'ציון נמוך יותר יכול לתמוך בחשיבה קונקרטית ובתשומת לב למה שמעשי וניתן לצפייה. אם תשובות מוכרות דוחקות אפשרויות טובות יותר, צור מספר חלופות לפני שתעריך איזו מהן מציאותית.',
      high: 'ציון גבוה יותר יכול לתמוך ביצירתיות, סימולציה מנטלית וקשרים מקוריים. אם רעיונות נשארים בחלומות בהקיץ או מפזרים תשומת לב, לכדו אותם, בחרו אחד והפכו אותו למבחן המוחשי הקטן ביותר.'
    },
    'O.2': {
      low: 'ציון נמוך יותר יכול לשמור על תפקוד, בהירות ושימושיות ישירה. אם החוויה האסתטית או היופי המשקם מוזנחים בעקביות, דגמו זאת בדרכים קצרות ובלחץ נמוך ושימו לב מה באמת מושך את תשומת הלב שלכם.',
      high: 'ציון גבוה יותר יכול לחדד את הרגישות לצורה, ליופי ולפרטים עדינים. אם תקנים אסתטיים צורכים יותר מדי זמן או עוקפים את הפונקציה, הגדר תחילה את האילוצים המעשיים והחליט היכן השכלול באמת שווה את זה.'
    },
    'O.3': {
      low: 'ציון נמוך יותר יכול לתמוך בקור רוח ובהחלטות שפחות מושפעות ממצב הרוח של הרגע. אם רגשות מתקשים לזהות או שהאותות של אנשים אחרים מתפספסים, עצרו לבדיקת גוף ורגשות קצרה לפני שתחליטו מה צריך.',
      high: 'ציון גבוה יותר יכול לתמוך במודעות רגשית, אמפתיה וחיים פנימיים בעלי ניואנסים. אם הרגשות הופכים למכריעים או מכתיבים החלטות, תן שם לרגש, אפשר לו להתיישב, והבדיל בין מה שאתה מרגיש לבין מה שהראיות מראות.'
    },
    'O.4': {
      low: 'ציון נמוך יותר יכול לתמוך בהמשכיות, שליטה ושגרות מהימנות. אם השגרה הופכת לנוקשות או פחד מחידוש, הכנס שינוי קטן אחד הפיך תוך שמירה על שאר המבנה מוכר.',
      high: 'ציון גבוה יותר יכול לתמוך בהסתגלות ובלמידה באמצעות חקר. אם חידוש יוצר חוסר יציבות או התחייבויות לא גמורות, שמור על כמה עוגנים בלתי ניתנים למשא ומתן עבור זמן, כסף ואחריות.'
    },
    'O.5': {
      low: 'הפן הזה נוגע לעניין ברעיונות מורכבים ומופשטים, לא באינטליגנציה או ב-IQ. ציון נמוך יותר יכול להעדיף החלטות מעשיות; אם רעיונות לא מוכרים נדחים מהר מדי, שאל אילו ראיות ישנו את דעתך ולמד רק מה דורשת ההחלטה.',
      high: 'ציון גבוה יותר יכול לתמוך בניתוח, סקרנות ונוחות עם מורכבות. אם החשיבה הופכת לוויכוח אינסופי או שיתוק ניתוח, הגדירו את קריטריון ההחלטה ואת המועד האחרון לפני שתחקור עוד.'
    },
    'O.6': {
      low: 'ציון נמוך יותר יכול לשמר מסורות שימושיות, ציפיות משותפות והמשכיות חברתית. אם האמנה אינה מוטלת בספק או שוללת נקודות מבט רלוונטיות, בדוק שוב את הסיבה לכלל ושאל מי מושפע ממנה.',
      high: 'ציון גבוה יותר יכול לתמוך בחינה ביקורתית של נורמות ורפורמה בונה. אם מתייחסים לחידוש כטוב יותר באופן אוטומטי, בדוק שינויים בצעדים קטנים ושמר את חלקי התרגול הקיים שעדיין עובדים.'
    },
    'A.1': {
      low: 'ציון נמוך יותר יכול לעזור לך להבחין בחוסר עקביות ולהגן על עצמך כאשר ההימור גבוה. אם חשד חוסם שיתוף פעולה, כייל את האמון במקום להעניק או לעכב אותו בבת אחת: התחל בהתחייבויות קטנות ועדכן מראיות.',
      high: 'ציון גבוה יותר יכול להקל על פתיחות ושיתוף פעולה. אם תום הלב משאיר אותך פתוח לניצול, בדוק טענות עם הימור גבוה, הגדירו ציפיות מפורשות ושמרו על גבולות גם עם אנשים שאתם אוהבים.'
    },
    'A.2': {
      low: 'ציון נמוך יותר יכול לתמוך בטקט, משא ומתן ופרטיות אסטרטגית. אם זה יוצר מניפולציה או אי בהירות, הבדיל גבול לגיטימי מהטעיה וקבל התחייבויות בשפה שהאדם האחר יכול לאמת.',
      high: 'ציון גבוה יותר יכול לבנות אמינות באמצעות ישירות ושקיפות. אם כנות הופכת לבוטות או שיתוף יתר, שלבו אמת עם תזמון, רלוונטיות ודאגה לאופן שבו היא מועברת.'
    },
    'A.3': {
      low: 'ציון נמוך יותר יכול להגן על זמן מוגבל ולעודד אוטונומיה של אנשים אחרים. אם אחרים חווים אותך כבלתי זמין או שההדדיות נשחקת, בחר צורת עזרה שתוכל לקיים וציין את היקפה בצורה ברורה.',
      high: 'ציון גבוה יותר יכול ליצור תמיכה חזקה ותחושת קהילה. אם עזרה גורמת לשחיקה או מונעת מאחרים לקחת אחריות, שאלו אם רוצים עזרה, הסכימו על גבולות, ואל תהפכו כל צורך לחובתכם.'
    },
    'A.4': {
      low: 'ציון נמוך יותר יכול לעזור להגן על סטנדרטים ולטפל בקונפליקט ישירות. אם אי הסכמה הופכת לחיכוך כרוני, הפרידו צרכים בלתי ניתנים למשא ומתן מאפשרויות גמישות והשתמשו בקריטריונים משותפים במקום בכוח.',
      high: 'ציון גבוה יותר יכול להסלים את הסכסוך ולהגן על שיתוף הפעולה. אם הרמוניה נרכשת על ידי ויתור על צרכים חשובים, ציין את הגבול בצורה ברורה ואפשר אי הסכמה מכבדת מבלי להתייחס אליה כאל כישלון במערכת היחסים.'
    },
    'A.5': {
      low: 'ציון נמוך יותר יכול לתמוך בהסברה עצמית ולהפוך את התרומות לגלויות. אם אמון נשמע כעליונות או שעבודתם של אחרים נעלמת, טען טענות עם ראיות ושתף קרדיט במדויק.',
      high: 'ציון גבוה יותר יכול לשמור על תשומת הלב בעבודה ולהקל על שיתוף הפעולה. אם מתעלמים מתרומתך שוב ושוב, תאר מה עשית והשפעתה עובדתית; ייצוג עצמי מדויק אינו יהירות.'
    },
    'A.6': {
      low: 'ציון נמוך יותר יכול לתמוך באובייקטיביות ובהחלטות קשות שלא יכולות לספק את כולם. אם אנשים חווים את ההחלטה כקרה או שהמחיר האנושי שלה מתפספס, שאלו מי נושא בנטל וצמדו לנמקה עם הסבר ברור.',
      high: 'ציון גבוה יותר יכול לתמוך בחמלה ובהכרה מהירה בסבל. אם האמפתיה הופכת לתשישות או עוקפת עובדות רלוונטיות, הציבו גבולות רגשיים וודאו איזו עזרה אכן תשפר את המצב.'
    },
    'C.1': {
      low: 'ציון נמוך יותר יכול לעודד זהירות, הכנה ובקשת עזרה כשצריך. אם הספק העצמי מונע ממך להתחיל, חלק את המשימה לחתיכות קטנות והשתמש בצעדים שהושלמו כהוכחה ליכולת.',
      high: 'ציון גבוה יותר יכול לתמוך בבעלות, התמדה וביטחון בפתרון בעיות. אם ביטחון עצמי הופך להערכת יתר או חוסר רצון לפנות לעזרה, בצע ניתוח טרום מוות קצר ובקש מאדם בעל ידע לערער על התוכנית.'
    },
    'C.2': {
      low: 'ציון נמוך יותר יכול לתמוך בגמישות ובאימפרוביזציה כאשר תוכניות משתנות. אם אי סדר עולה זמן או גורם להתחייבויות להיעלם, צור רק כמה בתים אמינים, רשימות ושגרות עבור הדברים החשובים ביותר.',
      high: 'ציון גבוה יותר יכול להפוך את העבודה לברורה, אמינה וקלה לחידוש. אם סדר הופך לפרפקציוניזם או ששינוי הופך להיות מעיק, הגדירו מה מספיק טוב והשאירו רפיון מכוון בתוכנית.'
    },
    'C.3': {
      low: 'ציון נמוך יותר יכול לעזור להטיל ספק בכללים ולהתאים חובות להקשר. אם אחרים לא יכולים לסמוך על ההתחייבויות שלך או שהפינות האתיות נחתכות, הבטח הבטחות מפורשות וחבר מחדש כל מחויבות לסיבה שהיא חשובה.',
      high: 'ציון גבוה יותר יכול לתמוך ביושרה ובמעקב אמין. אם החובה יוצרת קשיחות או עומס בלתי בר קיימא, דרג חובות מתחרות ושנה עליהן משא ומתן מוקדם במקום לשאת את כולן בשקט.'
    },
    'C.4': {
      low: 'ציון נמוך יותר יכול להגן על האיזון ולאפשר שביעות רצון ללא תחרות מתמדת. אם זה הופך לקיפאון או מותיר יכולות מוערכות ללא שימוש, בחר יעד בעל משמעות אישית והגדר את אבן הדרך הקטנה הבאה.',
      high: 'ציון גבוה יותר יכול לתמוך בשליטה ובמאמץ מתמשך לעבר מטרות תובעניות. אם הערך העצמי נקשר לתפוקה או שהמאמץ הופך לשחיקה, הגדירו מה נחשב מספיק והגן על מנוחה ותפקידים שאינם קשורים להישגים.'
    },
    'C.5': {
      low: 'ציון נמוך יותר יכול לתמוך בספונטניות ובהיענות לשינוי סדרי עדיפויות. אם ההתחלה או הסיום קשים שוב ושוב, כווץ את הצעד הראשון, שנה את הסביבה והוסף רמז גלוי או אחריות של אדם אחר.',
      high: 'ציון גבוה יותר יכול לתמוך במעקב גם כאשר המוטיבציה נמוכה. אם ההתמדה נמשכת מעבר לתשואות הולכות ופוחתות, הגדר כללי עצירה ובדוק אם המטרה עדיין ראויה למאמץ.'
    },
    'C.6': {
      low: 'ציון נמוך יותר יכול לתמוך במהירות, ניסויים ופעולה עם מידע לא שלם. אם שגיאות ניתנות למניעה חוזרות על עצמן, הוסף הפסקה קצרה ורשימת בדיקה לפני החלטות שהן יקרות או קשות לביטול.',
      high: 'ציון גבוה יותר יכול לתמוך בניתוח סיכונים ובהחלטות זהירות ואיכותיות. אם זהירות גורמת להחמצת תזמון או הרהורים חוזרים ונשנים, קבעו מועד אחרון להחלטה והעדיפו טייס הפיך על פני המתנה לוודאות.'
    }
  },
  hi: {
    'N.1': {
      low: 'कम स्कोर आपको शांत रहने और अनिश्चितता को हावी होने से रोकने में मदद कर सकता है। यदि वह शांति आपको जोखिमों को कम आंकने या बहुत कम तैयारी करने के लिए प्रेरित करती है, तो किसी महत्वपूर्ण निर्णय से पहले सबसे संभावित जोखिम और एक वापसी की सूची बनाएं।',
      high: 'एक उच्च स्कोर आपको जोखिमों और चेतावनी संकेतों को जल्दी नोटिस करने में मदद कर सकता है। यदि चिंता बार-बार आपका ध्यान खींचती है, तो जो संभव है उसे संभावित से अलग करें, चिंता के समय की एक सीमा निर्धारित करें, और एक ठोस अगला कार्य चुनें; यदि यह लगातार दैनिक जीवन को बाधित करता है तो पेशेवर सहायता लें।'
    },
    'N.2': {
      low: 'कम स्कोर आपको शांतचित्त बना सकता है और आपको उकसाना कठिन बना सकता है। यदि आप जायज़ गुस्से को दबा देते हैं या सीमाओं को अघोषित छोड़ देते हैं, तो समस्या का नाम पहले ही बता दें और उस व्यवहार का वर्णन करें जिसे आप बदलना चाहते हैं।',
      high: 'एक उच्च स्कोर आपको अनुचितता का तुरंत पता लगाने और जो मायने रखता है उसका बचाव करने में सक्षम बना सकता है। यदि क्रोध संघर्ष को बढ़ाता है या आवेगपूर्ण प्रतिक्रियाओं को प्रेरित करता है, तो प्रतिक्रिया देने से पहले रुकें और व्यक्ति पर हमला करने के बजाय विशिष्ट व्यवहार, प्रभाव और आवश्यकता बताएं।'
    },
    'N.3': {
      low: 'कम स्कोर अक्सर भावनात्मक सुधार और स्थिर ऊर्जा का समर्थन करता है। यदि इससे किसी अन्य व्यक्ति के दुःख या आपकी खुद की आराम की आवश्यकता को नज़रअंदाज करना, धीमा करना, सुनना और इसे हल करने का प्रयास करने से पहले नुकसान को स्वीकार करना आसान हो जाता है।',
      high: 'एक उच्च स्कोर निराशा और हानि को विशेष रूप से प्रमुख बना सकता है, जो यह बता सकता है कि आपके लिए क्या गहराई से मायने रखता है। लगातार ख़राब मूड कोई ऐसी चीज़ नहीं है जिसे आपको केवल एक लक्षण के रूप में मानना ​​है: दिनचर्या और कार्यों को छोटा रखें, विश्वसनीय लोगों से जुड़े रहें, और जब यह लंबे समय तक चले या दैनिक जीवन में बाधा उत्पन्न हो तो पेशेवर सहायता लें।'
    },
    'N.4': {
      low: 'कम स्कोर सामाजिक स्थितियों को आरामदायक बना सकता है और निर्णय के डर को कम कर सकता है। यदि आप कभी-कभी चूक जाते हैं कि आप कैसे सामने आते हैं, तो विशिष्ट प्रतिक्रिया मांगें और यह मानने के बजाय कि सब कुछ ठीक हो गया है, दूसरे व्यक्ति की प्रतिक्रिया की जांच करें।',
      high: 'एक उच्च स्कोर आपको सामाजिक अपेक्षाओं और अन्य लोगों की प्रतिक्रियाओं के प्रति चौकस बना सकता है। यदि आत्म-निगरानी चिंतन या टालमटोल में बदल जाती है, तो साझा कार्य पर ध्यान केंद्रित करें, कठिन परिस्थितियों से धीरे-धीरे निपटें, और काल्पनिक जांच के बजाय साक्ष्य के आधार पर बातचीत का मूल्यांकन करें।'
    },
    'N.5': {
      low: 'कम स्कोर संयम और संतुष्टि में देरी करने की क्षमता का समर्थन करता है। यदि संयम अतिनियंत्रित हो जाता है या आनंद के लिए बहुत कम जगह छोड़ता है, तो दबाव बनने तक प्रतीक्षा करने के बजाय जानबूझकर हानिरहित सहजता के लिए जगह बनाएं।',
      high: 'एक उच्च स्कोर सहजता, भूख और तत्काल अनुभव का आनंद ला सकता है। यदि बार-बार आग्रह करने से आपको बाद में पछताना पड़ता है, तो कार्रवाई करने से पहले घर्षण जोड़ें: प्रतीक्षा करें, ट्रिगर हटाएं, पहले से सीमाएं निर्धारित करें, या वांछित दीर्घकालिक विकल्प तक पहुंचना आसान बनाएं।'
    },
    'N.6': {
      low: 'कम स्कोर आपको स्पष्ट रूप से सोचने और दबाव में लगातार कार्य करने में मदद कर सकता है। यदि यह आपको अपने आप में या दूसरों में तनाव को कम करने के लिए प्रेरित करता है, तो आकस्मिकताओं की योजना बनाएं और कठिन समय के बाद चर्चा करने और उबरने के लिए समय निकालें।',
      high: 'एक उच्च स्कोर आपको ओवरलोड को जल्दी नोटिस करने और संसाधन खत्म होने से पहले समर्थन मांगने पर मजबूर कर सकता है। यदि दबाव ठंड या भ्रम का कारण बनता है, तो एक साथ की जाने वाली मांगों को कम करें, पहले कुछ चरणों का पूर्वाभ्यास करें, और तनाव अधिक होने पर एक सरल लिखित योजना का उपयोग करें।'
    },
    'E.1': {
      low: 'कम स्कोर स्वतंत्रता और छोटे, चयनात्मक सामाजिक दायरे का समर्थन कर सकता है। यदि रिज़र्व को अरुचि के लिए गलत माना जाता है या उपयोगी संबंधों को बनने से रोकता है, तो स्पष्ट रूप से गर्मजोशी का संकेत दें और संपर्क के कुछ नियमित बिंदु बनाए रखें।',
      high: 'एक उच्च स्कोर तालमेल, विश्वास और नए कनेक्शन आसानी से बना सकता है। यदि मित्रता अर्जित करने से पहले अत्यधिक प्रतिबद्धता या विश्वास की ओर ले जाती है, तो आत्म-प्रकटीकरण को गति दें, महत्वपूर्ण दावों को सत्यापित करें, और ना कहने के लिए जगह छोड़ दें।'
    },
    'E.2': {
      low: 'कम स्कोर फोकस, एकांत के साथ आराम और समूह उत्तेजना पर कम निर्भरता प्रदान कर सकता है। यदि एकांत अलगाव में बदल जाता है या समूह तेजी से कठिन हो जाते हैं, तो संपर्क से पूरी तरह बचने के बजाय छोटी सभाओं को चुनें और पुनर्प्राप्ति समय की योजना बनाएं।',
      high: 'एक उच्च स्कोर समूहों में ऊर्जा ला सकता है और सामाजिक गति बनाने में मदद कर सकता है। यदि कंपनी केंद्रित काम में बाधा डालती है या एकांत को असहज बनाती है, तो निर्बाध समय की रक्षा करें और बातचीत को चालू रखने की आवश्यकता के बिना सुनने का अभ्यास करें।'
    },
    'E.3': {
      low: 'कम स्कोर सुनने, सहयोग और अन्य लोगों के नेतृत्व के लिए जगह बना सकता है। यदि आपकी ज़रूरतें या विशेषज्ञता अदृश्य रहती है, तो एक स्पष्ट वाक्य तैयार करें, सीधा अनुरोध करें, या चर्चा की शुरुआत में एक बार बोलें।',
      high: 'एक उच्च स्कोर एक समूह को निर्णय लेने में मदद कर सकता है और जब अन्य लोग झिझकते हैं तो उन्हें दिशा दे सकते हैं। यदि आप बहुत अधिक स्थान लेते हैं, तो असहमतिपूर्ण विचार पूछें, उत्तर देने से पहले प्रतीक्षा करें, और सहमति मानने के बजाय स्वामित्व स्पष्ट करें।'
    },
    'E.4': {
      low: 'कम स्कोर तेज गति और निरंतर गति के बिना निरंतर ध्यान का समर्थन कर सकता है। यदि महत्वपूर्ण कार्य में बार-बार देरी हो रही है, तो छोटी संख्या में प्राथमिकताएँ चुनें और उन्हें दृश्यमान समय सीमा या समय ब्लॉक दें।',
      high: 'एक उच्च स्कोर गति और कार्रवाई के लिए एक मजबूत क्षमता पैदा कर सकता है। यदि गतिविधि अतिभारित हो जाती है या प्रगति के बिना व्यस्तता हो जाती है, तो गति को परिणामों से अलग करें और बफ़र्स और पुनर्प्राप्ति को जानबूझकर कार्यों के रूप में शेड्यूल करें।'
    },
    'E.5': {
      low: 'कम स्कोर तीव्र उत्तेजना के बिना सुरक्षा, स्थिरता और संतुष्टि का पक्ष ले सकता है। यदि नवीनता से बचने से आपकी पसंद सीमित हो जाती है, तो छोटे, प्रतिवर्ती प्रयोग आज़माएँ जिनके जोखिम पहले से ज्ञात हों।',
      high: 'एक उच्च स्कोर साहस, अन्वेषण और ज्वलंत अनुभवों का आनंद लेने में सहायता कर सकता है। यदि बोरियत अनावश्यक जोखिम को जन्म देती है, तो उत्तेजना बढ़ने से पहले सीमा निर्धारित करें और उन सेटिंग्स में उत्तेजना की तलाश करें जहां नकारात्मक पक्ष निहित है।'
    },
    'E.6': {
      low: 'जब आशावाद झूठा लगेगा तो कम स्कोर गंभीरता और यथार्थवादी स्वर ला सकता है। यदि प्रशंसा या गर्मजोशी छिपी रहती है, तो इसे स्पष्ट रूप से कहें और सकारात्मक भावना के अपने आप प्रकट होने की अपेक्षा करने के बजाय आनंद के लिए छोटे-छोटे अवसर बनाएं।',
      high: 'एक उच्च स्कोर समूह का मनोबल बढ़ा सकता है और सकारात्मक अनुभवों को नोटिस करना आसान बना सकता है। यदि प्रसन्नता दर्द या जोखिम पर हावी हो जाती है, तो पहले स्वीकार करें कि क्या मुश्किल है, फिर तथ्यों को नकारे बिना आशा की तलाश करें।'
    },
    'O.1': {
      low: 'कम स्कोर व्यावहारिक और अवलोकनीय चीज़ों पर ठोस सोच और ध्यान देने में सहायता कर सकता है। यदि परिचित उत्तर बेहतर संभावनाओं को खत्म कर देते हैं, तो मूल्यांकन करने से पहले कई विकल्प तैयार करें कि कौन सा यथार्थवादी है।',
      high: 'एक उच्च स्कोर रचनात्मकता, मानसिक अनुकरण और मूल कनेक्शन का समर्थन कर सकता है। यदि विचार दिवास्वप्न में बने रहते हैं या ध्यान भटकाते हैं, तो उन्हें पकड़ें, एक चुनें, और इसे सबसे छोटे मूर्त परीक्षण में बदल दें।'
    },
    'O.2': {
      low: 'कम स्कोर कार्य, स्पष्टता और प्रत्यक्ष उपयोगिता पर ध्यान केंद्रित रख सकता है। यदि सौंदर्य अनुभव या पुनर्स्थापना सौंदर्य को लगातार उपेक्षित किया जाता है, तो इसे संक्षिप्त, कम दबाव वाले तरीकों से नमूना लें और ध्यान दें कि वास्तव में आपका ध्यान क्या आकर्षित करता है।',
      high: 'एक उच्च स्कोर रूप, सौंदर्य और सूक्ष्म विवरण के प्रति संवेदनशीलता को तेज कर सकता है। यदि सौंदर्य मानक बहुत अधिक समय लेते हैं या कार्य को ओवरराइड करते हैं, तो पहले व्यावहारिक बाधाओं को परिभाषित करें और तय करें कि शोधन वास्तव में इसके लायक कहां है।'
    },
    'O.3': {
      low: 'कम स्कोर संयम और निर्णयों का समर्थन कर सकता है जो पल के मूड से कम प्रभावित होते हैं। यदि भावनाओं को पहचानना कठिन हो जाता है या अन्य लोगों के संकेत छूट जाते हैं, तो क्या आवश्यक है यह तय करने से पहले शरीर और भावना की एक संक्षिप्त जांच के लिए रुकें।',
      high: 'एक उच्च स्कोर भावनात्मक जागरूकता, सहानुभूति और एक सूक्ष्म आंतरिक जीवन का समर्थन कर सकता है। यदि भावनाएँ प्रबल हो जाती हैं या निर्णय निर्धारित करती हैं, तो भावना को नाम दें, उसे व्यवस्थित होने दें और आप जो महसूस करते हैं उसे सबूतों से दर्शाए गए से अलग करें।'
    },
    'O.4': {
      low: 'कम स्कोर निरंतरता, निपुणता और भरोसेमंद दिनचर्या का समर्थन कर सकता है। यदि दिनचर्या कठोरता या नवीनता का डर बन जाती है, तो बाकी संरचना को परिचित रखते हुए एक छोटा, प्रतिवर्ती परिवर्तन करें।',
      high: 'एक उच्च स्कोर अन्वेषण के माध्यम से अनुकूलनशीलता और सीखने का समर्थन कर सकता है। यदि नवीनता अस्थिरता या अधूरी प्रतिबद्धताएँ पैदा करती है, तो समय, धन और ज़िम्मेदारियों के लिए कुछ गैर-परक्राम्य आधार रखें।'
    },
    'O.5': {
      low: 'यह पहलू जटिल और अमूर्त विचारों में रुचि से संबंधित है, बुद्धि या आईक्यू से नहीं। कम स्कोर व्यावहारिक निर्णयों का पक्ष ले सकता है; यदि अपरिचित विचारों को बहुत जल्दी खारिज कर दिया जाता है, तो पूछें कि कौन से सबूत आपके मन को बदल देंगे और केवल वही सीखेंगे जो निर्णय के लिए आवश्यक है।',
      high: 'एक उच्च स्कोर विश्लेषण, जिज्ञासा और जटिलता के साथ आराम का समर्थन कर सकता है। यदि सोच अंतहीन बहस या विश्लेषण पक्षाघात में बदल जाती है, तो आगे की खोज करने से पहले निर्णय मानदंड और समय सीमा को परिभाषित करें।'
    },
    'O.6': {
      low: 'कम स्कोर उपयोगी परंपराओं, साझा अपेक्षाओं और सामाजिक निरंतरता को संरक्षित कर सकता है। यदि सम्मेलन निर्विवाद हो जाता है या प्रासंगिक परिप्रेक्ष्य को बाहर कर देता है, तो नियम के कारण पर दोबारा गौर करें और पूछें कि इससे कौन प्रभावित है।',
      high: 'एक उच्च स्कोर मानदंडों की महत्वपूर्ण परीक्षा और रचनात्मक सुधार का समर्थन कर सकता है। यदि नवीनता को स्वचालित रूप से बेहतर माना जाता है, तो छोटे चरणों में परिवर्तनों का परीक्षण करें और मौजूदा अभ्यास के उन हिस्सों को संरक्षित करें जो अभी भी काम करते हैं।'
    },
    'A.1': {
      low: 'कम स्कोर आपको असंगतता को नोटिस करने और दांव अधिक होने पर खुद को सुरक्षित रखने में मदद कर सकता है। यदि संदेह सहयोग को अवरुद्ध करता है, तो एक ही बार में सब कुछ देने या रोकने के बजाय विश्वास को जांचें: छोटी प्रतिबद्धताओं से शुरू करें और साक्ष्य से अपडेट करें।',
      high: 'एक उच्च स्कोर खुलेपन और सहयोग को आसान बना सकता है। यदि अच्छा विश्वास आपको शोषण के लिए खुला छोड़ देता है, तो उच्च-दांव वाले दावों को सत्यापित करें, अपेक्षाओं को स्पष्ट करें, और उन लोगों के साथ भी सीमाएँ बनाए रखें जिन्हें आप पसंद करते हैं।'
    },
    'A.2': {
      low: 'कम स्कोर चातुर्य, बातचीत और रणनीतिक गोपनीयता का समर्थन कर सकता है। यदि यह हेरफेर या अस्पष्टता पैदा करता है, तो धोखे से एक वैध सीमा को अलग करें और उस भाषा में प्रतिबद्धताएं बनाएं जिसे दूसरा व्यक्ति सत्यापित कर सके।',
      high: 'एक उच्च स्कोर प्रत्यक्षता और पारदर्शिता के माध्यम से विश्वसनीयता का निर्माण कर सकता है। यदि ईमानदारी कुंदता या अतिशयोक्ति बन जाती है, तो सत्य को समय, प्रासंगिकता और इसे वितरित करने के तरीके की देखभाल के साथ जोड़ दें।'
    },
    'A.3': {
      low: 'कम स्कोर सीमित समय की रक्षा कर सकता है और अन्य लोगों की स्वायत्तता को प्रोत्साहित कर सकता है। यदि दूसरों को लगता है कि आप अनुपलब्ध हैं या पारस्परिकता कम हो रही है, तो मदद का ऐसा तरीका चुनें जिसे आप कायम रख सकें और उसका दायरा स्पष्ट रूप से बताएं।',
      high: 'एक उच्च स्कोर मजबूत समर्थन और समुदाय की भावना पैदा कर सकता है। यदि मदद करने से थकान होती है या दूसरों को ज़िम्मेदारी लेने से रोकता है, तो पूछें कि क्या मदद चाहिए, सीमाओं पर सहमत हों और हर ज़रूरत को अपना दायित्व न बनाएं।'
    },
    'A.4': {
      low: 'कम स्कोर मानकों की रक्षा करने और संघर्ष को सीधे संबोधित करने में मदद कर सकता है। यदि असहमति पुरानी घर्षण बन जाती है, तो गैर-परक्राम्य आवश्यकताओं को लचीले विकल्पों से अलग करें और बल के बजाय साझा मानदंडों का उपयोग करें।',
      high: 'एक उच्च स्कोर संघर्ष को कम कर सकता है और सहयोग की रक्षा कर सकता है। यदि महत्वपूर्ण जरूरतों को स्वीकार करके सद्भाव खरीदा जाता है, तो सीमा को स्पष्ट रूप से बताएं और इसे रिश्ते की विफलता के रूप में देखे बिना सम्मानजनक असहमति की अनुमति दें।'
    },
    'A.5': {
      low: 'कम स्कोर आत्म-वकालत का समर्थन कर सकता है और योगदान को दृश्यमान बना सकता है। यदि आत्मविश्वास को श्रेष्ठता के रूप में सुना जाता है या दूसरों का काम गायब हो जाता है, तो सबूत के साथ दावा करें और श्रेय साझा करें।',
      high: 'एक उच्च स्कोर काम पर ध्यान रख सकता है और सहयोग को आसान बना सकता है। यदि आपके योगदान को बार-बार अनदेखा किया जाता है, तो आपने जो किया और उसके प्रभाव का तथ्यात्मक रूप से वर्णन करें; सटीक आत्म-प्रतिनिधित्व अहंकार नहीं है.'
    },
    'A.6': {
      low: 'कम स्कोर निष्पक्षता और कठिन निर्णयों का समर्थन कर सकता है जो सभी को संतुष्ट नहीं कर सकते। यदि लोग निर्णय को ठंडा मानते हैं या इसकी मानवीय लागत चूक जाती है, तो पूछें कि बोझ कौन वहन करता है और तर्क को स्पष्ट स्पष्टीकरण के साथ जोड़ें।',
      high: 'एक उच्च स्कोर करुणा और पीड़ा की त्वरित पहचान का समर्थन कर सकता है। यदि सहानुभूति थकावट बन जाती है या प्रासंगिक तथ्यों पर हावी हो जाती है, तो भावनात्मक सीमाएँ निर्धारित करें और सत्यापित करें कि कौन सी मदद वास्तव में स्थिति में सुधार करेगी।'
    },
    'C.1': {
      low: 'कम स्कोर सावधानी, तैयारी और जरूरत पड़ने पर मदद मांगने को प्रोत्साहित कर सकता है। यदि आत्म-संदेह आपको शुरुआत करने से रोकता है, तो कार्य को छोटे-छोटे टुकड़ों में तोड़ दें और पूरे किए गए चरणों को क्षमता के प्रमाण के रूप में उपयोग करें।',
      high: 'एक उच्च स्कोर समस्याओं को हल करने में स्वामित्व, दृढ़ता और आत्मविश्वास का समर्थन कर सकता है। यदि आत्मविश्वास अतिरंजित हो जाता है या मदद मांगने में अनिच्छा हो जाती है, तो एक संक्षिप्त प्री-मॉर्टम चलाएं और किसी जानकार व्यक्ति से योजना को चुनौती देने के लिए कहें।'
    },
    'C.2': {
      low: 'जब योजनाएं बदलती हैं तो कम स्कोर लचीलेपन और सुधार का समर्थन कर सकता है। यदि अव्यवस्था से समय बर्बाद होता है या दायित्व गायब हो जाते हैं, तो उन चीजों के लिए केवल कुछ विश्वसनीय घर, सूचियां और दिनचर्या बनाएं जो सबसे ज्यादा मायने रखती हैं।',
      high: 'एक उच्च स्कोर कार्य को स्पष्ट, विश्वसनीय और फिर से शुरू करना आसान बना सकता है। यदि व्यवस्था पूर्णतावाद में बदल जाती है या परिवर्तन परेशान करने वाला हो जाता है, तो परिभाषित करें कि क्या काफी अच्छा है और योजना में जानबूझकर ढिलाई छोड़ दें।'
    },
    'C.3': {
      low: 'कम स्कोर नियमों पर सवाल उठाने और संदर्भ के अनुसार दायित्वों को अनुकूलित करने में मदद कर सकता है। यदि अन्य लोग आपकी प्रतिबद्धताओं पर भरोसा नहीं कर सकते हैं या नैतिक कोने कट गए हैं, तो वादे स्पष्ट करें और प्रत्येक दायित्व को उस कारण से दोबारा जोड़ें जो मायने रखता है।',
      high: 'एक उच्च स्कोर अखंडता और भरोसेमंद फॉलो-थ्रू का समर्थन कर सकता है। यदि कर्तव्य कठोरता या एक अस्थिर भार पैदा करता है, तो प्रतिस्पर्धी दायित्वों को रैंक करें और उन सभी को चुपचाप ले जाने के बजाय जल्दी से उन पर फिर से बातचीत करें।'
    },
    'C.4': {
      low: 'कम स्कोर संतुलन की रक्षा कर सकता है और निरंतर प्रतिस्पर्धा के बिना संतुष्टि की अनुमति दे सकता है। यदि यह ठहराव बन जाता है या मूल्यवान क्षमताओं को अप्रयुक्त छोड़ देता है, तो व्यक्तिगत रूप से सार्थक लक्ष्य चुनें और अगले छोटे मील के पत्थर को परिभाषित करें।',
      high: 'एक उच्च स्कोर लक्ष्यों की प्राप्ति में निपुणता और निरंतर प्रयास का समर्थन कर सकता है। यदि आत्म-मूल्य आउटपुट से बंध जाता है या प्रयास बेकार हो जाता है, तो परिभाषित करें कि क्या पर्याप्त है और उपलब्धि से असंबंधित आराम और भूमिकाओं की रक्षा करें।'
    },
    'C.5': {
      low: 'कम स्कोर बदलती प्राथमिकताओं के प्रति सहजता और प्रतिक्रियाशीलता का समर्थन कर सकता है। यदि प्रारंभ करना या समाप्त करना बार-बार कठिन होता है, तो पहले चरण को छोटा करें, वातावरण बदलें, और एक दृश्यमान संकेत या किसी अन्य व्यक्ति की जवाबदेही जोड़ें।',
      high: 'प्रेरणा कम होने पर भी उच्च स्कोर फॉलो-थ्रू में सहायता कर सकता है। यदि दृढ़ता घटते रिटर्न के बाद भी जारी रहती है, तो रोकने के नियम निर्धारित करें और समीक्षा करें कि क्या लक्ष्य अभी भी प्रयास के लायक है।'
    },
    'C.6': {
      low: 'कम स्कोर गति, प्रयोग और अधूरी जानकारी के साथ कार्रवाई का समर्थन कर सकता है। यदि रोकी जा सकने वाली त्रुटियाँ दोहराई जाती हैं, तो उन निर्णयों से पहले एक छोटा विराम और चेकलिस्ट जोड़ें जो महंगे हों या जिन्हें पलटना कठिन हो।',
      high: 'एक उच्च स्कोर जोखिम विश्लेषण और सावधानीपूर्वक, उच्च-गुणवत्ता वाले निर्णयों का समर्थन कर सकता है। यदि सावधानी के कारण समय चूक जाता है या बार-बार चिंतन किया जाता है, तो निर्णय की समय सीमा निर्धारित करें और निश्चितता की प्रतीक्षा करने के बजाय एक प्रतिवर्ती पायलट को प्राथमिकता दें।'
    }
  },
  hr: {
    'N.1': {
      low: 'Niži rezultat može vam pomoći da ostanete smireni i spriječite da vas neizvjesnost preuzme. Ako vas ta smirenost navede da podcijenite rizike ili se premalo pripremite, navedite najvjerojatniji rizik i jednu zamjenu prije važne odluke.',
      high: 'Viši rezultat može vam pomoći da rano uočite rizike i znakove upozorenja. Ako zabrinutost opetovano obuzima vašu pozornost, odvojite ono što je moguće od onoga što je vjerojatno, postavite ograničenje vremena za brigu i odaberite jednu konkretnu sljedeću radnju; potražite stručnu pomoć ako uporno ometa svakodnevni život.'
    },
    'N.2': {
      low: 'Niži rezultat može vas učiniti ujednačenim i teškim za isprovociranje. Ako ste skloni potisnuti opravdani bijes ili ostaviti granice neodređenima, na vrijeme nazovite problem i opišite ponašanje koje želite promijeniti.',
      high: 'Veći rezultat može vam pomoći da brzo otkrijete nepravednost i obranite ono što je važno. Ako ljutnja eskalira sukobe ili pokreće impulzivne reakcije, zastanite prije nego što odgovorite i navedite specifično ponašanje, utjecaj i potrebu umjesto da napadate osobu.'
    },
    'N.3': {
      low: 'Niži rezultat često podržava emocionalni oporavak i stabilnu energiju. Ako tugu druge osobe ili vlastitu potrebu za odmorom čini lakšim za zanemariti, usporite, poslušajte i priznajte gubitak prije nego što ga pokušate riješiti.',
      high: 'Viši rezultat može učiniti razočaranje i gubitak posebno istaknutim, što može otkriti što vam je duboko važno. Trajno loše raspoloženje nije nešto što morate tretirati samo kao osobinu: neka rutine i zadaci budu mali, ostanite povezani s ljudima od povjerenja i potražite stručnu podršku kada potraje ili narušava svakodnevni život.'
    },
    'N.4': {
      low: 'Niža ocjena može učiniti društvene situacije opuštenima i smanjiti strah od osude. Ako vam ponekad nedostaje kako ste naišli, zatražite konkretne povratne informacije i provjerite odgovor druge osobe umjesto da pretpostavljate da je sve dobro ispalo.',
      high: 'Veći rezultat može vas učiniti pozornima na društvena očekivanja i reakcije drugih ljudi. Ako se samonadziranje pretvori u preživljavanje ili izbjegavanje, preusmjerite pozornost na zajednički zadatak, postupno pristupite teškim situacijama i prosuđujte interakciju na temelju dokaza, a ne zamišljenog pregleda.'
    },
    'N.5': {
      low: 'Niži rezultat podržava suzdržanost i sposobnost odgađanja zadovoljstva. Ako obuzdavanje postane pretjerana kontrola ili ostavlja premalo prostora za užitak, namjerno napravite prostora za bezopasnu spontanost umjesto da čekate dok pritisak ne poraste.',
      high: 'Viši rezultat može donijeti spontanost, apetit i užitak neposrednog iskustva. Ako porivi opetovano stvaraju troškove zbog kojih ćete kasnije požaliti, dodajte trvenje prije nego što nešto poduzmete: pričekajte, uklonite okidače, unaprijed postavite ograničenja ili olakšajte postizanje željenog dugoročnog izbora.'
    },
    'N.6': {
      low: 'Niži rezultat može vam pomoći da jasno razmišljate i djelujete postojano pod pritiskom. Ako vas to navodi da podcjenjujete napetost sebe ili drugih, planirajte nepredviđene situacije i odvojite vrijeme za ispitivanje i oporavak nakon zahtjevnih razdoblja.',
      high: 'Veći rezultat može vas navesti da rano primijetite preopterećenje i potražite podršku prije nego što resursi ponestanu. Ako pritisak uzrokuje smrzavanje ili zbunjenost, smanjite istovremene zahtjeve, uvježbajte prvih nekoliko koraka unaprijed i koristite jednostavan pisani plan kada je stres visok.'
    },
    'E.1': {
      low: 'Niži rezultat može podržavati neovisnost i mali, selektivni društveni krug. Ako se rezerviranost pogrešno smatra nezainteresiranošću ili onemogućuje stvaranje korisnih odnosa, izričito pokažite toplinu i održavajte nekoliko redovitih točaka kontakta.',
      high: 'Veći rezultat može olakšati uspostavljanje odnosa, povjerenja i novih veza. Ako prijateljstvo vodi do prevelike predanosti ili povjerenja prije nego što se stekne, ubrzajte samootkrivanje, potvrdite važne tvrdnje i ostavite prostora da kažete ne.'
    },
    'E.2': {
      low: 'Niži rezultat može osigurati fokus, utjehu uz samoću i manju ovisnost o grupnoj stimulaciji. Ako se samoća pretvori u izolaciju ili grupe postaju sve teže, odaberite manja okupljanja i planirajte vrijeme oporavka radije nego da potpuno izbjegavate kontakt.',
      high: 'Viši rezultat može donijeti energiju grupama i pomoći u stvaranju društvenog zamaha. Ako tvrtka istiskuje fokusirani rad ili samoću čini neugodnom, zaštitite vrijeme bez prekida i vježbajte slušanje bez potrebe da se interakcija kreće.'
    },
    'E.3': {
      low: 'Niži rezultat može napraviti prostor za slušanje, suradnju i vodstvo drugih ljudi. Ako vaše potrebe ili stručnost ostanu nevidljivi, pripremite jednu jasnu rečenicu, uputite izravan zahtjev ili govorite jednom na početku rasprave.',
      high: 'Viši rezultat može pomoći grupi u donošenju odluka i dati smjernice kada drugi oklijevaju. Ako zauzimate previše prostora, zatražite različita stajališta, pričekajte prije nego što odgovorite i izričite vlasništvo umjesto da pretpostavljate da se slažete.'
    },
    'E.4': {
      low: 'Niži rezultat može podržati lagani tempo i stalnu pozornost bez stalnog kretanja. Ako se važan posao stalno odgađa, odaberite mali broj prioriteta i dajte im vidljive rokove ili vremenske blokove.',
      high: 'Viši rezultat može stvoriti zamah i jaku sposobnost za djelovanje. Ako aktivnost postane preopterećena ili užurbana bez napretka, razlučite kretanje od ishoda i rasporedite međuspremnike i oporavak namjerno kao i zadatke.'
    },
    'E.5': {
      low: 'Niži rezultat može pogodovati sigurnosti, stabilnosti i zadovoljstvu bez intenzivne stimulacije. Ako izbjegavanje novosti sužava vaš izbor, pokušajte s malim, reverzibilnim eksperimentima čiji su rizici unaprijed poznati.',
      high: 'Viši rezultat može podržati hrabrost, istraživanje i uživanje u živopisnim iskustvima. Ako dosada dovodi do nepotrebnog rizika, postavite granice prije nego što uzbuđenje poraste i potražite stimulaciju u okruženjima u kojima je loša strana sadržana.'
    },
    'E.6': {
      low: 'Niža ocjena može donijeti ozbiljnost i realan ton kada bi optimizam izgledao lažno. Ako zahvalnost ili toplina ostanu skriveni, recite to otvoreno i stvorite male prilike za uživanje umjesto da očekujete da će se pozitivni osjećaji pojaviti sami od sebe.',
      high: 'Viši rezultat može podići moral grupe i učiniti pozitivna iskustva lakšima za uočavanje. Ako vedrina prikriva bol ili rizik, prvo priznajte što je teško, a zatim tražite nadu bez poricanja činjenica.'
    },
    'O.1': {
      low: 'Niži rezultat može podržati konkretno razmišljanje i pozornost na ono što je praktično i vidljivo. Ako poznati odgovori istiskuju bolje mogućnosti, stvorite nekoliko alternativa prije nego što procijenite koja je realna.',
      high: 'Viši rezultat može podržati kreativnost, mentalnu simulaciju i originalne veze. Ako ideje ostanu u sanjarenju ili rasipaju pozornost, uhvatite ih, odaberite jednu i pretvorite je u najmanji opipljivi test.'
    },
    'O.2': {
      low: 'Niža ocjena može zadržati pozornost na funkciji, jasnoći i izravnoj korisnosti. Ako se estetsko iskustvo ili obnavljajuća ljepota stalno zanemaruje, probajte to na kratke načine niskog pritiska i primijetite što vam istinski drži pozornost.',
      high: 'Viši rezultat može izoštriti osjetljivost na oblik, ljepotu i suptilne detalje. Ako estetski standardi oduzimaju previše vremena ili nadjačavaju funkciju, prvo definirajte praktična ograničenja i odlučite gdje se profinjenje doista isplati.'
    },
    'O.3': {
      low: 'Niži rezultat može poduprijeti pribranost i odluke koje manje ovise o raspoloženju trenutka. Ako osjećaje postane teško identificirati ili se propuste signali drugih ljudi, zastanite radi kratke provjere tijela i emocija prije nego što odlučite što je potrebno.',
      high: 'Viši rezultat može podržati emocionalnu svijest, empatiju i nijansirani unutarnji život. Ako osjećaji postanu neodoljivi ili diktiraju odluke, imenujte emociju, dopustite joj da se slegne i razlučite ono što osjećate od onoga što dokazi pokazuju.'
    },
    'O.4': {
      low: 'Niži rezultat može poduprijeti kontinuitet, majstorstvo i pouzdane rutine. Ako rutina postane krutost ili strah od novina, uvedite jednu malu, reverzibilnu promjenu dok ostatak strukture ostaje poznat.',
      high: 'Viši rezultat može podržati prilagodljivost i učenje kroz istraživanje. Ako novost stvara nestabilnost ili nedovršene obveze, zadržite nekoliko sidara o kojima se ne može pregovarati za vrijeme, novac i odgovornosti.'
    },
    'O.5': {
      low: 'Ovaj aspekt tiče se interesa za složene i apstraktne ideje, a ne za inteligenciju ili IQ. Niži rezultat može pogodovati praktičnim odlukama; ako se nepoznate ideje prebrzo odbacuju, pitajte koji bi dokazi promijenili vaše mišljenje i saznajte samo ono što odluka zahtijeva.',
      high: 'Viši rezultat može podržati analizu, znatiželju i udobnost sa složenošću. Ako se razmišljanje pretvori u beskrajnu raspravu ili paralizu analize, definirajte kriterij odluke i rok prije daljnjeg istraživanja.'
    },
    'O.6': {
      low: 'Niži rezultat može sačuvati korisne tradicije, zajednička očekivanja i društveni kontinuitet. Ako se konvencija ne dovodi u pitanje ili isključuje relevantne perspektive, ponovno razmotrite razlog za pravilo i pitajte na koga ono utječe.',
      high: 'Viši rezultat može podržati kritičko ispitivanje normi i konstruktivnu reformu. Ako se novost automatski tretira kao bolja, testirajte promjene u malim koracima i očuvajte dijelove postojeće prakse koji još uvijek funkcioniraju.'
    },
    'A.1': {
      low: 'Niži rezultat može vam pomoći da uočite nedosljednost i zaštitite se kada su ulozi visoki. Ako sumnja blokira suradnju, kalibrirajte povjerenje umjesto da ga dajete ili uskraćujete odjednom: počnite s malim obvezama i ažurirajte na temelju dokaza.',
      high: 'Veći rezultat može olakšati otvorenost i suradnju. Ako vas dobra vjera ostavlja otvorenima za iskorištavanje, potvrdite tvrdnje s visokim ulozima, eksplicitno izrazite očekivanja i zadržite granice čak i s ljudima koji vam se sviđaju.'
    },
    'A.2': {
      low: 'Niži rezultat može poduprijeti taktičnost, pregovaranje i stratešku privatnost. Ako stvara manipulaciju ili dvosmislenost, razlikujete legitimnu granicu od obmane i preuzmite obveze na jeziku koji druga osoba može provjeriti.',
      high: 'Veći rezultat može izgraditi pouzdanost kroz izravnost i transparentnost. Ako iskrenost postane otvorenost ili pretjerano dijeljenje, kombinirajte istinu s vremenom, relevantnošću i brigom o tome kako se isporučuje.'
    },
    'A.3': {
      low: 'Niži rezultat može zaštititi ograničeno vrijeme i potaknuti autonomiju drugih ljudi. Ako vas drugi dožive kao nedostupnog ili reciprocitet nagrize, odaberite oblik pomoći koji možete održati i jasno navedite njegov opseg.',
      high: 'Viši rezultat može stvoriti snažnu podršku i osjećaj zajedništva. Ako pomaganje uzrokuje izgaranje ili sprječava druge da preuzmu odgovornost, pitajte je li pomoć potrebna, dogovorite se o granicama i nemojte svaku potrebu učiniti svojom obvezom.'
    },
    'A.4': {
      low: 'Niži rezultat može pomoći u obrani standarda i izravnom rješavanju sukoba. Ako neslaganje postane kronično trvenje, odvojite potrebe o kojima se ne može pregovarati od fleksibilnih opcija i upotrijebite zajedničke kriterije umjesto sile.',
      high: 'Viši rezultat može deeskalirati sukob i zaštititi suradnju. Ako se sklad kupuje uvažavanjem važnih potreba, jasno odredite granicu i dopustite neslaganje s poštovanjem bez da ga tretirate kao neuspjeh veze.'
    },
    'A.5': {
      low: 'Niži rezultat može podržati samozastupanje i učiniti doprinose vidljivima. Ako se povjerenje čuje kao nadmoć ili ako tuđi rad nestane, iznesite tvrdnje s dokazima i precizno podijelite zasluge.',
      high: 'Veći rezultat može zadržati pozornost na radu i olakšati suradnju. Ako je vaš doprinos opetovano zanemaren, činjenično opišite što ste učinili i njegov učinak; točno samoprikazivanje nije arogancija.'
    },
    'A.6': {
      low: 'Niža ocjena može poduprijeti objektivnost i teške odluke koje ne mogu zadovoljiti sve. Ako ljudi dožive odluku kao hladnu ili propuste njezinu ljudsku cijenu, zapitajte se tko nosi teret i uparite obrazloženje s jasnim objašnjenjem.',
      high: 'Viši rezultat može podržati suosjećanje i brzo prepoznavanje patnje. Ako empatija postane iscrpljena ili prevlada nad relevantnim činjenicama, postavite emocionalne granice i provjerite koja će pomoć zapravo poboljšati situaciju.'
    },
    'C.1': {
      low: 'Niži rezultat može potaknuti oprez, pripremu i traženje pomoći kada je potrebna. Ako vas sumnja u sebe sprječava da počnete, razdvojite zadatak na male dijelove i upotrijebite dovršene korake kao dokaz sposobnosti.',
      high: 'Viši rezultat može poduprijeti vlasništvo, upornost i povjerenje u rješavanju problema. Ako samopouzdanje postane precjenjivanje ili nevoljkost traženja pomoći, pokrenite kratak pregled pred smrt i zamolite upućenu osobu da ospori plan.'
    },
    'C.2': {
      low: 'Niža ocjena može podržati fleksibilnost i improvizaciju kada se planovi promijene. Ako poremećaj košta vremena ili čini da obaveze nestanu, stvorite samo nekoliko pouzdanih domova, popisa i rutina za stvari koje su najvažnije.',
      high: 'Veći rezultat može učiniti posao jasnim, pouzdanim i lakim za nastavak. Ako se red pretvori u perfekcionizam ili promjena postane uznemirujuća, definirajte što je dovoljno dobro i ostavite namjerno labav plan.'
    },
    'C.3': {
      low: 'Niža ocjena može pomoći u propitivanju pravila i prilagodbi obveza kontekstu. Ako se drugi ne mogu osloniti na vaše obveze ili su etički kutovi srezani, dajte jasna obećanja i ponovno povežite svaku obvezu s razlogom zbog kojeg je važna.',
      high: 'Viši rezultat može podržati integritet i pouzdano praćenje. Ako dužnost stvara krutost ili neodrživo opterećenje, rangirajte konkurentske obveze i pregovarajte o njima ranije umjesto da ih šutke nosite sve.'
    },
    'C.4': {
      low: 'Niži rezultat može zaštititi ravnotežu i omogućiti zadovoljstvo bez stalnog natjecanja. Ako dođe do stagnacije ili ostavi cijenjene sposobnosti neiskorištene, odaberite cilj od osobnog značaja i definirajte sljedeću malu prekretnicu.',
      high: 'Viši rezultat može poduprijeti majstorstvo i kontinuirani napor prema zahtjevnim ciljevima. Ako samopouzdanje postane povezano s učinkom ili napor postane izgaranje, definirajte što se smatra dovoljnim i zaštitite odmor i uloge koje nisu povezane s postignućem.'
    },
    'C.5': {
      low: 'Niži rezultat može poduprijeti spontanost i osjetljivost na promjenjive prioritete. Ako je početak ili završetak opetovano težak, smanjite prvi korak, promijenite okruženje i dodajte vidljiv znak ili odgovornost druge osobe.',
      high: 'Viši rezultat može podržati nastavak čak i kada je motivacija niska. Ako se upornost nastavi nakon pada povrata, postavite pravila zaustavljanja i provjerite zaslužuje li cilj još truda.'
    },
    'C.6': {
      low: 'Niži rezultat može podržati brzinu, eksperimentiranje i djelovanje s nepotpunim informacijama. Ako se pogreške koje se mogu spriječiti ponavljaju, dodajte kratku stanku i popis za provjeru prije odluka koje su skupe ili ih je teško poništiti.',
      high: 'Viši rezultat može podržati analizu rizika i pažljive, visokokvalitetne odluke. Ako oprez uzrokuje propušteno mjerenje vremena ili ponovljeno razmišljanje, odredite rok za odluku i dajte prednost reverzibilnom pilotu nego čekanju na izvjesnost.'
    }
  },
  hu: {
    'N.1': {
      low: 'Az alacsonyabb pontszám segíthet nyugodtnak maradni, és megakadályozni, hogy a bizonytalanság eluralkodjon. Ha ez a nyugalom arra késztet, hogy alábecsülje a kockázatokat, vagy túl keveset készüljön fel, sorolja fel a legvalószínűbb kockázatot és egy tartalékot a fontos döntés előtt.',
      high: 'A magasabb pontszám segíthet korán észrevenni a kockázatokat és a figyelmeztető jeleket. Ha az aggodalom ismételten felemészti a figyelmét, válassza el a lehetségest a valószínűtől, szabjon határt az aggódási időnek, és válasszon egy konkrét következő lépést; kérjen szakmai segítséget, ha ez tartósan megzavarja a mindennapi életet.'
    },
    'N.2': {
      low: 'Az alacsonyabb pontszám kiegyensúlyozottá és nehezen provokálhatóvá teheti. Ha hajlamos elfojtani a jogos haragot, vagy kimondatlanul hagyja a határokat, nevezze meg korán a problémát, és írja le a viselkedést, amelyen változtatni szeretne.',
      high: 'A magasabb pontszám segítségével gyorsan észlelheti a tisztességtelenséget, és megvédheti azt, ami számít. Ha a harag fokozza a konfliktusokat vagy impulzív reakciókat vált ki, álljon meg a válaszadás előtt, és mondja ki a konkrét viselkedést, hatást és szükségletet, ahelyett, hogy megtámadná a személyt.'
    },
    'N.3': {
      low: 'Az alacsonyabb pontszám gyakran támogatja az érzelmi felépülést és az egyenletes energiát. Ha egy másik személy szomorúságát vagy saját pihenési szükségletét könnyen figyelmen kívül hagyja, lassítson, figyeljen és ismerje el a veszteséget, mielőtt megpróbálná megoldani.',
      high: 'A magasabb pontszám különösen szembetűnővé teheti a csalódást és a veszteséget, ami felfedheti, hogy mi fontos számodra. A tartós rossz hangulatot nem kell pusztán tulajdonságként kezelni: tartsa kicsiben a rutinokat és a feladatokat, maradjon kapcsolatban megbízható emberekkel, és kérjen szakmai támogatást, ha ez tartós vagy rontja a mindennapi életet.'
    },
    'N.4': {
      low: 'Az alacsonyabb pontszám ellazíthatja a társas helyzeteket, és csökkentheti az ítélettől való félelmet. Ha néha hiányzik, hogyan találkozik, kérjen konkrét visszajelzést, és ellenőrizze a másik személy válaszát, ne feltételezze, hogy minden jól sikerült.',
      high: 'A magasabb pontszám figyelmessé teheti a társadalmi elvárásokat és mások reakcióit. Ha az önellenőrzés kérődzéssé vagy elkerüléssé válik, fordítsa a figyelmet a megosztott feladatra, fokozatosan közelítse meg a nehéz helyzeteket, és ítélje meg az interakciót bizonyítékok alapján, nem pedig elképzelt vizsgálat alapján.'
    },
    'N.5': {
      low: 'Az alacsonyabb pontszám támogatja a visszafogottságot és a kielégülés késleltetésének képességét. Ha a visszafogottság túlzottan kontrollálttá válik, vagy túl kevés teret hagy az élvezetnek, szándékosan hagyjon teret az ártalmatlan spontaneitásnak, ahelyett, hogy megvárja, amíg a nyomás kialakul.',
      high: 'A magasabb pontszám spontaneitást, étvágyat és az azonnali élmény élvezetét hozhatja. Ha a késztetések ismételten olyan költségeket okoznak, amelyeket később megbánt, adjon súrlódást, mielőtt cselekszik: várjon, távolítsa el a kiváltó okokat, állítson be előre korlátokat, vagy tegye könnyebbé a kívánt hosszú távú választást.'
    },
    'N.6': {
      low: 'Az alacsonyabb pontszám segíthet tisztán gondolkodni és stabilan cselekedni nyomás alatt. Ha ez arra készteti, hogy alábecsülje saját vagy mások feszültségét, tervezze meg az esetleges eseményeket, és szánjon időt a kiértékelésre és a megerőltető időszakok utáni felépülésre.',
      high: 'A magasabb pontszám arra késztetheti, hogy korán észrevegye a túlterhelést, és még azelőtt kérjen támogatást, hogy az erőforrások kifogynak. Ha a nyomás fagyást vagy zavartságot okoz, csökkentse az egyidejű igényeket, próbálja meg előre az első néhány lépést, és használjon egyszerű írásos tervet, amikor nagy a stressz.'
    },
    'E.1': {
      low: 'Az alacsonyabb pontszám alátámaszthatja a függetlenséget és a szűk, szelektív társadalmi kört. Ha a tartalékot összetévesztik az érdektelenséggel, vagy megakadályozza, hogy hasznos kapcsolatok alakuljanak ki, határozottan jelezze a meleget, és tartson fenn néhány rendszeres érintkezési pontot.',
      high: 'A magasabb pontszám a kapcsolatot, a bizalmat és az új kapcsolatokat könnyen megteremtheti. Ha a barátságosság túlzott elköteleződéshez vagy bizalomhoz vezet, mielőtt kiérdemelné, gyorsítsa fel az önfeltárást, ellenőrizze a fontos állításokat, és hagyjon teret a nem mondására.'
    },
    'E.2': {
      low: 'Az alacsonyabb pontszám összpontosítást, kényelmet biztosíthat a magányban, és kevésbé függ a csoport stimulációjától. Ha a magány elszigeteltséggé válik, vagy a csoportok egyre nehezebbé válnak, válasszon kisebb összejöveteleket, és tervezze meg a felépülési időt, ahelyett, hogy teljesen elkerülné a kontaktust.',
      high: 'A magasabb pontszám energiát adhat a csoportoknak, és elősegítheti a társadalmi lendület megteremtését. Ha a vállalat kiszorítja a koncentrált munkát, vagy kényelmetlenné teszi a magányt, óvja a megszakítás nélküli időt, és gyakorolja a hallgatást anélkül, hogy az interakciót mozgásban kell tartania.'
    },
    'E.3': {
      low: 'Az alacsonyabb pontszám teret engedhet a meghallgatásnak, az együttműködésnek és mások vezetésének. Ha az Ön igényei vagy szakértelme láthatatlanok maradnak, készítsen egy világos mondatot, tegyen közvetlen kérést, vagy beszéljen egyszer a vita kezdete előtt.',
      high: 'A magasabb pontszám segíthet a csoportnak döntéshozatalban, és iránymutatást adhat, amikor mások haboznak. Ha túl sok helyet foglal el, kérjen eltérő véleményeket, várjon, mielőtt válaszolna, és tegye egyértelművé a tulajdonjogot, ahelyett, hogy egyetértést feltételezne.'
    },
    'E.4': {
      low: 'Alacsonyabb pontszám támogathatja a sietetlen tempót és a kitartó figyelmet állandó mozgás nélkül. Ha a fontos munka többször is késik, válasszon néhány prioritást, és adjon nekik látható határidőket vagy időblokkokat.',
      high: 'A magasabb pontszám lendületet és erős cselekvési képességet teremthet. Ha a tevékenység előrehaladás nélkül túlterheltté vagy elfoglalttá válik, különböztesse meg a mozgást az eredményektől, és ütemezze be a puffereket és a helyreállítást éppolyan tudatosan, mint a feladatokat.'
    },
    'E.5': {
      low: 'Az alacsonyabb pontszám elősegítheti a biztonságot, a stabilitást és az elégedettséget intenzív stimuláció nélkül. Ha az újdonság elkerülése szűkíti a választási lehetőségeit, próbálkozzon kis, visszafordítható kísérletekkel, amelyek kockázatai előre ismertek.',
      high: 'A magasabb pontszám támogathatja a bátorságot, a felfedezést és az élénk élmények élvezetét. Ha az unalom szükségtelen kockázatot jelent, állítson be korlátokat, mielőtt az izgalom felerősödne, és keressen stimulációt olyan környezetben, ahol a hátrányok is korlátozottak.'
    },
    'E.6': {
      low: 'Az alacsonyabb pontszám komolyságot és reális hangot adhat, amikor az optimizmus hamisnak tűnik. Ha a megbecsülés vagy a melegség rejtve marad, mondd ki nyíltan, és teremts kis alkalmakat az élvezetre, ahelyett, hogy azt várnád, hogy magától megjelenik a pozitív érzés.',
      high: 'A magasabb pontszám emelheti a csoport morálját, és könnyen észrevehetővé teheti a pozitív tapasztalatokat. Ha a vidámság elhomályosítja a fájdalmat vagy a kockázatot, először ismerd el, ami nehéz, aztán keress reményt a tények tagadása nélkül.'
    },
    'O.1': {
      low: 'Az alacsonyabb pontszám támogathatja a konkrét gondolkodást és a gyakorlatias és megfigyelhető dolgokra való odafigyelést. Ha az ismerős válaszok kiszorítják a jobb lehetőségeket, generáljon több alternatívát, mielőtt értékelné, melyik a reális.',
      high: 'A magasabb pontszám támogathatja a kreativitást, a mentális szimulációt és az eredeti kapcsolatokat. Ha az ötletek álmodozásban maradnak, vagy szétszórják a figyelmet, ragadd meg őket, válassz egyet, és alakítsd belőle a legkisebb kézzelfogható próbát.'
    },
    'O.2': {
      low: 'Az alacsonyabb pontszám megtarthatja a figyelmet a funkcióra, a tisztaságra és a közvetlen hasznosságra. Ha az esztétikai élményt vagy a helyreállító szépséget következetesen figyelmen kívül hagyják, próbálja meg röviden, alacsony nyomáson, és figyelje meg, mi köti le igazán a figyelmét.',
      high: 'A magasabb pontszám kiélezheti a forma, a szépség és a finom részletek iránti érzékenységet. Ha az esztétikai szabványok túl sok időt vesznek igénybe, vagy felülírják a funkciókat, először határozza meg a gyakorlati korlátokat, és döntse el, hol érdemes igazán finomítani.'
    },
    'O.3': {
      low: 'Az alacsonyabb pontszám alátámaszthatja a nyugalmat és olyan döntéseket, amelyeket kevésbé befolyásol a pillanatnyi hangulat. Ha az érzéseket nehéz felismerni, vagy mások jelzései elmaradnak, álljon meg egy rövid test- és érzelemvizsgálat, mielőtt eldönti, mire van szükség.',
      high: 'A magasabb pontszám támogathatja az érzelmi tudatosságot, az empátiát és az árnyalt belső életet. Ha az érzések elsöprővé válnak, vagy döntéseket diktálnak, nevezze meg az érzelmet, engedje, hogy leülepedjen, és különböztesse meg, amit érzel, attól, amit a bizonyítékok mutatnak.'
    },
    'O.4': {
      low: 'Az alacsonyabb pontszám támogathatja a folytonosságot, az elsajátítást és a megbízható rutinokat. Ha a rutin merevséggé vagy az újdonságtól való félelemmé válik, vezessen be egy kis, visszafordítható változtatást, miközben a struktúra többi része ismerős marad.',
      high: 'A magasabb pontszám támogathatja az alkalmazkodóképességet és a felfedezés útján történő tanulást. Ha az újdonság instabilitást vagy befejezetlen kötelezettségeket okoz, tartson meg néhány nem alkuképes horgonyt az idő, a pénz és a felelősség tekintetében.'
    },
    'O.5': {
      low: 'Ez a szempont az összetett és elvont eszmék iránti érdeklődésre vonatkozik, nem pedig az intelligenciára vagy az IQ-ra. Az alacsonyabb pontszám kedvezhet a gyakorlati döntéseknek; Ha az ismeretlen ötleteket túl gyorsan elveti, kérdezze meg, milyen bizonyítékok változtatnák meg a véleményét, és csak azt tanulja meg, amit a döntés megkövetel.',
      high: 'A magasabb pontszám alátámaszthatja az elemzést, a kíváncsiságot és az összetettséget. Ha a gondolkodás végtelen vitába vagy elemzési bénulásba torkollik, a további kutatás előtt határozza meg a döntési kritériumot és a határidőt.'
    },
    'O.6': {
      low: 'Az alacsonyabb pontszám megőrizheti a hasznos hagyományokat, a közös elvárásokat és a társadalmi folytonosságot. Ha a konvenció megkérdőjelezhetetlen, vagy kizárja a releváns szempontokat, nézze meg újra a szabály okát, és kérdezze meg, hogy kit érint.',
      high: 'A magasabb pontszám támogathatja a normák kritikai vizsgálatát és a konstruktív reformot. Ha az újdonságot automatikusan jobbnak tekinti, kis lépésekben tesztelje a változtatásokat, és őrizze meg a meglévő gyakorlat még működő részeit.'
    },
    'A.1': {
      low: 'Az alacsonyabb pontszám segíthet észrevenni az inkonzisztenciát és megvédeni magát, ha magas a tét. Ha a gyanú gátolja az együttműködést, kalibrálja a bizalmat ahelyett, hogy egyszerre megadná vagy visszatartaná: kezdje kis kötelezettségvállalásokkal, és frissítse a bizonyítékokat.',
      high: 'A magasabb pontszám megkönnyítheti a nyitottságot és az együttműködést. Ha a jóhiszeműség nyitott a kizsákmányolásra, ellenőrizze a nagy téttel járó állításokat, fogalmazza meg az elvárásokat, és tartsa be a határokat még az általa kedvelt emberekkel is.'
    },
    'A.2': {
      low: 'Az alacsonyabb pontszám támogathatja a tapintatot, a tárgyalásokat és a stratégiai magánélet védelmét. Ha manipulációt vagy kétértelműséget kelt, különböztesse meg a legitim határt a megtévesztéstől, és tegyen kötelezettségeket olyan nyelven, amelyet a másik személy ellenőrizni tud.',
      high: 'A magasabb pontszám megbízhatóságot építhet a közvetlenség és az átláthatóság révén. Ha az őszinteség nyersséggé vagy túlzott megosztássá válik, az igazságot kombináld az időzítéssel, a relevanciával és annak átadásának módjával.'
    },
    'A.3': {
      low: 'Az alacsonyabb pontszám megvédheti a korlátozott időt, és ösztönözheti mások autonómiáját. Ha mások úgy érzik, hogy Ön elérhetetlen, vagy ha a viszonosság erodálódik, válasszon egy olyan támogatási formát, amelyet támogatni tud, és világosan fogalmazza meg annak hatókörét.',
      high: 'A magasabb pontszám erős támogatást és közösségi érzést válthat ki. Ha a segítségnyújtás kiégést okoz, vagy megakadályozza, hogy mások felelősséget vállaljanak, kérdezze meg, hogy szükség van-e segítségre, állapodjon meg a korlátokban, és ne tegyen kötelezettséget minden szükségletre.'
    },
    'A.4': {
      low: 'Az alacsonyabb pontszám segíthet a szabványok védelmében és a konfliktusok közvetlen kezelésében. Ha a nézeteltérés krónikus súrlódássá válik, válassza el a meg nem alkuvó szükségleteket a rugalmas lehetőségektől, és használjon közös kritériumokat az erőszak helyett.',
      high: 'A magasabb pontszám enyhítheti a konfliktust és megvédheti az együttműködést. Ha a harmóniát a fontos szükségletek elismerésével szerzi meg, világosan jelölje ki a határt, és engedje meg a tiszteletteljes nézeteltérést anélkül, hogy kapcsolati kudarcként kezelné.'
    },
    'A.5': {
      low: 'Az alacsonyabb pontszám támogathatja az önérvényesítést, és láthatóvá teheti a hozzájárulásokat. Ha a bizalom felsőbbrendűségként hallható, vagy mások munkája eltűnik, állítson bizonyítékokkal, és ossza meg pontosan a hitelt.',
      high: 'A magasabb pontszám megtarthatja a figyelmet a munkán, és könnyebbé teheti az együttműködést. Ha hozzájárulását többször figyelmen kívül hagyják, írja le tényszerűen, mit tett és annak hatását; a pontos önábrázolás nem arrogancia.'
    },
    'A.6': {
      low: 'Az alacsonyabb pontszám alátámaszthatja az objektivitást és olyan nehéz döntéseket, amelyek nem tudnak mindenkit kielégíteni. Ha az emberek hidegnek élik meg a döntést, vagy elmulasztják az emberi költséget, kérdezze meg, ki viseli a terhet, és párosítsa az érvelést egy világos magyarázattal.',
      high: 'A magasabb pontszám támogathatja az együttérzést és a szenvedés gyors felismerését. Ha az empátia kimerültséggé válik, vagy felülírja a lényeges tényeket, állítson fel érzelmi határokat, és ellenőrizze, hogy milyen segítség fog ténylegesen javítani a helyzeten.'
    },
    'C.1': {
      low: 'Az alacsonyabb pontszám óvatosságra, felkészültségre és segítségkérésre ösztönözhet, amikor arra szükség van. Ha az önbizalomhiány megakadályozza, hogy elkezdje, bontsa fel a feladatot apró darabokra, és használja a kész lépéseket a képesség bizonyítékaként.',
      high: 'A magasabb pontszám támogathatja a felelősségvállalást, a kitartást és a magabiztosságot a problémák megoldásában. Ha az önbizalom túlbecsüléssé válik, vagy nem hajlandó segítséget kérni, futtasson egy rövid pre-mortem-et, és kérjen meg egy hozzáértő személyt, hogy vitassa meg a tervet.'
    },
    'C.2': {
      low: 'Az alacsonyabb pontszám támogathatja a rugalmasságot és az improvizációt, amikor a tervek változnak. Ha a rendetlenség időbe kerül, vagy a kötelezettségek megszűnnek, csak néhány megbízható otthont, listát és rutint készítsen a legfontosabb dolgokhoz.',
      high: 'A magasabb pontszám egyértelművé, megbízhatóvá és könnyen folytathatóvá teheti a munkát. Ha a rend perfekcionizmussá válik, vagy a változás nyomasztóvá válik, határozza meg, mi az, ami elég jó, és hagyjon szándékosan lazaságot a tervben.'
    },
    'C.3': {
      low: 'Az alacsonyabb pontszám segíthet megkérdőjelezni a szabályokat és a kötelezettségeket a kontextushoz igazítani. Ha mások nem hagyatkozhatnak az Ön kötelezettségvállalásaira, vagy ha az etikai sarkokat megvágják, tegyen egyértelmű ígéreteket, és kapcsolja össze minden kötelezettséget a fontos okkal.',
      high: 'A magasabb pontszám támogathatja az integritást és a megbízható követést. Ha a kötelesség merevséget vagy fenntarthatatlan terhelést okoz, rangsorolja a versengő kötelezettségeket, és korán tárgyalja újra, ahelyett, hogy csendben hordozná az összeset.'
    },
    'C.4': {
      low: 'Az alacsonyabb pontszám megvédheti az egyensúlyt, és folyamatos verseny nélkül is elégedettséget tesz lehetővé. Ha stagnál, vagy értékes képességeket kihasználatlanul hagy, válassz egy személyesen értelmes célt, és határozd meg a következő kis mérföldkövet.',
      high: 'A magasabb pontszám alátámaszthatja az elsajátítást és az igényes célok elérésére irányuló tartós erőfeszítést. Ha az önértékelés teljesítményhez kötődik, vagy az erőfeszítés kiégéssé válik, határozza meg, mi számít elégnek, és védje meg a pihenést és a teljesítményhez nem kapcsolódó szerepeket.'
    },
    'C.5': {
      low: 'Az alacsonyabb pontszám támogathatja a spontaneitást és a változó prioritásokra való reagálást. Ha az indítás vagy a befejezés ismételten nehézkes, csökkentse az első lépést, változtassa meg a környezetet, és adjon hozzá egy látható jelzést vagy egy másik személy felelősségét.',
      high: 'A magasabb pontszám még akkor is támogathatja a követést, ha a motiváció alacsony. Ha a kitartás a csökkenő hozamok mellett is folytatódik, állíts fel leállítási szabályokat, és vizsgáld meg, hogy a cél még mindig megérdemli-e az erőfeszítést.'
    },
    'C.6': {
      low: 'Az alacsonyabb pontszám támogathatja a gyorsaságot, a kísérletezést és a hiányos információk melletti cselekvést. Ha a megelőzhető hibák ismétlődnek, adjon hozzá egy rövid szünetet és egy ellenőrzőlistát a költséges vagy nehezen visszafordítható döntések előtt.',
      high: 'A magasabb pontszám támogathatja a kockázatelemzést és a gondos, jó minőségű döntéseket. Ha az óvatosság elmulasztott időzítést vagy ismételt kérődzést okoz, határozzon meg döntési határidőt, és részesítse előnyben a megfordítható pilótát a bizonyosságra várás helyett.'
    }
  },
  hy: {
    'N.1': {
      low: 'Ավելի ցածր միավորը կարող է օգնել ձեզ մնալ հանգստություն և զերծ մնալ անորոշությունից: Եթե ​​այդ հանգստությունը ձեզ ստիպում է թերագնահատել ռիսկերը կամ շատ քիչ նախապատրաստվել, նշեք ամենահավանական ռիսկը և մեկ հետադարձ կարևոր որոշում կայացնելուց առաջ:',
      high: 'Ավելի բարձր միավորը կարող է օգնել ձեզ վաղաժամ նկատել ռիսկերն ու նախազգուշական նշանները: Եթե ​​անհանգստությունը բազմիցս խլում է ձեր ուշադրությունը, առանձնացրեք հնարավորը հավանականից, սահմանեք անհանգստության ժամանակի սահմանափակում և ընտրեք հաջորդ գործողություններից մեկը. փնտրեք մասնագետի աջակցություն, եթե դա անընդհատ խաթարում է առօրյա կյանքը:'
    },
    'N.2': {
      low: 'Ավելի ցածր միավորը կարող է ձեզ հավասարաչափ և դժվար սադրել: Եթե ​​դուք հակված եք ճնշելու օրինական զայրույթը կամ անհայտ թողնելու սահմանները, նշեք խնդիրը վաղաժամ և նկարագրեք այն վարքագիծը, որը ցանկանում եք փոխել:',
      high: 'Ավելի բարձր միավորը կարող է ստիպել ձեզ արագ բացահայտել անարդարությունը և պաշտպանել այն, ինչ կարևոր է: Եթե ​​զայրույթը սրում է կոնֆլիկտները կամ առաջացնում է իմպուլսիվ ռեակցիաներ, պատասխանելուց առաջ դադար տվեք և անձի վրա հարձակվելու փոխարեն նշեք կոնկրետ վարքագիծը, ազդեցությունը և անհրաժեշտությունը:'
    },
    'N.3': {
      low: 'Ավելի ցածր միավորը հաճախ աջակցում է էմոցիոնալ վերականգնմանը և կայուն էներգիային: Եթե ​​դա հեշտացնում է ուրիշի տխրությունը կամ հանգստի սեփական կարիքը, դանդաղեցրեք, լսեք և ճանաչեք կորուստը, նախքան այն լուծելու փորձը:',
      high: 'Ավելի բարձր միավորը կարող է հատկապես նկատելի դարձնել հիասթափությունն ու կորուստը, ինչը կարող է բացահայտել այն, ինչ խորապես կարևոր է ձեզ համար: Մշտական ​​ցածր տրամադրությունը մի բան չէ, որին պետք է վերաբերվել որպես զուտ հատկանիշ. փոքր պահեք առօրյան և առաջադրանքները, կապվեք վստահելի մարդկանց հետ և փնտրեք մասնագիտական ​​աջակցություն, երբ դա տևում է կամ խաթարում առօրյա կյանքը:'
    },
    'N.4': {
      low: 'Ավելի ցածր միավորը կարող է ստիպել սոցիալական իրավիճակներին հանգստանալ և նվազեցնել դատողության նկատմամբ վախը: Եթե ​​երբեմն բաց եք թողնում, թե ինչպես եք հանդիպում, խնդրեք կոնկրետ արձագանք և ստուգեք դիմացինի պատասխանը, այլ ոչ թե ենթադրեք, որ ամեն ինչ լավ է:',
      high: 'Ավելի բարձր միավորը կարող է ձեզ ուշադիր դարձնել սոցիալական սպասումների և այլ մարդկանց արձագանքների նկատմամբ: Եթե ​​ինքնավերահսկումը վերածվում է մտորումների կամ խուսափման, ուշադրություն դարձրեք ընդհանուր առաջադրանքին, աստիճանաբար մոտեցեք բարդ իրավիճակներին և փոխազդեցությունը դատեք ապացույցներով, այլ ոչ թե երևակայական քննությամբ:'
    },
    'N.5': {
      low: 'Ավելի ցածր միավորը աջակցում է զսպվածությանը և բավարարվածությունը հետաձգելու կարողությանը: Եթե ​​զսպվածությունը դառնում է գերհսկողություն կամ շատ քիչ տեղ է թողնում հաճույքի համար, միտումնավոր տեղ թողեք անվնաս ինքնաբերականության համար՝ սպասելու, մինչև ճնշումը մեծանա:',
      high: 'Ավելի բարձր միավորը կարող է բերել ինքնաբուխություն, ախորժակ և անմիջական փորձի հաճույք: Եթե ​​հորդորները բազմիցս առաջացնում են ծախսեր, որոնց համար հետագայում զղջում եք, գործելուց առաջ ավելացրեք շփում. սպասեք, հեռացրեք ձգանները, նախօրոք սահմանեք սահմանափակումներ կամ դյուրին դարձրեք ցանկալի երկարաժամկետ ընտրությունը:'
    },
    'N.6': {
      low: 'Ավելի ցածր միավորը կարող է օգնել ձեզ հստակ մտածել և կայուն գործել ճնշման ներքո: Եթե ​​դա ձեզ ստիպում է թերագնահատել ձեր կամ ուրիշների լարվածությունը, պլանավորեք չնախատեսված դեպքերը և ժամանակ տրամադրեք վերլուծելու և վերականգնվելու պահանջկոտ ժամանակահատվածներից հետո:',
      high: 'Ավելի բարձր միավորը կարող է ստիպել ձեզ վաղաժամ նկատել գերբեռնվածությունը և աջակցություն փնտրել նախքան ռեսուրսների սպառումը: Եթե ​​ճնշումը հանգեցնում է սառեցման կամ շփոթության, նվազեցրեք միաժամանակյա պահանջները, նախօրոք կրկնեք առաջին մի քանի քայլերը և օգտագործեք պարզ գրավոր պլան, երբ սթրեսը մեծ է:'
    },
    'E.1': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել անկախությանը և փոքր, ընտրովի սոցիալական շրջանակին: Եթե ​​ռեզերվը սխալմամբ ընկալվում է որպես անհետաքրքրություն կամ թույլ չի տալիս օգտակար հարաբերությունների ձևավորումը, բացահայտորեն ջերմություն հաղորդեք և պահպանեք մի քանի կանոնավոր շփման կետեր:',
      high: 'Ավելի բարձր միավորը կարող է հեշտացնել փոխհարաբերությունները, վստահությունը և նոր կապերը: Եթե ​​ընկերասիրությունը հանգեցնում է գերհանձնառության կամ վստահության, նախքան այն վաստակելը, արագորեն բացահայտեք ինքնաբացահայտումը, ստուգեք կարևոր պնդումները և թողեք «ոչ» ասելու տեղ:'
    },
    'E.2': {
      low: 'Ավելի ցածր միավորը կարող է ապահովել կենտրոնացում, հարմարավետություն մենակության հետ և ավելի քիչ կախվածություն խմբային խթանումից: Եթե ​​մենակությունը վերածվում է մեկուսացման կամ խմբերը դառնում են ավելի ու ավելի դժվար, ընտրեք ավելի փոքր հավաքույթներ և պլանավորեք վերականգնման ժամանակը, այլ ոչ թե ընդհանրապես խուսափելու շփումից:',
      high: 'Ավելի բարձր միավորը կարող է էներգիա բերել խմբերին և օգնել ստեղծել սոցիալական թափ: Եթե ​​ընկերությունը դուրս է մղում կենտրոնացված աշխատանքը կամ անհարմար է դարձնում մենակությունը, պաշտպանեք անխափան ժամանակը և զբաղվեք լսելով՝ առանց փոխգործակցությունը շարունակելու անհրաժեշտության:'
    },
    'E.3': {
      low: 'Ավելի ցածր միավորը կարող է տեղ բացել լսելու, համագործակցության և այլ մարդկանց առաջնորդության համար: Եթե ​​ձեր կարիքները կամ փորձը մնում են անտեսանելի, պատրաստեք մեկ հստակ նախադասություն, ուղղակիորեն խնդրեք կամ խոսեք մեկ անգամ քննարկման սկզբում:',
      high: 'Ավելի բարձր միավորը կարող է օգնել խմբին որոշումներ կայացնել և ուղղություն տալ, երբ մյուսները տատանվում են: Եթե ​​չափազանց շատ տեղ եք զբաղեցնում, խնդրեք այլ կարծիքներ հայտնել, սպասեք նախքան պատասխանելը և բացահայտեք սեփականության իրավունքը, այլ ոչ թե համաձայնություն ենթադրելու:'
    },
    'E.4': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել անշտապ տեմպին և կայուն ուշադրությանը՝ առանց մշտական ​​շարժման: Եթե ​​կարևոր աշխատանքը բազմիցս հետաձգվում է, ընտրեք փոքր թվով առաջնահերթություններ և նրանց տեսանելի ժամկետներ կամ ժամանակային բլոկներ տվեք:',
      high: 'Ավելի բարձր միավորը կարող է ստեղծել թափ և գործողության հզոր կարողություն: Եթե ​​գործունեությունը դառնում է գերծանրաբեռնված կամ զբաղված առանց առաջընթացի, տարբերակեք շարժումը արդյունքներից և ժամանակացույցի բուֆերները և վերականգնումը նույնքան միտումնավոր, որքան առաջադրանքները:'
    },
    'E.5': {
      low: 'Ավելի ցածր միավորը կարող է նպաստել անվտանգությանը, կայունությանը և բավարարվածությանը առանց ինտենսիվ խթանման: Եթե ​​նորույթներից խուսափելը նեղացնում է ձեր ընտրությունը, փորձեք փոքր, շրջելի փորձեր, որոնց ռիսկերը նախապես հայտնի են:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել քաջությանը, ուսումնասիրությանը և վառ փորձառություններից հաճույք ստանալուն: Եթե ​​ձանձրույթն ավելորդ վտանգ է առաջացնում, սահմաններ դրեք նախքան հուզմունքը բարձրանալը և խթաններ փնտրեք այնպիսի միջավայրերում, որտեղ բացասական կողմը պարունակվում է:'
    },
    'E.6': {
      low: 'Ավելի ցածր միավորը կարող է բերել լրջություն և իրատեսական երանգ, երբ լավատեսությունը կեղծ է: Եթե ​​գնահատանքը կամ ջերմությունը մնում է թաքնված, ասեք դա պարզ և ստեղծեք փոքրիկ առիթներ հաճույքի համար, այլ ոչ թե ակնկալեք, որ դրական զգացումներն ինքնուրույն կհայտնվեն:',
      high: 'Ավելի բարձր միավորը կարող է բարձրացնել խմբի բարոյականությունը և հեշտացնել դրական փորձառությունները: Եթե ​​կենսուրախությունը անտեսում է ցավը կամ ռիսկը, նախ ընդունեք այն, ինչ դժվար է, ապա հույս փնտրեք՝ չհերքելով փաստերը:'
    },
    'O.1': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել կոնկրետ մտածելակերպին և ուշադրություն դարձնել այն ամենին, ինչը գործնական է և դիտարկելի: Եթե ​​ծանոթ պատասխանները դուրս են մղում ավելի լավ հնարավորությունները, ստեղծեք մի քանի այլընտրանքներ, նախքան գնահատեք, թե որն է իրատեսական:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել ստեղծագործությանը, մտավոր մոդելավորմանը և օրիգինալ կապերին: Եթե ​​գաղափարները մնում են երազների մեջ կամ ցրում են ուշադրությունը, գրավիր դրանք, ընտրիր մեկը և վերածիր այն ամենափոքր շոշափելի փորձության:'
    },
    'O.2': {
      low: 'Ավելի ցածր միավորը կարող է ուշադրություն դարձնել գործառույթի, պարզության և ուղղակի օգտակարության վրա: Եթե ​​էսթետիկ փորձառությունը կամ վերականգնող գեղեցկությունը մշտապես անտեսվում է, փորձեք այն կարճ, ցածր ճնշման եղանակներով և նկատեք, թե ինչն է իսկապես գրավում ձեր ուշադրությունը:',
      high: 'Ավելի բարձր միավորը կարող է սրել զգայունությունը ձևի, գեղեցկության և նուրբ մանրամասների նկատմամբ: Եթե ​​գեղագիտական ​​չափանիշները չափազանց շատ ժամանակ են խլում կամ գերակայում են գործառույթը, նախ սահմանեք գործնական սահմանափակումները և որոշեք, թե որտեղ է ճշգրտումն իսկապես արժե այն:'
    },
    'O.3': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել հանգստության և որոշումների կայացմանը, որոնք ավելի քիչ են կախված տվյալ պահի տրամադրությունից: Եթե ​​զգացմունքները դժվարանում են ճանաչել կամ այլ մարդկանց ազդանշանները բաց են թողնում, դադար տվեք մարմնի և զգացմունքների կարճ ստուգման համար՝ նախքան որոշելը, թե ինչ է անհրաժեշտ:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել էմոցիոնալ իրազեկմանը, կարեկցությանը և նրբերանգ ներքին կյանքին: Եթե ​​զգացմունքները դառնում են ճնշող կամ որոշումներ են թելադրում, անվանեք հույզը, թույլ տվեք, որ այն հարթվի և տարբերեք այն, ինչ զգում եք ապացույցներից:'
    },
    'O.4': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել շարունակականությանը, վարպետությանը և հուսալի առօրյային: Եթե ​​առօրյան դառնում է կոշտություն կամ վախ նորույթից, ներկայացրեք մեկ փոքր, շրջելի փոփոխություն՝ պահպանելով մնացած կառուցվածքը:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել հարմարվողականությանն ու ուսումնասիրության միջոցով: Եթե ​​նորությունը անկայունություն է առաջացնում կամ անավարտ պարտավորություններ, պահեք մի քանի անսակարկելի խարիսխներ ժամանակի, փողի և պարտականությունների համար:'
    },
    'O.5': {
      low: 'Այս կողմը վերաբերում է բարդ և վերացական գաղափարների նկատմամբ հետաքրքրությանը, այլ ոչ թե ինտելեկտին կամ IQ-ին: Ավելի ցածր միավորը կարող է նպաստել գործնական որոշումների կայացմանը. եթե անծանոթ գաղափարները շատ արագ անտեսվեն, հարցրեք, թե ինչ ապացույցներ կփոխեն ձեր կարծիքը և իմացեք միայն այն, ինչ պահանջում է որոշումը:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել վերլուծությանը, հետաքրքրասիրությանը և հարմարավետությանը բարդության հետ: Եթե ​​մտածողությունը վերածվում է անվերջ բանավեճի կամ վերլուծության կաթվածի, նախքան հետագա ուսումնասիրությունը սահմանեք որոշման չափանիշը և վերջնաժամկետը:'
    },
    'O.6': {
      low: 'Ավելի ցածր միավորը կարող է պահպանել օգտակար ավանդույթները, ընդհանուր ակնկալիքները և սոցիալական շարունակականությունը: Եթե ​​կոնվենցիան մնում է անկասկած կամ բացառում է համապատասխան հեռանկարները, վերանայեք կանոնի պատճառը և հարցրեք, թե ում վրա է դա ազդում:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել նորմերի քննադատական քննությանը և կառուցողական բարեփոխումներին: Եթե ​​նորույթը ինքնաբերաբար ավելի լավն է, փորձարկեք փոփոխությունները փոքր քայլերով և պահպանեք առկա պրակտիկայի այն մասերը, որոնք դեռևս գործում են:'
    },
    'A.1': {
      low: 'Ավելի ցածր միավորը կարող է օգնել ձեզ նկատել անհամապատասխանությունը և պաշտպանվել ձեզ, երբ խաղադրույքները մեծ են: Եթե ​​կասկածանքն արգելափակում է համագործակցությունը, չափորոշեք վստահությունը՝ այն միանգամից տրամադրելու կամ չեղարկելու փոխարեն. սկսեք փոքր պարտավորություններից և թարմացրեք ապացույցներից:',
      high: 'Ավելի բարձր միավորը կարող է հեշտացնել բաց լինելը և համագործակցությունը: Եթե ​​բարեխղճությունը ձեզ բաց է թողնում շահագործման համար, ստուգեք բարձր ցցերի պահանջները, բացահայտեք ակնկալիքները և պահպանեք սահմանները նույնիսկ ձեզ դուր եկած մարդկանց հետ:'
    },
    'A.2': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել տակտությանը, բանակցություններին և ռազմավարական գաղտնիությանը: Եթե ​​դա ստեղծում է մանիպուլյացիա կամ երկիմաստություն, տարբերակեք օրինական սահմանը խաբեությունից և պարտավորություններ ստանձնեք այն լեզվով, որը կարող է ստուգել դիմացինը:',
      high: 'Ավելի բարձր միավորը կարող է հուսալիություն ստեղծել անմիջականության և թափանցիկության միջոցով: Եթե ​​ազնվությունը դառնում է կոպիտ կամ չափազանցված, համադրեք ճշմարտությունը ժամանակի, համապատասխանության և հոգատարության հետ, թե ինչպես է այն մատուցվում:'
    },
    'A.3': {
      low: 'Ավելի ցածր միավորը կարող է պաշտպանել սահմանափակ ժամանակը և խրախուսել այլ մարդկանց ինքնավարությունը: Եթե ​​ուրիշները զգում են, որ դուք անհասանելի եք կամ փոխադարձությունը քայքայվում է, ընտրեք օգնության մի ձև, որը կարող եք պահպանել և հստակ նշել դրա շրջանակը:',
      high: 'Ավելի բարձր միավորը կարող է ուժեղ աջակցություն և համայնքի զգացում ստեղծել: Եթե ​​օգնությունն առաջացնում է հոգնածություն կամ խանգարում է ուրիշներին պատասխանատվություն ստանձնել, հարցրեք՝ արդյոք օգնությունն անհրաժեշտ է, համաձայնեք սահմանների շուրջ և յուրաքանչյուր կարիք մի դարձրեք ձեր պարտավորությունը:'
    },
    'A.4': {
      low: 'Ավելի ցածր միավորը կարող է օգնել պաշտպանել չափանիշները և ուղղակիորեն լուծել կոնֆլիկտը: Եթե ​​անհամաձայնությունը վերածվում է խրոնիկական շփման, ապա առանձնացրեք անսակարկելի կարիքները ճկուն տարբերակներից և օգտագործեք ընդհանուր չափանիշները, քան ուժը:',
      high: 'Ավելի բարձր միավորը կարող է թուլացնել հակամարտությունը և պաշտպանել համագործակցությունը: Եթե ​​ներդաշնակությունը ձեռք է բերվում կարևոր կարիքները զիջելով, հստակ նշեք սահմանը և թույլ տվեք հարգալից տարաձայնություններ՝ առանց դա համարելու որպես հարաբերությունների ձախողում:'
    },
    'A.5': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել ինքնապաշտպանությանը և տեսանելի դարձնել ներդրումները: Եթե ​​վստահությունը լսվում է որպես գերազանցություն կամ անհետանում է ուրիշների աշխատանքը, պահանջներ ներկայացրեք ապացույցներով և ճշգրիտ կիսեք վարկը:',
      high: 'Ավելի բարձր միավորը կարող է ուշադրություն դարձնել աշխատանքի վրա և հեշտացնել համագործակցությունը: Եթե ​​ձեր ներդրումը բազմիցս անտեսվում է, նկարագրեք ձեր արածը և դրա ազդեցությունը փաստացիորեն. ճշգրիտ ինքնաներկայացումը մեծամտություն չէ:'
    },
    'A.6': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել օբյեկտիվությանը և դժվար որոշումներին, որոնք չեն կարող բավարարել բոլորին: Եթե ​​մարդիկ ընդունում են որոշումը որպես սառը կամ դրա մարդկային արժեքը բաց է թողնվում, հարցրեք, թե ով է կրում այդ բեռը և զուգակցեք հիմնավորումը հստակ բացատրությամբ:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել կարեկցանքի և տառապանքի արագ ճանաչմանը: Եթե ​​կարեկցանքը դառնում է հյուծված կամ հաղթահարում է համապատասխան փաստերը, սահմանեք էմոցիոնալ սահմաններ և ստուգեք, թե ինչ օգնությունն իրականում կբարելավի իրավիճակը:'
    },
    'C.1': {
      low: 'Ավելի ցածր միավորը կարող է խրախուսել զգուշությունը, պատրաստվելը և օգնություն խնդրելը, երբ դա անհրաժեշտ է: Եթե ​​ինքնավստահությունը ձեզ խանգարում է սկսել, ապա առաջադրանքը բաժանեք փոքր մասերի և օգտագործեք ավարտված քայլերը՝ որպես կարողությունների վկայություն:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել սեփականության իրավունքին, հաստատակամությանը և վստահությանը խնդիրների լուծման հարցում: Եթե ​​վստահությունը դառնում է գերագնահատում կամ օգնություն փնտրելու դժկամություն, անցկացրեք համառոտ նախասպանություն և խնդրեք բանիմաց մարդուն վիճարկել ծրագիրը:'
    },
    'C.2': {
      low: 'Ավելի ցածր միավորը կարող է նպաստել ճկունությանը և իմպրովիզացիային, երբ պլանները փոխվում են: Եթե ​​անկարգությունները ժամանակ են պահանջում կամ ստիպում են անհետանալ պարտավորությունները, ստեղծեք միայն մի քանի վստահելի տներ, ցուցակներ և առօրյա բաներ ամենակարևոր բաների համար:',
      high: 'Ավելի բարձր միավորը կարող է աշխատանքը դարձնել պարզ, հուսալի և հեշտ վերսկսել: Եթե ​​կարգը վերածվում է պերֆեկցիոնիզմի կամ փոփոխությունը դառնում է անհանգստացնող, սահմանեք, թե ինչն է բավական լավը և կանխամտածված թուլացրեք պլանում:'
    },
    'C.3': {
      low: 'Ավելի ցածր միավորը կարող է օգնել կասկածի տակ դնել կանոնները և հարմարեցնել պարտավորությունները համատեքստին: Եթե ​​ուրիշները չեն կարող ապավինել ձեր պարտավորություններին կամ էթիկական անկյունները կտրված են, խոստումներ տվեք բացահայտ և վերամիացրեք յուրաքանչյուր պարտավորություն դրա կարևոր պատճառի հետ:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել ամբողջականությանը և վստահելի հետևողականությանը: Եթե ​​պարտականությունը կոշտություն կամ անկայուն բեռ է ստեղծում, դասակարգեք մրցակցային պարտավորությունները և վաղաժամ քննարկեք դրանք՝ դրանք բոլորը լուռ կրելու փոխարեն:'
    },
    'C.4': {
      low: 'Ավելի ցածր միավորը կարող է պաշտպանել հավասարակշռությունը և թույլ տալ բավարարվածություն առանց մշտական ​​մրցակցության: Եթե ​​այն դառնում է լճացում կամ թողնում է արժեքավոր կարողությունները չօգտագործված, ընտրեք անձնական իմաստալից թիրախ և սահմանեք հաջորդ փոքրիկ հանգրվանը:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել վարպետությանն ու կայուն ջանքերին դեպի պահանջկոտ նպատակներ: Եթե ​​ինքնագնահատականը կապված է արդյունքի հետ կամ ջանքերը վերածվում են այրման, սահմանեք, թե ինչն է բավարար և պաշտպանեք հանգիստն ու դերերը, որոնք կապ չունեն ձեռքբերումների հետ:'
    },
    'C.5': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել ինքնաբերականությանը և փոփոխվող առաջնահերթություններին արձագանքելուն: Եթե ​​սկսելը կամ ավարտելը բազմիցս դժվար է, կրճատեք առաջին քայլը, փոխեք միջավայրը և ավելացրեք տեսանելի նշան կամ մեկ այլ անձի պատասխանատվությունը:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել հետևողականությանը, նույնիսկ երբ մոտիվացիան ցածր է: Եթե ​​համառությունը շարունակվում է անցյալի նվազող արդյունքների վրա, սահմանեք դադարեցման կանոններ և վերանայեք, թե արդյոք նպատակը դեռ արժանի է ջանքերին:'
    },
    'C.6': {
      low: 'Ավելի ցածր միավորը կարող է աջակցել արագությանը, փորձերին և գործողություններին թերի տեղեկատվության հետ: Եթե ​​կանխարգելվող սխալները կրկնվում են, ավելացրեք կարճ դադար և ստուգաթերթիկ, նախքան ծախսատար կամ դժվար է հետաձգել որոշումները:',
      high: 'Ավելի բարձր միավորը կարող է աջակցել ռիսկերի վերլուծությանը և զգույշ, բարձրորակ որոշումներին: Եթե ​​զգուշությունը հանգեցնում է ժամանակի բաց թողնման կամ կրկնվող մտորումների, որոշման վերջնաժամկետ սահմանեք և նախընտրեք հետադարձելի օդաչուն, քան որոշակիության սպասելը:'
    }
  },
  id: {
    'N.1': {
      low: 'Skor yang lebih rendah dapat membantu Anda tetap tenang dan mencegah ketidakpastian mengambil alih. Jika ketenangan itu membuat Anda meremehkan risiko atau mempersiapkan diri terlalu sedikit, buatlah daftar risiko yang paling mungkin terjadi dan satu langkah mundur sebelum mengambil keputusan penting.',
      high: 'Skor yang lebih tinggi dapat membantu Anda memperhatikan risiko dan tanda peringatan sejak dini. Jika kekhawatiran berulang kali menyita perhatian Anda, pisahkan apa yang mungkin terjadi dari apa yang mungkin terjadi, tetapkan batas waktu khawatir, dan pilih satu tindakan konkret berikutnya; mencari dukungan profesional jika hal itu terus-menerus mengganggu kehidupan sehari-hari.'
    },
    'N.2': {
      low: 'Skor yang lebih rendah bisa membuat Anda mudah marah dan sulit terprovokasi. Jika Anda cenderung menekan kemarahan yang wajar atau membiarkan batasan tidak disebutkan, sebutkan masalahnya sejak dini dan jelaskan perilaku yang ingin Anda ubah.',
      high: 'Skor yang lebih tinggi dapat membuat Anda cepat mendeteksi ketidakadilan dan mempertahankan hal yang penting. Jika kemarahan meningkatkan konflik atau mendorong reaksi impulsif, berhentilah sejenak sebelum merespons dan nyatakan perilaku, dampak, dan kebutuhan spesifiknya alih-alih menyerang orang tersebut.'
    },
    'N.3': {
      low: 'Skor yang lebih rendah sering kali mendukung pemulihan emosional dan energi yang stabil. Jika hal ini membuat kesedihan orang lain atau kebutuhan Anda akan istirahat mudah untuk diabaikan, pelan-pelan, dengarkan, dan akui kehilangan tersebut sebelum mencoba menyelesaikannya.',
      high: 'Skor yang lebih tinggi mungkin membuat kekecewaan dan kehilangan menjadi lebih menonjol, yang dapat mengungkapkan hal-hal yang sangat berarti bagi Anda. Suasana hati yang buruk dan terus-menerus bukanlah sesuatu yang harus Anda perlakukan hanya sebagai suatu sifat: pertahankan rutinitas dan tugas-tugas kecil, tetap terhubung dengan orang-orang yang dipercaya, dan carilah dukungan profesional jika hal itu berlangsung lama atau mengganggu kehidupan sehari-hari.'
    },
    'N.4': {
      low: 'Skor yang lebih rendah dapat membuat situasi sosial terasa santai dan mengurangi rasa takut dihakimi. Jika terkadang Anda tidak dapat menemukan apa yang Anda lihat, mintalah umpan balik spesifik dan periksa tanggapan orang lain daripada berasumsi bahwa semuanya berjalan baik.',
      high: 'Skor yang lebih tinggi dapat membuat Anda memperhatikan ekspektasi sosial dan reaksi orang lain. Jika pemantauan diri berubah menjadi perenungan atau penghindaran, alihkan perhatian ke tugas bersama, dekati situasi sulit secara bertahap, dan nilai interaksi berdasarkan bukti, bukan pengamatan yang dibayangkan.'
    },
    'N.5': {
      low: 'Skor yang lebih rendah mendukung pengendalian diri dan kemampuan untuk menunda kepuasan. Jika pengekangan menjadi terlalu terkendali atau menyisakan terlalu sedikit ruang untuk bersenang-senang, berikan ruang untuk spontanitas yang tidak berbahaya daripada menunggu sampai tekanan meningkat.',
      high: 'Skor yang lebih tinggi dapat membawa spontanitas, nafsu makan, dan kenikmatan pengalaman langsung. Jika desakan berulang kali menimbulkan kerugian yang kemudian Anda sesali, tambahkan gesekan sebelum bertindak: tunggu, hilangkan pemicunya, tetapkan batasan terlebih dahulu, atau buat pilihan jangka panjang yang diinginkan lebih mudah dicapai.'
    },
    'N.6': {
      low: 'Skor yang lebih rendah dapat membantu Anda berpikir jernih dan bertindak dengan mantap di bawah tekanan. Jika hal ini membuat Anda meremehkan ketegangan pada diri sendiri atau orang lain, rencanakan keadaan darurat dan luangkan waktu untuk berdiskusi dan memulihkan diri setelah masa-masa yang berat.',
      high: 'Skor yang lebih tinggi dapat membuat Anda menyadari kelebihan beban lebih awal dan mencari dukungan sebelum sumber daya habis. Jika tekanan menyebabkan pembekuan atau kebingungan, kurangi tuntutan secara simultan, latih beberapa langkah pertama sebelumnya, dan gunakan rencana tertulis sederhana saat stres tinggi.'
    },
    'E.1': {
      low: 'Skor yang lebih rendah dapat mendukung kemandirian dan lingkaran sosial yang kecil dan selektif. Jika sikap menahan diri disalahartikan sebagai ketidaktertarikan atau menghalangi terbentuknya hubungan yang bermanfaat, tunjukkan kehangatan secara eksplisit dan pertahankan beberapa titik kontak rutin.',
      high: 'Skor yang lebih tinggi dapat membuat hubungan baik, kepercayaan, dan koneksi baru menjadi mudah. Jika keramahan mengarah pada komitmen berlebihan atau kepercayaan sebelum hal itu diperoleh, lakukan keterbukaan diri, verifikasi klaim penting, dan berikan ruang untuk mengatakan tidak.'
    },
    'E.2': {
      low: 'Skor yang lebih rendah dapat memberikan fokus, kenyamanan dalam kesendirian, dan berkurangnya ketergantungan pada rangsangan kelompok. Jika kesendirian berubah menjadi isolasi atau kelompok menjadi semakin sulit, pilihlah pertemuan yang lebih kecil dan rencanakan waktu pemulihan daripada menghindari kontak sama sekali.',
      high: 'Skor yang lebih tinggi dapat memberikan energi bagi kelompok dan membantu menciptakan momentum sosial. Jika perusahaan membuat pekerjaan menjadi tidak fokus atau membuat kesendirian menjadi tidak nyaman, lindungi waktu tanpa gangguan dan berlatihlah mendengarkan tanpa perlu membuat interaksi tetap berjalan.'
    },
    'E.3': {
      low: 'Skor yang lebih rendah dapat memberikan ruang untuk mendengarkan, bekerja sama, dan kepemimpinan orang lain. Jika kebutuhan atau keahlian Anda masih belum terlihat, siapkan satu kalimat yang jelas, ajukan permintaan langsung, atau bicaralah sekali di dekat awal diskusi.',
      high: 'Skor yang lebih tinggi dapat membantu kelompok membuat keputusan dan memberikan arahan ketika kelompok lain ragu-ragu. Jika Anda memakan terlalu banyak ruang, mintalah pendapat yang berbeda, tunggulah sebelum menjawab, dan buatlah kepemilikan secara eksplisit daripada berasumsi persetujuan.'
    },
    'E.4': {
      low: 'Skor yang lebih rendah dapat mendukung kecepatan yang tidak tergesa-gesa dan perhatian yang berkelanjutan tanpa gerakan yang konstan. Jika pekerjaan penting berulang kali tertunda, pilihlah sejumlah kecil prioritas dan berikan tenggat waktu atau batasan waktu yang jelas.',
      high: 'Skor yang lebih tinggi dapat menciptakan momentum dan kapasitas yang kuat untuk bertindak. Jika aktivitas menjadi kelebihan beban atau kesibukan tanpa kemajuan, bedakan gerakan dari hasil dan jadwalkan jeda dan pemulihan dengan sengaja seperti tugas.'
    },
    'E.5': {
      low: 'Skor yang lebih rendah dapat mendukung keamanan, stabilitas, dan kepuasan tanpa rangsangan yang intens. Jika menghindari hal baru mempersempit pilihan Anda, cobalah eksperimen kecil dan dapat dibalik yang risikonya sudah diketahui sebelumnya.',
      high: 'Skor yang lebih tinggi dapat mendukung keberanian, eksplorasi, dan kenikmatan pengalaman nyata. Jika kebosanan mendorong risiko yang tidak perlu, tetapkan batasan sebelum kegembiraan meningkat dan carilah rangsangan dalam situasi di mana sisi buruknya dapat diatasi.'
    },
    'E.6': {
      low: 'Skor yang lebih rendah dapat membawa keseriusan dan nada realistis ketika optimisme terasa salah. Jika penghargaan atau kehangatan tetap tersembunyi, sampaikan dengan jelas dan ciptakan kesempatan kecil untuk bersenang-senang daripada mengharapkan perasaan positif muncul dengan sendirinya.',
      high: 'Skor yang lebih tinggi dapat meningkatkan semangat kelompok dan membuat pengalaman positif mudah diketahui. Jika keceriaan menutupi rasa sakit atau risiko, akui terlebih dahulu apa yang sulit, lalu carilah harapan tanpa menyangkal faktanya.'
    },
    'O.1': {
      low: 'Skor yang lebih rendah dapat mendukung pemikiran konkrit dan perhatian terhadap apa yang praktis dan dapat diamati. Jika jawaban-jawaban yang familiar mengesampingkan kemungkinan-kemungkinan yang lebih baik, hasilkan beberapa alternatif sebelum mengevaluasi mana yang realistis.',
      high: 'Skor yang lebih tinggi dapat mendukung kreativitas, simulasi mental, dan koneksi orisinal. Jika ide-ide tetap berada dalam lamunan atau mengalihkan perhatian, tangkap ide-ide tersebut, pilih salah satu, dan ubah menjadi ujian nyata yang terkecil.'
    },
    'O.2': {
      low: 'Skor yang lebih rendah dapat menjaga perhatian pada fungsi, kejelasan, dan kegunaan langsung. Jika pengalaman estetika atau keindahan restoratif terus-menerus diabaikan, cicipi dengan cara yang singkat dan tidak bertekanan rendah dan perhatikan apa yang benar-benar menarik perhatian Anda.',
      high: 'Skor yang lebih tinggi dapat mempertajam kepekaan terhadap bentuk, keindahan, dan detail halus. Jika standar estetika memakan terlalu banyak waktu atau mengesampingkan fungsi, tentukan batasan praktisnya terlebih dahulu dan putuskan di mana perbaikan tersebut benar-benar layak dilakukan.'
    },
    'O.3': {
      low: 'Skor yang lebih rendah dapat mendukung ketenangan dan pengambilan keputusan yang tidak terlalu terpengaruh oleh suasana hati saat itu. Jika perasaan menjadi sulit diidentifikasi atau sinyal orang lain tidak terjawab, berhentilah sejenak untuk melakukan pemeriksaan tubuh dan emosi sebelum memutuskan apa yang diperlukan.',
      high: 'Skor yang lebih tinggi dapat mendukung kesadaran emosional, empati, dan kehidupan batin yang bernuansa. Jika perasaan menjadi sangat membebani atau mendikte keputusan, sebutkan emosi tersebut, biarkan emosi tersebut menetap, dan bedakan apa yang Anda rasakan dari apa yang ditunjukkan oleh bukti.'
    },
    'O.4': {
      low: 'Skor yang lebih rendah dapat mendukung kesinambungan, penguasaan, dan rutinitas yang dapat diandalkan. Jika rutinitas menjadi kaku atau takut akan hal baru, lakukan satu perubahan kecil yang dapat dibalik sambil tetap menjaga struktur lainnya tetap familiar.',
      high: 'Skor yang lebih tinggi dapat mendukung kemampuan beradaptasi dan pembelajaran melalui eksplorasi. Jika hal baru menciptakan ketidakstabilan atau komitmen yang belum selesai, pertahankan beberapa hal yang tidak dapat dinegosiasikan dalam hal waktu, uang, dan tanggung jawab.'
    },
    'O.5': {
      low: 'Aspek ini menyangkut minat terhadap ide-ide yang kompleks dan abstrak, bukan kecerdasan atau IQ. Skor yang lebih rendah dapat mendukung keputusan praktis; jika ide-ide asing diabaikan terlalu cepat, tanyakan bukti apa yang akan mengubah pikiran Anda dan pelajari hanya apa yang diperlukan dalam keputusan tersebut.',
      high: 'Skor yang lebih tinggi dapat mendukung analisis, rasa ingin tahu, dan kenyamanan dengan kompleksitas. Jika pemikiran berubah menjadi perdebatan tanpa akhir atau kelumpuhan analisis, tentukan kriteria keputusan dan tenggat waktu sebelum mengeksplorasi lebih jauh.'
    },
    'O.6': {
      low: 'Skor yang lebih rendah dapat melestarikan tradisi yang bermanfaat, harapan bersama, dan kesinambungan sosial. Jika konvensi tidak dipertanyakan atau mengecualikan perspektif yang relevan, tinjau kembali alasan peraturan tersebut dan tanyakan siapa yang terkena dampaknya.',
      high: 'Skor yang lebih tinggi dapat mendukung pemeriksaan kritis terhadap norma-norma dan reformasi konstruktif. Jika hal-hal baru secara otomatis dianggap lebih baik, uji perubahan dalam langkah-langkah kecil dan pertahankan bagian-bagian dari praktik yang ada yang masih berfungsi.'
    },
    'A.1': {
      low: 'Skor yang lebih rendah dapat membantu Anda menyadari ketidakkonsistenan dan melindungi diri Anda ketika taruhannya tinggi. Jika kecurigaan menghalangi kerja sama, kalibrasi kepercayaan daripada memberikan atau menahan semuanya sekaligus: mulailah dengan komitmen kecil dan perbarui bukti.',
      high: 'Skor yang lebih tinggi dapat mempermudah keterbukaan dan kerjasama. Jika itikad baik membuat Anda rentan terhadap eksploitasi, verifikasi klaim berisiko tinggi, buat ekspektasi eksplisit, dan pertahankan batasan bahkan dengan orang yang Anda sukai.'
    },
    'A.2': {
      low: 'Skor yang lebih rendah dapat mendukung kebijaksanaan, negosiasi, dan privasi strategis. Jika hal tersebut menimbulkan manipulasi atau ambiguitas, bedakan batasan yang sah dan penipuan dan buatlah komitmen dalam bahasa yang dapat diverifikasi oleh orang lain.',
      high: 'Skor yang lebih tinggi dapat membangun keandalan melalui keterusterangan dan transparansi. Jika kejujuran menjadi blak-blakan atau berlebihan, gabungkan kebenaran dengan waktu, relevansi, dan perhatian terhadap cara penyampaiannya.'
    },
    'A.3': {
      low: 'Skor yang lebih rendah dapat melindungi waktu yang terbatas dan mendorong otonomi orang lain. Jika orang lain menganggap Anda tidak ada atau rasa timbal balik terkikis, pilihlah bentuk bantuan yang dapat Anda pertahankan dan nyatakan cakupannya dengan jelas.',
      high: 'Skor yang lebih tinggi dapat menciptakan dukungan yang kuat dan rasa kebersamaan. Jika membantu menyebabkan kelelahan atau menghalangi orang lain untuk mengambil tanggung jawab, tanyakan apakah bantuan itu diperlukan, sepakati batasannya, dan jangan jadikan setiap kebutuhan sebagai kewajiban Anda.'
    },
    'A.4': {
      low: 'Skor yang lebih rendah dapat membantu mempertahankan standar dan mengatasi konflik secara langsung. Jika ketidaksepakatan menjadi perselisihan kronis, pisahkan kebutuhan yang tidak dapat dinegosiasikan dari pilihan yang fleksibel dan gunakan kriteria bersama, bukan paksaan.',
      high: 'Skor yang lebih tinggi dapat meredakan konflik dan melindungi kerja sama. Jika keharmonisan bisa diperoleh dengan mengakui kebutuhan-kebutuhan penting, nyatakan batasannya dengan jelas dan biarkan perbedaan pendapat yang saling menghormati tanpa menganggapnya sebagai kegagalan hubungan.'
    },
    'A.5': {
      low: 'Skor yang lebih rendah dapat mendukung advokasi diri dan membuat kontribusi terlihat. Jika kepercayaan dianggap sebagai superioritas atau karya orang lain hilang, buatlah klaim dengan bukti dan bagikan penghargaan dengan tepat.',
      high: 'Skor yang lebih tinggi dapat menjaga perhatian pada pekerjaan dan mempermudah kolaborasi. Jika kontribusi Anda berulang kali diabaikan, jelaskan apa yang Anda lakukan dan dampaknya secara faktual; representasi diri yang akurat bukanlah kesombongan.'
    },
    'A.6': {
      low: 'Skor yang lebih rendah dapat mendukung objektivitas dan keputusan sulit yang tidak dapat memuaskan semua orang. Jika masyarakat merasa keputusan tersebut tidak tepat sasaran atau tidak ada kerugian yang harus ditanggung oleh pihak tersebut, tanyakan siapa yang menanggung beban tersebut dan berikan alasannya dengan penjelasan yang jelas.',
      high: 'Skor yang lebih tinggi dapat mendukung rasa kasih sayang dan pengakuan cepat terhadap penderitaan. Jika empati menjadi lelah atau mengesampingkan fakta yang relevan, tetapkan batasan emosional dan verifikasi bantuan apa yang benar-benar dapat memperbaiki situasi.'
    },
    'C.1': {
      low: 'Skor yang lebih rendah dapat mendorong kehati-hatian, persiapan, dan meminta bantuan ketika diperlukan. Jika keraguan diri menghalangi Anda untuk memulai, bagilah tugas menjadi bagian-bagian kecil dan gunakan langkah-langkah yang telah diselesaikan sebagai bukti kemampuan.',
      high: 'Skor yang lebih tinggi dapat mendukung kepemilikan, ketekunan, dan kepercayaan diri dalam menyelesaikan masalah. Jika kepercayaan diri menjadi berlebihan atau keengganan untuk mencari bantuan, lakukan pemeriksaan mayat singkat dan mintalah orang yang berpengetahuan untuk menentang rencana tersebut.'
    },
    'C.2': {
      low: 'Skor yang lebih rendah dapat mendukung fleksibilitas dan improvisasi ketika rencana berubah. Jika kekacauan memakan waktu atau menghilangkan kewajiban, buatlah hanya beberapa rumah, daftar, dan rutinitas yang dapat diandalkan untuk hal-hal yang paling penting.',
      high: 'Skor yang lebih tinggi dapat membuat pekerjaan menjadi jelas, dapat diandalkan, dan mudah untuk dilanjutkan. Jika keteraturan berubah menjadi perfeksionisme atau perubahan menjadi menyusahkan, tentukan apa yang cukup baik dan sengaja tinggalkan rencana tersebut.'
    },
    'C.3': {
      low: 'Skor yang lebih rendah dapat membantu mempertanyakan peraturan dan menyesuaikan kewajiban dengan konteks. Jika orang lain tidak dapat mengandalkan komitmen Anda atau sudut etika terpotong, buatlah janji secara eksplisit dan hubungkan kembali setiap kewajiban dengan alasan pentingnya hal tersebut.',
      high: 'Skor yang lebih tinggi dapat mendukung integritas dan tindak lanjut yang dapat diandalkan. Jika tugas menimbulkan kekakuan atau beban yang tidak berkelanjutan, urutkan kewajiban-kewajiban yang saling bersaing dan negosiasikan ulang kewajiban tersebut lebih awal daripada diam-diam melaksanakan semuanya.'
    },
    'C.4': {
      low: 'Skor yang lebih rendah dapat melindungi keseimbangan dan memungkinkan kepuasan tanpa persaingan terus-menerus. Jika hal tersebut menjadi stagnan atau membiarkan kemampuan berharga tidak terpakai, pilihlah target yang bermakna secara pribadi dan tentukan pencapaian kecil berikutnya.',
      high: 'Skor yang lebih tinggi dapat mendukung penguasaan dan upaya berkelanjutan menuju tujuan yang menuntut. Jika harga diri menjadi terikat pada hasil atau usaha menjadi habis, tentukan apa yang dianggap cukup dan lindungi istirahat dan peran yang tidak berhubungan dengan pencapaian.'
    },
    'C.5': {
      low: 'Skor yang lebih rendah dapat mendukung spontanitas dan daya tanggap terhadap perubahan prioritas. Jika memulai atau menyelesaikan berulang kali sulit, perkecil langkah pertama, ubah lingkungan, dan tambahkan isyarat yang terlihat atau akuntabilitas orang lain.',
      high: 'Skor yang lebih tinggi dapat mendukung tindak lanjut bahkan ketika motivasi rendah. Jika kegigihan terus berlanjut melewati hasil yang semakin berkurang, tetapkan aturan penghentian dan tinjau apakah tujuan tersebut masih layak untuk diusahakan.'
    },
    'C.6': {
      low: 'Skor yang lebih rendah dapat mendukung kecepatan, eksperimen, dan tindakan dengan informasi yang tidak lengkap. Jika kesalahan yang dapat dicegah terulang kembali, tambahkan jeda singkat dan daftar periksa sebelum mengambil keputusan yang mahal atau sulit untuk dibatalkan.',
      high: 'Skor yang lebih tinggi dapat mendukung analisis risiko dan pengambilan keputusan yang cermat dan berkualitas tinggi. Jika kehati-hatian menyebabkan hilangnya waktu atau perenungan yang berulang-ulang, tetapkan tenggat waktu pengambilan keputusan dan pilihlah uji coba yang dapat dibalik daripada menunggu kepastian.'
    }
  },
  is: {
    'N.1': {
      low: 'Lægri einkunn getur hjálpað þér að halda ró þinni og koma í veg fyrir að óvissan taki völdin. Ef þessi ró leiðir þig til að vanmeta áhættuna eða undirbúa þig of lítið skaltu telja upp líklegastu áhættuna og eina afturför áður en þú tekur mikilvæga ákvörðun.',
      high: 'Hærra stig getur hjálpað þér að taka eftir áhættu og viðvörunarmerkjum snemma. Ef áhyggjur neyða athygli þína ítrekað skaltu skilja það sem er mögulegt frá því sem er líklegt, setja takmörk á áhyggjutíma og velja eina áþreifanlega næstu aðgerð; leitaðu til fagaðila ef það truflar daglegt líf viðvarandi.'
    },
    'N.2': {
      low: 'Lægra stig getur gert þig jafnlyndan og erfitt að ögra. Ef þú hefur tilhneigingu til að bæla niður lögmæta reiði eða skilja mörk ótilgreind skaltu nefna vandamálið snemma og lýsa hegðuninni sem þú vilt breyta.',
      high: 'Hærra stig getur gert þig fljótur að greina ósanngirni og verja það sem skiptir máli. Ef reiði magnast upp átök eða knýja fram hvatvís viðbrögð, staldraðu við áður en þú bregst við og tilgreinir tiltekna hegðun, áhrif og þörf í stað þess að ráðast á viðkomandi.'
    },
    'N.3': {
      low: 'Lægra skor styður oft tilfinningalegan bata og stöðuga orku. Ef það gerir sorg annarra eða eigin hvíldarþörf auðvelt að horfa framhjá, hægðu á þér, hlustaðu og viðurkenndu missinn áður en þú reynir að leysa hann.',
      high: 'Hærra stig getur gert vonbrigði og tap sérstaklega áberandi, sem getur leitt í ljós hvað skiptir þig miklu máli. Viðvarandi lágt skap er ekki eitthvað sem þú þarft að meðhöndla sem eiginleiki: Haltu venjum og verkefnum smáum, vertu í sambandi við traust fólk og leitaðu til fagaðila þegar það varir eða skerðir daglegt líf.'
    },
    'N.4': {
      low: 'Lægri einkunn getur gert félagslegar aðstæður slaka á og dregið úr ótta við að dæma. Ef þú missir stundum af því sem þú rekst á skaltu biðja um sérstaka viðbrögð og athuga viðbrögð hins aðilans frekar en að gera ráð fyrir að allt hafi lent vel.',
      high: 'Hærra stig getur gert þig gaum að félagslegum væntingum og viðbrögðum annarra. Ef sjálfseftirlit breytist í íhugun eða forðast, þá skaltu beina athyglinni að sameiginlegu verkefninu, nálgast erfiðar aðstæður smám saman og dæma samskiptin út frá sönnunargögnum frekar en ímyndaðri skoðun.'
    },
    'N.5': {
      low: 'Lægri einkunn styður aðhald og getu til að seinka fullnægingu. Ef aðhald verður ofstýrt eða gefur of lítið pláss fyrir ánægju skaltu vísvitandi búa til pláss fyrir meinlausa sjálfvirkni í stað þess að bíða þar til þrýstingur eykst.',
      high: 'Hærra stig getur leitt til sjálfkrafa, matarlystar og ánægju af tafarlausri reynslu. Ef hvatir skapa ítrekað kostnað sem þú sérð eftir síðar skaltu bæta við núningi áður en þú bregst við: bíddu, fjarlægðu kveikjur, settu takmörk fyrirfram eða gerðu æskilegt langtímaval auðveldara að ná.'
    },
    'N.6': {
      low: 'Lægri einkunn getur hjálpað þér að hugsa skýrt og bregðast stöðugt við undir álagi. Ef það leiðir til þess að þú vanmetir álag í sjálfan þig eða aðra, skipuleggðu viðbúnað og gefðu þér tíma til að fara yfir og jafna þig eftir krefjandi tímabil.',
      high: 'Hærra stig getur gert það að verkum að þú tekur eftir ofhleðslu snemma og leitar aðstoðar áður en fjármagn klárast. Ef þrýstingur veldur frosti eða rugli skaltu draga úr kröfum samtímis, æfa fyrstu skrefin fyrirfram og nota einfalda skriflega áætlun þegar streita er mikil.'
    },
    'E.1': {
      low: 'Lægri einkunn getur stutt sjálfstæði og lítinn, sértækan félagshring. Ef varasjóður er skakkur fyrir áhugaleysi eða kemur í veg fyrir að gagnleg tengsl myndist skaltu gefa skýrt til kynna hlýju og halda nokkrum reglulegum snertiflötum.',
      high: 'Hærra stig getur gert samband, traust og nýjar tengingar auðveldlega. Ef vinsemd leiðir til ofskuldbindingar eða trausts áður en það er áunnið skaltu hraða sjálfsbirtingu, sannreyna mikilvægar fullyrðingar og gefa svigrúm til að segja nei.'
    },
    'E.2': {
      low: 'Lægra stig getur veitt fókus, þægindi með einveru og minni háð hópörvun. Ef einmanaleiki breytist í einangrun eða hópar verða sífellt erfiðari skaltu velja smærri samkomur og skipuleggja batatíma frekar en að forðast samskipti alfarið.',
      high: 'Hærra stig getur fært hópum orku og hjálpað til við að skapa félagslegan skriðþunga. Ef fyrirtæki þröngva út einbeittri vinnu eða gera einveru óþægilega, verndaðu samfelldan tíma og æfðu þig í að hlusta án þess að þurfa að halda samspilinu gangandi.'
    },
    'E.3': {
      low: 'Lægri einkunn getur skapað pláss fyrir hlustun, samvinnu og forystu annarra. Ef þarfir þínar eða sérfræðiþekking eru ósýnileg skaltu undirbúa eina skýra setningu, leggja fram beina beiðni eða tala einu sinni nálægt upphafi umræðunnar.',
      high: 'Hærra skor getur hjálpað hópi að taka ákvarðanir og gefa stefnu þegar aðrir hika. Ef þú tekur of mikið pláss skaltu biðja um ólíkar skoðanir, bíða áður en þú svarar og gera eignarhald skýrt frekar en að gera ráð fyrir samkomulagi.'
    },
    'E.4': {
      low: 'Lægra stig getur stutt ósnortinn hraða og viðvarandi athygli án stöðugrar hreyfingar. Ef mikilvæg vinna tefst ítrekað skaltu velja fáa forgangsröðun og gefa þeim sýnilega fresti eða tímablokkir.',
      high: 'Hærra skor getur skapað skriðþunga og sterka getu til aðgerða. Ef virkni verður ofhleðsla eða annasöm án framfara, greina hreyfingu frá útkomum og skipuleggja biðminni og bata eins vísvitandi og verkefni.'
    },
    'E.5': {
      low: 'Lægri einkunn getur stuðlað að öryggi, stöðugleika og ánægju án mikillar örvunar. Ef að forðast nýjungar þrengir val þitt skaltu prófa litlar, afturkræfar tilraunir þar sem áhættan er þekkt fyrirfram.',
      high: 'Hærra stig getur stutt hugrekki, könnun og ánægju af lifandi reynslu. Ef leiðindi valda óþarfa áhættu skaltu setja mörk áður en spennan eykst og leita að örvun í aðstæðum þar sem ókosturinn er í skefjum.'
    },
    'E.6': {
      low: 'Lægri einkunn getur leitt til alvarleika og raunhæfs tóns þegar bjartsýni myndi finnast rangt. Ef þakklæti eða hlýja er falin, segðu það hreint út og búðu til lítil tækifæri til ánægju í stað þess að búast við að jákvæð tilfinning birtist af sjálfu sér.',
      high: 'Hærra stig getur lyft starfsanda hópsins og auðveldað að taka eftir jákvæðri reynslu. Ef glaðværð hallar á sársauka eða áhættu, viðurkenndu fyrst það sem er erfitt og leitaðu síðan vonar án þess að afneita staðreyndum.'
    },
    'O.1': {
      low: 'Lægri einkunn getur stutt áþreifanlega hugsun og athygli á því sem er hagnýtt og sjáanlegt. Ef kunnugleg svör þröngva út betri möguleikum skaltu búa til nokkra valkosti áður en þú metur hver þeirra er raunhæfur.',
      high: 'Hærra stig getur stutt sköpunargáfu, andlega uppgerð og frumlegar tengingar. Ef hugmyndir haldast í dagdraumum eða dreifa athygli skaltu fanga þær, velja eina og breyta henni í minnsta áþreifanlega próf.'
    },
    'O.2': {
      low: 'Lægri einkunn getur haldið athygli á virkni, skýrleika og beinu notagildi. Ef fagurfræðileg upplifun eða endurnærandi fegurð er stöðugt vanrækt skaltu prófa það á stuttum, lágþrýstingsleiðum og taka eftir því sem raunverulega heldur athygli þinni.',
      high: 'Hærra stig getur skerpt næmni fyrir formi, fegurð og fíngerðum smáatriðum. Ef fagurfræðilegir staðlar taka of mikinn tíma eða hnekkja virkni, skilgreinið fyrst hagnýt skilyrði og ákveðið hvar betrumbætur er sannarlega þess virði.'
    },
    'O.3': {
      low: 'Lægra skor getur stutt æðruleysi og ákvarðanir sem eru minna hrifnar af skapi augnabliksins. Ef erfitt er að bera kennsl á tilfinningar eða merkja annarra er saknað skaltu staldra við í stutta líkams- og tilfinningaskoðun áður en þú ákveður hvað þarf.',
      high: 'Hærra stig getur stutt tilfinningalega meðvitund, samkennd og blæbrigðaríkt innra líf. Ef tilfinningar verða yfirþyrmandi eða ráða ákvörðunum skaltu nefna tilfinninguna, leyfa henni að jafna sig og greina það sem þér finnst frá því sem sönnunargögnin sýna.'
    },
    'O.4': {
      low: 'Lægri einkunn getur stutt samfellu, leikni og áreiðanlegar venjur. Ef venja verður stífni eða ótti við nýjungar skaltu kynna eina litla, afturkræfa breytingu á meðan restin af uppbyggingunni er kunnugleg.',
      high: 'Hærri einkunn getur stutt aðlögunarhæfni og nám með könnun. Ef nýjung skapar óstöðugleika eða ókláraðar skuldbindingar skaltu halda nokkrum óumsemjanlegum akkerum fyrir tíma, peninga og ábyrgð.'
    },
    'O.5': {
      low: 'Þessi flötur varðar áhuga á flóknum og óhlutbundnum hugmyndum, ekki greind eða greindarvísitölu. Lægri einkunn getur verið hagkvæmar ákvarðanir; ef ókunnugum hugmyndum er vísað frá of fljótt skaltu spyrja hvaða sönnunargögn myndu breyta skoðun þinni og læra aðeins hvað ákvörðunin krefst.',
      high: 'Hærra stig getur stutt greiningu, forvitni og þægindi með margbreytileika. Ef hugsun breytist í endalausa umræðu eða greiningarlömun, skilgreinið ákvörðunarviðmiðið og frestinn áður en farið er að kanna frekar.'
    },
    'O.6': {
      low: 'Lægri einkunn getur varðveitt gagnlegar hefðir, sameiginlegar væntingar og félagslega samfellu. Ef sáttmálinn er ótvíræður eða útilokar viðeigandi sjónarmið skaltu endurskoða ástæðuna fyrir reglunni og spyrja hver hefur áhrif á hana.',
      high: 'Hærra stig getur stutt gagnrýna skoðun á viðmiðum og uppbyggilegum umbótum. Ef nýjung er meðhöndluð sem sjálfkrafa betri skaltu prófa breytingar í litlum skrefum og varðveita þá hluta núverandi starfs sem enn virka.'
    },
    'A.1': {
      low: 'Lægra stig getur hjálpað þér að taka eftir ósamræmi og vernda þig þegar húfi er hátt. Ef grunur hindrar samvinnu, stilltu traust í stað þess að veita eða halda því eftir öllu í einu: byrjaðu á litlum skuldbindingum og uppfærðu frá sönnunargögnum.',
      high: 'Hærri einkunn getur auðveldað hreinskilni og samvinnu. Ef góð trú gerir þig opinn fyrir arðráni, sannreyndu fullyrðingar um háar fjárhæðir, gerðu væntingar skýrar og haltu mörkum jafnvel við fólk sem þér líkar við.'
    },
    'A.2': {
      low: 'Lægra stig getur stutt háttvísi, samningaviðræður og stefnumótandi næði. Ef það skapar meðferð eða tvíræðni, greina lögmæt mörk frá blekkingum og gera skuldbindingar á tungumáli sem hinn aðilinn getur sannreynt.',
      high: 'Hærra stig getur byggt upp áreiðanleika með beina og gagnsæi. Ef heiðarleiki verður hreinskilinn eða of mikill að deila skaltu sameina sannleikann við tímasetningu, mikilvægi og umhyggju fyrir því hvernig honum er komið til skila.'
    },
    'A.3': {
      low: 'Lægri einkunn getur verndað takmarkaðan tíma og ýtt undir sjálfræði annarra. Ef aðrir upplifa þig ekki tiltækan eða gagnkvæmni eyðist skaltu velja hjálp sem þú getur haldið uppi og tilgreinið umfang hennar með skýrum hætti.',
      high: 'Hærra stig getur skapað sterkan stuðning og tilfinningu fyrir samfélagi. Ef hjálp veldur kulnun eða kemur í veg fyrir að aðrir axli ábyrgð, spyrðu hvort hjálp sé óskað, komdu saman um takmörk og gerðu ekki allar þarfir að skyldu þinni.'
    },
    'A.4': {
      low: 'Lægra stig getur hjálpað til við að verja staðla og taka á átökum beint. Ef ágreiningur verður að langvarandi núningi, aðskiljið óviðráðanlegar þarfir frá sveigjanlegum valkostum og notaðu sameiginleg viðmið frekar en valdi.',
      high: 'Hærra stig getur dregið úr átökum og verndað samvinnu. Ef sátt er keypt með því að viðurkenna mikilvægar þarfir, segðu mörkin skýrt og leyfðu virðingarfullan ágreining án þess að líta á það sem sambandsbrest.'
    },
    'A.5': {
      low: 'Lægra skor getur stutt sjálfsvörslu og gert framlög sýnileg. Ef traust heyrist sem yfirburðir eða vinnu annarra hverfur, komdu með fullyrðingar með sönnunargögnum og deildu trúnaði nákvæmlega.',
      high: 'Hærri einkunn getur haldið athyglinni á verkinu og auðveldað samvinnu. Ef framlag þitt er ítrekað gleymt, lýstu því sem þú gerðir og áhrif þess í raun og veru; nákvæm sjálfsframsetning er ekki hroki.'
    },
    'A.6': {
      low: 'Lægri einkunn getur stutt hlutlægni og erfiðar ákvarðanir sem geta ekki fullnægt öllum. Ef fólk upplifir ákvörðunina sem köldu eða mannkostnaði hennar er sleppt skaltu spyrja hver beri byrðarnar og para rökstuðninginn við skýra skýringu.',
      high: 'Hærra stig getur stutt samúð og skjóta viðurkenningu á þjáningu. Ef samkennd verður þreytandi eða hnekkir viðeigandi staðreyndum skaltu setja tilfinningaleg mörk og sannreyna hvaða hjálp mun raunverulega bæta ástandið.'
    },
    'C.1': {
      low: 'Lægri einkunn getur hvatt til varkárni, undirbúnings og að biðja um hjálp þegar þess er þörf. Ef efasemdir koma í veg fyrir að þú byrjar skaltu brjóta verkefnið í litla bita og nota lokið skref sem sönnun um getu.',
      high: 'Hærra stig getur stutt eignarhald, þrautseigju og sjálfstraust við að leysa vandamál. Ef sjálfstraust verður að ofmati eða tregðu til að leita sér hjálpar skaltu fara í stutta forskoðun og biðja fróðan mann að ögra áætluninni.'
    },
    'C.2': {
      low: 'Lægri einkunn getur stutt sveigjanleika og spuna þegar áætlanir breytast. Ef röskun kostar tíma eða lætur skyldur hverfa, búðu til aðeins nokkur áreiðanleg heimili, lista og venjur fyrir það sem skiptir mestu máli.',
      high: 'Hærra stig getur gert vinnu skýra, áreiðanlega og auðvelt að halda áfram. Ef reglu breytist í fullkomnunaráráttu eða breytingar verða erfiðar skaltu skilgreina hvað er nógu gott og skilja áætlunina eftir vísvitandi slaka.'
    },
    'C.3': {
      low: 'Lægra stig getur hjálpað til við að efast um reglur og laga skyldur að samhengi. Ef aðrir geta ekki reitt sig á skuldbindingar þínar eða siðferðileg horn eru skorin, gerðu loforð skýr og tengdu hverja skuldbindingu aftur við ástæðuna sem hún skiptir máli.',
      high: 'Hærra stig getur stutt heilindi og áreiðanlega eftirfylgni. Ef skylda skapar stífni eða ósjálfbært álag skaltu raða skuldbindingum í samkeppni og endursemja þær snemma í stað þess að bera þær allar í hljóði.'
    },
    'C.4': {
      low: 'Lægri einkunn getur verndað jafnvægi og leyft ánægju án stöðugrar samkeppni. Ef það verður stöðnun eða skilur verðmæta hæfileika ónotaða, veldu persónulega þýðingarmikið markmið og skilgreindu næsta litla áfanga.',
      high: 'Hærra skor getur stutt leikni og viðvarandi viðleitni í átt að krefjandi markmiðum. Ef sjálfsvirðið verður bundið við framlag eða áreynsla verður kulnun, skilgreindu hvað telst nóg og vernda hvíld og hlutverk sem eru ótengd árangri.'
    },
    'C.5': {
      low: 'Lægri einkunn getur stutt sjálfsprottni og viðbrögð við breyttum forgangsröðun. Ef byrjun eða frágang er ítrekað erfitt skaltu minnka fyrsta skrefið, breyta umhverfinu og bæta við sýnilegum vísbendingu eða ábyrgð annars einstaklings.',
      high: 'Hærra skor getur stutt eftirfylgni jafnvel þegar hvatning er lítil. Ef þrautseigja heldur áfram framhjá minnkandi ávöxtun skaltu setja stöðvunarreglur og endurskoða hvort markmiðið verðskuldi enn fyrirhöfnina.'
    },
    'C.6': {
      low: 'Lægra stig getur stutt hraða, tilraunir og aðgerðir með ófullnægjandi upplýsingum. Ef villur sem hægt er að koma í veg fyrir endurtaka sig skaltu bæta við stuttu hléi og gátlista áður en ákvarðanir eru kostnaðarsamar eða erfitt að snúa við.',
      high: 'Hærra stig getur stutt áhættugreiningu og vandaðar og vandaðar ákvarðanir. Ef varkárni veldur týndri tímasetningu eða endurtekinni íhugun skaltu setja ákvörðunarfrest og kjósa afturkræfan flugmann en að bíða eftir vissu.'
    }
  },
  it: {
    'N.1': {
      low: 'Un punteggio più basso può aiutarti a mantenere la calma e a evitare che l’incertezza prenda il sopravvento. Se quella calma ti porta a sottovalutare i rischi o a prepararti troppo poco, elenca il rischio più probabile e un rimedio prima di una decisione importante.',
      high: "Un punteggio più alto può aiutarti a notare tempestivamente rischi e segnali di allarme. Se la preoccupazione consuma ripetutamente la tua attenzione, separa ciò che è possibile da ciò che è probabile, fissa un limite al tempo dedicato alla preoccupazione e scegli un'azione concreta successiva; cercare un supporto professionale se disturba persistentemente la vita quotidiana."
    },
    'N.2': {
      low: 'Un punteggio basso può renderti equilibrato e difficile da provocare. Se tendi a sopprimere la rabbia legittima o a lasciare i confini non dichiarati, nomina subito il problema e descrivi il comportamento che desideri cambiare.',
      high: "Un punteggio più alto può aiutarti a individuare rapidamente le ingiustizie e a difendere ciò che conta. Se la rabbia intensifica i conflitti o spinge a reazioni impulsive, fai una pausa prima di rispondere e dichiara il comportamento, l'impatto e il bisogno specifici invece di attaccare la persona."
    },
    'N.3': {
      low: "Un punteggio più basso spesso favorisce il recupero emotivo e un’energia costante. Se rende facile trascurare la tristezza di un'altra persona o il tuo bisogno di riposo, rallenta, ascolta e riconosci la perdita prima di provare a risolverla.",
      high: 'Un punteggio più alto può rendere la delusione e la perdita particolarmente salienti, il che può rivelare ciò che conta profondamente per te. L’umore basso e persistente non è qualcosa che devi considerare semplicemente come una caratteristica: mantieni routine e compiti piccoli, rimani in contatto con persone fidate e cerca un supporto professionale quando dura o compromette la vita quotidiana.'
    },
    'N.4': {
      low: "Un punteggio più basso può far sentire rilassate le situazioni sociali e ridurre la paura del giudizio. Se a volte non ti accorgi di come ti sei imbattuto, chiedi un feedback specifico e controlla la risposta dell'altra persona invece di dare per scontato che tutto sia andato bene.",
      high: 'Un punteggio più alto può renderti attento alle aspettative sociali e alle reazioni degli altri. Se l’automonitoraggio si trasforma in ruminazione o evitamento, sposta l’attenzione sul compito condiviso, affronta le situazioni difficili gradualmente e giudica l’interazione sulla base delle prove piuttosto che su un esame immaginario.'
    },
    'N.5': {
      low: 'Un punteggio più basso supporta la moderazione e la capacità di ritardare la gratificazione. Se la moderazione diventa un controllo eccessivo o lascia troppo poco spazio al divertimento, fai deliberatamente spazio a una spontaneità innocua invece di aspettare che cresca la pressione.',
      high: "Un punteggio più alto può portare spontaneità, appetito e godimento dell'esperienza immediata. Se gli impulsi creano ripetutamente costi di cui in seguito ti pentirai, aggiungi attrito prima di agire: attendi, rimuovi i fattori scatenanti, imposta i limiti in anticipo o rendi più facile raggiungere la scelta desiderata a lungo termine."
    },
    'N.6': {
      low: 'Un punteggio più basso può aiutarti a pensare chiaramente e ad agire con fermezza sotto pressione. Se ti porta a sottovalutare la tensione in te stesso o negli altri, pianifica gli imprevisti e prenditi il ​​tempo per il debriefing e il recupero dopo periodi impegnativi.',
      high: 'Un punteggio più alto può farti notare presto il sovraccarico e farti chiedere supporto prima che le risorse si esauriscano. Se la pressione causa congelamento o confusione, riduci le richieste simultanee, prova i primi passi in anticipo e utilizza un semplice piano scritto quando lo stress è elevato.'
    },
    'E.1': {
      low: 'Un punteggio più basso può supportare l’indipendenza e una cerchia sociale piccola e selettiva. Se la riservatezza viene scambiata per disinteresse o impedisce la formazione di relazioni utili, segnala esplicitamente calore e mantieni alcuni punti di contatto regolari.',
      high: 'Un punteggio più alto può facilitare il raggiungimento di rapporti, fiducia e nuove connessioni. Se la cordialità porta a un impegno eccessivo o a una fiducia prima che venga guadagnata, accelera la rivelazione di sé, verifica le affermazioni importanti e lascia spazio per dire di no.'
    },
    'E.2': {
      low: 'Un punteggio più basso può fornire concentrazione, conforto nella solitudine e meno dipendenza dalla stimolazione del gruppo. Se la solitudine si trasforma in isolamento o i gruppi diventano sempre più difficili, scegli riunioni più piccole e pianifica i tempi di recupero piuttosto che evitare del tutto il contatto.',
      high: 'Un punteggio più alto può portare energia ai gruppi e contribuire a creare slancio sociale. Se l’azienda esclude il lavoro mirato o rende scomoda la solitudine, proteggi il tempo ininterrotto e esercitati ad ascoltare senza la necessità di mantenere l’interazione in movimento.'
    },
    'E.3': {
      low: "Un punteggio più basso può lasciare spazio all'ascolto, alla cooperazione e alla leadership di altre persone. Se le tue esigenze o competenze rimangono invisibili, prepara una frase chiara, fai una richiesta diretta o parla una volta vicino all'inizio della discussione.",
      high: 'Un punteggio più alto può aiutare un gruppo a prendere decisioni e dare indicazioni quando gli altri esitano. Se occupi troppo spazio, chiedi opinioni dissenzienti, attendi prima di rispondere e esplicita la proprietà anziché dare per scontato un accordo.'
    },
    'E.4': {
      low: 'Un punteggio più basso può supportare un ritmo lento e un’attenzione sostenuta senza movimento costante. Se un lavoro importante viene ritardato ripetutamente, scegli un numero limitato di priorità e assegna loro scadenze o intervalli di tempo visibili.',
      high: 'Un punteggio più alto può creare slancio e una forte capacità di azione. Se l’attività diventa sovraccarico o frenetica senza progressi, distinguere il movimento dai risultati e programmare le fasi di buffer e il recupero deliberatamente come i compiti.'
    },
    'E.5': {
      low: 'Un punteggio più basso può favorire la sicurezza, la stabilità e la soddisfazione senza una stimolazione intensa. Se evitare le novità restringe le tue scelte, prova piccoli esperimenti reversibili i cui rischi sono noti in anticipo.',
      high: 'Un punteggio più alto può supportare il coraggio, l’esplorazione e il godimento di esperienze vivide. Se la noia comporta rischi inutili, stabilisci dei limiti prima che l’eccitazione aumenti e cerca stimoli in contesti in cui il lato negativo è contenuto.'
    },
    'E.6': {
      low: "Un punteggio più basso può portare serietà e un tono realistico quando l’ottimismo sembrerebbe falso. Se l'apprezzamento o il calore rimangono nascosti, dillo chiaramente e crea piccole occasioni di divertimento invece di aspettarti che i sentimenti positivi appaiano da soli.",
      high: 'Un punteggio più alto può sollevare il morale del gruppo e rendere le esperienze positive più facili da notare. Se l’allegria sorvola il dolore o il rischio, riconosci prima ciò che è difficile, poi cerca la speranza senza negare i fatti.'
    },
    'O.1': {
      low: 'Un punteggio più basso può supportare il pensiero concreto e l’attenzione a ciò che è pratico e osservabile. Se le risposte familiari escludono possibilità migliori, genera diverse alternative prima di valutare quale è realistica.',
      high: "Un punteggio più alto può supportare la creatività, la simulazione mentale e le connessioni originali. Se le idee rimangono nei sogni ad occhi aperti o disperdono l'attenzione, catturale, scegline una e trasformala nella più piccola prova tangibile."
    },
    'O.2': {
      low: "Un punteggio più basso può mantenere l’attenzione sulla funzionalità, sulla chiarezza e sull’utilità diretta. Se l'esperienza estetica o la bellezza rigenerante vengono costantemente trascurate, provale in modo breve e senza pressione e nota ciò che attira veramente la tua attenzione.",
      high: 'Un punteggio più alto può affinare la sensibilità alla forma, alla bellezza e ai dettagli sottili. Se gli standard estetici consumano troppo tempo o prevalgono sulla funzione, definisci prima i vincoli pratici e decidi dove vale davvero la pena perfezionarli.'
    },
    'O.3': {
      low: 'Un punteggio più basso può supportare la compostezza e decisioni meno influenzate dall’umore del momento. Se i sentimenti diventano difficili da identificare o i segnali degli altri vengono persi, fai una breve pausa per un breve controllo del corpo e delle emozioni prima di decidere cosa è necessario.',
      high: "Un punteggio più alto può supportare la consapevolezza emotiva, l’empatia e una vita interiore ricca di sfumature. Se i sentimenti diventano travolgenti o dettano decisioni, dai un nome all'emozione, lascia che si stabilizzi e distingui ciò che provi da ciò che mostrano le prove."
    },
    'O.4': {
      low: 'Un punteggio più basso può supportare continuità, padronanza e routine affidabili. Se la routine diventa rigidità o paura della novità, introduci un piccolo cambiamento reversibile mantenendo familiare il resto della struttura.',
      high: 'Un punteggio più alto può supportare l’adattabilità e l’apprendimento attraverso l’esplorazione. Se la novità crea instabilità o impegni incompiuti, mantieni alcune ancore non negoziabili per tempo, denaro e responsabilità.'
    },
    'O.5': {
      low: 'Questo aspetto riguarda l’interesse per idee complesse e astratte, non per l’intelligenza o il QI. Un punteggio più basso può favorire decisioni pratiche; se le idee non familiari vengono respinte troppo rapidamente, chiedi quali prove potrebbero farti cambiare idea e scopri solo ciò che richiede la decisione.',
      high: 'Un punteggio più alto può supportare l’analisi, la curiosità e il conforto con la complessità. Se il pensiero si trasforma in un dibattito senza fine o in una paralisi dell’analisi, definisci il criterio decisionale e la scadenza prima di esplorare ulteriormente.'
    },
    'O.6': {
      low: 'Un punteggio più basso può preservare tradizioni utili, aspettative condivise e continuità sociale. Se la convenzione non viene messa in discussione o esclude prospettive rilevanti, rivisitare il motivo della regola e chiedere chi ne è interessato.',
      high: 'Un punteggio più alto può supportare l’esame critico delle norme e una riforma costruttiva. Se la novità viene considerata automaticamente migliore, testare i cambiamenti a piccoli passi e preservare le parti della pratica esistente che ancora funzionano.'
    },
    'A.1': {
      low: 'Un punteggio più basso può aiutarti a notare le incoerenze e a proteggerti quando la posta in gioco è alta. Se il sospetto blocca la cooperazione, calibra la fiducia invece di concederla o negarla tutta in una volta: inizia con piccoli impegni e aggiorna in base alle prove.',
      high: 'Un punteggio più alto può facilitare l’apertura e la cooperazione. Se la buona fede ti lascia aperto allo sfruttamento, verifica le affermazioni ad alto rischio, esplicita le aspettative e mantieni i confini anche con le persone che ti piacciono.'
    },
    'A.2': {
      low: "Un punteggio più basso può supportare il tatto, la negoziazione e la privacy strategica. Se crea manipolazione o ambiguità, distinguere un confine legittimo dall'inganno e assumere impegni in un linguaggio che l'altra persona possa verificare.",
      high: 'Un punteggio più alto può creare affidabilità attraverso la franchezza e la trasparenza. Se l’onestà diventa schiettezza o condivisione eccessiva, combina la verità con il tempismo, la pertinenza e la cura per il modo in cui viene espressa.'
    },
    'A.3': {
      low: "Un punteggio più basso può proteggere un tempo limitato e incoraggiare l'autonomia di altre persone. Se gli altri ti percepiscono come non disponibile o la reciprocità si sgretola, scegli una forma di aiuto che puoi sostenere e dichiarane chiaramente la portata.",
      high: 'Un punteggio più alto può creare un forte sostegno e un senso di comunità. Se aiutare provoca esaurimento o impedisce ad altri di assumersi la responsabilità, chiedi se è necessario aiuto, concorda dei limiti e non considerare ogni necessità un obbligo.'
    },
    'A.4': {
      low: 'Un punteggio più basso può aiutare a difendere gli standard e ad affrontare direttamente i conflitti. Se il disaccordo diventa un attrito cronico, separare i bisogni non negoziabili dalle opzioni flessibili e utilizzare criteri condivisi anziché forzare.',
      high: 'Un punteggio più alto può ridurre il conflitto e proteggere la cooperazione. Se l’armonia viene conquistata concedendo bisogni importanti, stabilisci chiaramente i confini e consenti un rispettoso disaccordo senza trattarlo come un fallimento relazionale.'
    },
    'A.5': {
      low: 'Un punteggio più basso può supportare l’auto-difesa e rendere visibili i contributi. Se la fiducia viene interpretata come superiorità o il lavoro degli altri scompare, fai affermazioni con prove e condividi il merito in modo preciso.',
      high: "Un punteggio più alto può mantenere l'attenzione sul lavoro e facilitare la collaborazione. Se il tuo contributo viene ripetutamente trascurato, descrivi ciò che hai fatto e il suo effetto in modo concreto; un’accurata rappresentazione di sé non è arroganza."
    },
    'A.6': {
      low: 'Un punteggio più basso può supportare l’obiettività e decisioni difficili che non possono soddisfare tutti. Se le persone percepiscono la decisione come fredda o non ne tengono conto il costo umano, chiedi chi ne sopporta il peso e abbina il ragionamento a una spiegazione chiara.',
      high: 'Un punteggio più alto può supportare la compassione e il rapido riconoscimento della sofferenza. Se l’empatia diventa esaurimento o prevale sui fatti rilevanti, stabilisci i confini emotivi e verifica quale aiuto migliorerà effettivamente la situazione.'
    },
    'C.1': {
      low: "Un punteggio più basso può incoraggiare cautela, preparazione e richiesta di aiuto quando necessario. Se i dubbi su te stesso ti impediscono di iniziare, suddividi l'attività in piccole parti e utilizza i passaggi completati come prova di capacità.",
      high: 'Un punteggio più alto può supportare la responsabilità, la tenacia e la fiducia nella risoluzione dei problemi. Se la fiducia diventa sopravvalutazione o riluttanza a cercare aiuto, esegui un breve esame pre-mortem e chiedi a una persona esperta di contestare il piano.'
    },
    'C.2': {
      low: 'Un punteggio più basso può supportare la flessibilità e l’improvvisazione quando i piani cambiano. Se il disordine costa tempo o fa sparire gli obblighi, crea solo poche case, elenchi e routine affidabili per le cose che contano di più.',
      high: 'Un punteggio più alto può rendere il lavoro chiaro, affidabile e facile da riprendere. Se l’ordine si trasforma in perfezionismo o il cambiamento diventa angosciante, definisci ciò che è abbastanza buono e lascia deliberatamente un margine di flessibilità nel piano.'
    },
    'C.3': {
      low: 'Un punteggio più basso può aiutare a mettere in discussione le regole e ad adattare gli obblighi al contesto. Se gli altri non possono fare affidamento sui tuoi impegni o gli angoli etici vengono tagliati, fai promesse esplicite e ricollega ogni obbligo al motivo per cui è importante.',
      high: 'Un punteggio più alto può supportare l’integrità e un follow-through affidabile. Se il dovere crea rigidità o un carico insostenibile, classifica gli obblighi concorrenti e rinegoziali tempestivamente invece di sopportarli tutti silenziosamente.'
    },
    'C.4': {
      low: 'Un punteggio più basso può proteggere l’equilibrio e consentire la soddisfazione senza una competizione costante. Se diventa stagnante o lascia inutilizzate abilità preziose, scegli un obiettivo personalmente significativo e definisci il prossimo piccolo traguardo.',
      high: 'Un punteggio più alto può supportare la padronanza e lo sforzo sostenuto verso obiettivi impegnativi. Se l’autostima si lega ai risultati o lo sforzo diventa esaurimento, definisci ciò che conta come sufficiente e proteggi il riposo e i ruoli non correlati ai risultati.'
    },
    'C.5': {
      low: "Un punteggio più basso può supportare la spontaneità e la reattività al cambiamento delle priorità. Se iniziare o finire è ripetutamente difficile, riduci il primo passo, cambia l'ambiente e aggiungi un segnale visibile o la responsabilità di un'altra persona.",
      high: 'Un punteggio più alto può supportare il follow-through anche quando la motivazione è bassa. Se la persistenza continua nonostante i rendimenti decrescenti, stabilisci delle regole di arresto e verifica se l’obiettivo merita ancora lo sforzo.'
    },
    'C.6': {
      low: 'Un punteggio inferiore può supportare velocità, sperimentazione e azione con informazioni incomplete. Se si ripetono errori prevenibili, aggiungi una breve pausa e una lista di controllo prima di prendere decisioni costose o difficili da annullare.',
      high: "Un punteggio più alto può supportare l’analisi del rischio e decisioni attente e di alta qualità. Se la cautela causa un mancato tempismo o ripetute ruminazioni, fissare una scadenza per la decisione e preferire un pilota reversibile all'attesa della certezza."
    }
  },
  ja: {
    'N.1': {
      low: 'スコアが低いほど、冷静さを保ち、不確実性が引き継がれるのを防ぐことができます。その冷静さによってリスクを過小評価したり、準備が不十分になったりする場合は、重要な決定を下す前に、最も可能性の高いリスクと代替手段を 1 つリストアップしてください。',
      high: 'スコアが高いほど、リスクや警告の兆候に早期に気づくことができます。心配が繰り返し注意力を消耗する場合は、起こり得ることと起こりそうなことを区別し、心配する時間に制限を設け、具体的な次の行動を 1 つ選択してください。継続的に日常生活に支障をきたす場合は、専門家のサポートを求めてください。'
    },
    'N.2': {
      low: 'スコアが低いと、平静になり、挑発しにくくなります。正当な怒りを抑制したり、境界線を明言しないままにする傾向がある場合は、早い段階で問題に名前を付け、変えてほしい行動について説明してください。',
      high: 'スコアが高いほど、不公平を素早く発見し、重要なものを守ることができます。怒りが対立をエスカレートさせたり、衝動的な反応を引き起こしたりする場合は、反応する前に立ち止まり、その人を攻撃するのではなく、具体的な行動、影響、ニーズを述べてください。'
    },
    'N.3': {
      low: 'スコアが低いほど、多くの場合、感情の回復と安定したエネルギーがサポートされます。他の人の悲しみやあなた自身の休息の必要性が見落とされやすくなる場合は、それを解決しようとする前に、速度を緩め、耳を傾け、喪失を認めてください。',
      high: 'スコアが高いほど失望や喪失感が特に顕著になる可能性があり、それによって自分にとって何が重要なのかが明らかになる可能性があります。持続的な気分の落ち込みは、単なる特性として扱う必要はありません。日課やタスクを小さくし、信頼できる人々とのつながりを保ち、それが続く場合や日常生活に支障をきたす場合は専門家のサポートを求めてください。'
    },
    'N.4': {
      low: 'スコアが低いと、社交的な状況がリラックスした気分になり、判断に対する恐怖が軽減されます。時々自分の意見を聞き逃す場合は、すべてがうまくいったと考えるのではなく、具体的なフィードバックを求め、相手の反応を確認してください。',
      high: 'スコアが高いほど、社会的な期待や他の人の反応に注意を払うことができます。自己監視が反芻や回避に変わった場合は、共通の課題に注意を移し、困難な状況に徐々にアプローチし、想像上の精査ではなく証拠に基づいて相互作用を判断してください。'
    },
    'N.5': {
      low: 'スコアが低いほど、抑制と満足を遅らせる能力がサポートされます。抑制が過度に制御されたり、楽しむ余地が少なすぎたりする場合は、プレッシャーが高まるまで待つのではなく、意図的に無害な自発性のためのスペースを作ります。',
      high: 'スコアが高いほど、自発性、食欲、即時体験の楽しさがもたらされます。衝動が繰り返し発生し、後で後悔するコストが発生する場合は、行動する前に摩擦を加えてください。待つか、トリガーを取り除くか、事前に制限を設定するか、長期的に望む選択に到達しやすくします。'
    },
    'N.6': {
      low: 'スコアが低いほど、明確に考え、プレッシャーの下でも着実に行動することができます。自分自身や他人の負担を過小評価してしまう場合は、不測の事態に備えて計画を立て、報告会や厳しい期間の後に回復する時間を確保してください。',
      high: 'スコアが高いと、過負荷に早期に気づき、リソースが枯渇する前にサポートを求めることができます。プレッシャーによって固まったり混乱したりする場合は、同時に行う要求を減らし、最初の数ステップを事前にリハーサルし、ストレスが高いときは簡単な書面による計画を使用します。'
    },
    'E.1': {
      low: 'スコアが低いほど、独立性と小規模で選択的な社会的サークルをサポートできます。控えめな態度が無関心と誤解されたり、有益な関係の構築を妨げたりする場合は、明示的に温かさを示し、定期的な連絡先をいくつか維持してください。',
      high: 'スコアが高いほど、信頼関係、信頼関係、新しいつながりが生まれやすくなります。親しみやすさが、それを獲得する前に過剰なコミットメントや信頼につながる場合は、自己開示のペースを調整し、重要な主張を確認し、ノーと言える余地を残しておきます。'
    },
    'E.2': {
      low: 'スコアが低いほど、集中力が得られ、孤独でも快適になり、グループの刺激への依存度が低くなります。孤独が孤独に変わったり、グループでの活動がますます困難になった場合は、接触を完全に避けるのではなく、小規模な集まりを選択し、回復時間を計画してください。',
      high: 'より高いスコアはグループにエネルギーをもたらし、社会的な勢いを生み出すのに役立ちます。会社が集中した仕事を締め出したり、孤独を不快にさせたりする場合は、中断されない時間を確保し、やり取りを続ける必要なく話を聞く練習をしてください。'
    },
    'E.3': {
      low: 'スコアが低いと、傾聴、協力、他の人のリーダーシップが発揮される余地が生まれます。自分のニーズや専門知識が見えない場合は、明確な文を 1 つ用意するか、直接リクエストするか、ディスカッションの開始近くに 1 回話してください。',
      high: 'スコアが高いと、グループが意思決定を行ったり、他の人が迷ったときに方向性を示したりするのに役立ちます。スペースを取りすぎる場合は、反対意見を求め、答える前に待って、同意を前提とするのではなく所有権を明確にします。'
    },
    'E.4': {
      low: 'スコアが低いほど、ゆっくりとしたペースと、絶え間なく動作することなく継続的な注意力を維持することができます。重要な仕事が繰り返し遅れている場合は、少数の優先順位を選択し、それらに目に見える期限や時間ブロックを与えます。',
      high: 'スコアが高いほど、勢いと強力な行動力が生まれます。アクティビティが過負荷または多忙になり、進捗が見られない場合は、動作と結果を区別し、タスクと同じように慎重にバッファと回復のスケジュールを設定します。'
    },
    'E.5': {
      low: 'スコアが低いほど、強い刺激がなくても安全性、安定性、満足感が得られます。新しいものを避けることで選択肢が狭まる場合は、リスクが事前にわかっている小規模で可逆的な実験を試してください。',
      high: 'スコアが高いほど、勇気、探索、鮮やかな経験の楽しさをサポートできます。退屈が不必要なリスクを引き起こす場合は、興奮が高まる前に制限を設け、マイナス面が抑制される環境で刺激を求めます。'
    },
    'E.6': {
      low: 'スコアが低いと、楽観的な見方が間違っていると感じられる場合でも、深刻さや現実的な雰囲気がもたらされます。感謝や温かさが隠れたままになっている場合は、ポジティブな感情が自然に現れることを期待するのではなく、はっきりと伝えて、楽しむための小さな機会を作りましょう。',
      high: 'スコアが高いほどグループの士気が高まり、ポジティブな経験に気づきやすくなります。明るさが痛みやリスクをごまかすなら、まず何が難しいかを認め、それから事実を否定せずに希望を探してください。'
    },
    'O.1': {
      low: 'スコアが低いほど、実践的で観察可能なものに対する具体的な思考と注意をサポートできます。既知の答えがより良い可能性を排除する場合は、どれが現実的であるかを評価する前に、いくつかの代替案を生成します。',
      high: 'スコアが高いほど、創造性、メンタル シミュレーション、オリジナルのつながりがサポートされます。アイデアが空想の中に残っていたり、注意が散漫になっている場合は、それを捉えて 1 つを選択し、それを最小の具体的なテストに変えます。'
    },
    'O.2': {
      low: 'スコアが低いと、機能、明瞭さ、直接的な有用性に注目が集まる可能性があります。美的経験や修復的な美しさが常に軽視されている場合は、短く控えめな方法で試してみて、本当に注意を引くものに注目してください。',
      high: 'スコアが高いほど、形状、美しさ、微妙なディテールに対する感性が研ぎ澄まされます。美的基準に時間がかかりすぎたり、機能をオーバーライドしたりする場合は、最初に実際的な制約を定義し、どこを洗練する価値があるかを判断します。'
    },
    'O.3': {
      low: 'スコアが低いほど、その時の気分にあまり左右されずに落ち着いて意思決定を行うことができます。感情を特定するのが難しくなったり、他の人の信号を見逃したりする場合は、何が必要かを判断する前に、一時停止して身体と感情を簡単にチェックしてください。',
      high: 'スコアが高いほど、感情の認識、共感、微妙な内面生活をサポートできます。感情が押しつぶされそうになったり、意思決定を左右したりする場合は、その感情に名前を付け、それが落ち着くのを待って、自分の感じていることと証拠が示していることを区別してください。'
    },
    'O.4': {
      low: 'スコアが低いほど、継続性、熟練度、および信頼できるルーチンをサポートできます。ルーチンが硬直的になったり、目新しさへの恐れが生じたりした場合は、残りの構造を慣れたままにしつつ、小さな可逆的な変更を 1 つ導入します。',
      high: 'スコアが高いほど、適応性と探索による学習がサポートされます。目新しさが不安定になったり、約束が未完了になったりする場合は、時間、お金、責任のために、交渉の余地のないアンカーをいくつか残しておきます。'
    },
    'O.5': {
      low: 'この側面は、知性や IQ ではなく、複雑で抽象的なアイデアへの関心に関するものです。スコアが低いほど、実際的な決定が有利になる可能性があります。馴染みのないアイデアがすぐに却下された場合は、どのような証拠があなたの考えを変えるかを尋ね、その決定に必要なことだけを学びましょう。',
      high: 'スコアが高いほど、分析、好奇心、複雑さへの安心感をサポートできます。思考が終わりのない議論や分析の麻痺に陥った場合は、さらに検討する前に、決定基準と期限を定義してください。'
    },
    'O.6': {
      low: 'スコアが低いほど、有用な伝統、共通の期待、社会的継続性を維持できます。慣例が疑問視されない場合、または関連する観点が除外されている場合は、ルールの理由を再検討し、誰がそのルールの影響を受けるかを尋ねてください。',
      high: 'スコアが高いほど、規範の批判的な検討と建設的な改革をサポートできます。新規性が自動的に優れたものとして扱われる場合は、変更を小さなステップでテストし、既存の慣行のまだ機能する部分を保存します。'
    },
    'A.1': {
      low: 'スコアが低いと、矛盾に気づき、リスクが高いときに身を守ることができます。疑いによって協力が妨げられる場合は、一度にすべてを許可したり保留したりするのではなく、信頼を調整します。小さな約束から始めて、証拠に基づいて更新します。',
      high: 'スコアが高いほど、オープンさと協力が容易になります。誠意を持って搾取される可能性がある場合は、一か八かの主張を検証し、期待を明確にし、たとえ好きな人に対しても境界線を保ちましょう。'
    },
    'A.2': {
      low: 'スコアが低いほど、機転、交渉、戦略的なプライバシーがサポートされます。操作や曖昧さが生じる場合は、正当な境界と欺瞞を区別し、相手が確認できる言葉で約束をしてください。',
      high: 'スコアが高いほど、直接性と透明性を通じて信頼性を高めることができます。正直さが率直になったり、過度に共有したりする場合は、真実とタイミング、関連性を組み合わせて、伝え方に注意してください。'
    },
    'A.3': {
      low: 'スコアを低くすると、限られた時間を守り、他の人の自主性を促すことができます。他の人があなたを利用できないと感じたり、相互関係が損なわれたりした場合は、あなたが維持できる支援の形式を選択し、その範囲を明確に述べてください。',
      high: 'スコアが高いほど、強力なサポートとコミュニティ感が生まれます。助けることが燃え尽き症候群を引き起こしたり、他の人が責任を取るのを妨げたりする場合は、助けが必要かどうかを尋ね、制限について同意し、あらゆるニーズを義務にしないでください。'
    },
    'A.4': {
      low: 'スコアが低いほど、標準を擁護し、競合に直接対処するのに役立ちます。意見の相違が慢性的な摩擦になった場合は、交渉の余地のないニーズを柔軟な選択肢から切り離し、強制ではなく共有の基準を使用します。',
      high: 'スコアが高いほど紛争を緩和し、協力を保護できます。重要なニーズを譲歩することで調和が得られるのであれば、境界線を明確に示し、それを人間関係の失敗として扱わず、敬意を持って意見の相違を認めてください。'
    },
    'A.5': {
      low: 'スコアが低いほど、自己主張をサポートし、貢献を目に見えるようにすることができます。優位性や他人の仕事が消えたとして自信が聞こえた場合は、証拠を持って主張し、信用を正確に共有してください。',
      high: 'スコアが高いほど、作業に集中し続けることができ、共同作業が容易になります。あなたの貢献が繰り返し無視される場合は、あなたが行ったこととその影響を事実に基づいて説明してください。正確な自己表現は傲慢ではありません。'
    },
    'A.6': {
      low: 'スコアが低いほど、客観性や全員を満足させることができない難しい決定を裏付ける可能性があります。人々がその決定を冷たいと感じたり、その決定の人的コストが無視されていると感じた場合は、誰が負担を負うのかを尋ね、その理由を明確な説明と組み合わせてください。',
      high: 'スコアが高いほど、思いやりと苦しみの素早い認識をサポートできます。共感が疲れ果てたり、関連する事実が無効になったりする場合は、感情的な境界線を設定し、どのような助けが実際に状況を改善するかを確認してください。'
    },
    'C.1': {
      low: 'スコアが低いと、慎重になり、準備を整え、必要なときに助けを求めるようになる可能性があります。自信が持てずに始められない場合は、タスクを小さな部分に分割し、完了したステップを能力の証拠として使用します。',
      high: 'スコアが高いほど、問題解決に対する主体性、粘り強さ、自信が高まります。自信が過大評価になったり、助けを求めることに消極的になったりした場合は、簡単な事前分析を行って、知識のある人に計画に異議を唱えるよう依頼してください。'
    },
    'C.2': {
      low: 'スコアが低いほど、計画が変更された場合の柔軟性と即興性をサポートできます。混乱により時間がかかったり、義務がなくなったりする場合は、最も重要なことのための信頼できるホーム、リスト、ルーチンを少数だけ作成してください。',
      high: 'スコアが高いほど、作業が明確で信頼性が高く、再開が容易になります。秩序が完璧主義に変わったり、変化が苦痛になったりした場合は、何が十分であるかを定義し、計画に意図的な余裕を残してください。'
    },
    'C.3': {
      low: 'スコアが低いほど、ルールに疑問を持ち、義務を状況に適応させるのに役立ちます。他の人があなたの約束を信頼できない場合、または倫理的な側面がカットされている場合は、約束を明確にし、それぞれの義務をそれが重要な理由に結び付け直します。',
      high: 'スコアが高いほど、整合性と信頼できるフォロースルーがサポートされます。義務によって硬直性が生じたり、持続不可能な負荷が生じたりする場合は、すべての義務を黙って背負うのではなく、競合する義務をランク付けし、早期に再交渉してください。'
    },
    'C.4': {
      low: 'スコアが低いとバランスが保たれ、絶えず競争することなく満足できます。それが停滞したり、貴重な能力が未使用のままになったりした場合は、個人的に意味のある目標を選択し、次の小さなマイルストーンを定義します。',
      high: 'より高いスコアは、厳しい目標に向けた習熟と継続的な努力をサポートします。自尊心が成果に結び付けられたり、努力が燃え尽き症候群になったりした場合は、何が十分であるかを定義し、成果に関係のない休息や役割を保護します。'
    },
    'C.5': {
      low: 'スコアが低いほど、優先順位の変化に対する自発性と即応性がサポートされます。開始または終了が繰り返し困難な場合は、最初のステップを縮小し、環境を変更し、目に見える合図や他の人の責任を追加します。',
      high: 'スコアが高いと、モチベーションが低い場合でもフォロースルーをサポートできます。利益逓減を超えて粘りが続く場合は、停止ルールを設定し、目標がまだ努力に値するかどうかを見直します。'
    },
    'C.6': {
      low: 'スコアが低いほど、スピード、実験、および不完全な情報によるアクションがサポートされます。回避可能なエラーが再発する場合は、コストがかかる、または取り消しが難しい決定を下す前に、短い一時停止とチェックリストを追加します。',
      high: 'スコアが高いほど、リスク分析と慎重で質の高い意思決定がサポートされます。慎重なためにタイミングを逃したり、反芻が繰り返されたりする場合は、決定期限を設定し、確実性を待つよりも、元に戻せるパイロットを優先します。'
    }
  },
  ko: {
    'N.1': {
      low: '점수가 낮을수록 침착함을 유지하고 불확실성을 극복하는 데 도움이 될 수 있습니다. 그 평온함이 위험을 과소평가하거나 너무 적게 준비하게 만든다면, 중요한 결정을 내리기 전에 가장 가능성이 높은 위험과 한 가지 대체 조치를 나열하십시오.',
      high: '점수가 높을수록 위험과 경고 신호를 조기에 발견하는 데 도움이 될 수 있습니다. 걱정이 반복적으로 당신의 주의를 소모한다면, 가능한 것과 가능한 것을 분리하고, 걱정 시간에 제한을 설정하고, 구체적인 다음 조치 하나를 선택하십시오. 지속적으로 일상생활을 방해하는 경우 전문가의 도움을 받으세요.'
    },
    'N.2': {
      low: '점수가 낮을수록 당신은 차분하고 화내기 어려워질 수 있습니다. 정당한 분노를 억제하거나 경계를 명시하지 않는 경향이 있다면, 문제를 일찍 언급하고 바꾸고 싶은 행동을 설명하십시오.',
      high: '점수가 높을수록 불공정함을 빠르게 감지하고 중요한 사항을 방어할 수 있습니다. 분노가 갈등을 증폭시키거나 충동적인 반응을 불러일으키는 경우, 대응하기 전에 잠시 멈추고 그 사람을 공격하는 대신 구체적인 행동, 영향 및 필요 사항을 설명하십시오.'
    },
    'N.3': {
      low: '점수가 낮을수록 정서적 회복과 꾸준한 에너지를 지원하는 경우가 많습니다. 다른 사람의 슬픔이나 휴식에 대한 자신의 욕구를 간과하기 쉽게 만든다면, 문제를 해결하려고 하기 전에 속도를 늦추고, 듣고, 그 상실을 인정하십시오.',
      high: '점수가 높을수록 실망감과 상실감이 특히 두드러질 수 있으며, 이는 귀하에게 깊이 중요한 것이 무엇인지 드러날 수 있습니다. 지속적인 우울함은 단순히 특성으로 취급해야 하는 것이 아닙니다. 일과와 업무를 작게 유지하고, 신뢰할 수 있는 사람들과 계속 연락하고, 그것이 지속되거나 일상 생활에 지장을 줄 때 전문적인 지원을 구하세요.'
    },
    'N.4': {
      low: '점수가 낮을수록 사회적 상황이 편안해지고 판단에 대한 두려움이 줄어들 수 있습니다. 때때로 자신의 의견을 놓치면 모든 것이 잘 되었다고 가정하기보다는 구체적인 피드백을 요청하고 상대방의 반응을 확인하십시오.',
      high: '점수가 높을수록 사회적 기대와 다른 사람들의 반응에 주의를 기울일 수 있습니다. 자기 감시가 반추나 회피로 바뀌면, 공유된 과제에 주의를 돌리고, 어려운 상황에 점진적으로 접근하고, 상상 속의 조사보다는 증거로 상호 작용을 판단하십시오.'
    },
    'N.5': {
      low: '낮은 점수는 자제력과 만족 지연 능력을 뒷받침합니다. 구속이 지나치게 통제되거나 즐길 여지가 너무 적다면, 압력이 가해질 때까지 기다리지 말고 의도적으로 무해한 자발성을 위한 공간을 만드십시오.',
      high: '점수가 높을수록 자발성, 식욕, 즉각적인 경험의 즐거움을 가져올 수 있습니다. 충동이 반복적으로 비용을 발생시키고 나중에 후회하게 된다면 행동하기 전에 마찰을 더하십시오. 기다리거나, 유발 요인을 제거하거나, 미리 한계를 설정하거나, 원하는 장기적 선택에 도달하기 쉽게 만드십시오.'
    },
    'N.6': {
      low: '점수가 낮을수록 명확하게 생각하고 압박감 속에서도 꾸준히 행동하는 데 도움이 될 수 있습니다. 이로 인해 자신이나 다른 사람의 부담을 과소평가하게 된다면, 비상 상황을 계획하고 힘든 시간이 지난 후에 보고하고 회복할 시간을 만드십시오.',
      high: '점수가 높을수록 과부하를 조기에 발견하고 리소스가 소진되기 전에 지원을 구할 수 있습니다. 압력으로 인해 얼어붙거나 혼란스러울 경우 동시 요구 사항을 줄이고 처음 몇 단계를 미리 연습하고 스트레스가 높을 때는 간단한 서면 계획을 사용하십시오.'
    },
    'E.1': {
      low: '점수가 낮을수록 독립성과 소규모의 선택적 사교 집단을 지원할 수 있습니다. 무관심이 무관심으로 오인되거나 유용한 관계 형성을 방해하는 경우 명시적으로 따뜻함을 알리고 몇 가지 정기적인 접촉 지점을 유지하십시오.',
      high: '점수가 높을수록 친밀감, 신뢰, 새로운 연결이 쉽게 이루어질 수 있습니다. 친근감이 얻기 전에 지나친 헌신이나 신뢰로 이어진다면, 자기 공개 속도를 높이고, 중요한 주장을 확인하고, 거절할 여지를 남겨 두십시오.'
    },
    'E.2': {
      low: '점수가 낮을수록 집중력, 고독에 대한 편안함, 그룹 자극에 대한 의존도가 낮아질 수 있습니다. 고독이 고립으로 변하거나 그룹이 점점 어려워진다면 접촉을 완전히 피하기보다는 소규모 모임을 선택하고 회복 시간을 계획하십시오.',
      high: '점수가 높을수록 그룹에 에너지를 불어넣고 사회적 추진력을 창출하는 데 도움이 될 수 있습니다. 회사가 집중적인 업무를 밀어내거나 혼자 있는 시간을 불편하게 만드는 경우, 방해받지 않는 시간을 확보하고 대화를 계속 이어갈 필요 없이 듣는 연습을 하세요.'
    },
    'E.3': {
      low: '점수가 낮을수록 경청, 협력 및 다른 사람의 리더십에 대한 여지가 생길 수 있습니다. 귀하의 요구 사항이나 전문 지식이 여전히 보이지 않는다면 명확한 문장을 준비하거나 직접 요청하거나 토론 시작 직전에 한 번 말하십시오.',
      high: '높은 점수는 다른 사람들이 주저할 때 그룹이 결정을 내리고 방향을 제시하는 데 도움이 될 수 있습니다. 공간을 너무 많이 차지한다면 반대 의견을 묻고, 대답하기 전에 기다리며, 동의한다고 가정하기보다는 소유권을 명시적으로 밝히십시오.'
    },
    'E.4': {
      low: '점수가 낮을수록 서두르지 않는 속도와 지속적인 움직임 없이 지속적인 주의력을 지원할 수 있습니다. 중요한 작업이 반복적으로 지연되는 경우 소수의 우선순위를 선택하고 가시적인 마감 기한이나 시간 블록을 제공하십시오.',
      high: '점수가 높을수록 추진력과 강력한 행동 능력을 창출할 수 있습니다. 활동이 진행되지 않고 과부하되거나 바빠지면 결과와 동작을 구별하고 작업처럼 의도적으로 버퍼 및 복구를 예약합니다.'
    },
    'E.5': {
      low: '점수가 낮을수록 강렬한 자극 없이도 안전성, 안정성, 만족도를 높일 수 있습니다. 새로운 것을 피하는 것이 선택의 폭을 좁힌다면, 위험이 미리 알려진 소규모의 되돌릴 수 있는 실험을 시도해 보세요.',
      high: '점수가 높을수록 용기, 탐구, 생생한 경험의 즐거움을 지원할 수 있습니다. 지루함이 불필요한 위험을 초래한다면 흥분이 커지기 전에 한계를 설정하고 단점이 포함된 환경에서 자극을 찾으세요.'
    },
    'E.6': {
      low: '낮은 점수는 낙관론이 거짓으로 느껴질 때 진지함과 현실적인 어조를 가져올 수 있습니다. 감사나 따뜻함이 숨겨져 있다면 긍정적인 감정이 저절로 나타날 것이라고 기대하기보다는 솔직하게 말하고 작은 즐거움을 만들어 보세요.',
      high: '점수가 높을수록 그룹의 사기가 높아지고 긍정적인 경험을 쉽게 알아차릴 수 있습니다. 쾌활함이 고통이나 위험을 무색하게 한다면, 먼저 어려운 점을 인정하고, 사실을 부정하지 말고 희망을 찾으십시오.'
    },
    'O.1': {
      low: '낮은 점수는 실제적이고 관찰 가능한 것에 대한 구체적인 사고와 주의를 뒷받침할 수 있습니다. 익숙한 답변이 더 나은 가능성을 밀어낸다면 어느 것이 현실적인지 평가하기 전에 몇 가지 대안을 생성하십시오.',
      high: '점수가 높을수록 창의성, 정신 시뮬레이션 및 독창적인 연결을 지원할 수 있습니다. 아이디어가 몽상에 머물거나 주의를 산만하게 한다면, 그것을 포착하여 하나를 선택하고 이를 가장 작은 유형의 테스트로 전환하세요.'
    },
    'O.2': {
      low: '점수가 낮을수록 기능, 명확성 및 직접적인 유용성에 집중할 수 있습니다. 미적 경험이나 아름다움 회복이 지속적으로 무시된다면, 짧고 부담 없는 방식으로 샘플을 채취하고 진정으로 당신의 관심을 끄는 것이 무엇인지 알아차리십시오.',
      high: '점수가 높을수록 형태, 아름다움, 미묘한 디테일에 대한 민감도가 높아질 수 있습니다. 미적 기준이 너무 많은 시간을 소비하거나 기능을 무시하는 경우, 먼저 실제적인 제약 조건을 정의하고 어느 부분을 개선할 가치가 있는지 결정하세요.'
    },
    'O.3': {
      low: '점수가 낮을수록 순간의 기분에 덜 흔들리는 평정심과 결정을 내릴 수 있습니다. 감정을 식별하기 어려워지거나 다른 사람의 신호를 놓친 경우, 필요한 것이 무엇인지 결정하기 전에 잠깐 몸과 감정을 점검해 보세요.',
      high: '점수가 높을수록 정서적 인식, 공감, 미묘한 내면의 삶을 지원할 수 있습니다. 감정이 너무 커지거나 결정을 내리게 되면 감정에 이름을 붙이고, 감정이 안정되도록 하고, 증거가 보여주는 것과 자신이 느끼는 것을 구별하십시오.'
    },
    'O.4': {
      low: '점수가 낮을수록 연속성, 숙달 및 신뢰할 수 있는 루틴을 지원할 수 있습니다. 일상이 경직되거나 새로움에 대한 두려움이 생기면 나머지 구조를 익숙하게 유지하면서 작고 되돌릴 수 있는 변화 하나를 도입하세요.',
      high: '점수가 높을수록 탐색을 통한 적응성과 학습을 지원할 수 있습니다. 새로움이 불안정하거나 완료되지 않은 약속을 초래한다면 시간, 돈, 책임에 대해 협상할 수 없는 몇 가지 닻을 유지하십시오.'
    },
    'O.5': {
      low: '이 측면은 지능이나 IQ가 아닌 복잡하고 추상적인 아이디어에 대한 관심과 관련이 있습니다. 점수가 낮을수록 실용적인 결정을 내릴 수 있습니다. 익숙하지 않은 아이디어가 너무 빨리 무시된다면 어떤 증거가 마음을 바꿀 수 있는지 물어보고 결정에 필요한 것만 배우십시오.',
      high: '점수가 높을수록 분석, 호기심, 복잡성에 대한 편안함을 뒷받침할 수 있습니다. 생각이 끝없는 논쟁이나 분석 마비로 변한다면 더 깊이 탐구하기 전에 결정 기준과 기한을 정의하십시오.'
    },
    'O.6': {
      low: '점수가 낮을수록 유용한 전통, 공유된 기대, 사회적 연속성을 유지할 수 있습니다. 관습이 의심의 여지가 없거나 관련 관점을 배제하는 경우 규칙의 이유를 다시 살펴보고 규칙의 영향을 받는 사람이 누구인지 물어보십시오.',
      high: '점수가 높을수록 규범에 대한 비판적 검토와 건설적인 개혁을 뒷받침할 수 있습니다. 새로움이 자동으로 더 나은 것으로 간주되면 작은 단계로 변경 사항을 테스트하고 여전히 작동하는 기존 관행의 일부를 보존하십시오.'
    },
    'A.1': {
      low: '점수가 낮을수록 불일치를 발견하고 위험이 높을 때 자신을 보호하는 데 도움이 될 수 있습니다. 의심이 협력을 방해하는 경우, 신뢰를 한꺼번에 부여하거나 보류하는 대신 신뢰를 조정하십시오. 작은 약속부터 시작하여 증거를 업데이트하십시오.',
      high: '점수가 높을수록 개방성과 협력이 더 쉬워질 수 있습니다. 선의로 인해 착취당할 가능성이 있는 경우 위험이 큰 주장을 확인하고, 기대치를 명시하고, 좋아하는 사람과도 경계를 유지하십시오.'
    },
    'A.2': {
      low: '점수가 낮을수록 재치, 협상 및 전략적 개인 정보 보호를 지원할 수 있습니다. 그것이 조작이나 모호성을 야기한다면, 합법적인 경계와 속임수를 구별하고 상대방이 확인할 수 있는 언어로 약속을 하십시오.',
      high: '점수가 높을수록 직접성과 투명성을 통해 신뢰성을 구축할 수 있습니다. 정직이 무뚝뚝하거나 지나친 공유가 된다면, 진실과 타이밍, 타당성, 전달 방법에 대한 관심을 결합하십시오.'
    },
    'A.3': {
      low: '점수가 낮을수록 제한된 시간을 보호하고 다른 사람의 자율성을 장려할 수 있습니다. 다른 사람들이 당신을 이용할 수 없거나 상호주의가 약화되는 것을 경험한다면, 당신이 유지할 수 있는 도움의 형태를 선택하고 그 범위를 명확하게 명시하십시오.',
      high: '점수가 높을수록 강력한 지지와 공동체 의식을 형성할 수 있습니다. 도움을 주면 소진이 발생하거나 다른 사람이 책임을 지지 못하게 되는 경우 도움이 필요한지 물어보고 한계에 동의하고 모든 필요를 의무로 삼지 마십시오.'
    },
    'A.4': {
      low: '점수가 낮을수록 표준을 방어하고 갈등을 직접 해결하는 데 도움이 될 수 있습니다. 불일치가 만성적인 마찰로 이어진다면 협상할 수 없는 요구사항과 유연한 옵션을 분리하고 강제보다는 공유 기준을 사용하세요.',
      high: '점수가 높을수록 갈등이 완화되고 협력이 보호될 수 있습니다. 중요한 요구 사항을 양보하여 조화를 이루었다면 경계를 분명히 밝히고 이를 관계 실패로 간주하지 말고 정중한 불일치를 허용하십시오.'
    },
    'A.5': {
      low: '점수가 낮을수록 자기 옹호를 뒷받침하고 기여를 눈에 띄게 할 수 있습니다. 우월감으로 자신감이 들리거나 남의 일이 사라지면 증거를 가지고 주장하고 신용을 정확하게 공유하십시오.',
      high: '점수가 높을수록 작업에 집중하고 협업을 더 쉽게 할 수 있습니다. 귀하의 기여가 반복적으로 간과되는 경우 귀하가 한 일과 그 효과를 사실적으로 설명하십시오. 정확한 자기 표현은 오만이 아닙니다.'
    },
    'A.6': {
      low: '점수가 낮을수록 모든 사람을 만족시킬 수 없는 객관성과 어려운 결정을 뒷받침할 수 있습니다. 사람들이 결정이 냉담하거나 인적 비용을 놓쳤다면 누가 부담을 지는지 물어보고 그 이유와 명확한 설명을 연결하십시오.',
      high: '점수가 높을수록 연민과 고통에 대한 빠른 인식을 지원할 수 있습니다. 공감이 소진되거나 관련 사실을 무시하는 경우 감정적 경계를 설정하고 실제로 상황을 개선하는 데 도움이 되는 것이 무엇인지 확인하십시오.'
    },
    'C.1': {
      low: '점수가 낮을수록 주의, 준비, 필요할 때 도움 요청을 장려할 수 있습니다. 자기 의심으로 인해 시작하기가 어렵다면 작업을 작은 조각으로 나누고 완료된 단계를 능력의 증거로 활용하십시오.',
      high: '점수가 높을수록 문제 해결에 대한 주인의식, 끈기, 자신감을 뒷받침할 수 있습니다. 자신감이 과대평가되거나 도움을 구하는 것을 꺼리게 되면 간단한 사전 부검을 실시하고 지식이 풍부한 사람에게 계획에 대해 이의를 제기하도록 요청하세요.'
    },
    'C.2': {
      low: '점수가 낮을수록 계획이 변경될 때 유연성과 즉흥성을 지원할 수 있습니다. 무질서로 인해 시간이 걸리거나 의무가 사라지는 경우 가장 중요한 일에 대해 신뢰할 수 있는 집, 목록 및 루틴을 몇 개만 만드십시오.',
      high: '점수가 높을수록 작업이 명확하고 안정적이며 쉽게 재개될 수 있습니다. 질서가 완벽주의로 바뀌거나 변화가 괴로워지면 무엇이 충분히 좋은지 정의하고 계획을 고의적으로 느슨하게 두십시오.'
    },
    'C.3': {
      low: '점수가 낮을수록 규칙에 의문을 제기하고 상황에 맞게 의무를 조정하는 데 도움이 될 수 있습니다. 다른 사람이 귀하의 약속을 믿을 수 없거나 윤리적 측면이 무너지면 약속을 명시하고 각 의무를 중요한 이유와 다시 연결하십시오.',
      high: '점수가 높을수록 무결성과 신뢰할 수 있는 후속 조치를 지원할 수 있습니다. 의무가 경직되거나 지속 불가능한 부담을 야기하는 경우, 경쟁 의무의 순위를 매기고 조용히 모든 의무를 수행하는 대신 조기에 재협상하십시오.'
    },
    'C.4': {
      low: '점수가 낮을수록 균형을 지킬 수 있고 끊임없는 경쟁 없이도 만족을 얻을 수 있습니다. 정체 상태가 되거나 가치 있는 능력이 사용되지 않는 경우, 개인적으로 의미 있는 목표를 선택하고 다음 작은 이정표를 정의하십시오.',
      high: '높은 점수는 까다로운 목표를 향한 숙달과 지속적인 노력을 지원할 수 있습니다. 자존심이 성과에 묶여 있거나 노력이 지치게 되면 무엇이 충분하다고 생각하는지 정의하고 성취와 관련 없는 휴식과 역할을 보호하십시오.'
    },
    'C.5': {
      low: '점수가 낮을수록 우선순위 변경에 대한 자발성과 대응력을 뒷받침할 수 있습니다. 시작이나 마무리가 반복적으로 어려운 경우 첫 번째 단계를 축소하고 환경을 변경하고 눈에 띄는 단서나 다른 사람의 책임을 추가하십시오.',
      high: '점수가 높을수록 동기가 낮은 경우에도 후속 조치를 지원할 수 있습니다. 지속성이 수익 감소를 넘어 계속되면 중지 규칙을 설정하고 목표가 여전히 노력할 가치가 있는지 검토하십시오.'
    },
    'C.6': {
      low: '점수가 낮을수록 속도, 실험, 정보가 불완전한 작업을 지원할 수 있습니다. 예방 가능한 오류가 반복되면 비용이 많이 들거나 되돌리기 어려운 결정을 내리기 전에 잠시 멈추고 체크리스트를 추가하세요.',
      high: '점수가 높을수록 위험 분석과 신중하고 고품질의 결정을 지원할 수 있습니다. 주의로 인해 타이밍을 놓치거나 반복적으로 반추하게 되는 경우 결정 기한을 설정하고 확실성을 기다리는 것보다 되돌릴 수 있는 파일럿을 선호합니다.'
    }
  },
  nl: {
    'N.1': {
      low: "Een lagere score kan je helpen kalm te blijven en te voorkomen dat de onzekerheid de overhand krijgt. Als die kalmte ertoe leidt dat u risico's onderschat of te weinig voorbereidt, noteer dan de meest waarschijnlijke risico's en één uitweg voordat u een belangrijke beslissing neemt.",
      high: "Een hogere score kan u helpen risico's en waarschuwingssignalen vroegtijdig op te merken. Als piekeren herhaaldelijk uw aandacht opslokt, scheid dan wat mogelijk is van wat waarschijnlijk is, stel een limiet in voor de piektijd en kies één concrete volgende actie; zoek professionele ondersteuning als dit het dagelijks leven voortdurend verstoort."
    },
    'N.2': {
      low: 'Een lagere score kan ervoor zorgen dat je een gelijkmatig karakter hebt en moeilijk te provoceren bent. Als je de neiging hebt legitieme woede te onderdrukken of grenzen onuitgesproken te laten, benoem het probleem dan vroeg en beschrijf het gedrag dat je veranderd wilt hebben.',
      high: 'Een hogere score kan ervoor zorgen dat je snel oneerlijkheid opmerkt en verdedigt wat belangrijk is. Als woede conflicten doet escaleren of impulsieve reacties uitlokt, pauzeer dan voordat u reageert en vermeld het specifieke gedrag, de impact en de behoefte in plaats van de persoon aan te vallen.'
    },
    'N.3': {
      low: 'Een lagere score ondersteunt vaak emotioneel herstel en stabiele energie. Als het het verdriet van iemand anders of jouw eigen behoefte aan rust gemakkelijk over het hoofd ziet, doe het dan rustiger aan, luister en erken het verlies voordat je het probeert op te lossen.',
      high: 'Een hogere score kan teleurstelling en verlies extra opvallend maken, waardoor duidelijk wordt wat voor u belangrijk is. Een aanhoudend neerslachtig humeur is niet iets dat je alleen maar als een eigenschap hoeft te beschouwen: houd routines en taken klein, blijf verbonden met vertrouwde mensen en zoek professionele ondersteuning wanneer dit aanhoudt of het dagelijks leven belemmert.'
    },
    'N.4': {
      low: 'Een lagere score kan ervoor zorgen dat sociale situaties ontspannen aanvoelen en de angst voor oordeel vermindert. Als je soms mist hoe je overkomt, vraag dan om specifieke feedback en controleer de reactie van de ander in plaats van ervan uit te gaan dat alles goed is beland.',
      high: 'Een hogere score kan ervoor zorgen dat u alerter wordt op sociale verwachtingen en de reacties van anderen. Als zelfcontrole verandert in herkauwen of vermijden, verleg dan de aandacht naar de gedeelde taak, benader moeilijke situaties geleidelijk en beoordeel de interactie op basis van bewijsmateriaal in plaats van ingebeeld onderzoek.'
    },
    'N.5': {
      low: 'Een lagere score ondersteunt terughoudendheid en het vermogen om bevrediging uit te stellen. Als terughoudendheid te veel wordt of te weinig ruimte laat voor plezier, maak dan bewust ruimte voor onschuldige spontaniteit in plaats van te wachten tot de druk toeneemt.',
      high: 'Een hogere score kan zorgen voor spontaniteit, eetlust en plezier in de onmiddellijke ervaring. Als drang herhaaldelijk kosten met zich meebrengt waar je later spijt van krijgt, voeg dan wrijving toe voordat je handelt: wacht, verwijder triggers, stel vooraf grenzen, of maak de gewenste langetermijnkeuze gemakkelijker haalbaar.'
    },
    'N.6': {
      low: 'Een lagere score kan u helpen helder te denken en standvastig te handelen onder druk. Als dit ertoe leidt dat u de spanning bij uzelf of bij anderen onderschat, plan dan onvoorziene gebeurtenissen en maak tijd vrij voor debriefing en herstel na veeleisende perioden.',
      high: 'Een hogere score kan ertoe leiden dat u vroegtijdig overbelasting opmerkt en hulp zoekt voordat de middelen opraken. Als druk bevriezing of verwarring veroorzaakt, verminder dan de gelijktijdige eisen, oefen de eerste paar stappen van tevoren en gebruik een eenvoudig geschreven plan als de stress hoog is.'
    },
    'E.1': {
      low: 'Een lagere score kan de onafhankelijkheid en een kleine, selectieve sociale kring ondersteunen. Als terughoudendheid wordt aangezien voor desinteresse of als het vormen van nuttige relaties in de weg staat, geef dan expliciet blijk van warmte en onderhoud een paar vaste contactpunten.',
      high: 'Een hogere score kan ervoor zorgen dat er gemakkelijk een goede verstandhouding, vertrouwen en nieuwe verbindingen tot stand komen. Als vriendelijkheid leidt tot overmatige toewijding of vertrouwen voordat het wordt verdiend, pas dan op dat u zichzelf openbaar maakt, verifieer belangrijke beweringen en laat ruimte om nee te zeggen.'
    },
    'E.2': {
      low: 'Een lagere score kan zorgen voor focus, comfort bij eenzaamheid en minder afhankelijkheid van groepsstimulatie. Als eenzaamheid verandert in isolatie of groepen steeds moeilijker worden, kies dan voor kleinere bijeenkomsten en plan hersteltijd in plaats van contact helemaal te vermijden.',
      high: 'Een hogere score kan groepen energie geven en sociaal momentum helpen creëren. Als het gezelschap geconcentreerd werk verdringt of de eenzaamheid ongemakkelijk maakt, bescherm dan de ononderbroken tijd en oefen met luisteren zonder de interactie in beweging te houden.'
    },
    'E.3': {
      low: 'Een lagere score kan ruimte maken voor luisteren, samenwerken en leiderschap van anderen. Als uw behoeften of expertise onzichtbaar blijven, bereid dan één duidelijke zin voor, doe een direct verzoek of spreek één keer aan het begin van het gesprek.',
      high: 'Een hogere score kan een groep helpen beslissingen te nemen en richting te geven als anderen aarzelen. Als u te veel ruimte in beslag neemt, vraag dan om afwijkende meningen, wacht met antwoorden en maak uw eigendom expliciet in plaats van uit te gaan van overeenstemming.'
    },
    'E.4': {
      low: 'Een lagere score kan een rustig tempo en aanhoudende aandacht zonder constante beweging ondersteunen. Als belangrijk werk herhaaldelijk wordt uitgesteld, kies dan een klein aantal prioriteiten en geef deze zichtbare deadlines of tijdsblokken.',
      high: 'Een hogere score kan momentum en een sterk actievermogen creëren. Als de activiteit overbelast raakt of te druk wordt zonder dat er vooruitgang wordt geboekt, maak dan onderscheid tussen beweging en resultaten en plan buffers en herstel net zo doelbewust als taken.'
    },
    'E.5': {
      low: "Een lagere score kan de veiligheid, stabiliteit en tevredenheid bevorderen zonder intense stimulatie. Als het vermijden van nieuwigheid je keuzes beperkt, probeer dan kleine, omkeerbare experimenten waarvan de risico's van tevoren bekend zijn.",
      high: "Een hogere score kan moed, verkenning en plezier van levendige ervaringen ondersteunen. Als verveling onnodige risico's met zich meebrengt, stel dan grenzen voordat de opwinding toeneemt en zoek stimulatie in een omgeving waar de nadelen onder controle zijn."
    },
    'E.6': {
      low: 'Een lagere score kan voor ernst en een realistische toon zorgen, terwijl optimisme vals zou aanvoelen. Als waardering of warmte verborgen blijft, zeg het dan ronduit en creëer kleine momenten van plezier in plaats van te verwachten dat er vanzelf een positief gevoel verschijnt.',
      high: 'Een hogere score kan het groepsmoreel verhogen en ervoor zorgen dat positieve ervaringen gemakkelijker op te merken zijn. Als opgewektheid pijn of risico verdoezelt, erken dan eerst wat moeilijk is en zoek dan naar hoop zonder de feiten te ontkennen.'
    },
    'O.1': {
      low: 'Een lagere score kan concreet denken en aandacht voor wat praktisch en waarneembaar is ondersteunen. Als bekende antwoorden betere mogelijkheden verdringen, genereer dan meerdere alternatieven voordat u evalueert welke realistisch is.',
      high: 'Een hogere score kan creativiteit, mentale simulatie en originele verbindingen ondersteunen. Als ideeën in dagdromen blijven hangen of de aandacht verstrooien, leg ze dan vast, kies er één en maak er de kleinste tastbare test van.'
    },
    'O.2': {
      low: 'Een lagere score kan de aandacht op functie, duidelijkheid en direct nut houden. Als esthetische ervaringen of herstellende schoonheid consequent worden verwaarloosd, probeer het dan op korte, ontspannen manieren en merk op wat werkelijk uw aandacht vasthoudt.',
      high: 'Een hogere score kan de gevoeligheid voor vorm, schoonheid en subtiele details verscherpen. Als esthetische normen te veel tijd in beslag nemen of de functie te boven gaan, definieer dan eerst de praktische beperkingen en beslis waar verfijning echt de moeite waard is.'
    },
    'O.3': {
      low: 'Een lagere score kan de kalmte en beslissingen ondersteunen die minder worden beïnvloed door de stemming van het moment. Als gevoelens moeilijk te identificeren worden of als de signalen van anderen worden gemist, pauzeer dan even voor een korte controle van lichaam en emotie voordat u besluit wat er nodig is.',
      high: 'Een hogere score kan emotioneel bewustzijn, empathie en een genuanceerd innerlijk leven ondersteunen. Als gevoelens overweldigend worden of beslissingen dicteren, geef de emotie dan een naam, laat deze bezinken en maak onderscheid tussen wat u voelt en wat uit het bewijsmateriaal blijkt.'
    },
    'O.4': {
      low: 'Een lagere score kan continuïteit, beheersing en betrouwbare routines ondersteunen. Als routine rigiditeit wordt of angst voor nieuwigheid, introduceer dan een kleine, omkeerbare verandering terwijl je de rest van de structuur vertrouwd houdt.',
      high: 'Een hogere score kan het aanpassingsvermogen en het leren door middel van verkenning ondersteunen. Als nieuwigheid instabiliteit of onvoltooide verplichtingen creëert, houd dan een paar niet-onderhandelbare ankers voor tijd, geld en verantwoordelijkheden over.'
    },
    'O.5': {
      low: 'Dit facet heeft betrekking op interesse in complexe en abstracte ideeën, niet op intelligentie of IQ. Een lagere score kan praktische beslissingen bevorderen; als onbekende ideeën te snel terzijde worden geschoven, vraag dan welk bewijsmateriaal u van gedachten zou doen veranderen en leer alleen wat de beslissing vereist.',
      high: 'Een hogere score kan analyse, nieuwsgierigheid en comfort met complexiteit ondersteunen. Als het denken verandert in een eindeloos debat of een verlamming van de analyse, definieer dan het beslissingscriterium en de deadline voordat u verder onderzoekt.'
    },
    'O.6': {
      low: 'Een lagere score kan nuttige tradities, gedeelde verwachtingen en sociale continuïteit behouden. Als conventies onbetwist blijven of relevante perspectieven uitsluiten, onderzoek dan opnieuw de reden voor de regel en vraag wie erdoor wordt beïnvloed.',
      high: 'Een hogere score kan een kritisch onderzoek naar normen en constructieve hervormingen ondersteunen. Als nieuwigheid als automatisch beter wordt beschouwd, test dan veranderingen in kleine stappen en behoud de delen van de bestaande praktijk die nog steeds werken.'
    },
    'A.1': {
      low: 'Een lagere score kan je helpen inconsistenties op te merken en jezelf te beschermen als er veel op het spel staat. Als verdenking de samenwerking in de weg staat, pas dan het vertrouwen aan in plaats van het in één keer toe te kennen of te onthouden: begin met kleine toezeggingen en werk bij aan de hand van bewijsmateriaal.',
      high: 'Een hogere score kan openheid en samenwerking vergemakkelijken. Als je te goeder trouw openstaat voor uitbuiting, verifieer dan beweringen die veel op het spel staan, maak verwachtingen expliciet en houd grenzen, zelfs met mensen die je leuk vindt.'
    },
    'A.2': {
      low: 'Een lagere score kan tact, onderhandeling en strategische privacy ondersteunen. Als er sprake is van manipulatie of dubbelzinnigheid, maak dan onderscheid tussen een legitieme grens en bedrog en doe toezeggingen in taal die de ander kan verifiëren.',
      high: 'Een hogere score kan de betrouwbaarheid vergroten door directheid en transparantie. Als eerlijkheid botheid of overdreven delen wordt, combineer dan de waarheid met timing, relevantie en zorg voor de manier waarop deze wordt overgebracht.'
    },
    'A.3': {
      low: 'Een lagere score kan de beperkte tijd beschermen en de autonomie van anderen bevorderen. Als anderen ervaren dat u niet beschikbaar bent of als de wederkerigheid erodeert, kies dan een vorm van hulp die u kunt volhouden en geef duidelijk de omvang ervan aan.',
      high: 'Een hogere score kan sterke steun en gemeenschapsgevoel creëren. Als helpen een burn-out veroorzaakt of anderen ervan weerhoudt verantwoordelijkheid te nemen, vraag dan of hulp gewenst is, spreek grenzen af ​​en maak niet elke behoefte tot uw verplichting.'
    },
    'A.4': {
      low: 'Een lagere score kan helpen normen te verdedigen en conflicten direct aan te pakken. Als meningsverschillen chronische wrijving worden, scheid dan niet-onderhandelbare behoeften van flexibele opties en gebruik gedeelde criteria in plaats van geweld.',
      high: 'Een hogere score kan conflicten de-escaleren en de samenwerking beschermen. Als harmonie wordt verkregen door belangrijke behoeften toe te geven, geef dan duidelijk de grens aan en laat respectvolle meningsverschillen toe zonder het te behandelen als een mislukte relatie.'
    },
    'A.5': {
      low: 'Een lagere score kan de eigen belangenbehartiging ondersteunen en bijdragen zichtbaar maken. Als vertrouwen wordt gehoord omdat superioriteit of het werk van anderen verdwijnt, maak dan beweringen met bewijsmateriaal en deel de eer nauwkeurig.',
      high: 'Een hogere score kan de aandacht bij het werk houden en de samenwerking vergemakkelijken. Als uw bijdrage herhaaldelijk over het hoofd wordt gezien, beschrijf dan wat u hebt gedaan en het feitelijke effect ervan; nauwkeurige zelfrepresentatie is geen arrogantie.'
    },
    'A.6': {
      low: 'Een lagere score kan objectiviteit en moeilijke beslissingen ondersteunen die niet iedereen tevreden kunnen stellen. Als mensen de beslissing als koud ervaren of de menselijke prijs ervan wordt gemist, vraag dan wie de last draagt ​​en koppel de redenering aan een duidelijke uitleg.',
      high: 'Een hogere score kan compassie en snelle herkenning van lijden ondersteunen. Als empathie uitputtend wordt of relevante feiten terzijde schuift, stel dan emotionele grenzen en ga na welke hulp de situatie daadwerkelijk zal verbeteren.'
    },
    'C.1': {
      low: 'Een lagere score kan aanmoedigen tot voorzichtigheid, voorbereiding en het vragen om hulp wanneer dat nodig is. Als twijfel aan jezelf je ervan weerhoudt om te beginnen, breek de taak dan in kleine stukjes en gebruik de voltooide stappen als bewijs van je bekwaamheid.',
      high: 'Een hogere score kan eigenaarschap, doorzettingsvermogen en vertrouwen bij het oplossen van problemen ondersteunen. Als het vertrouwen een overschatting wordt of de onwil om hulp te zoeken, voer dan een korte pre-mortem uit en vraag een deskundige persoon om het plan ter discussie te stellen.'
    },
    'C.2': {
      low: 'Een lagere score kan flexibiliteit en improvisatie ondersteunen wanneer plannen veranderen. Als wanorde tijd kost of verplichtingen doet verdwijnen, creëer dan slechts een paar betrouwbare huizen, lijsten en routines voor de dingen die er het meest toe doen.',
      high: 'Een hogere score kan het werk duidelijk, betrouwbaar en gemakkelijk te hervatten maken. Als orde omslaat in perfectionisme of als verandering schrijnend wordt, definieer dan wat goed genoeg is en laat opzettelijk speling in het plan.'
    },
    'C.3': {
      low: 'Een lagere score kan ertoe bijdragen dat regels in twijfel worden getrokken en verplichtingen aan de context worden aangepast. Als anderen niet op uw toezeggingen kunnen vertrouwen of als er op ethische punten wordt bezuinigd, maak beloften dan expliciet en koppel elke verplichting opnieuw aan de reden waarom deze er toe doet.',
      high: 'Een hogere score kan de integriteit en betrouwbare opvolging ondersteunen. Als plichten starheid of een onhoudbare last met zich meebrengen, rangschik dan concurrerende verplichtingen en onderhandel er vroeg over, in plaats van ze allemaal stilletjes mee te dragen.'
    },
    'C.4': {
      low: 'Een lagere score kan het evenwicht beschermen en tevredenheid mogelijk maken zonder constante concurrentie. Als het stagnatie wordt of waardevolle vaardigheden ongebruikt laten, kies dan een persoonlijk betekenisvol doel en definieer de volgende kleine mijlpaal.',
      high: 'Een hogere score kan beheersing en aanhoudende inspanningen voor veeleisende doelen ondersteunen. Als eigenwaarde gebonden raakt aan prestaties of inspanning uitmondt in een burn-out, definieer dan wat als voldoende telt en bescherm rust en rollen die niets met prestaties te maken hebben.'
    },
    'C.5': {
      low: 'Een lagere score kan de spontaniteit en het reactievermogen op veranderende prioriteiten ondersteunen. Als starten of eindigen herhaaldelijk moeilijk is, verklein dan de eerste stap, verander de omgeving en voeg een zichtbaar signaal of de verantwoordelijkheid van iemand anders toe.',
      high: 'Een hogere score kan het doorzetten ondersteunen, zelfs als de motivatie laag is. Als de volharding voortduurt na de afnemende opbrengsten, stel dan stopregels op en beoordeel of het doel nog steeds de moeite waard is.'
    },
    'C.6': {
      low: 'Een lagere score kan snelheid, experimenteren en actie met onvolledige informatie ondersteunen. Als vermijdbare fouten zich herhalen, voeg dan een korte pauze en een checklist toe voordat u beslissingen neemt die kostbaar zijn of moeilijk ongedaan kunnen worden gemaakt.',
      high: 'Een hogere score kan risicoanalyse en zorgvuldige beslissingen van hoge kwaliteit ondersteunen. Als voorzichtigheid leidt tot gemiste timing of herhaaldelijk piekeren, stel dan een beslissingsdeadline in en geef de voorkeur aan een omkeerbare pilot boven het wachten op zekerheid.'
    }
  },
  no: {
    'N.1': {
      low: 'En lavere poengsum kan hjelpe deg å holde deg rolig og forhindre at usikkerheten tar overhånd. Hvis den roen fører til at du undervurderer risikoer eller forbereder deg for lite, skriv opp den mest sannsynlige risikoen og ett tilbakefall før en viktig beslutning.',
      high: 'En høyere poengsum kan hjelpe deg å legge merke til risiko og advarselstegn tidlig. Hvis bekymring gjentatte ganger sluker oppmerksomheten din, skille det som er mulig fra det som er sannsynlig, sett en grense for bekymringstiden, og velg en konkret neste handling; søk profesjonell støtte hvis det vedvarende forstyrrer dagliglivet.'
    },
    'N.2': {
      low: 'En lavere poengsum kan gjøre deg jevn og vanskelig å provosere. Hvis du har en tendens til å undertrykke legitimt sinne eller la grenser være uoppgitte, navngi problemet tidlig og beskriv atferden du ønsker endret.',
      high: 'En høyere poengsum kan gjøre deg rask til å oppdage urettferdighet og forsvare det som betyr noe. Hvis sinne eskalerer konflikter eller driver impulsive reaksjoner, ta en pause før du svarer og oppgi den spesifikke oppførselen, virkningen og behovet i stedet for å angripe personen.'
    },
    'N.3': {
      low: 'En lavere poengsum støtter ofte emosjonell restitusjon og jevn energi. Hvis det gjør en annen persons tristhet eller ditt eget behov for hvile lett å overse, sakte ned, lytt og erkjenne tapet før du prøver å løse det.',
      high: 'En høyere poengsum kan gjøre skuffelse og tap spesielt fremtredende, noe som kan avsløre hva som betyr dypt for deg. Vedvarende lavt humør er ikke noe du bare må behandle som en egenskap: Hold rutiner og oppgaver små, hold kontakten med pålitelige mennesker, og søk profesjonell støtte når det varer eller svekker dagliglivet.'
    },
    'N.4': {
      low: 'En lavere poengsum kan få sosiale situasjoner til å føles avslappet og redusere frykten for å dømme. Hvis du noen ganger savner hvordan du kommer over, be om spesifikk tilbakemelding og sjekk den andre personens svar i stedet for å anta at alt har landet bra.',
      high: 'En høyere score kan gjøre deg oppmerksom på sosiale forventninger og andres reaksjoner. Hvis selvovervåking blir til grubling eller unngåelse, flytt oppmerksomheten til den delte oppgaven, nærmer deg vanskelige situasjoner gradvis, og bedøm interaksjonen etter bevis i stedet for innbilt gransking.'
    },
    'N.5': {
      low: 'En lavere poengsum støtter tilbakeholdenhet og evnen til å utsette tilfredsstillelse. Hvis tilbakeholdenhet blir overkontroll eller gir for lite rom for nytelse, skap bevisst plass til ufarlig spontanitet i stedet for å vente til presset bygger seg opp.',
      high: 'En høyere poengsum kan gi spontanitet, appetitt og glede av umiddelbar opplevelse. Hvis drifter gjentatte ganger skaper kostnader du senere angrer på, legg til friksjon før du handler: vent, fjern triggere, sett grenser på forhånd, eller gjør ønsket langsiktig valg lettere å nå.'
    },
    'N.6': {
      low: 'En lavere poengsum kan hjelpe deg med å tenke klart og handle jevnt under press. Hvis det fører til at du undervurderer belastningen i deg selv eller andre, planlegg beredskap og sett av tid til å debriefe og komme deg etter krevende perioder.',
      high: 'En høyere poengsum kan få deg til å merke overbelastning tidlig og søke støtte før ressursene går tom. Hvis trykk forårsaker frysing eller forvirring, reduser samtidige krav, repeter de første trinnene på forhånd, og bruk en enkel skriftlig plan når stresset er høyt.'
    },
    'E.1': {
      low: 'En lavere poengsum kan støtte uavhengighet og en liten, selektiv omgangskrets. Hvis reserve forveksles med uinteresse eller hindrer nyttige relasjoner i å dannes, signaler varme eksplisitt og oppretthold noen få faste kontaktpunkter.',
      high: 'En høyere poengsum kan gjøre rapport, tillit og nye forbindelser lett. Hvis vennlighet fører til overengasjement eller tillit før det er fortjent, må du fremskynde selvavsløringen, bekrefte viktige påstander og gi rom for å si nei.'
    },
    'E.2': {
      low: 'En lavere poengsum kan gi fokus, komfort med ensomhet og mindre avhengighet av gruppestimulering. Hvis ensomhet blir til isolasjon eller grupper blir stadig vanskeligere, velg mindre samlinger og planlegg restitusjonstid i stedet for å unngå kontakt helt.',
      high: 'En høyere poengsum kan gi energi til grupper og bidra til å skape sosialt momentum. Hvis selskapet fortrenger fokusert arbeid eller gjør ensomhet ubehagelig, beskytt uavbrutt tid og øv deg på å lytte uten å måtte holde interaksjonen i gang.'
    },
    'E.3': {
      low: 'En lavere poengsum kan gi rom for lytting, samarbeid og andres lederskap. Hvis dine behov eller ekspertise forblir usynlige, forbered en klar setning, kom med en direkte forespørsel eller snakk en gang nær starten av diskusjonen.',
      high: 'En høyere poengsum kan hjelpe en gruppe med å ta beslutninger og gi retning når andre nøler. Hvis du tar for mye plass, be om avvikende synspunkter, vent før du svarer, og gjør eierskapet eksplisitt i stedet for å anta enighet.'
    },
    'E.4': {
      low: 'En lavere poengsum kan støtte et rolig tempo og vedvarende oppmerksomhet uten konstant bevegelse. Hvis viktig arbeid gjentatte ganger blir forsinket, velg et lite antall prioriteringer og gi dem synlige tidsfrister eller tidsblokker.',
      high: 'En høyere poengsum kan skape momentum og sterk handlingsevne. Hvis aktivitet blir overbelastning eller travelhet uten fremgang, skille bevegelse fra utfall og planlegge buffere og restitusjon like bevisst som oppgaver.'
    },
    'E.5': {
      low: 'En lavere poengsum kan favorisere sikkerhet, stabilitet og tilfredshet uten intens stimulering. Hvis det å unngå nyhet begrenser valgene dine, prøv små, reversible eksperimenter hvis risiko er kjent på forhånd.',
      high: 'En høyere poengsum kan støtte mot, utforskning og glede av levende opplevelser. Hvis kjedsomhet fører til unødvendig risiko, sett grenser før spenningen øker og søk stimulering i settinger der ulempen er begrenset.'
    },
    'E.6': {
      low: 'En lavere poengsum kan gi seriøsitet og en realistisk tone når optimisme ville føles falsk. Hvis takknemlighet eller varme forblir skjult, si det rett ut og skap små anledninger for nytelse i stedet for å forvente en positiv følelse av seg selv.',
      high: 'En høyere poengsum kan løfte gruppemoralen og gjøre positive opplevelser enkle å legge merke til. Hvis munterhet overskygger smerte eller risiko, erkjenne det som er vanskelig først, og se etter håp uten å fornekte fakta.'
    },
    'O.1': {
      low: 'En lavere skåre kan støtte konkret tenkning og oppmerksomhet på det som er praktisk og observerbart. Hvis kjente svar fortrenger bedre muligheter, generer flere alternativer før du vurderer hvilken som er realistisk.',
      high: 'En høyere poengsum kan støtte kreativitet, mental simulering og originale forbindelser. Hvis ideer forblir i dagdrømmer eller sprer oppmerksomhet, fange dem, velg en og gjør den til den minste håndgripelige test.'
    },
    'O.2': {
      low: 'En lavere poengsum kan holde oppmerksomheten på funksjon, klarhet og direkte nytteverdi. Hvis estetisk opplevelse eller gjenoppbyggende skjønnhet konsekvent blir neglisjert, prøv det på korte, lavtrykksmåter og legg merke til hva som virkelig holder oppmerksomheten din.',
      high: 'En høyere poengsum kan skjerpe følsomheten for form, skjønnhet og subtile detaljer. Hvis estetiske standarder bruker for mye tid eller overstyrer funksjon, må du først definere de praktiske begrensningene og bestemme hvor raffinement virkelig er verdt det.'
    },
    'O.3': {
      low: 'En lavere poengsum kan støtte ro og beslutninger som er mindre påvirket av stemningen i øyeblikket. Hvis følelsene blir vanskelige å identifisere eller andres signaler går glipp av, ta en pause for en kort kropps- og følelsessjekk før du bestemmer deg for hva som trengs.',
      high: 'En høyere poengsum kan støtte emosjonell bevissthet, empati og et nyansert indre liv. Hvis følelsene blir overveldende eller dikterer avgjørelser, navngi følelsen, la den sette seg, og skille det du føler fra det beviset viser.'
    },
    'O.4': {
      low: 'En lavere poengsum kan støtte kontinuitet, mestring og pålitelige rutiner. Hvis rutinen blir stivhet eller frykt for nyhet, introduser en liten, reversibel endring mens du holder resten av strukturen kjent.',
      high: 'En høyere poengsum kan støtte tilpasningsevne og læring gjennom utforskning. Hvis nyhet skaper ustabilitet eller uferdige forpliktelser, hold noen få ikke-omsettelige ankere for tid, penger og ansvar.'
    },
    'O.5': {
      low: 'Denne fasetten gjelder interesse for komplekse og abstrakte ideer, ikke intelligens eller IQ. En lavere poengsum kan favorisere praktiske beslutninger; hvis ukjente ideer avvises for raskt, spør hvilke bevis som ville endre mening og lær bare hva avgjørelsen krever.',
      high: 'En høyere poengsum kan støtte analyse, nysgjerrighet og komfort med kompleksitet. Hvis tenkning blir til endeløs debatt eller analyselammelse, definer beslutningskriteriet og tidsfristen før du utforsker videre.'
    },
    'O.6': {
      low: 'En lavere poengsum kan bevare nyttige tradisjoner, felles forventninger og sosial kontinuitet. Hvis konvensjonen forblir ubestridt eller utelukker relevante perspektiver, se tilbake på årsaken til regelen og spør hvem som er berørt av den.',
      high: 'En høyere score kan støtte kritisk undersøkelse av normer og konstruktiv reform. Hvis nyhet blir behandlet som automatisk bedre, test endringer i små trinn og bevar de delene av eksisterende praksis som fortsatt fungerer.'
    },
    'A.1': {
      low: 'En lavere poengsum kan hjelpe deg å legge merke til inkonsekvens og beskytte deg selv når innsatsen er høy. Hvis mistanke blokkerer samarbeid, kalibrer tillit i stedet for å gi eller holde tilbake alt på en gang: begynn med små forpliktelser og oppdater fra bevis.',
      high: 'En høyere score kan gjøre åpenhet og samarbeid lettere. Hvis god tro gjør deg åpen for utnyttelse, verifiser påstander med høy innsats, gjør forventninger eksplisitte og hold grenser selv med folk du liker.'
    },
    'A.2': {
      low: 'En lavere poengsum kan støtte takt, forhandlinger og strategisk personvern. Hvis det skaper manipulasjon eller tvetydighet, skille en legitim grense fra bedrag og gjøre forpliktelser på språket den andre personen kan bekrefte.',
      high: 'En høyere poengsum kan bygge pålitelighet gjennom direktehet og åpenhet. Hvis ærlighet blir sløvhet eller overdeling, kombiner sannhet med timing, relevans og omsorg for hvordan den blir levert.'
    },
    'A.3': {
      low: 'En lavere poengsum kan beskytte begrenset tid og oppmuntre andre menneskers autonomi. Hvis andre opplever deg som utilgjengelig eller gjensidigheten eroderer, velg en form for hjelp du kan opprettholde og angi omfanget tydelig.',
      high: 'En høyere poengsum kan skape sterk støtte og en følelse av fellesskap. Hvis hjelp forårsaker utbrenthet eller hindrer andre i å ta ansvar, spør om hjelp er ønsket, bli enige om grenser, og ikke gjør alle behov til din forpliktelse.'
    },
    'A.4': {
      low: 'En lavere poengsum kan bidra til å forsvare standarder og adressere konflikter direkte. Hvis uenighet blir kronisk friksjon, separer ikke-omsettelige behov fra fleksible alternativer og bruk delte kriterier i stedet for makt.',
      high: 'En høyere poengsum kan deeskalere konflikt og beskytte samarbeid. Hvis harmoni kjøpes ved å innrømme viktige behov, oppgi grensen tydelig og tillat respektfull uenighet uten å behandle det som svikt i forholdet.'
    },
    'A.5': {
      low: 'En lavere skåre kan støtte selvforsvar og synliggjøre bidrag. Hvis tillit blir hørt som overlegenhet eller andres arbeid forsvinner, kom med påstander med bevis og del kreditt presist.',
      high: 'En høyere poengsum kan holde oppmerksomheten på arbeidet og gjøre samarbeid enklere. Hvis ditt bidrag gjentatte ganger blir oversett, beskriv hva du gjorde og dens faktiske effekt; nøyaktig selvrepresentasjon er ikke arroganse.'
    },
    'A.6': {
      low: 'En lavere skåre kan støtte objektivitet og vanskelige beslutninger som ikke kan tilfredsstille alle. Hvis folk opplever avgjørelsen som kald eller dens menneskelige kostnader blir oversett, spør hvem som bærer byrden og par begrunnelsen med en klar forklaring.',
      high: 'En høyere poengsum kan støtte medfølelse og rask erkjennelse av lidelse. Hvis empati blir utmattelse eller overstyrer relevante fakta, sett følelsesmessige grenser og kontroller hvilken hjelp som faktisk vil forbedre situasjonen.'
    },
    'C.1': {
      low: 'En lavere poengsum kan oppmuntre til forsiktighet, forberedelse og å be om hjelp når det er nødvendig. Hvis selvtvil hindrer deg i å starte, del oppgaven i små biter og bruk fullførte trinn som bevis på evne.',
      high: 'En høyere poengsum kan støtte eierskap, utholdenhet og tillit til å løse problemer. Hvis selvtillit blir overvurdering eller motvilje mot å søke hjelp, ta en kort pre-mortem og be en kunnskapsrik person utfordre planen.'
    },
    'C.2': {
      low: 'En lavere poengsum kan støtte fleksibilitet og improvisasjon når planene endres. Hvis uorden koster tid eller får forpliktelser til å forsvinne, lag bare noen få pålitelige hjem, lister og rutiner for de tingene som betyr mest.',
      high: 'En høyere poengsum kan gjøre arbeidet tydelig, pålitelig og enkelt å gjenoppta. Hvis orden blir til perfeksjonisme eller endring blir plagsomt, definer hva som er godt nok og la planen være bevisst slakk.'
    },
    'C.3': {
      low: 'En lavere poengsum kan bidra til å stille spørsmål ved regler og tilpasse forpliktelser til konteksten. Hvis andre ikke kan stole på dine forpliktelser eller etiske hjørner blir kuttet, gi løfter eksplisitt og koble hver forpliktelse på nytt til grunnen til at det er viktig.',
      high: 'En høyere poengsum kan støtte integritet og pålitelig oppfølging. Hvis plikt skaper stivhet eller en uholdbar belastning, ranger konkurrerende forpliktelser og reforhandle dem tidlig i stedet for å bære dem alle i stillhet.'
    },
    'C.4': {
      low: 'En lavere poengsum kan beskytte balansen og tillate tilfredshet uten konstant konkurranse. Hvis det blir stagnasjon eller etterlater verdifulle evner ubrukt, velg et personlig meningsfullt mål og definer den neste lille milepælen.',
      high: 'En høyere poengsum kan støtte mestring og vedvarende innsats mot krevende mål. Hvis egenverd blir knyttet til produksjon eller innsats blir utbrent, definer hva som teller som nok og beskytt hvile og roller som ikke er relatert til prestasjon.'
    },
    'C.5': {
      low: 'En lavere poengsum kan støtte spontanitet og respons på endrede prioriteringer. Hvis det gjentatte ganger er vanskelig å starte eller fullføre, krymp det første trinnet, endre miljøet og legg til et synlig signal eller en annen persons ansvarlighet.',
      high: 'En høyere poengsum kan støtte oppfølging selv når motivasjonen er lav. Hvis utholdenhet fortsetter etter avtagende avkastning, sett stoppregler og se om målet fortsatt fortjener innsatsen.'
    },
    'C.6': {
      low: 'En lavere poengsum kan støtte hastighet, eksperimentering og handling med ufullstendig informasjon. Hvis feil som kan forebygges gjentar seg, legg til en kort pause og sjekkliste før avgjørelser som er kostbare eller vanskelige å reversere.',
      high: 'En høyere poengsum kan støtte risikoanalyse og nøye beslutninger av høy kvalitet. Hvis forsiktighet forårsaker manglende timing eller gjentatte drøvinger, sett en beslutningsfrist og foretrekk en reversibel pilot fremfor å vente på sikkerhet.'
    }
  },
  pl: {
    'N.1': {
      low: 'Niższy wynik może pomóc Ci zachować spokój i zapobiec przejmowaniu niepewności. Jeśli ten spokój sprawi, że nie docenisz ryzyka lub za mało się przygotujesz, przed podjęciem ważnej decyzji wypisz najbardziej prawdopodobne ryzyko i jedno rozwiązanie awaryjne.',
      high: 'Wyższy wynik może pomóc Ci wcześnie zauważyć zagrożenia i znaki ostrzegawcze. Jeśli zmartwienia stale pochłaniają Twoją uwagę, oddziel to, co możliwe od tego, co prawdopodobne, ustal limit czasu na zamartwianie się i wybierz jedno konkretne następne działanie; szukać profesjonalnego wsparcia, jeśli uporczywie zakłóca to codzienne życie.'
    },
    'N.2': {
      low: 'Niższy wynik może sprawić, że będziesz zrównoważony i trudny do sprowokowania. Jeśli masz tendencję do tłumienia uzasadnionej złości lub pozostawiania granic nieokreślonych, nazwij problem wcześniej i opisz zachowanie, które chcesz zmienić.',
      high: 'Wyższy wynik może przyspieszyć wykrycie nieuczciwości i obronę tego, co ważne. Jeśli złość nasila konflikty lub powoduje impulsywne reakcje, zatrzymaj się przed udzieleniem odpowiedzi i opisz konkretne zachowanie, wpływ i potrzebę, zamiast atakować tę osobę.'
    },
    'N.3': {
      low: 'Niższy wynik często sprzyja regeneracji emocjonalnej i stałej energii. Jeśli dzięki temu łatwo przeoczyć smutek innej osoby lub własną potrzebę odpoczynku, zwolnij, wysłuchaj i przyznaj się do straty, zanim spróbujesz ją rozwiązać.',
      high: 'Wyższy wynik może sprawić, że rozczarowanie i strata będą szczególnie widoczne, co może ujawnić to, co jest dla Ciebie szczególnie ważne. Uporczywego złego nastroju nie można traktować jedynie jako cechy: ograniczaj rutyny i zadania, utrzymuj kontakt z zaufanymi osobami i szukaj profesjonalnego wsparcia, jeśli trwa lub utrudnia codzienne życie.'
    },
    'N.4': {
      low: 'Niższy wynik może sprawić, że w sytuacjach towarzyskich poczujesz się zrelaksowany i zmniejszysz strach przed oceną. Jeśli czasami brakuje Ci kontaktu, poproś o konkretną informację zwrotną i sprawdź reakcję drugiej osoby, zamiast zakładać, że wszystko poszło dobrze.',
      high: 'Wyższy wynik może sprawić, że będziesz uważny na oczekiwania społeczne i reakcje innych ludzi. Jeśli samokontrola zmieni się w rozmyślanie lub unikanie, przenieś uwagę na wspólne zadanie, stopniowo podchodź do trudnych sytuacji i oceniaj interakcję na podstawie dowodów, a nie wyimaginowanej analizy.'
    },
    'N.5': {
      low: 'Niższy wynik świadczy o powściągliwości i zdolności do opóźniania gratyfikacji. Jeśli powściągliwość stanie się nadmierna lub pozostawi zbyt mało miejsca na przyjemność, celowo stwórz przestrzeń dla nieszkodliwej spontaniczności, zamiast czekać, aż narasta presja.',
      high: 'Wyższy wynik może przynieść spontaniczność, apetyt i radość z bezpośrednich doświadczeń. Jeśli powtarzające się popędy powodują koszty, których później żałujesz, przed podjęciem działania dodaj tarcia: poczekaj, usuń czynniki wyzwalające, ustal ograniczenia z wyprzedzeniem lub ułatwij osiągnięcie pożądanego długoterminowego wyboru.'
    },
    'N.6': {
      low: 'Niższy wynik może pomóc Ci jasno myśleć i działać stale pod presją. Jeśli prowadzi to do niedoceniania napięcia u siebie lub u innych, zaplanuj nieprzewidziane sytuacje i poświęć czas na podsumowanie i regenerację po trudnych okresach.',
      high: 'Wyższy wynik może sprawić, że wcześnie zauważysz przeciążenie i zwrócisz się o wsparcie, zanim skończą się zasoby. Jeśli ciśnienie powoduje zamrożenie lub dezorientację, zmniejsz liczbę jednoczesnych żądań, przećwicz kilka pierwszych kroków z wyprzedzeniem i zastosuj prosty pisemny plan, gdy stres jest duży.'
    },
    'E.1': {
      low: 'Niższy wynik może wspierać niezależność i mały, selektywny krąg społeczny. Jeśli rezerwa jest mylona z brakiem zainteresowania lub uniemożliwia tworzenie przydatnych relacji, wyraźnie sygnalizuj ciepło i utrzymuj kilka regularnych punktów kontaktowych.',
      high: 'Wyższy wynik może ułatwić nawiązanie kontaktu, zaufania i nowych kontaktów. Jeśli życzliwość prowadzi do nadmiernego zaangażowania lub zaufania, zanim na nie zostanie zasłużone, tempo ujawniania się, zweryfikowania ważnych twierdzeń i pozostawienie miejsca na odmowę.'
    },
    'E.2': {
      low: 'Niższy wynik może zapewnić skupienie, komfort w samotności i mniejszą zależność od stymulacji grupowej. Jeśli samotność zamienia się w izolację lub grupy stają się coraz trudniejsze, wybieraj mniejsze spotkania i planuj czas na regenerację, zamiast całkowicie unikać kontaktu.',
      high: 'Wyższy wynik może dodać energii grupom i pomóc stworzyć dynamikę społeczną. Jeśli towarzystwo wypiera skupioną pracę lub sprawia, że ​​samotność jest niewygodna, chroń nieprzerwany czas i ćwicz słuchanie bez konieczności utrzymywania interakcji w ruchu.'
    },
    'E.3': {
      low: 'Niższy wynik może stworzyć miejsce na słuchanie, współpracę i przywództwo innych osób. Jeśli Twoje potrzeby lub wiedza pozostają niewidoczne, przygotuj jedno jasne zdanie, złóż bezpośrednią prośbę lub przemów raz na początku dyskusji.',
      high: 'Wyższy wynik może pomóc grupie w podejmowaniu decyzji i wskazywaniu kierunku, gdy inni się wahają. Jeśli zajmujesz zbyt dużo miejsca, poproś o odmienne zdanie, poczekaj z odpowiedzią i wyraźnie określ własność, zamiast zakładać, że się zgadzasz.'
    },
    'E.4': {
      low: 'Niższy wynik może wspierać niespieszne tempo i ciągłą uwagę bez ciągłego ruchu. Jeśli ważna praca jest wielokrotnie opóźniana, wybierz niewielką liczbę priorytetów i podaj im widoczne terminy lub bloki czasowe.',
      high: 'Wyższy wynik może nadać impuls i dużą zdolność do działania. Jeśli aktywność stanie się przeciążeniem lub zajęciem bez postępu, odróżnij ruch od wyników i zaplanuj bufory oraz regenerację tak świadomie, jak zadania.'
    },
    'E.5': {
      low: 'Niższy wynik może sprzyjać bezpieczeństwu, stabilności i satysfakcji bez intensywnej stymulacji. Jeśli unikanie nowości zawęża wybór, spróbuj małych, odwracalnych eksperymentów, których ryzyko jest znane z góry.',
      high: 'Wyższy wynik może wspierać odwagę, eksplorację i radość z żywych doświadczeń. Jeśli nuda powoduje niepotrzebne ryzyko, ustal granice, zanim wzrośnie podekscytowanie, i szukaj stymulacji w otoczeniu, w którym nie ma żadnych wad.'
    },
    'E.6': {
      low: 'Niższy wynik może nadać wypowiedzi powagę i realistyczny ton, gdy optymizm wydawałby się fałszywy. Jeśli uznanie lub ciepło pozostają w ukryciu, powiedz to otwarcie i stwórz małe okazje do przyjemności, zamiast oczekiwać, że pozytywne uczucia pojawią się same.',
      high: 'Wyższy wynik może podnieść morale grupy i sprawić, że pozytywne doświadczenia będą łatwe do zauważenia. Jeśli radość przyćmiewa ból i ryzyko, najpierw przyznaj się do tego, co jest trudne, a następnie poszukaj nadziei, nie zaprzeczając faktom.'
    },
    'O.1': {
      low: 'Niższy wynik może wspierać konkretne myślenie i skupianie się na tym, co praktyczne i obserwowalne. Jeśli znane odpowiedzi wypierają lepsze możliwości, wygeneruj kilka alternatyw, zanim ocenisz, która z nich jest realistyczna.',
      high: 'Wyższy wynik może wspierać kreatywność, symulację mentalną i oryginalne połączenia. Jeśli pomysły pozostają w marzeniach lub rozpraszają uwagę, uchwyć je, wybierz jeden i zamień go w najmniejszy namacalny test.'
    },
    'O.2': {
      low: 'Niższy wynik może zwrócić uwagę na funkcjonalność, przejrzystość i bezpośrednią użyteczność. Jeśli stale zaniedbujesz doznania estetyczne lub piękno regenerujące, wypróbuj je w krótki, bezstresowy sposób i zwróć uwagę na to, co naprawdę przykuwa twoją uwagę.',
      high: 'Wyższy wynik może wyostrzyć wrażliwość na formę, piękno i subtelne szczegóły. Jeśli standardy estetyczne pochłaniają zbyt dużo czasu lub zastępują funkcję, najpierw zdefiniuj ograniczenia praktyczne i zdecyduj, gdzie naprawdę warto udoskonalić.'
    },
    'O.3': {
      low: 'Niższy wynik może sprzyjać opanowaniu i podejmowaniu decyzji, na które w mniejszym stopniu wpływa nastrój chwili. Jeśli trudno jest zidentyfikować uczucia lub sygnały innych osób zostaną przeoczone, zatrzymaj się na krótką chwilę, aby sprawdzić swoje ciało i emocje, zanim podejmiesz decyzję, co jest potrzebne.',
      high: 'Wyższy wynik może wspierać świadomość emocjonalną, empatię i zróżnicowane życie wewnętrzne. Jeśli uczucia stają się przytłaczające lub dyktują decyzje, nazwij emocję, pozwól jej się uspokoić i odróżnij to, co czujesz od tego, co wskazują dowody.'
    },
    'O.4': {
      low: 'Niższy wynik może wspierać ciągłość, mistrzostwo i niezawodne procedury. Jeśli rutyna zmieni się w sztywność lub strach przed nowością, wprowadź jedną małą, odwracalną zmianę, zachowując jednocześnie znajomą resztę struktury.',
      high: 'Wyższy wynik może wspierać zdolność adaptacji i uczenie się poprzez eksplorację. Jeśli nowość powoduje niestabilność lub niedokończone zobowiązania, zachowaj kilka niepodlegających negocjacjom kotwic czasu, pieniędzy i obowiązków.'
    },
    'O.5': {
      low: 'Ten aspekt dotyczy zainteresowania złożonymi i abstrakcyjnymi pomysłami, a nie inteligencją czy IQ. Niższy wynik może sprzyjać praktycznym decyzjom; jeśli nieznane pomysły zostaną zbyt szybko odrzucone, zapytaj, jakie dowody zmieniłyby Twoje zdanie i dowiedz się tylko, czego wymaga decyzja.',
      high: 'Wyższy wynik może wspierać analizę, ciekawość i komfort w przypadku złożoności. Jeśli myślenie zamieni się w niekończącą się debatę lub paraliż analityczny, przed dalszą analizą zdefiniuj kryterium decyzji i termin.'
    },
    'O.6': {
      low: 'Niższy wynik może zachować przydatne tradycje, wspólne oczekiwania i ciągłość społeczną. Jeśli konwencja nie podlega kwestionowaniu lub wyklucza odpowiednie perspektywy, przeanalizuj ponownie powód danej reguły i zapytaj, kogo ona dotyczy.',
      high: 'Wyższy wynik może sprzyjać krytycznej analizie norm i konstruktywnym reformom. Jeśli nowość jest traktowana jako automatycznie lepsza, testuj zmiany małymi krokami i zachowaj te części istniejącej praktyki, które nadal się sprawdzają.'
    },
    'A.1': {
      low: 'Niższy wynik może pomóc Ci zauważyć niespójności i zabezpieczyć się, gdy stawka jest wysoka. Jeśli podejrzenia blokują współpracę, skalibruj zaufanie, zamiast go przyznawać lub odmawiać w całości na raz: zacznij od małych zobowiązań i aktualizuj dowody.',
      high: 'Wyższy wynik może ułatwić otwartość i współpracę. Jeśli w dobrej wierze narażasz się na wyzysk, zweryfikuj roszczenia o wysoką stawkę, jasno określ oczekiwania i zachowuj granice nawet w przypadku osób, które lubisz.'
    },
    'A.2': {
      low: 'Niższy wynik może wspierać takt, negocjacje i strategiczną prywatność. Jeśli powoduje to manipulację lub dwuznaczność, odróżnij uzasadnioną granicę od oszustwa i podejmij zobowiązania w języku, który druga osoba będzie mogła zweryfikować.',
      high: 'Wyższy wynik może budować wiarygodność dzięki bezpośredniości i przejrzystości. Jeśli szczerość przeradza się w szczerość lub nadmierne dzielenie się, połącz prawdę z wyczuciem czasu, stosownością i dbaj o sposób jej przekazania.'
    },
    'A.3': {
      low: 'Niższy wynik może chronić ograniczony czas i zachęcać innych do autonomii. Jeśli inni postrzegają Cię jako niedostępną lub wzajemność ulega erozji, wybierz formę pomocy, którą możesz udzielić, i jasno określ jej zakres.',
      high: 'Wyższy wynik może stworzyć silne wsparcie i poczucie wspólnoty. Jeśli pomaganie powoduje wypalenie zawodowe lub uniemożliwia innym wzięcie odpowiedzialności, zapytaj, czy potrzebujesz pomocy, ustal granice i nie traktuj każdej potrzeby jako swojego obowiązku.'
    },
    'A.4': {
      low: 'Niższy wynik może pomóc w obronie standardów i bezpośrednim rozwiązaniu konfliktu. Jeśli brak porozumienia stanie się chronicznymi tarciami, oddziel potrzeby niepodlegające negocjacjom od elastycznych opcji i zastosuj wspólne kryteria, a nie siłę.',
      high: 'Wyższy wynik może załagodzić konflikt i chronić współpracę. Jeśli harmonię kupuje się poprzez rezygnację z ważnych potrzeb, wyraźnie określ granicę i pozwól na pełną szacunku różnicę zdań, nie traktując jej jako niepowodzenia związku.'
    },
    'A.5': {
      low: 'Niższy wynik może wspierać autoprezentację i uwidocznić wkład. Jeżeli zaufanie zostanie usłyszane w wyniku zaniku wyższości lub pracy innych, przedstawiaj twierdzenia oparte na dowodach i precyzyjnie dziel się zasługami.',
      high: 'Wyższy wynik może skupić uwagę na pracy i ułatwić współpracę. Jeśli Twój wkład jest wielokrotnie pomijany, opisz, co zrobiłeś i jaki był tego efekt; dokładna autoprezentacja nie jest arogancją.'
    },
    'A.6': {
      low: 'Niższy wynik może sprzyjać obiektywizmowi i trudnym decyzjom, które nie mogą zadowolić wszystkich. Jeśli ludzie postrzegają tę decyzję jako nierozważną lub pominięto jej koszty ludzkie, zapytaj, kto ponosi ciężar i połącz uzasadnienie z jasnym wyjaśnieniem.',
      high: 'Wyższy wynik może wspierać współczucie i szybkie rozpoznanie cierpienia. Jeśli empatia stanie się wyczerpaniem lub przyćmi istotne fakty, ustal granice emocjonalne i zweryfikuj, jaka pomoc faktycznie poprawi sytuację.'
    },
    'C.1': {
      low: 'Niższy wynik może zachęcić do zachowania ostrożności, przygotowania i proszenia o pomoc, gdy jest ona potrzebna. Jeśli zwątpienie w siebie powstrzymuje Cię od rozpoczęcia, podziel zadanie na małe części i wykorzystaj ukończone kroki jako dowód swoich możliwości.',
      high: 'Wyższy wynik może wspierać poczucie odpowiedzialności, wytrwałość i pewność w rozwiązywaniu problemów. Jeśli pewność siebie stanie się przecenianiem lub niechęcią do szukania pomocy, przeprowadź krótką sekcję zwłok i poproś osobę posiadającą wiedzę, aby zakwestionowała plan.'
    },
    'C.2': {
      low: 'Niższy wynik może sprzyjać elastyczności i improwizacji w przypadku zmiany planów. Jeśli nieporządek kosztuje czas lub sprawia, że ​​obowiązki znikają, stwórz tylko kilka niezawodnych domów, list i procedur dla rzeczy, które są najważniejsze.',
      high: 'Wyższy wynik może sprawić, że praca będzie przejrzysta, niezawodna i łatwa do wznowienia. Jeśli porządek zamieni się w perfekcjonizm lub zmiana stanie się niepokojąca, zdefiniuj, co jest wystarczająco dobre i zostaw celowy luz w planie.'
    },
    'C.3': {
      low: 'Niższy wynik może pomóc w zakwestionowaniu zasad i dostosowaniu obowiązków do kontekstu. Jeśli inni nie mogą polegać na Twoich zobowiązaniach lub jeśli zasady etyczne zostały ograniczone, wyraźnie składaj obietnice i ponownie powiąż każde zobowiązanie z powodem, dla którego jest ono istotne.',
      high: 'Wyższy wynik może wspierać rzetelność i niezawodność realizacji. Jeśli obowiązki powodują sztywność lub niezrównoważone obciążenie, uszereguj konkurencyjne zobowiązania i renegocjuj je wcześniej, zamiast po cichu dźwigać je wszystkie.'
    },
    'C.4': {
      low: 'Niższy wynik może chronić równowagę i pozwolić na satysfakcję bez ciągłej rywalizacji. Jeśli nastąpi stagnacja lub pozostawisz niewykorzystane cenne umiejętności, wybierz cel, który ma znaczenie osobiste i zdefiniuj kolejny mały kamień milowy.',
      high: 'Wyższy wynik może wspierać mistrzostwo i ciągły wysiłek w kierunku wymagających celów. Jeśli poczucie własnej wartości zostanie powiązane z wynikami lub wysiłek stanie się wypaleniem, zdefiniuj, co liczy się jako wystarczające i chroń odpoczynek i role niezwiązane z osiągnięciami.'
    },
    'C.5': {
      low: 'Niższy wynik może wspierać spontaniczność i zdolność reagowania na zmieniające się priorytety. Jeśli rozpoczęcie lub zakończenie jest wielokrotnie trudne, zmniejsz pierwszy krok, zmień otoczenie i dodaj widoczną wskazówkę lub odpowiedzialność innej osoby.',
      high: 'Wyższy wynik może wspierać kontynuację nawet przy niskiej motywacji. Jeśli wytrwałość nie ustąpi, ustal zasady zatrzymania i sprawdź, czy cel nadal zasługuje na wysiłek.'
    },
    'C.6': {
      low: 'Niższy wynik może wskazywać na szybkość, eksperymentowanie i działanie przy niekompletnych informacjach. Jeśli powtarzają się błędy, którym można zapobiec, dodaj krótką pauzę i listę kontrolną przed podjęciem decyzji, które są kosztowne lub trudne do cofnięcia.',
      high: 'Wyższy wynik może pomóc w analizie ryzyka i podejmowaniu ostrożnych decyzji wysokiej jakości. Jeśli ostrożność powoduje utratę czasu lub powtarzające się rozmyślania, ustal ostateczny termin podjęcia decyzji i przedkładaj pilota odwracalnego zamiast czekać na pewność.'
    }
  },
  pt: {
    'N.1': {
      low: 'Uma pontuação mais baixa pode ajudá-lo a manter a calma e a evitar que a incerteza assuma o controlo. Se esta calma o levar a subestimar os riscos ou a preparar-se muito pouco, enumere o risco mais provável e uma alternativa antes de tomar uma decisão importante.',
      high: 'Uma pontuação mais elevada pode ajudá-lo a perceber os riscos e os sinais de alerta antecipadamente. Se a preocupação consumir repetidamente a sua atenção, separe o que é possível do que é provável, estabeleça um limite para o tempo de preocupação e escolha uma próxima ação concreta; procure apoio profissional se isso perturbar persistentemente a vida diária.'
    },
    'N.2': {
      low: 'Uma pontuação mais baixa pode torná-lo temperamental e difícil de provocar. Se tem tendência a reprimir a raiva legítima ou a deixar limites não declarados, identifique o problema antecipadamente e descreva o comportamento que pretende mudar.',
      high: 'Uma pontuação mais elevada pode fazer com que detete injustiças rapidamente e defenda o que é importante. Se a raiva agravar os conflitos ou provocar reações impulsivas, faça uma pausa antes de responder e declare o comportamento, o impacto e a necessidade específicos, em vez de atacar a pessoa.'
    },
    'N.3': {
      low: 'Uma pontuação mais baixa geralmente apoia a recuperação emocional e a energia estável. Se isso torna fácil ignorar a tristeza de outra pessoa ou a sua própria necessidade de descanso, abrande o ritmo, ouça e reconheça a perda antes de tentar resolvê-la.',
      high: 'Uma pontuação mais elevada pode tornar a deceção e a perda especialmente evidentes, o que pode revelar o que é profundamente importante para si. O mau humor persistente não é algo que deva tratar apenas como uma característica: mantenha rotinas e tarefas pequenas, mantenha-se ligado a pessoas de confiança e procure apoio profissional quando isso dura ou prejudica a vida diária.'
    },
    'N.4': {
      low: 'Uma pontuação mais baixa pode tornar as situações sociais mais descontraídas e reduzir o medo do julgamento. Se por vezes não se apercebe de como se comporta, peça feedback específico e verifique a resposta da outra pessoa, em vez de assumir que tudo correu bem.',
      high: 'Uma pontuação mais elevada pode deixá-lo atento às expectativas sociais e às reações das outras pessoas. Se a automonitorização se transformar em ruminação ou evitação, mude a atenção para a tarefa partilhada, aborde as situações difíceis gradualmente e julgue a interação por evidências, em vez de um escrutínio imaginado.'
    },
    'N.5': {
      low: 'Uma pontuação mais baixa apoia a contenção e a capacidade de adiar a gratificação. Se a restrição se transformar em excesso de controlo ou deixar pouco espaço para diversão, abra deliberadamente espaço para uma espontaneidade inofensiva, em vez de esperar até que a pressão aumente.',
      high: 'Uma pontuação mais elevada pode trazer espontaneidade, apetite e prazer na experiência imediata. Se os impulsos criarem repetidamente custos dos quais se arrependerá mais tarde, adicione atrito antes de agir: espere, remova os gatilhos, estabeleça limites com antecedência ou torne a escolha desejada a longo prazo mais fácil de alcançar.'
    },
    'N.6': {
      low: 'Uma pontuação mais baixa pode ajudá-lo a pensar com clareza e a agir com firmeza sob pressão. Se isso o levar a subestimar a tensão em si próprio ou nos outros, planeie contingências e reserve tempo para fazer um balanço e recuperar após períodos exigentes.',
      high: 'Uma pontuação mais elevada pode fazer com que perceba a sobrecarga antecipadamente e procure apoio antes que os recursos se esgotem. Se a pressão causar congelamento ou confusão, reduza as exigências simultâneas, ensaie os primeiros passos com antecedência e utilize um plano simples por escrito quando o stress é elevado.'
    },
    'E.1': {
      low: 'Uma pontuação mais baixa pode apoiar a independência e um círculo social pequeno e seletivo. Se a reserva for confundida com desinteresse ou impedir a formação de relações úteis, sinalize explicitamente o calor e mantenha alguns pontos de contacto regulares.',
      high: 'Uma pontuação mais elevada pode facilitar o relacionamento, a confiança e novas ligações. Se a simpatia leva ao compromisso excessivo ou à confiança antes de ser conquistada, controle o ritmo da auto-revelação, verifique afirmações importantes e deixe espaço para dizer não.'
    },
    'E.2': {
      low: 'Uma pontuação mais baixa pode proporcionar foco, conforto com a solidão e menos dependência da estimulação do grupo. Se a solidão se transformar em isolamento ou os grupos se tornarem cada vez mais difíceis, escolha reuniões mais pequenas e planeie o tempo de recuperação em vez de evitar totalmente o contacto.',
      high: 'Uma pontuação mais elevada pode trazer energia aos grupos e ajudar a criar impulso social. Se a empresa perturbar o trabalho focado ou tornar a solidão desconfortável, proteja o tempo ininterrupto e pratique a audição sem ter de manter a interação em movimento.'
    },
    'E.3': {
      low: 'Uma pontuação mais baixa pode abrir espaço para a escuta, a cooperação e a liderança de outras pessoas. Se as suas necessidades ou conhecimentos permanecerem invisíveis, prepare uma frase clara, faça um pedido direto ou fale uma vez perto do início da discussão.',
      high: 'Uma pontuação mais elevada pode ajudar um grupo a tomar decisões e a orientar quando os outros hesitam. Se ocupar demasiado espaço, peça opiniões divergentes, espere antes de responder e torne explícita a propriedade em vez de assumir o acordo.'
    },
    'E.4': {
      low: 'Uma pontuação mais baixa pode apoiar um ritmo sem pressa e uma atenção sustentada sem movimento constante. Se um trabalho importante for adiado repetidamente, escolha um pequeno número de prioridades e estabeleça-lhes prazos ou blocos de tempo visíveis.',
      high: 'Uma pontuação mais elevada pode criar impulso e uma forte capacidade de ação. Se a atividade se tornar uma sobrecarga ou ocupação sem progresso, distinga o movimento dos resultados e programe os buffers e a recuperação tão deliberadamente como as tarefas.'
    },
    'E.5': {
      low: 'Uma pontuação mais baixa pode favorecer a segurança, a estabilidade e a satisfação sem estimulação intensa. Se evitar novidades restringe as suas escolhas, experimente experiências pequenas e reversíveis cujos riscos são conhecidos antecipadamente.',
      high: 'Uma pontuação mais elevada pode apoiar a coragem, a exploração e o prazer de experiências vívidas. Se o tédio gera riscos desnecessários, estabeleça limites antes que a excitação aumente e procure estímulo em ambientes onde o lado negativo esteja contido.'
    },
    'E.6': {
      low: 'Uma pontuação mais baixa pode trazer seriedade e um tom realista quando o otimismo pareceria falso. Se a apreciação ou o calor permanecerem escondidos, diga-os claramente e crie pequenas ocasiões de diversão, em vez de esperar que o sentimento positivo apareça por si só.',
      high: 'Uma pontuação mais elevada pode elevar a moral do grupo e tornar as experiências positivas fáceis de notar. Se a alegria encobre a dor ou o risco, reconheça primeiro o que é difícil e depois procure a esperança sem negar os factos.'
    },
    'O.1': {
      low: 'Uma pontuação mais baixa pode apoiar o pensamento concreto e a atenção ao que é prático e observável. Se as respostas familiares excluírem melhores possibilidades, gere várias alternativas antes de avaliar qual delas é realista.',
      high: 'Uma pontuação mais elevada pode apoiar a criatividade, a simulação mental e as ligações originais. Se as ideias permanecem nos devaneios ou dispersam a atenção, capte-as, escolha uma e transforme-a no mais pequeno teste tangível.'
    },
    'O.2': {
      low: 'Uma pontuação mais baixa pode manter a atenção na função, clareza e utilidade direta. Se a experiência estética ou a beleza restauradora são consistentemente negligenciadas, experimente-as de forma curta e de baixa pressão e observe o que realmente capta a sua atenção.',
      high: 'Uma pontuação mais elevada pode realçar a sensibilidade à forma, à beleza e aos detalhes subtis. Se os padrões estéticos consumirem muito tempo ou substituirem a função, defina primeiro as restrições práticas e decida onde é que o refinamento vale realmente a pena.'
    },
    'O.3': {
      low: 'Uma pontuação mais baixa pode apoiar a compostura e decisões menos influenciadas pelo clima do momento. Se os sentimentos se tornarem difíceis de identificar ou se os sinais de outras pessoas forem perdidos, faça uma pausa para uma breve verificação do corpo e das emoções antes de decidir o que é necessário.',
      high: 'Uma pontuação mais elevada pode apoiar a consciência emocional, a empatia e uma vida interior diferenciada. Se os sentimentos se tornarem avassaladores ou ditarem decisões, dê um nome à emoção, deixe-a acalmar e diferencie o que sente daquilo que as evidências mostram.'
    },
    'O.4': {
      low: 'Uma pontuação mais baixa pode apoiar a continuidade, o domínio e rotinas fiáveis. Se a rotina se transformar em rigidez ou medo da novidade, introduza uma pequena e reversível alteração, mantendo o resto da estrutura familiar.',
      high: 'Uma pontuação mais elevada pode apoiar a adaptabilidade e a aprendizagem através da exploração. Se a novidade criar instabilidade ou compromissos inacabados, mantenha algumas âncoras inegociáveis ​​para tempo, dinheiro e responsabilidades.'
    },
    'O.5': {
      low: 'Esta faceta diz respeito ao interesse por ideias complexas e abstratas, e não à inteligência ou ao QI. Uma pontuação mais baixa pode favorecer decisões práticas; se as ideias desconhecidas forem descartadas demasiado depressa, pergunte que provas o fariam mudar de ideias e aprenda apenas o que a decisão exige.',
      high: 'Uma pontuação mais elevada pode apoiar a análise, a curiosidade e o conforto com a complexidade. Se o pensamento se transformar em debate interminável ou paralisia de análise, defina o critério e o prazo de decisão antes de explorar mais.'
    },
    'O.6': {
      low: 'Uma pontuação mais baixa pode preservar tradições úteis, expectativas partilhadas e continuidade social. Se a convenção não for questionada ou excluir perspetivas relevantes, reveja a razão da regra e pergunte quem é afetado por ela.',
      high: 'Uma pontuação mais elevada pode apoiar um exame crítico das normas e uma reforma construtiva. Se a novidade for tratada automaticamente como melhor, teste as alterações em pequenos passos e preserve as partes da prática existente que ainda funcionam.'
    },
    'A.1': {
      low: 'Uma pontuação mais baixa pode ajudá-lo a perceber inconsistências e a proteger-se quando os riscos são elevados. Se a suspeita bloquear a cooperação, avalie a confiança em vez de conceder ou reter tudo de uma só vez: comece com pequenos compromissos e atualize a partir de provas.',
      high: 'Uma pontuação mais elevada pode facilitar a abertura e a cooperação. Se a boa-fé o deixa aberto à exploração, verifique as afirmações de alto risco, torne as expectativas explícitas e mantenha os limites mesmo com as pessoas de quem gosta.'
    },
    'A.2': {
      low: 'Uma pontuação mais baixa pode apoiar o tato, a negociação e a privacidade estratégica. Se criar manipulação ou ambiguidade, distinga um limite legítimo de engano e assuma compromissos numa linguagem que a outra pessoa possa verificar.',
      high: 'Uma pontuação mais elevada pode gerar fiabilidade através da franqueza e da transparência. Se a honestidade se transformar em franqueza ou partilha excessiva, combine a verdade com o momento certo, a relevância e o cuidado com a forma como é transmitida.'
    },
    'A.3': {
      low: 'Uma pontuação mais baixa pode proteger o tempo limitado e encorajar a autonomia de outras pessoas. Se as outras pessoas o considerarem indisponível ou a reciprocidade diminuir, escolha uma forma de ajuda que possa sustentar e declare o seu âmbito claramente.',
      high: 'Uma pontuação mais elevada pode criar um forte apoio e um sentido de comunidade. Se ajudar causar esgotamento ou impedir que outros assumam responsabilidades, pergunte se é necessária ajuda, chegue a um acordo sobre os limites e não faça de cada necessidade a sua obrigação.'
    },
    'A.4': {
      low: 'Uma pontuação mais baixa pode ajudar a defender os padrões e a resolver conflitos diretamente. Se o desacordo se tornar um atrito crónico, separe as necessidades não negociáveis ​​das opções flexíveis e utilize critérios partilhados em vez da força.',
      high: 'Uma pontuação mais elevada pode diminuir o conflito e proteger a cooperação. Se a harmonia é adquirida através da concessão de necessidades importantes, estabeleça claramente os limites e permita discordâncias respeitosas sem as tratar como um fracasso na relação.'
    },
    'A.5': {
      low: 'Uma pontuação mais baixa pode apoiar a autodefesa e tornar visíveis as contribuições. Se a confiança for ouvida como superioridade ou o trabalho dos outros desaparecer, faça afirmações com provas e partilhe o crédito com precisão.',
      high: 'Uma pontuação mais elevada pode manter a atenção no trabalho e facilitar a colaboração. Se a sua contribuição for repetidamente ignorada, descreva o que fez e o seu efeito de forma factual; auto-representação precisa não é arrogância.'
    },
    'A.6': {
      low: 'Uma pontuação mais baixa pode apoiar a objetividade e decisões difíceis que não satisfazem toda a gente. Se as pessoas considerarem a decisão fria ou se o seu custo humano for ignorado, pergunte quem suporta o fardo e combine o raciocínio com uma explicação clara.',
      high: 'Uma pontuação mais elevada pode apoiar a compaixão e o reconhecimento rápido do sofrimento. Se a empatia se transformar em exaustão ou passar por cima de factos relevantes, estabeleça limites emocionais e verifique que ajuda irá realmente melhorar a situação.'
    },
    'C.1': {
      low: 'Uma pontuação mais baixa pode incentivar a cautela, a preparação e o pedido de ajuda quando necessário. Se a dúvida o impedir de começar, divida a tarefa em pequenos pedaços e utilize os passos concluídos como prova de capacidade.',
      high: 'Uma pontuação mais elevada pode apoiar a propriedade, a persistência e a confiança na resolução de problemas. Se a confiança se transformar em sobrestimação ou relutância em procurar ajuda, faça uma breve avaliação preliminar e peça a uma pessoa experiente para desafiar o plano.'
    },
    'C.2': {
      low: 'Uma pontuação mais baixa pode apoiar a flexibilidade e a improvisação quando os planos mudam. Se a desordem custa tempo ou faz desaparecer as obrigações, crie apenas alguns lares, listas e rotinas fiáveis ​​para as coisas que mais importam.',
      high: 'Uma pontuação mais elevada pode tornar o trabalho claro, fiável e fácil de retomar. Se a ordem se transformar em perfecionismo ou a mudança se tornar angustiante, defina o que é suficientemente bom e deixe uma folga deliberada no plano.'
    },
    'C.3': {
      low: 'Uma pontuação mais baixa pode ajudar a questionar as regras e a adaptar as obrigações ao contexto. Se as outras pessoas não puderem confiar nos seus compromissos ou se forem cortados obstáculos éticos, torne as promessas explícitas e volte a ligar cada obrigação à razão pela qual é importante.',
      high: 'Uma pontuação mais elevada pode apoiar a integridade e um acompanhamento fiável. Se o dever criar rigidez ou um encargo insustentável, classifique as obrigações concorrentes e renegocie-as antecipadamente, em vez de as carregar silenciosamente.'
    },
    'C.4': {
      low: 'Uma pontuação mais baixa pode proteger o equilíbrio e permitir a satisfação sem competição constante. Se ficar estagnado ou deixar competências valiosas por utilizar, escolha um objetivo pessoalmente significativo e defina o próximo pequeno marco.',
      high: 'Uma pontuação mais elevada pode apoiar o domínio e o esforço sustentado em direção a objetivos exigentes. Se a autoestima ficar ligada à produção ou o esforço se esgotar, defina o que é considerado suficiente e proteja o descanso e os papéis não relacionados com a realização.'
    },
    'C.5': {
      low: 'Uma pontuação mais baixa pode apoiar a espontaneidade e a capacidade de resposta às mudanças de prioridades. Se começar ou terminar for repetidamente difícil, reduza o primeiro passo, mude o ambiente e adicione uma dica visível ou a responsabilidade de outra pessoa.',
      high: 'Uma pontuação mais elevada pode apoiar o acompanhamento mesmo quando a motivação é baixa. Se a persistência continuar após os rendimentos decrescentes, estabeleça regras de paragem e analise se o objetivo ainda merece o esforço.'
    },
    'C.6': {
      low: 'Uma pontuação mais baixa pode apoiar a velocidade, a experimentação e a ação com informação incompleta. Se ocorrerem erros evitáveis, adicione uma pequena pausa e uma lista de verificação antes de decisões que sejam dispendiosas ou difíceis de reverter.',
      high: 'Uma pontuação mais elevada pode apoiar a análise de riscos e decisões cuidadosas e de elevada qualidade. Se a cautela provocar perdas de tempo ou ruminações repetidas, estabeleça um prazo de decisão e prefira um piloto reversível a esperar pela certeza.'
    }
  },
  'pt-br': {
    'N.1': {
      low: 'Uma pontuação mais baixa pode ajudá-lo a manter a calma e evitar que a incerteza assuma o controle. Se essa calma leva você a subestimar os riscos ou a se preparar muito pouco, liste o risco mais provável e uma alternativa antes de tomar uma decisão importante.',
      high: 'Uma pontuação mais alta pode ajudá-lo a perceber riscos e sinais de alerta antecipadamente. Se a preocupação consumir repetidamente sua atenção, separe o que é possível do que é provável, estabeleça um limite para o tempo de preocupação e escolha uma próxima ação concreta; procure apoio profissional se isso atrapalhar persistentemente a vida diária.'
    },
    'N.2': {
      low: 'Uma pontuação mais baixa pode torná-lo temperamental e difícil de provocar. Se você tende a reprimir a raiva legítima ou a deixar limites não declarados, identifique o problema antecipadamente e descreva o comportamento que deseja mudar.',
      high: 'Uma pontuação mais alta pode fazer com que você detecte injustiças rapidamente e defenda o que é importante. Se a raiva agravar os conflitos ou provocar reações impulsivas, faça uma pausa antes de responder e declare o comportamento, o impacto e a necessidade específicos, em vez de atacar a pessoa.'
    },
    'N.3': {
      low: 'Uma pontuação mais baixa geralmente apoia a recuperação emocional e a energia estável. Se isso torna fácil ignorar a tristeza de outra pessoa ou sua própria necessidade de descanso, diminua o ritmo, ouça e reconheça a perda antes de tentar resolvê-la.',
      high: 'Uma pontuação mais alta pode tornar a decepção e a perda especialmente evidentes, o que pode revelar o que é profundamente importante para você. O mau humor persistente não é algo que você deva tratar apenas como uma característica: mantenha rotinas e tarefas pequenas, mantenha-se conectado a pessoas de confiança e busque apoio profissional quando isso durar ou prejudicar a vida diária.'
    },
    'N.4': {
      low: 'Uma pontuação mais baixa pode tornar as situações sociais mais relaxadas e reduzir o medo do julgamento. Se às vezes você não percebe como se comporta, peça feedback específico e verifique a resposta da outra pessoa, em vez de presumir que tudo deu certo.',
      high: 'Uma pontuação mais alta pode deixá-lo atento às expectativas sociais e às reações das outras pessoas. Se o automonitoramento se transformar em ruminação ou evitação, mude a atenção para a tarefa compartilhada, aborde situações difíceis gradualmente e julgue a interação por evidências, em vez de um escrutínio imaginado.'
    },
    'N.5': {
      low: 'Uma pontuação mais baixa apoia a contenção e a capacidade de adiar a gratificação. Se a restrição se transformar em excesso de controle ou deixar pouco espaço para diversão, abra deliberadamente espaço para uma espontaneidade inofensiva, em vez de esperar até que a pressão aumente.',
      high: 'Uma pontuação mais alta pode trazer espontaneidade, apetite e prazer na experiência imediata. Se os impulsos repetidamente criarem custos dos quais você se arrependerá mais tarde, adicione atrito antes de agir: espere, remova os gatilhos, estabeleça limites com antecedência ou torne a escolha desejada de longo prazo mais fácil de alcançar.'
    },
    'N.6': {
      low: 'Uma pontuação mais baixa pode ajudá-lo a pensar com clareza e agir com firmeza sob pressão. Se isso o leva a subestimar a tensão em si mesmo ou nos outros, planeje contingências e reserve um tempo para fazer um balanço e se recuperar após períodos exigentes.',
      high: 'Uma pontuação mais alta pode fazer com que você perceba a sobrecarga antecipadamente e busque suporte antes que os recursos acabem. Se a pressão causar congelamento ou confusão, reduza as demandas simultâneas, ensaie os primeiros passos com antecedência e use um plano simples por escrito quando o estresse estiver alto.'
    },
    'E.1': {
      low: 'Uma pontuação mais baixa pode apoiar a independência e um círculo social pequeno e seletivo. Se a reserva for confundida com desinteresse ou impedir a formação de relacionamentos úteis, sinalize explicitamente o calor e mantenha alguns pontos de contato regulares.',
      high: 'Uma pontuação mais alta pode facilitar o relacionamento, a confiança e novas conexões. Se a simpatia leva ao comprometimento excessivo ou à confiança antes de ser conquistada, controle o ritmo da auto-revelação, verifique afirmações importantes e deixe espaço para dizer não.'
    },
    'E.2': {
      low: 'Uma pontuação mais baixa pode proporcionar foco, conforto com a solidão e menos dependência da estimulação do grupo. Se a solidão se transformar em isolamento ou os grupos se tornarem cada vez mais difíceis, escolha reuniões menores e planeje o tempo de recuperação em vez de evitar totalmente o contato.',
      high: 'Uma pontuação mais alta pode trazer energia aos grupos e ajudar a criar impulso social. Se a empresa atrapalhar o trabalho focado ou tornar a solidão desconfortável, proteja o tempo ininterrupto e pratique ouvir sem precisar manter a interação em movimento.'
    },
    'E.3': {
      low: 'Uma pontuação mais baixa pode abrir espaço para a escuta, a cooperação e a liderança de outras pessoas. Se as suas necessidades ou conhecimentos permanecerem invisíveis, prepare uma frase clara, faça um pedido direto ou fale uma vez perto do início da discussão.',
      high: 'Uma pontuação mais alta pode ajudar um grupo a tomar decisões e orientar quando outros hesitam. Se você ocupar muito espaço, peça opiniões divergentes, espere antes de responder e torne explícita a propriedade em vez de assumir o acordo.'
    },
    'E.4': {
      low: 'Uma pontuação mais baixa pode apoiar um ritmo sem pressa e atenção sustentada sem movimento constante. Se um trabalho importante for adiado repetidamente, escolha um pequeno número de prioridades e estabeleça-lhes prazos ou blocos de tempo visíveis.',
      high: 'Uma pontuação mais alta pode criar impulso e uma forte capacidade de ação. Se a atividade se tornar uma sobrecarga ou ocupação sem progresso, distinga o movimento dos resultados e programe os buffers e a recuperação tão deliberadamente quanto as tarefas.'
    },
    'E.5': {
      low: 'Uma pontuação mais baixa pode favorecer a segurança, a estabilidade e a satisfação sem estimulação intensa. Se evitar novidades restringe suas escolhas, tente experimentos pequenos e reversíveis cujos riscos são conhecidos antecipadamente.',
      high: 'Uma pontuação mais alta pode apoiar a coragem, a exploração e o prazer de experiências vívidas. Se o tédio gera riscos desnecessários, estabeleça limites antes que a excitação aumente e busque estímulo em ambientes onde o lado negativo esteja contido.'
    },
    'E.6': {
      low: 'Uma pontuação mais baixa pode trazer seriedade e um tom realista quando o otimismo pareceria falso. Se a apreciação ou o calor permanecerem ocultos, diga-os claramente e crie pequenas ocasiões de diversão, em vez de esperar que o sentimento positivo apareça por si só.',
      high: 'Uma pontuação mais alta pode elevar o moral do grupo e tornar as experiências positivas fáceis de notar. Se a alegria encobre a dor ou o risco, reconheça primeiro o que é difícil e depois procure a esperança sem negar os fatos.'
    },
    'O.1': {
      low: 'Uma pontuação mais baixa pode apoiar o pensamento concreto e a atenção ao que é prático e observável. Se respostas familiares excluírem melhores possibilidades, gere diversas alternativas antes de avaliar qual delas é realista.',
      high: 'Uma pontuação mais alta pode apoiar a criatividade, a simulação mental e as conexões originais. Se as ideias permanecem nos devaneios ou dispersam a atenção, capte-as, escolha uma e transforme-a no menor teste tangível.'
    },
    'O.2': {
      low: 'Uma pontuação mais baixa pode manter a atenção na função, clareza e utilidade direta. Se a experiência estética ou a beleza restauradora são consistentemente negligenciadas, experimente-as de maneira curta e de baixa pressão e observe o que realmente prende sua atenção.',
      high: 'Uma pontuação mais alta pode aprimorar a sensibilidade à forma, à beleza e aos detalhes sutis. Se os padrões estéticos consumirem muito tempo ou substituirem a função, defina primeiro as restrições práticas e decida onde o refinamento realmente vale a pena.'
    },
    'O.3': {
      low: 'Uma pontuação mais baixa pode apoiar a compostura e decisões menos influenciadas pelo clima do momento. Se os sentimentos se tornarem difíceis de identificar ou se os sinais de outras pessoas forem perdidos, faça uma pausa para uma breve verificação do corpo e das emoções antes de decidir o que é necessário.',
      high: 'Uma pontuação mais alta pode apoiar a consciência emocional, a empatia e uma vida interior diferenciada. Se os sentimentos se tornarem opressores ou ditarem decisões, dê um nome à emoção, deixe-a se acalmar e diferencie o que você sente daquilo que as evidências mostram.'
    },
    'O.4': {
      low: 'Uma pontuação mais baixa pode apoiar continuidade, domínio e rotinas confiáveis. Se a rotina se transformar em rigidez ou medo da novidade, introduza uma mudança pequena e reversível, mantendo o resto da estrutura familiar.',
      high: 'Uma pontuação mais alta pode apoiar a adaptabilidade e o aprendizado por meio da exploração. Se a novidade criar instabilidade ou compromissos inacabados, mantenha algumas âncoras inegociáveis ​​para tempo, dinheiro e responsabilidades.'
    },
    'O.5': {
      low: 'Esta faceta diz respeito ao interesse por ideias complexas e abstratas, não à inteligência ou ao QI. Uma pontuação mais baixa pode favorecer decisões práticas; se ideias desconhecidas forem descartadas muito rapidamente, pergunte quais evidências fariam você mudar de ideia e aprenda apenas o que a decisão exige.',
      high: 'Uma pontuação mais alta pode apoiar a análise, a curiosidade e o conforto com a complexidade. Se o pensamento se transformar em debate interminável ou paralisia de análise, defina o critério e o prazo de decisão antes de explorar mais.'
    },
    'O.6': {
      low: 'Uma pontuação mais baixa pode preservar tradições úteis, expectativas partilhadas e continuidade social. Se a convenção não for questionada ou excluir perspectivas relevantes, reveja a razão da regra e pergunte quem é afetado por ela.',
      high: 'Uma pontuação mais elevada pode apoiar um exame crítico das normas e uma reforma construtiva. Se a novidade for tratada automaticamente como melhor, teste as mudanças em pequenos passos e preserve as partes da prática existente que ainda funcionam.'
    },
    'A.1': {
      low: 'Uma pontuação mais baixa pode ajudá-lo a perceber inconsistências e a se proteger quando os riscos são altos. Se a suspeita bloquear a cooperação, avalie a confiança em vez de conceder ou reter tudo de uma vez: comece com pequenos compromissos e atualize a partir de evidências.',
      high: 'Uma pontuação mais alta pode facilitar a abertura e a cooperação. Se a boa-fé deixa você aberto à exploração, verifique as afirmações de alto risco, torne as expectativas explícitas e mantenha limites mesmo com as pessoas de quem você gosta.'
    },
    'A.2': {
      low: 'Uma pontuação mais baixa pode apoiar tato, negociação e privacidade estratégica. Se criar manipulação ou ambiguidade, distinga um limite legítimo de engano e assuma compromissos numa linguagem que a outra pessoa possa verificar.',
      high: 'Uma pontuação mais alta pode gerar confiabilidade por meio da franqueza e da transparência. Se a honestidade se transformar em franqueza ou compartilhamento excessivo, combine a verdade com o momento certo, a relevância e o cuidado com a forma como ela é transmitida.'
    },
    'A.3': {
      low: 'Uma pontuação mais baixa pode proteger o tempo limitado e encorajar a autonomia de outras pessoas. Se outras pessoas considerarem você indisponível ou a reciprocidade diminuir, escolha uma forma de ajuda que você possa sustentar e declare seu escopo claramente.',
      high: 'Uma pontuação mais alta pode criar um forte apoio e um senso de comunidade. Se ajudar causar esgotamento ou impedir que outros assumam responsabilidades, pergunte se a ajuda é necessária, chegue a um acordo sobre os limites e não faça de cada necessidade sua obrigação.'
    },
    'A.4': {
      low: 'Uma pontuação mais baixa pode ajudar a defender os padrões e resolver conflitos diretamente. Se o desacordo se tornar um atrito crónico, separe as necessidades não negociáveis ​​das opções flexíveis e utilize critérios partilhados em vez da força.',
      high: 'Uma pontuação mais alta pode diminuir o conflito e proteger a cooperação. Se a harmonia é adquirida através da concessão de necessidades importantes, estabeleça claramente os limites e permita discordâncias respeitosas sem tratá-las como fracasso no relacionamento.'
    },
    'A.5': {
      low: 'Uma pontuação mais baixa pode apoiar a autodefesa e tornar as contribuições visíveis. Se a confiança for ouvida como superioridade ou o trabalho dos outros desaparecer, faça afirmações com provas e partilhe o crédito com precisão.',
      high: 'Uma pontuação mais alta pode manter a atenção no trabalho e facilitar a colaboração. Se a sua contribuição for repetidamente ignorada, descreva o que você fez e seu efeito de forma factual; auto-representação precisa não é arrogância.'
    },
    'A.6': {
      low: 'Uma pontuação mais baixa pode apoiar a objetividade e decisões difíceis que não satisfazem a todos. Se as pessoas considerarem a decisão fria ou se o seu custo humano for ignorado, pergunte quem suporta o fardo e combine o raciocínio com uma explicação clara.',
      high: 'Uma pontuação mais alta pode apoiar a compaixão e o rápido reconhecimento do sofrimento. Se a empatia se transformar em exaustão ou passar por cima de fatos relevantes, estabeleça limites emocionais e verifique que ajuda realmente melhorará a situação.'
    },
    'C.1': {
      low: 'Uma pontuação mais baixa pode incentivar cautela, preparação e pedido de ajuda quando necessário. Se a dúvida o impedir de começar, divida a tarefa em pequenos pedaços e use as etapas concluídas como prova de capacidade.',
      high: 'Uma pontuação mais alta pode apoiar a propriedade, a persistência e a confiança na resolução de problemas. Se a confiança se transformar em superestimação ou relutância em procurar ajuda, faça uma breve avaliação preliminar e peça a uma pessoa experiente para desafiar o plano.'
    },
    'C.2': {
      low: 'Uma pontuação mais baixa pode apoiar a flexibilidade e a improvisação quando os planos mudam. Se a desordem custa tempo ou faz desaparecer as obrigações, crie apenas alguns lares, listas e rotinas confiáveis ​​para as coisas que mais importam.',
      high: 'Uma pontuação mais alta pode tornar o trabalho claro, confiável e fácil de retomar. Se a ordem se transformar em perfeccionismo ou a mudança se tornar angustiante, defina o que é bom o suficiente e deixe uma folga deliberada no plano.'
    },
    'C.3': {
      low: 'Uma pontuação mais baixa pode ajudar a questionar as regras e adaptar as obrigações ao contexto. Se outras pessoas não puderem confiar em seus compromissos ou se forem cortados obstáculos éticos, torne as promessas explícitas e reconecte cada obrigação ao motivo pelo qual é importante.',
      high: 'Uma pontuação mais alta pode apoiar a integridade e um acompanhamento confiável. Se o dever criar rigidez ou uma carga insustentável, classifique as obrigações concorrentes e renegocie-as antecipadamente, em vez de carregá-las silenciosamente.'
    },
    'C.4': {
      low: 'Uma pontuação mais baixa pode proteger o equilíbrio e permitir a satisfação sem competição constante. Se ficar estagnado ou deixar habilidades valiosas sem uso, escolha uma meta pessoalmente significativa e defina o próximo pequeno marco.',
      high: 'Uma pontuação mais alta pode apoiar o domínio e o esforço sustentado em direção a objetivos exigentes. Se a autoestima ficar vinculada à produção ou o esforço se tornar esgotado, defina o que é considerado suficiente e proteja o descanso e os papéis não relacionados à realização.'
    },
    'C.5': {
      low: 'Uma pontuação mais baixa pode apoiar a espontaneidade e a capacidade de resposta às mudanças de prioridades. Se começar ou terminar for repetidamente difícil, reduza o primeiro passo, mude o ambiente e adicione uma dica visível ou a responsabilidade de outra pessoa.',
      high: 'Uma pontuação mais alta pode apoiar o acompanhamento mesmo quando a motivação é baixa. Se a persistência continuar após os retornos decrescentes, estabeleça regras de parada e analise se a meta ainda merece o esforço.'
    },
    'C.6': {
      low: 'Uma pontuação mais baixa pode apoiar velocidade, experimentação e ação com informações incompletas. Se ocorrerem erros evitáveis, adicione uma pequena pausa e uma lista de verificação antes de decisões que sejam dispendiosas ou difíceis de reverter.',
      high: 'Uma pontuação mais alta pode apoiar a análise de risco e decisões cuidadosas e de alta qualidade. Se a cautela causar perda de tempo ou ruminações repetidas, estabeleça um prazo de decisão e prefira um piloto reversível a esperar pela certeza.'
    }
  },
  ro: {
    'N.1': {
      low: 'Un scor mai mic vă poate ajuta să rămâneți calm și să împiedicați incertitudinea să preia controlul. Dacă acest calm te face să subestimezi riscurile sau să te pregătești prea puțin, enumerați riscul cel mai probabil și o rezervă înainte de o decizie importantă.',
      high: 'Un scor mai mare vă poate ajuta să observați riscurile și semnele de avertizare din timp. Dacă îngrijorarea vă consumă atenția în mod repetat, separați ceea ce este posibil de ceea ce este probabil, setați o limită pentru timpul de îngrijorare și alegeți o acțiune concretă următoare; căutați sprijin profesional dacă perturbă în mod persistent viața de zi cu zi.'
    },
    'N.2': {
      low: 'Un scor mai mic te poate face să fii egal și greu de provocat. Dacă aveți tendința de a suprima furia legitimă sau de a lăsa granițele nedeterminate, denumiți problema devreme și descrieți comportamentul pe care doriți să îl schimbați.',
      high: 'Un scor mai mare te poate face rapid să detectezi nedreptatea și să aperi ceea ce contează. Dacă furia intensifică conflictele sau provoacă reacții impulsive, faceți o pauză înainte de a răspunde și declarați comportamentul specific, impactul și nevoia în loc să atacați persoana.'
    },
    'N.3': {
      low: 'Un scor mai mic susține adesea recuperarea emoțională și energia constantă. Dacă face ca tristețea altei persoane sau nevoia ta de odihnă să fie ușor de trecut cu vederea, încetinește, ascultă și recunoaște pierderea înainte de a încerca să o rezolvi.',
      high: 'Un scor mai mare poate face dezamăgirea și pierderea deosebit de importante, ceea ce poate dezvălui ceea ce contează profund pentru tine. Starea de spirit scăzută persistentă nu este ceva ce trebuie tratat ca pe o trăsătură: păstrați rutinele și sarcinile mici, rămâneți conectat cu oameni de încredere și căutați sprijin profesional atunci când durează sau afectează viața de zi cu zi.'
    },
    'N.4': {
      low: 'Un scor mai mic poate face ca situațiile sociale să se simtă relaxate și să reducă teama de judecată. Dacă uneori vă este dor de modul în care vi se pare, cereți feedback specific și verificați răspunsul celeilalte persoane, în loc să presupuneți că totul a atins bine.',
      high: 'Un scor mai mare te poate face să fii atent la așteptările sociale și la reacțiile celorlalți. Dacă auto-monitorizarea se transformă în ruminare sau evitare, îndreptați atenția către sarcina împărtășită, abordați situațiile dificile treptat și judecați interacțiunea prin dovezi, mai degrabă decât prin control imaginar.'
    },
    'N.5': {
      low: 'Un scor mai mic sprijină reținerea și capacitatea de a întârzia satisfacția. Dacă reținerea devine supracontrol sau lasă prea puțin spațiu pentru distracție, faceți în mod deliberat spațiu pentru o spontaneitate inofensivă în loc să așteptați până când presiunea crește.',
      high: 'Un scor mai mare poate aduce spontaneitate, apetit și plăcere de experiență imediată. Dacă îndemnurile creează în mod repetat costuri pe care le regretați ulterior, adăugați frecare înainte de a acționa: așteptați, eliminați factorii declanșatori, stabiliți limite în avans sau faceți alegerea dorită pe termen lung mai ușor de atins.'
    },
    'N.6': {
      low: 'Un scor mai mic vă poate ajuta să gândiți clar și să acționați constant sub presiune. Dacă te face să subestimezi tensiunea în tine sau în ceilalți, planifică-ți situațiile neprevăzute și fă-ți timp pentru a informa și a te recupera după perioade solicitante.',
      high: 'Un scor mai mare vă poate face să observați devreme suprasolicitarea și să căutați asistență înainte ca resursele să se epuizeze. Dacă presiunea provoacă îngheț sau confuzie, reduceți solicitările simultane, repetați primii pași în avans și utilizați un plan scris simplu atunci când stresul este mare.'
    },
    'E.1': {
      low: 'Un scor mai mic poate susține independența și un cerc social restrâns, selectiv. Dacă rezerva este confundată cu dezinteres sau împiedică să se formeze relații utile, semnalați căldura în mod explicit și mențineți câteva puncte de contact regulate.',
      high: 'Un scor mai mare poate face relația, încrederea și noile conexiuni să vină cu ușurință. Dacă prietenia duce la un angajament excesiv sau la încredere înainte de a fi câștigată, ritmul de auto-dezvăluire, verificați afirmațiile importante și lăsați spațiu pentru a spune nu.'
    },
    'E.2': {
      low: 'Un scor mai mic poate oferi concentrare, confort în singurătate și mai puțină dependență de stimularea grupului. Dacă singurătatea se transformă în izolare sau grupurile devin din ce în ce mai dificile, alegeți adunări mai mici și planificați timpul de recuperare în loc să evitați complet contactul.',
      high: 'Un scor mai mare poate aduce energie grupurilor și poate ajuta la crearea unui impuls social. Dacă compania exclude munca concentrată sau face solitudinea inconfortabilă, protejați timpul neîntrerupt și exersați ascultarea fără a fi nevoie să mențineți interacțiunea în mișcare.'
    },
    'E.3': {
      low: 'Un scor mai mic poate face loc pentru ascultare, cooperare și conducerea altor oameni. Dacă nevoile sau expertiza dumneavoastră rămân invizibile, pregătiți o propoziție clară, faceți o cerere directă sau vorbiți o dată aproape de începutul discuției.',
      high: 'Un scor mai mare poate ajuta un grup să ia decizii și să ofere direcție atunci când alții ezită. Dacă ocupați prea mult spațiu, cereți opinii divergente, așteptați înainte de a răspunde și faceți explicit dreptul de proprietate, în loc să vă asumați acordul.'
    },
    'E.4': {
      low: 'Un scor mai mic poate susține un ritm fără grabă și o atenție susținută fără mișcare constantă. Dacă munca importantă este întârziată în mod repetat, alegeți un număr mic de priorități și acordați-le termene limită vizibile sau blocuri de timp.',
      high: 'Un scor mai mare poate crea impuls și o capacitate puternică de acțiune. Dacă activitatea devine supraîncărcată sau ocupată fără progres, distingeți mișcarea de rezultate și programați zonele tampon și recuperarea la fel de deliberat ca și sarcinile.'
    },
    'E.5': {
      low: 'Un scor mai mic poate favoriza siguranța, stabilitatea și satisfacția fără stimulare intensă. Dacă evitarea noutății vă restrânge opțiunile, încercați experimente mici, reversibile, ale căror riscuri sunt cunoscute dinainte.',
      high: 'Un scor mai mare poate sprijini curajul, explorarea și bucuria de experiențe vii. Dacă plictiseala generează riscuri inutile, stabilește limite înainte ca entuziasmul să crească și caută stimulare în locurile în care dezavantajele sunt limitate.'
    },
    'E.6': {
      low: 'Un scor mai mic poate aduce seriozitate și un ton realist atunci când optimismul s-ar simți fals. Dacă aprecierea sau căldura rămân ascunse, spuneți-o clar și creați mici ocazii de distracție în loc să vă așteptați să apară un sentiment pozitiv de la sine.',
      high: 'Un scor mai mare poate ridica moralul grupului și poate face experiențele pozitive ușor de observat. Dacă veselia trece peste durere sau risc, recunoașteți mai întâi ceea ce este dificil, apoi căutați speranța fără a nega faptele.'
    },
    'O.1': {
      low: 'Un scor mai mic poate sprijini gândirea concretă și atenția la ceea ce este practic și observabil. Dacă răspunsurile familiare exclud posibilități mai bune, generați mai multe alternative înainte de a evalua care dintre ele este realistă.',
      high: 'Un scor mai mare poate sprijini creativitatea, simularea mentală și conexiunile originale. Dacă ideile rămân în vise sau împrăștie atenția, captează-le, alege una și transformă-l în cel mai mic test tangibil.'
    },
    'O.2': {
      low: 'Un scor mai mic poate menține atenția asupra funcției, clarității și utilității directe. Dacă experiența estetică sau frumusețea restauratoare sunt neglijate în mod constant, eșantionați-o în moduri scurte, cu presiune scăzută și observați ceea ce vă atrage cu adevărat atenția.',
      high: 'Un scor mai mare poate ascuți sensibilitatea la formă, frumusețe și detalii subtile. Dacă standardele estetice consumă prea mult timp sau anulează funcția, definiți mai întâi constrângerile practice și decideți unde merită cu adevărat rafinamentul.'
    },
    'O.3': {
      low: 'Un scor mai mic poate susține calmul și deciziile care sunt mai puțin influențate de starea de spirit a momentului. Dacă sentimentele devin greu de identificat sau semnalele altor persoane sunt ratate, faceți o pauză pentru o scurtă verificare a corpului și a emoțiilor înainte de a decide ce este necesar.',
      high: 'Un scor mai mare poate susține conștientizarea emoțională, empatia și o viață interioară nuanțată. Dacă sentimentele devin copleșitoare sau dictează decizii, numiți emoția, lăsați-o să se stabilească și distingeți ceea ce simțiți de ceea ce arată dovezile.'
    },
    'O.4': {
      low: 'Un scor mai mic poate sprijini continuitatea, măiestria și rutinele de încredere. Dacă rutina devine rigiditate sau teama de noutate, introduceți o schimbare mică, reversibilă, păstrând restul structurii familiare.',
      high: 'Un scor mai mare poate sprijini adaptabilitatea și învățarea prin explorare. Dacă noutatea creează instabilitate sau angajamente neterminate, păstrează câteva ancore nenegociabile pentru timp, bani și responsabilități.'
    },
    'O.5': {
      low: 'Această fațetă se referă la interesul pentru idei complexe și abstracte, nu inteligență sau IQ. Un scor mai mic poate favoriza deciziile practice; dacă ideile necunoscute sunt respinse prea repede, întreabă ce dovezi ți-ar răzgândi și află doar ce necesită decizia.',
      high: 'Un scor mai mare poate sprijini analiza, curiozitatea și confortul cu complexitatea. Dacă gândirea se transformă în dezbateri nesfârșite sau paralizie de analiză, definiți criteriul de decizie și termenul limită înainte de a explora mai departe.'
    },
    'O.6': {
      low: 'Un scor mai mic poate păstra tradițiile utile, așteptările comune și continuitatea socială. Dacă convenția rămâne necontestat sau exclude perspective relevante, revizuiți motivul regulii și întrebați cine este afectat de aceasta.',
      high: 'Un scor mai mare poate sprijini examinarea critică a normelor și reforma constructivă. Dacă noutatea este tratată automat ca fiind mai bună, testați modificările în pași mici și păstrați părțile practicii existente care încă funcționează.'
    },
    'A.1': {
      low: 'Un scor mai mic vă poate ajuta să observați inconsecvența și să vă protejați atunci când mizele sunt mari. Dacă suspiciunea blochează cooperarea, calibrați încrederea în loc să acordați sau reține totul dintr-o dată: începeți cu angajamente mici și actualizați din dovezi.',
      high: 'Un scor mai mare poate facilita deschiderea și cooperarea. Dacă buna-credință te lasă deschis exploatării, verifică afirmațiile cu mize mari, explică așteptările și păstrează limitele chiar și cu oamenii care îți plac.'
    },
    'A.2': {
      low: 'Un scor mai mic poate sprijini tact, negociere și confidențialitate strategică. Dacă creează manipulare sau ambiguitate, distingeți o limită legitimă de înșelăciune și luați angajamente în limbajul pe care celălalt poate verifica.',
      high: 'Un scor mai mare poate construi fiabilitatea prin directitate și transparență. Dacă onestitatea devine totuși sau împărtășire în exces, combinați adevărul cu timpul, relevanța și grija pentru modul în care este transmis.'
    },
    'A.3': {
      low: 'Un scor mai mic poate proteja un timp limitat și poate încuraja autonomia celorlalți. Dacă ceilalți vă consideră indisponibil sau reciprocitatea se erodează, alegeți o formă de ajutor pe care o puteți susține și precizați în mod clar domeniul de aplicare.',
      high: 'Un scor mai mare poate crea un sprijin puternic și un sentiment de comunitate. Dacă ajutarea provoacă epuizare sau îi împiedică pe ceilalți să își asume responsabilitatea, întreabă dacă se dorește ajutor, convineți asupra limitelor și nu faceți din fiecare nevoie obligația dvs.'
    },
    'A.4': {
      low: 'Un scor mai mic poate ajuta la apărarea standardelor și la abordarea directă a conflictului. Dacă dezacordul devine fricțiune cronică, separați nevoile nenegociabile de opțiunile flexibile și utilizați mai degrabă criterii comune decât forța.',
      high: 'Un scor mai mare poate reduce conflictul și poate proteja cooperarea. Dacă armonia este achiziționată prin acordarea unor nevoi importante, spuneți clar granița și permiteți dezacordul respectuos fără a-l trata ca un eșec al relației.'
    },
    'A.5': {
      low: 'Un scor mai mic poate sprijini auto-advocacy și poate face vizibile contribuțiile. Dacă încrederea este auzită ca superioritate sau munca altora dispare, faceți pretenții cu dovezi și împărțiți creditul exact.',
      high: 'Un scor mai mare poate menține atenția asupra muncii și poate facilita colaborarea. Dacă contribuția dvs. este trecută cu vederea în mod repetat, descrieți ceea ce ați făcut și efectul acesteia în mod concret; auto-reprezentarea exactă nu este aroganță.'
    },
    'A.6': {
      low: 'Un scor mai mic poate susține obiectivitatea și deciziile dificile care nu pot satisface pe toată lumea. Dacă oamenii simt decizia ca fiind rece sau costul uman este ratat, întrebați cine poartă povara și asociați raționamentul cu o explicație clară.',
      high: 'Un scor mai mare poate susține compasiunea și recunoașterea rapidă a suferinței. Dacă empatia devine epuizare sau trece peste faptele relevante, stabilește limite emoționale și verifică ce ajutor va îmbunătăți de fapt situația.'
    },
    'C.1': {
      low: 'Un scor mai mic poate încuraja prudența, pregătirea și solicitarea ajutorului atunci când este nevoie. Dacă îndoiala de sine vă împiedică să începeți, împărțiți sarcina în bucăți mici și folosiți pașii finalizați ca dovadă a capacității.',
      high: 'Un scor mai mare poate sprijini asumarea, persistența și încrederea în rezolvarea problemelor. Dacă încrederea devine supraestimare sau reticența de a căuta ajutor, faceți o scurtă pre-mortem și cereți unei persoane cu cunoștințe să conteste planul.'
    },
    'C.2': {
      low: 'Un scor mai mic poate sprijini flexibilitatea și improvizația atunci când planurile se schimbă. Dacă tulburarea costă timp sau face să dispară obligațiile, creați doar câteva case de încredere, liste și rutine pentru lucrurile care contează cel mai mult.',
      high: 'Un scor mai mare poate face munca clară, fiabilă și ușor de reluat. Dacă ordinea se transformă în perfecționism sau schimbarea devine tulburătoare, definiți ceea ce este suficient de bun și lăsați deliberat slăbiciune în plan.'
    },
    'C.3': {
      low: 'Un scor mai mic poate ajuta să pună la îndoială regulile și să adapteze obligațiile la context. Dacă ceilalți nu se pot baza pe angajamentele dvs. sau sunt tăiate colțurile etice, faceți promisiuni explicite și reconectați fiecare obligație la motivul pentru care contează.',
      high: 'Un scor mai mare poate sprijini integritatea și urmărirea de încredere. Dacă datoria creează rigiditate sau o sarcină nesustenabilă, clasificați obligațiile concurente și renegociați-le devreme în loc să le suportați în tăcere pe toate.'
    },
    'C.4': {
      low: 'Un scor mai mic poate proteja echilibrul și permite satisfacție fără concurență constantă. Dacă devine stagnare sau lasă abilitățile valoroase neutilizate, alegeți o țintă semnificativă personal și definiți următoarea etapă mică.',
      high: 'Un scor mai mare poate sprijini stăpânirea și efortul susținut pentru obiective solicitante. Dacă valoarea de sine devine legată de rezultate sau efortul devine burnout, definiți ceea ce contează ca fiind suficient și protejați odihna și rolurile care nu au legătură cu realizarea.'
    },
    'C.5': {
      low: 'Un scor mai mic poate susține spontaneitatea și receptivitatea la schimbarea priorităților. Dacă începerea sau terminarea este dificilă în mod repetat, micșorați primul pas, schimbați mediul și adăugați un indiciu vizibil sau responsabilitatea altei persoane.',
      high: 'Un scor mai mare poate sprijini urmărirea chiar și atunci când motivația este scăzută. Dacă persistența continuă dincolo de randamente în scădere, stabiliți reguli de oprire și verificați dacă obiectivul mai merită efortul.'
    },
    'C.6': {
      low: 'Un scor mai mic poate sprijini viteza, experimentarea și acțiunea cu informații incomplete. Dacă erorile care pot fi prevenite reapar, adăugați o scurtă pauză și o listă de verificare înainte de a lua decizii care sunt costisitoare sau greu de inversat.',
      high: 'Un scor mai mare poate susține analiza riscurilor și decizii atente, de înaltă calitate. Dacă prudența provoacă ratarea cronometrarii sau ruminații repetate, stabiliți un termen limită de decizie și preferați un pilot reversibil decât așteptarea siguranței.'
    }
  },
  ru: {
    'N.1': {
      low: 'Более низкий балл поможет вам сохранять спокойствие и не допустить, чтобы неопределенность взяла верх. Если это спокойствие заставляет вас недооценивать риски или слишком мало готовиться, перечислите наиболее вероятный риск и один запасной вариант перед принятием важного решения.',
      high: 'Более высокий балл поможет вам раньше заметить риски и предупреждающие знаки. Если беспокойство постоянно поглощает ваше внимание, отделите возможное от вероятного, установите ограничение на время беспокойства и выберите одно конкретное следующее действие; обратитесь за профессиональной поддержкой, если это постоянно мешает повседневной жизни.'
    },
    'N.2': {
      low: 'Более низкий балл может сделать вас уравновешенным и трудным для провокации. Если вы склонны подавлять законный гнев или оставлять границы неустановленными, заранее назовите проблему и опишите поведение, которое вы хотите изменить.',
      high: 'Более высокий балл поможет вам быстрее обнаружить несправедливость и защитить то, что важно. Если гнев обостряет конфликты или вызывает импульсивные реакции, сделайте паузу, прежде чем ответить, и укажите конкретное поведение, влияние и потребность вместо того, чтобы нападать на человека.'
    },
    'N.3': {
      low: 'Более низкий балл часто способствует эмоциональному восстановлению и устойчивому приливу энергии. Если из-за этого грусть другого человека или вашу собственную потребность в отдыхе легко не заметить, замедлитесь, прислушайтесь и признайте потерю, прежде чем пытаться ее решить.',
      high: 'Более высокий балл может сделать разочарование и потерю особенно заметными, что может раскрыть то, что для вас глубоко важно. Постоянное плохое настроение — это не то, к чему вы должны относиться просто как к черте характера: придерживайтесь небольшого распорядка дня и задач, оставайтесь на связи с людьми, которым вы доверяете, и обращайтесь за профессиональной поддержкой, когда оно длится или ухудшает повседневную жизнь.'
    },
    'N.4': {
      low: 'Более низкий балл может сделать социальные ситуации более расслабленными и уменьшить страх осуждения. Если вы иногда упускаете из виду то, как вы производите впечатление, попросите конкретную обратную связь и проверьте ответ другого человека, а не предполагайте, что все прошло хорошо.',
      high: 'Более высокий балл может сделать вас внимательным к социальным ожиданиям и реакциям других людей. Если самоконтроль превращается в размышления или избегание, переключите внимание на общую задачу, постепенно приближайтесь к трудным ситуациям и судите о взаимодействии на основе фактов, а не воображаемого изучения.'
    },
    'N.5': {
      low: 'Более низкий балл поддерживает сдержанность и способность откладывать удовлетворение. Если сдержанность становится чрезмерным контролем или оставляет слишком мало места для удовольствия, сознательно освободите место для безобидной спонтанности, вместо того, чтобы ждать, пока нарастет давление.',
      high: 'Более высокий балл может принести спонтанность, аппетит и удовольствие от непосредственного опыта. Если побуждения постоянно приводят к издержкам, о которых вы впоследствии сожалеете, добавьте трения, прежде чем действовать: подождите, устраните триггеры, заранее установите ограничения или облегчите достижение желаемого долгосрочного выбора.'
    },
    'N.6': {
      low: 'Более низкий балл поможет вам ясно мыслить и стабильно действовать в условиях стресса. Если это заставляет вас недооценивать нагрузку на себя или других, спланируйте непредвиденные обстоятельства и найдите время для подведения итогов и восстановления после трудных периодов.',
      high: 'Более высокий балл может заставить вас заметить перегрузку раньше и обратиться за поддержкой до того, как ресурсы иссякнут. Если давление вызывает замирание или замешательство, сократите одновременные требования, заранее отрепетируйте первые несколько шагов и используйте простой письменный план, когда стресс высок.'
    },
    'E.1': {
      low: 'Более низкий балл может способствовать независимости и небольшому избирательному кругу общения. Если сдержанность ошибочно принимается за незаинтересованность или препятствует формированию полезных отношений, явно сигнализируйте о теплоте и поддерживайте несколько регулярных точек соприкосновения.',
      high: 'Более высокий балл может облегчить взаимопонимание, доверие и новые связи. Если дружелюбие приводит к чрезмерным обязательствам или доверию до того, как оно заслужено, ускорьте самораскрытие, проверьте важные утверждения и оставьте место, чтобы сказать «нет».'
    },
    'E.2': {
      low: 'Более низкий балл может обеспечить сосредоточенность, комфорт в одиночестве и меньшую зависимость от групповой стимуляции. Если одиночество превращается в изоляцию или работать в группах становится все труднее, выбирайте небольшие собрания и планируйте время для восстановления, а не избегайте контактов вообще.',
      high: 'Более высокий балл может придать группам энергию и помочь создать социальный импульс. Если компания вытесняет целенаправленную работу или делает одиночество неудобным, оберегайте время, которое не отвлекается, и тренируйтесь слушать, не поддерживая взаимодействие.'
    },
    'E.3': {
      low: 'Более низкий балл может освободить место для умения слушать, сотрудничества и лидерства других людей. Если ваши потребности или опыт остаются невидимыми, подготовьте одно четкое предложение, сделайте прямую просьбу или выскажитесь один раз в самом начале обсуждения.',
      high: 'Более высокий балл может помочь группе принимать решения и указывать направление, когда другие колеблются. Если вы занимаете слишком много места, попросите высказать несогласные мнения, подождите, прежде чем ответить, и явно укажите свое право собственности, а не предполагайте согласие.'
    },
    'E.4': {
      low: 'Более низкий балл может способствовать неторопливому темпу и устойчивому вниманию без постоянного движения. Если важная работа постоянно откладывается, выберите небольшое количество приоритетов и задайте для них четкие сроки или временные рамки.',
      high: 'Более высокий балл может создать импульс и большую способность к действию. Если деятельность становится перегруженной или занятой без прогресса, отделяйте движение от результатов и планируйте буферы и восстановление так же сознательно, как и задачи.'
    },
    'E.5': {
      low: 'Более низкий балл может способствовать безопасности, стабильности и удовлетворению без интенсивной стимуляции. Если избегание новизны сужает ваш выбор, попробуйте небольшие обратимые эксперименты, риски которых известны заранее.',
      high: 'Более высокий балл может способствовать смелости, исследованию и наслаждению яркими впечатлениями. Если скука приводит к ненужному риску, установите ограничения до того, как усилится волнение, и ищите стимуляцию в условиях, где отрицательные стороны сдержаны.'
    },
    'E.6': {
      low: 'Более низкий балл может придать серьезность и реалистичный тон, когда оптимизм кажется ложным. Если признательность или теплота остаются скрытыми, скажите об этом прямо и создайте небольшие поводы для удовольствия, вместо того, чтобы ожидать, что позитивные чувства появятся сами по себе.',
      high: 'Более высокий балл может поднять моральный дух группы и сделать положительный опыт более заметным. Если бодрость затмевает боль или риск, сначала признайте, что это сложно, а затем ищите надежду, не отрицая факты.'
    },
    'O.1': {
      low: 'Более низкий балл может способствовать конкретному мышлению и вниманию к тому, что практично и наблюдаемо. Если знакомые ответы вытесняют лучшие возможности, создайте несколько альтернатив, прежде чем оценить, какая из них реалистична.',
      high: 'Более высокий балл может способствовать творчеству, умственному моделированию и оригинальным связям. Если идеи остаются в мечтах или рассеивают внимание, уловите их, выберите одну и превратите ее в самое маленькое осязаемое испытание.'
    },
    'O.2': {
      low: 'Более низкий балл позволяет сосредоточить внимание на функциональности, ясности и прямой полезности. Если эстетическим опытом или восстановительной красотой постоянно пренебрегают, попробуйте это короткими, ненавязчивыми способами и обратите внимание на то, что действительно привлекает ваше внимание.',
      high: 'Более высокий балл может обострить чувствительность к форме, красоте и тонким деталям. Если эстетические стандарты отнимают слишком много времени или переопределяют функцию, сначала определите практические ограничения и решите, где доработка действительно того стоит.'
    },
    'O.3': {
      low: 'Более низкий балл может способствовать хладнокровию и принятию решений, которые меньше зависят от настроения момента. Если чувства становится трудно распознавать или сигналы других людей пропускаются, сделайте паузу для краткой проверки тела и эмоций, прежде чем решить, что необходимо.',
      high: 'Более высокий балл может способствовать эмоциональной осведомленности, сочувствию и нюансам внутренней жизни. Если чувства становятся непреодолимыми или диктуют решения, назовите эмоцию, дайте ей устояться и отделите то, что вы чувствуете, от того, что показывают факты.'
    },
    'O.4': {
      low: 'Более низкий балл может способствовать непрерывности, мастерству и надежности выполнения упражнений. Если рутина становится жесткой или вызывает страх перед новизной, внесите одно небольшое обратимое изменение, сохраняя при этом остальную структуру привычной.',
      high: 'Более высокий балл может способствовать адаптивности и обучению посредством исследования. Если новизна создает нестабильность или невыполненные обязательства, сохраните несколько не подлежащих обсуждению якорей для времени, денег и ответственности.'
    },
    'O.5': {
      low: 'Этот аспект касается интереса к сложным и абстрактным идеям, а не к интеллекту или IQ. Более низкий балл может способствовать практическим решениям; Если незнакомые идеи отвергаются слишком быстро, спросите, какие доказательства могут изменить ваше мнение, и узнайте только то, чего требует решение.',
      high: 'Более высокий балл может способствовать анализу, любознательности и комфорту в связи со сложностью. Если мышление превращается в бесконечные дебаты или паралич анализа, определите критерий принятия решения и крайний срок, прежде чем продолжить исследование.'
    },
    'O.6': {
      low: 'Более низкий балл может сохранить полезные традиции, общие ожидания и социальную преемственность. Если конвенция не подвергается сомнению или исключает соответствующие точки зрения, вернитесь к причине правила и спросите, на кого оно влияет.',
      high: 'Более высокий балл может способствовать критическому рассмотрению норм и конструктивным реформам. Если новизна автоматически считается лучшей, тестируйте изменения небольшими шагами и сохраняйте те части существующей практики, которые все еще работают.'
    },
    'A.1': {
      low: 'Более низкий балл поможет вам заметить непоследовательность и защитить себя, когда ставки высоки. Если подозрительность блокирует сотрудничество, калибруйте доверие, а не предоставляйте или отказывайте в нем сразу: начните с небольших обязательств и обновляйте данные на основе доказательств.',
      high: 'Более высокий балл может облегчить открытость и сотрудничество. Если добросовестность делает вас уязвимым для эксплуатации, проверяйте важные заявления, четко выражайте ожидания и соблюдайте границы даже с людьми, которые вам нравятся.'
    },
    'A.2': {
      low: 'Более низкий балл может способствовать такту, переговорам и стратегической конфиденциальности. Если это создает манипуляцию или двусмысленность, отличайте законные границы от обмана и дайте обязательства на языке, который другой человек может проверить.',
      high: 'Более высокий балл может повысить надежность за счет прямоты и прозрачности. Если честность превращается в прямоту или чрезмерную откровенность, сочетайте правду с своевременностью, актуальностью и заботой о том, как она преподносится.'
    },
    'A.3': {
      low: 'Более низкий балл может защитить ограниченное время и поощрить автономию других людей. Если другие считают вас недоступным или взаимность ослабевает, выберите форму помощи, которую вы можете поддерживать, и четко укажите ее объем.',
      high: 'Более высокий балл может создать сильную поддержку и чувство общности. Если помощь вызывает выгорание или мешает другим взять на себя ответственность, спросите, нужна ли помощь, договоритесь об ограничениях и не делайте каждую потребность своей обязанностью.'
    },
    'A.4': {
      low: 'Более низкий балл может помочь защитить стандарты и напрямую решать конфликты. Если разногласия становятся хроническими трениями, отделите не подлежащие обсуждению потребности от гибких вариантов и используйте общие критерии, а не силу.',
      high: 'Более высокий балл может снизить эскалацию конфликта и защитить сотрудничество. Если гармония достигается признанием важных потребностей, четко обозначьте границу и допускайте уважительные разногласия, не рассматривая их как неудачу в отношениях.'
    },
    'A.5': {
      low: 'Более низкий балл может поддержать самозащиту и сделать вклад видимым. Если доверие слышится как превосходство или чужая работа исчезает, предъявляйте претензии с доказательствами и точно делитесь заслугами.',
      high: 'Более высокий балл поможет сосредоточить внимание на работе и облегчит совместную работу. Если ваш вклад постоянно игнорируется, опишите, что вы сделали, и его фактический эффект; точная самопрезентация – это не высокомерие.'
    },
    'A.6': {
      low: 'Более низкий балл может способствовать объективности и трудным решениям, которые не могут удовлетворить всех. Если люди воспринимают решение как холодное или упускают из виду его человеческую цену, спросите, кто несет это бремя, и соедините аргументацию с четким объяснением.',
      high: 'Более высокий балл может способствовать состраданию и быстрому признанию страданий. Если сочувствие приводит к истощению или игнорирует соответствующие факты, установите эмоциональные границы и проверьте, какая помощь действительно улучшит ситуацию.'
    },
    'C.1': {
      low: 'Более низкий балл может способствовать осторожности, подготовке и обращению за помощью, когда она необходима. Если неуверенность в себе мешает вам начать, разбейте задачу на мелкие части и используйте выполненные шаги как доказательство своих способностей.',
      high: 'Более высокий балл может поддержать ответственность, настойчивость и уверенность в решении проблем. Если уверенность перерастает в переоценку или нежелание обращаться за помощью, проведите краткое предсмертное исследование и попросите знающего человека оспорить этот план.'
    },
    'C.2': {
      low: 'Более низкий балл может способствовать гибкости и импровизации при изменении планов. Если беспорядок требует времени или приводит к исчезновению обязательств, создайте лишь несколько надежных домов, списков и распорядков дня для самых важных дел.',
      high: 'Более высокий балл может сделать работу ясной, надежной и легкой для возобновления. Если порядок превращается в перфекционизм или изменения вызывают беспокойство, определите, что достаточно хорошо, и сознательно оставьте в плане слабые места.'
    },
    'C.3': {
      low: 'Более низкий балл может помочь подвергнуть сомнению правила и адаптировать обязательства к контексту. Если другие не могут положиться на ваши обязательства или если этические нормы нарушены, дайте обещание ясно и заново свяжите каждое обязательство с причиной, по которой оно имеет значение.',
      high: 'Более высокий балл может способствовать честности и надежному доведению результатов до конца. Если долг создает жесткость или непосильную нагрузку, ранжируйте конкурирующие обязательства и пересмотрите их как можно раньше, вместо того, чтобы молча выполнять их все.'
    },
    'C.4': {
      low: 'Более низкий балл может защитить баланс и обеспечить удовлетворение без постоянной конкуренции. Если ситуация переходит в стагнацию или ценные способности остаются неиспользованными, выберите лично значимую цель и определите следующую небольшую веху.',
      high: 'Более высокий балл может способствовать мастерству и постоянным усилиям по достижению сложных целей. Если самооценка становится привязанной к результатам или усилия приводят к выгоранию, определите, что считается достаточным, и защитите отдых и роли, не связанные с достижениями.'
    },
    'C.5': {
      low: 'Более низкий балл может способствовать спонтанности и реагированию на меняющиеся приоритеты. Если начало или завершение постоянно вызывает затруднения, сократите первый шаг, измените обстановку и добавьте видимый сигнал или ответственность другого человека.',
      high: 'Более высокий балл может способствовать доведению до конца, даже если мотивация низкая. Если настойчивость продолжается и после уменьшающейся отдачи, установите правила остановки и проверьте, заслуживает ли цель по-прежнему усилий.'
    },
    'C.6': {
      low: 'Более низкий балл может способствовать скорости, экспериментированию и действиям с неполной информацией. Если ошибки, которые можно было предотвратить, повторяются, добавьте короткую паузу и контрольный список перед принятием решений, которые являются дорогостоящими или труднообратимыми.',
      high: 'Более высокий балл может способствовать анализу рисков и принятию осторожных и качественных решений. Если осторожность приводит к упущению времени или повторным размышлениям, установите крайний срок принятия решения и отдайте предпочтение обратимому пилотному проекту, а не ожиданию определенности.'
    }
  },
  sl: {
    'N.1': {
      low: 'Nižji rezultat vam lahko pomaga, da ostanete mirni in preprečite, da vas negotovost prevzame. Če vas ta umirjenost vodi do tega, da podcenjujete tveganja ali se premalo pripravite, pred pomembno odločitvijo navedite najverjetnejše tveganje in eno rezervo.',
      high: 'Višja ocena vam lahko pomaga zgodaj opaziti tveganja in opozorilne znake. Če skrb vedno znova žre vašo pozornost, ločite možno od verjetnega, omejite čas skrbi in izberite eno konkretno naslednje dejanje; poiščite strokovno pomoč, če vztrajno moti vsakodnevno življenje.'
    },
    'N.2': {
      low: 'Nižja ocena vas lahko naredi enakomerne in vas je težko izzvati. Če ste nagnjeni k potlačevanju upravičene jeze ali puščate meje nedorečene, zgodaj poimenujte težavo in opišite vedenje, ki ga želite spremeniti.',
      high: 'Višja ocena vam lahko pomaga hitro odkriti nepravičnost in braniti tisto, kar je pomembno. Če jeza stopnjuje konflikte ali spodbuja impulzivne reakcije, se pred odzivom ustavite in navedite specifično vedenje, vpliv in potrebo, namesto da napadate osebo.'
    },
    'N.3': {
      low: 'Nižji rezultat pogosto podpira čustveno okrevanje in enakomerno energijo. Če zaradi tega zlahka spregledate žalost druge osebe ali svojo potrebo po počitku, upočasnite, prisluhnite in priznajte izgubo, preden jo poskusite rešiti.',
      high: 'Z višjim rezultatom sta lahko razočaranje in izguba še posebej opazna, kar lahko razkrije, kaj vam je zelo pomembno. Vztrajno slabo razpoloženje ni nekaj, kar bi morali obravnavati le kot lastnost: naj bodo rutine in opravila majhni, ostanite povezani z zaupanja vrednimi ljudmi in poiščite strokovno podporo, ko traja ali ovira vsakodnevno življenje.'
    },
    'N.4': {
      low: 'Nižja ocena lahko povzroči sproščenost socialnih situacij in zmanjša strah pred sodbo. Če včasih zamudite, kako ste naleteli, prosite za posebne povratne informacije in preverite odgovor druge osebe, namesto da domnevate, da je vse dobro pristalo.',
      high: 'Zaradi višje ocene ste lahko pozorni na družbena pričakovanja in odzive drugih ljudi. Če se samonadziranje spremeni v prežvekovanje ali izogibanje, preusmerite pozornost na skupno nalogo, pristopite k težkim situacijam postopoma in presodite interakcijo na podlagi dokazov in ne namišljenega pregleda.'
    },
    'N.5': {
      low: 'Nižji rezultat podpira zadržanost in sposobnost odložiti zadovoljstvo. Če zadrževanje postane pretiran nadzor ali pušča premalo prostora za užitek, namenoma naredite prostor za neškodljivo spontanost, namesto da čakate, da pritisk naraste.',
      high: 'Višji rezultat lahko prinese spontanost, apetit in uživanje v neposredni izkušnji. Če nagoni vedno znova ustvarjajo stroške, ki jih pozneje obžalujete, dodajte trenja, preden ukrepate: počakajte, odstranite sprožilce, vnaprej postavite omejitve ali olajšajte doseganje želene dolgoročne izbire.'
    },
    'N.6': {
      low: 'Nižji rezultat vam lahko pomaga jasno razmišljati in delovati vztrajno pod pritiskom. Če zaradi tega podcenjujete obremenitev sebe ali drugih, načrtujte nepredvidene primere in si vzemite čas za pregled in okrevanje po zahtevnih obdobjih.',
      high: 'Zaradi višjega rezultata lahko zgodaj opazite preobremenitev in poiščete podporo, preden zmanjka virov. Če pritisk povzroči zmrzovanje ali zmedo, zmanjšajte sočasne zahteve, vadite prvih nekaj korakov vnaprej in uporabite preprost pisni načrt, ko je stres velik.'
    },
    'E.1': {
      low: 'Nižji rezultat lahko podpira neodvisnost in majhen, selektiven družbeni krog. Če zadržanost zamenjujete z nezainteresiranostjo ali preprečuje oblikovanje koristnih odnosov, izrecno pokažite toplino in ohranite nekaj rednih stikov.',
      high: 'Z višjim rezultatom se zlahka vzpostavi odnos, zaupanje in nove povezave. Če prijaznost vodi v pretirano predanost ali zaupanje, preden si ga zaslužite, pospešite samorazkritje, preverite pomembne trditve in pustite prostor reči ne.'
    },
    'E.2': {
      low: 'Nižja ocena lahko zagotovi osredotočenost, udobje s samoto in manjšo odvisnost od skupinske stimulacije. Če se samota spremeni v izolacijo ali postanejo skupine vse težje, izberite manjša srečanja in načrtujte čas okrevanja, namesto da bi se popolnoma izogibali stikom.',
      high: 'Višja ocena lahko skupinam prinese energijo in pomaga ustvariti družbeni zagon. Če podjetje izriva osredotočeno delo ali je samota neprijetna, zaščitite neprekinjen čas in vadite poslušanje, ne da bi morali vzdrževati interakcijo.'
    },
    'E.3': {
      low: 'Nižja ocena lahko naredi prostor za poslušanje, sodelovanje in vodenje drugih ljudi. Če vaše potrebe ali strokovno znanje ostanejo nevidne, pripravite en jasen stavek, neposredno zahtevajte ali spregovorite enkrat na začetku razprave.',
      high: 'Višji rezultat lahko pomaga skupini pri sprejemanju odločitev in daje smernice, ko drugi oklevajo. Če zavzamete preveč prostora, prosite za drugačna mnenja, počakajte, preden odgovorite, in izrazite lastništvo, namesto da domnevate, da se strinjate.'
    },
    'E.4': {
      low: 'Nižji rezultat lahko podpira nenaden tempo in trajno pozornost brez nenehnega gibanja. Če pomembno delo vedno znova zamuja, izberite majhno število prednostnih nalog in jim dajte vidne roke ali časovne bloke.',
      high: 'Višji rezultat lahko ustvari zagon in močno sposobnost za ukrepanje. Če dejavnost postane preobremenjena ali zasedena brez napredka, ločite gibanje od rezultatov ter razporedite medpomnilnike in okrevanje tako premišljeno kot naloge.'
    },
    'E.5': {
      low: 'Nižji rezultat lahko daje prednost varnosti, stabilnosti in zadovoljstvu brez intenzivne stimulacije. Če izogibanje novostim zoži vaše izbire, poskusite majhne, ​​reverzibilne poskuse, katerih tveganja so znana vnaprej.',
      high: 'Višji rezultat lahko podpira pogum, raziskovanje in uživanje v živahnih izkušnjah. Če dolgčas povzroča nepotrebno tveganje, postavite meje, preden vznemirjenje naraste, in poiščite stimulacijo v okoljih, kjer je negativna stran omejena.'
    },
    'E.6': {
      low: 'Nižja ocena lahko prinese resnost in realističen ton, ko bi se optimizem zdel lažen. Če hvaležnost ali toplina ostaneta skrita, povejte to jasno in ustvarite majhne priložnosti za uživanje, namesto da pričakujete, da se bodo pozitivni občutki pojavili sami.',
      high: 'Višji rezultat lahko dvigne skupinsko moralo in olajša opazovanje pozitivnih izkušenj. Če veselje zasenči bolečino ali tveganje, najprej priznajte, kaj je težko, nato iščite upanje, ne da bi zanikali dejstva.'
    },
    'O.1': {
      low: 'Nižji rezultat lahko podpira konkretno razmišljanje in pozornost do tega, kar je praktično in opazno. Če znani odgovori izrivajo boljše možnosti, ustvarite več alternativ, preden ocenite, katera je realna.',
      high: 'Višji rezultat lahko podpira ustvarjalnost, mentalno simulacijo in izvirne povezave. Če ideje ostanejo v sanjah ali razpršijo pozornost, jih ujemite, izberite eno in jo spremenite v najmanjšo otipljivo preizkušnjo.'
    },
    'O.2': {
      low: 'Nižja ocena lahko obdrži pozornost na funkciji, jasnosti in neposredni uporabnosti. Če se estetska izkušnja ali obnovitvena lepota dosledno zanemarja, poskusite na kratke načine z nizkim pritiskom in opazite, kaj resnično pritegne vašo pozornost.',
      high: 'Višja ocena lahko izostri občutljivost za obliko, lepoto in subtilne podrobnosti. Če estetski standardi vzamejo preveč časa ali preglasijo funkcijo, najprej določite praktične omejitve in se odločite, kje se izboljšanje resnično splača.'
    },
    'O.3': {
      low: 'Nižji rezultat lahko podpira umirjenost in odločitve, ki so manj odvisne od razpoloženja trenutka. Če občutke postane težko prepoznati ali spregledate signale drugih ljudi, se ustavite za kratek pregled telesa in čustev, preden se odločite, kaj je potrebno.',
      high: 'Višji rezultat lahko podpira čustveno zavedanje, empatijo in niansirano notranje življenje. Če občutki postanejo močni ali narekujejo odločitve, poimenujte čustvo, pustite, da se umiri in ločite, kar čutite, od tega, kar kažejo dokazi.'
    },
    'O.4': {
      low: 'Nižji rezultat lahko podpira kontinuiteto, mojstrstvo in zanesljive rutine. Če rutina postane togost ali strah pred novostmi, uvedite eno majhno, reverzibilno spremembo, medtem ko ohranite preostalo strukturo znano.',
      high: 'Višji rezultat lahko podpira prilagodljivost in učenje z raziskovanjem. Če novost ustvarja nestabilnost ali nedokončane obveznosti, obdržite nekaj sider, o katerih se ni mogoče pogajati, za čas, denar in odgovornosti.'
    },
    'O.5': {
      low: 'Ta vidik se nanaša na zanimanje za kompleksne in abstraktne ideje, ne pa na inteligenco ali IQ. Nižji rezultat lahko daje prednost praktičnim odločitvam; če se neznane ideje prehitro ovržejo, vprašajte, kateri dokazi bi spremenili vaše mnenje, in se naučite samo tistega, kar zahteva odločitev.',
      high: 'Višji rezultat lahko podpira analizo, radovednost in udobje s kompleksnostjo. Če se razmišljanje spremeni v neskončno debato ali paralizo analize, pred nadaljnjim raziskovanjem določite kriterij odločitve in rok.'
    },
    'O.6': {
      low: 'Nižja ocena lahko ohrani koristne tradicije, skupna pričakovanja in družbeno kontinuiteto. Če je konvencija nesporna ali izključuje ustrezne perspektive, ponovno preglejte razloge za pravilo in se vprašajte, na koga vpliva.',
      high: 'Višja ocena lahko podpira kritično preučitev norm in konstruktivno reformo. Če se novost samodejno obravnava kot boljša, preizkusite spremembe v majhnih korakih in ohranite dele obstoječe prakse, ki še delujejo.'
    },
    'A.1': {
      low: 'Nižji rezultat vam lahko pomaga opaziti nedoslednost in se zaščititi, ko so vložki visoki. Če sum blokira sodelovanje, umerite zaupanje, namesto da bi ga odobrili ali zavrnili naenkrat: začnite z majhnimi obveznostmi in posodobite z dokazi.',
      high: 'Višja ocena lahko olajša odprtost in sodelovanje. Če ste zaradi dobre vere odprti za izkoriščanje, preverite visoke stave, jasno izrazite pričakovanja in ohranite meje tudi z ljudmi, ki so vam všeč.'
    },
    'A.2': {
      low: 'Nižji rezultat lahko podpira taktnost, pogajanja in strateško zasebnost. Če ustvarja manipulacijo ali dvoumnost, ločite legitimno mejo od prevare in se zavežite v jeziku, ki ga druga oseba lahko preveri.',
      high: 'Višji rezultat lahko poveča zanesljivost z neposrednostjo in preglednostjo. Če se iskrenost spremeni v odkritost ali pretiravanje, združite resnico s časom, ustreznostjo in pazite na to, kako je podana.'
    },
    'A.3': {
      low: 'Nižji rezultat lahko zaščiti omejen čas in spodbudi avtonomijo drugih ljudi. Če vas drugi doživljajo kot nedosegljivega ali vzajemnost erodira, izberite obliko pomoči, ki jo lahko vzdržujete, in jasno navedite njen obseg.',
      high: 'Višji rezultat lahko ustvari močno podporo in občutek skupnosti. Če pomoč povzroči izgorelost ali preprečuje drugim, da bi prevzeli odgovornost, se vprašajte, ali je pomoč zaželena, dogovorite se o omejitvah in ne naredite vsake potrebe za svojo obveznost.'
    },
    'A.4': {
      low: 'Nižja ocena lahko pomaga braniti standarde in neposredno obravnavati konflikte. Če nestrinjanje postane kronično trenje, ločite potrebe, o katerih se ni mogoče pogajati, od prilagodljivih možnosti in namesto sile uporabite skupna merila.',
      high: 'Višji rezultat lahko ublaži konflikt in zaščiti sodelovanje. Če je harmonija kupljena s priznavanjem pomembnih potreb, jasno navedite mejo in dovolite spoštljivo nestrinjanje, ne da bi ga obravnavali kot neuspeh odnosa.'
    },
    'A.5': {
      low: 'Nižji rezultat lahko podpira samozagovorništvo in naredi prispevke vidne. Če se zaupanje sliši kot superiornost ali delo drugih izgine, navedite trditve z dokazi in natančno delite zasluge.',
      high: 'Višja ocena lahko obdrži pozornost pri delu in olajša sodelovanje. Če je vaš prispevek vedno znova spregledan, dejansko opišite, kaj ste storili in njegov učinek; natančno samopredstavljanje ni aroganca.'
    },
    'A.6': {
      low: 'Nižja ocena lahko podpira objektivnost in težke odločitve, ki ne morejo zadovoljiti vseh. Če ljudje odločitev doživijo kot hladno ali če spregledajo njeno človeško ceno, se vprašajte, kdo nosi breme, in obrazložitev povežite z jasno razlago.',
      high: 'Višji rezultat lahko podpira sočutje in hitro prepoznavanje trpljenja. Če empatija postane izčrpana ali preglasi pomembna dejstva, postavite čustvene meje in preverite, kakšna pomoč bo dejansko izboljšala situacijo.'
    },
    'C.1': {
      low: 'Nižji rezultat lahko spodbudi previdnost, pripravo in prošnjo za pomoč, ko je ta potrebna. Če vam dvom vase preprečuje, da začnete, razdelite nalogo na majhne koščke in uporabite dokončane korake kot dokaz sposobnosti.',
      high: 'Višji rezultat lahko podpira lastništvo, vztrajnost in zaupanje pri reševanju težav. Če zaupanje postane precenjevanje ali nenaklonjenost iskanju pomoči, opravite kratek predsmrtni pregled in prosite dobro obveščeno osebo, da izpodbija načrt.'
    },
    'C.2': {
      low: 'Nižji rezultat lahko podpira prilagodljivost in improvizacijo, ko se načrti spremenijo. Če motnja zahteva čas ali povzroči, da obveznosti izginejo, ustvarite le nekaj zanesljivih domov, seznamov in rutin za stvari, ki so najpomembnejše.',
      high: 'Višja ocena lahko naredi delo jasno, zanesljivo in enostavno za nadaljevanje. Če se red sprevrže v perfekcionizem ali sprememba postane mučna, opredelite, kaj je dovolj dobro, in pustite namerno ohlapnost v načrtu.'
    },
    'C.3': {
      low: 'Nižji rezultat lahko pomaga dvomiti o pravilih in prilagoditi obveznosti kontekstu. Če se drugi ne morejo zanesti na vaše zaveze ali če so etični koti odrezani, jasno obljubite in vsako obveznost ponovno povežite z razlogom, zaradi katerega je pomembna.',
      high: 'Višji rezultat lahko podpira integriteto in zanesljivo spremljanje. Če dolžnost povzroči togost ali nevzdržno obremenitev, razvrstite konkurenčne obveznosti in se zgodaj znova pogajajte o njih, namesto da jih tiho nosite.'
    },
    'C.4': {
      low: 'Nižji rezultat lahko zaščiti ravnotežje in omogoči zadovoljstvo brez nenehne konkurence. Če začne stagnirati ali pusti cenjene sposobnosti neizkoriščene, izberite osebno pomemben cilj in določite naslednji majhen mejnik.',
      high: 'Višja ocena lahko podpira mojstrstvo in vztrajno prizadevanje za doseganje zahtevnih ciljev. Če lastna vrednost postane povezana z rezultatom ali trud postane izgorelost, opredelite, kaj šteje kot dovolj, in zaščitite počitek in vloge, ki niso povezane z dosežkom.'
    },
    'C.5': {
      low: 'Nižji rezultat lahko podpira spontanost in odzivnost na spreminjajoče se prioritete. Če je začetek ali zaključek vedno znova težaven, skrčajte prvi korak, spremenite okolje in dodajte vidno iztočnico ali odgovornost druge osebe.',
      high: 'Višji rezultat lahko podpira nadaljevanje, tudi če je motivacija nizka. Če se vztrajnost nadaljuje mimo vse manjših donosov, določite pravila za ustavitev in preverite, ali si cilj še vedno zasluži trud.'
    },
    'C.6': {
      low: 'Nižji rezultat lahko podpira hitrost, eksperimentiranje in ukrepanje z nepopolnimi informacijami. Če se ponavljajo napake, ki jih je mogoče preprečiti, dodajte kratek premor in kontrolni seznam pred odločitvami, ki so drage ali jih je težko razveljaviti.',
      high: 'Višji rezultat lahko podpira analizo tveganja in previdne, visokokakovostne odločitve. Če previdnost povzroči zamujeno merjenje časa ali ponavljajoče se prežvekovanje, nastavite rok za odločitev in dajte prednost reverzibilnemu pilotu kot čakanju na gotovost.'
    }
  },
  sq: {
    'N.1': {
      low: "Një rezultat më i ulët mund t'ju ndihmojë të qëndroni të qetë dhe të mbani pasigurinë nga marrja e pushtetit. Nëse kjo qetësi ju bën të nënvlerësoni rreziqet ose të përgatiteni shumë pak, renditni rrezikun më të mundshëm dhe një kthim prapa përpara një vendimi të rëndësishëm.",
      high: "Një rezultat më i lartë mund t'ju ndihmojë të vini re rreziqet dhe shenjat paralajmëruese herët. Nëse shqetësimi ju tërheq vazhdimisht vëmendjen, ndani atë që është e mundur nga ajo që është e mundshme, vendosni një kufi në kohën e shqetësimit dhe zgjidhni një veprim konkret të ardhshëm; kërkoni mbështetje profesionale nëse vazhdimisht prish jetën e përditshme."
    },
    'N.2': {
      low: "Një rezultat më i ulët mund t'ju bëjë të qetë dhe të vështirë për t'u provokuar. Nëse tentoni të shtypni zemërimin e ligjshëm ose të lini kufij të padeklaruar, emërtoni problemin herët dhe përshkruani sjelljen që dëshironi të ndryshoni.",
      high: "Një rezultat më i lartë mund t'ju bëjë të shpejtë për të zbuluar padrejtësinë dhe për të mbrojtur atë që ka rëndësi. Nëse zemërimi përshkallëzon konfliktet ose nxit reagime impulsive, ndaloni përpara se të përgjigjeni dhe tregoni sjelljen, ndikimin dhe nevojën specifike në vend që të sulmoni personin."
    },
    'N.3': {
      low: 'Një rezultat më i ulët shpesh mbështet rikuperimin emocional dhe energjinë e qëndrueshme. Nëse e bën të lehtë të anashkalohet trishtimi i një personi tjetër ose nevoja juaj për pushim, ngadalësoni, dëgjoni dhe pranoni humbjen përpara se të përpiqeni ta zgjidhni atë.',
      high: 'Një rezultat më i lartë mund të bëjë veçanërisht të spikatur zhgënjimin dhe humbjen, gjë që mund të zbulojë atë që ka rëndësi të madhe për ju. Humori i vazhdueshëm i ulët nuk është diçka që duhet ta trajtoni thjesht si një tipar: mbani rutinat dhe detyrat të vogla, qëndroni të lidhur me njerëz të besuar dhe kërkoni mbështetje profesionale kur zgjat ose dëmton jetën e përditshme.'
    },
    'N.4': {
      low: "Një rezultat më i ulët mund t'i bëjë situatat sociale të ndihen të relaksuara dhe të zvogëlojë frikën nga gjykimi. Nëse ndonjëherë ju mungon mënyra se si ndesheni, kërkoni reagime specifike dhe kontrolloni përgjigjen e personit tjetër në vend që të supozoni se gjithçka shkoi mirë.",
      high: "Një rezultat më i lartë mund t'ju bëjë të vëmendshëm ndaj pritjeve sociale dhe reagimeve të njerëzve të tjerë. Nëse vetë-monitorimi kthehet në përsiatje ose shmangie, zhvendoseni vëmendjen në detyrën e përbashkët, afrojuni situatave të vështira gradualisht dhe gjykoni ndërveprimin me prova dhe jo nga shqyrtimi i imagjinuar."
    },
    'N.5': {
      low: 'Një rezultat më i ulët mbështet përmbajtjen dhe aftësinë për të vonuar kënaqësinë. Nëse kufizimi bëhet mbikontroll ose lë shumë pak hapësirë ​​për kënaqësi, qëllimisht lini hapësirë ​​për spontanitet të padëmshëm në vend që të prisni derisa të rritet presioni.',
      high: "Një rezultat më i lartë mund të sjellë spontanitet, oreks dhe kënaqësi të përvojës së menjëhershme. Nëse nxitjet në mënyrë të përsëritur krijojnë kosto për të cilat më vonë pendoheni, shtoni fërkime përpara se të veproni: prisni, hiqni shkaktarët, vendosni kufij paraprakisht ose bëni zgjedhjen e dëshiruar afatgjatë më të lehtë për t'u arritur."
    },
    'N.6': {
      low: "Një rezultat më i ulët mund t'ju ndihmojë të mendoni qartë dhe të veproni në mënyrë të qëndrueshme nën presion. Nëse kjo ju bën të nënvlerësoni tendosjen në veten tuaj ose të tjerët, planifikoni situata të paparashikuara dhe gjeni kohë për të diskutuar dhe rikuperuar pas periudhave të vështira.",
      high: "Një rezultat më i lartë mund t'ju bëjë të vini re mbingarkesën herët dhe të kërkoni mbështetje përpara se burimet të mbarojnë. Nëse presioni shkakton ngrirje ose konfuzion, zvogëloni kërkesat e njëkohshme, përsëritni hapat e parë paraprakisht dhe përdorni një plan të thjeshtë të shkruar kur stresi është i lartë."
    },
    'E.1': {
      low: 'Një rezultat më i ulët mund të mbështesë pavarësinë dhe një rreth të vogël, selektiv social. Nëse rezerva ngatërrohet me mosinteresimin ose pengon formimin e marrëdhënieve të dobishme, sinjalizoni ngrohtësinë në mënyrë eksplicite dhe mbani disa pika të rregullta kontakti.',
      high: 'Një rezultat më i lartë mund të bëjë që raporti, besimi dhe lidhjet e reja të vijnë lehtësisht. Nëse dashamirësia çon në përkushtim të tepërt ose besim përpara se të fitohet, nxitoni vetë-zbulimin, verifikoni pretendimet e rëndësishme dhe lini hapësirë ​​për të thënë jo.'
    },
    'E.2': {
      low: 'Një rezultat më i ulët mund të sigurojë fokus, rehati me vetminë dhe më pak varësi nga stimulimi i grupit. Nëse vetmia kthehet në izolim ose grupet bëhen gjithnjë e më të vështira, zgjidhni mbledhje më të vogla dhe planifikoni kohën e rikuperimit në vend që të shmangni kontaktin fare.',
      high: 'Një rezultat më i lartë mund të sjellë energji në grupe dhe të ndihmojë në krijimin e vrullit social. Nëse kompania largon punën e përqendruar ose e bën vetminë të pakëndshme, mbrojeni kohën e pandërprerë dhe praktikoni dëgjimin pa pasur nevojë të mbani ndërveprimin në lëvizje.'
    },
    'E.3': {
      low: 'Një rezultat më i ulët mund të krijojë hapësirë për dëgjim, bashkëpunim dhe udhëheqje të njerëzve të tjerë. Nëse nevojat ose ekspertiza juaj mbeten të padukshme, përgatitni një fjali të qartë, bëni një kërkesë të drejtpërdrejtë ose flisni një herë afër fillimit të diskutimit.',
      high: 'Një rezultat më i lartë mund të ndihmojë një grup të marrë vendime dhe të japë drejtim kur të tjerët hezitojnë. Nëse merrni shumë hapësirë, kërkoni pikëpamje të kundërta, prisni përpara se të përgjigjeni dhe bëni pronësinë të qartë në vend që të supozoni marrëveshje.'
    },
    'E.4': {
      low: 'Një rezultat më i ulët mund të mbështesë një ritëm të pangutur dhe vëmendje të qëndrueshme pa lëvizje të vazhdueshme. Nëse puna e rëndësishme vonohet vazhdimisht, zgjidhni një numër të vogël prioritetesh dhe jepini atyre afate të dukshme ose blloqe kohore.',
      high: 'Një rezultat më i lartë mund të krijojë vrull dhe një kapacitet të fortë për veprim. Nëse aktiviteti bëhet i mbingarkuar ose i ngarkuar pa përparim, dalloni lëvizjen nga rezultatet dhe caktimin e programeve dhe rikuperimin po aq qëllimisht sa detyrat.'
    },
    'E.5': {
      low: 'Një rezultat më i ulët mund të favorizojë sigurinë, stabilitetin dhe kënaqësinë pa stimulim intensiv. Nëse shmangia e risive ngushton zgjedhjet tuaja, provoni eksperimente të vogla, të kthyeshme, rreziqet e të cilave dihen paraprakisht.',
      high: 'Një rezultat më i lartë mund të mbështesë guximin, eksplorimin dhe kënaqësinë e përvojave të gjalla. Nëse mërzia nxit rrezik të panevojshëm, vendosni kufij përpara se të rritet eksitimi dhe kërkoni stimulim në mjedise ku përmbahen anat negative.'
    },
    'E.6': {
      low: 'Një rezultat më i ulët mund të sjellë seriozitet dhe një ton realist kur optimizmi do të ndihej i rremë. Nëse vlerësimi ose ngrohtësia mbeten të fshehura, thuajeni qartë dhe krijoni raste të vogla për kënaqësi në vend që të prisni që ndjenja pozitive të shfaqet vetë.',
      high: "Një rezultat më i lartë mund të rrisë moralin e grupit dhe t'i bëjë përvojat pozitive të lehta për t'u vënë re. Nëse gëzimi kalon mbi dhimbjen ose rrezikun, më parë pranoni atë që është e vështirë, pastaj kërkoni shpresën pa mohuar faktet."
    },
    'O.1': {
      low: 'Një rezultat më i ulët mund të mbështesë të menduarit konkret dhe vëmendjen ndaj asaj që është praktike dhe e vëzhgueshme. Nëse përgjigjet e njohura shpërndajnë mundësi më të mira, krijoni disa alternativa përpara se të vlerësoni se cila është realiste.',
      high: 'Një rezultat më i lartë mund të mbështesë kreativitetin, simulimin mendor dhe lidhjet origjinale. Nëse idetë mbeten në ëndrra me sy të hapur ose shpërndajnë vëmendjen, kapini ato, zgjidhni një dhe kthejeni atë në provën më të vogël të prekshme.'
    },
    'O.2': {
      low: 'Një rezultat më i ulët mund të mbajë vëmendjen te funksioni, qartësia dhe dobia e drejtpërdrejtë. Nëse përvoja estetike ose bukuria restauruese neglizhohet vazhdimisht, provoni ato në mënyra të shkurtra, me presion të ulët dhe vini re se çfarë vërtet ju tërheq vëmendjen.',
      high: 'Një rezultat më i lartë mund të mprehë ndjeshmërinë ndaj formës, bukurisë dhe detajeve delikate. Nëse standardet estetike konsumojnë shumë kohë ose tejkalojnë funksionin, së pari përcaktoni kufizimet praktike dhe vendosni se ku ia vlen vërtet përsosja.'
    },
    'O.3': {
      low: "Një rezultat më i ulët mund të mbështesë qetësinë dhe vendimet që janë më pak të ndikuara nga gjendja shpirtërore e momentit. Nëse ndjenjat bëhen të vështira për t'u identifikuar ose sinjalet e njerëzve të tjerë mungojnë, ndaloni për një kontroll të shkurtër të trupit dhe emocioneve përpara se të vendosni se çfarë nevojitet.",
      high: 'Një rezultat më i lartë mund të mbështesë ndërgjegjësimin emocional, ndjeshmërinë dhe një jetë të brendshme të nuancuar. Nëse ndjenjat bëhen dërrmuese ose diktojnë vendime, emërtojeni emocionin, lëreni të qetësohet dhe dalloni atë që ndjeni nga ajo që tregojnë provat.'
    },
    'O.4': {
      low: 'Një rezultat më i ulët mund të mbështesë vazhdimësinë, zotërimin dhe rutinat e besueshme. Nëse rutina bëhet e ngurtë ose frika nga risia, futni një ndryshim të vogël, të kthyeshëm duke e mbajtur të njohur pjesën tjetër të strukturës.',
      high: 'Një rezultat më i lartë mund të mbështesë përshtatshmërinë dhe të mësuarit përmes eksplorimit. Nëse risia krijon paqëndrueshmëri ose angazhime të papërfunduara, mbani disa spiranca të panegociueshme për kohën, paratë dhe përgjegjësitë.'
    },
    'O.5': {
      low: 'Ky aspekt ka të bëjë me interesin për idetë komplekse dhe abstrakte, jo për inteligjencën apo IQ. Një rezultat më i ulët mund të favorizojë vendime praktike; nëse idetë e panjohura hidhen poshtë shumë shpejt, pyesni se cilat prova do të ndryshonin mendjen tuaj dhe mësoni vetëm atë që kërkon vendimi.',
      high: 'Një rezultat më i lartë mund të mbështesë analizën, kuriozitetin dhe rehatinë me kompleksitet. Nëse të menduarit kthehet në debat të pafund ose paralizë analize, përcaktoni kriterin e vendimit dhe afatin përpara se të eksploroni më tej.'
    },
    'O.6': {
      low: 'Një rezultat më i ulët mund të ruajë traditat e dobishme, pritshmëritë e përbashkëta dhe vazhdimësinë sociale. Nëse konventa mbetet e padiskutueshme ose përjashton perspektivat përkatëse, rishikoni arsyen e rregullit dhe pyesni se kush preket prej tij.',
      high: 'Një rezultat më i lartë mund të mbështesë shqyrtimin kritik të normave dhe reformën konstruktive. Nëse risia trajtohet si automatikisht më e mirë, provoni ndryshimet me hapa të vegjël dhe ruani pjesët e praktikës ekzistuese që ende funksionojnë.'
    },
    'A.1': {
      low: "Një rezultat më i ulët mund t'ju ndihmojë të vini re mospërputhjen dhe të mbroni veten kur aksionet janë të larta. Nëse dyshimi bllokon bashkëpunimin, kalibroni besimin në vend që ta jepni ose ta ndaloni atë menjëherë: filloni me angazhime të vogla dhe përditësoni nga provat.",
      high: 'Një rezultat më i lartë mund ta bëjë më të lehtë hapjen dhe bashkëpunimin. Nëse mirëbesimi ju lë të hapur ndaj shfrytëzimit, verifikoni pretendimet me aksione të larta, bëjini të qarta pritshmëritë dhe mbani kufijtë edhe me njerëzit që ju pëlqejnë.'
    },
    'A.2': {
      low: 'Një rezultat më i ulët mund të mbështesë taktin, negocimin dhe privatësinë strategjike. Nëse krijon manipulim ose paqartësi, dalloni një kufi legjitim nga mashtrimi dhe bëni zotime në gjuhën që personi tjetër mund të verifikojë.',
      high: 'Një rezultat më i lartë mund të ndërtojë besueshmërinë përmes drejtpërdrejtë dhe transparencës. Nëse ndershmëria bëhet troç ose e tepërt, kombinoni të vërtetën me kohën, rëndësinë dhe kujdesin për mënyrën se si jepet.'
    },
    'A.3': {
      low: 'Një rezultat më i ulët mund të mbrojë kohën e kufizuar dhe të inkurajojë autonominë e njerëzve të tjerë. Nëse të tjerët ju shohin si të padisponueshëm ose reciprociteti gërryhet, zgjidhni një formë ndihme që mund ta mbështesni dhe shprehni qartë qëllimin e saj.',
      high: 'Një rezultat më i lartë mund të krijojë mbështetje të fortë dhe një ndjenjë komuniteti. Nëse ndihma shkakton djegie ose i pengon të tjerët të marrin përgjegjësi, pyesni nëse dëshironi ndihmë, bini dakord për kufijtë dhe mos e bëni çdo nevojë detyrimin tuaj.'
    },
    'A.4': {
      low: 'Një rezultat më i ulët mund të ndihmojë në mbrojtjen e standardeve dhe adresimin e drejtpërdrejtë të konfliktit. Nëse mosmarrëveshja bëhet fërkime kronike, ndani nevojat e panegociueshme nga opsionet fleksibël dhe përdorni kritere të përbashkëta në vend të forcës.',
      high: 'Një rezultat më i lartë mund të de-përshkallëzojë konfliktin dhe të mbrojë bashkëpunimin. Nëse harmonia blihet duke pranuar nevojat e rëndësishme, tregoni qartë kufirin dhe lejoni mosmarrëveshje të respektueshme pa e trajtuar atë si dështim në marrëdhënie.'
    },
    'A.5': {
      low: "Një rezultat më i ulët mund të mbështesë vetë-advokimin dhe t'i bëjë kontributet të dukshme. Nëse besimi dëgjohet si epërsi ose puna e të tjerëve zhduket, bëni pretendime me prova dhe ndani me saktësi kredinë.",
      high: 'Një rezultat më i lartë mund të mbajë vëmendjen në punë dhe ta bëjë më të lehtë bashkëpunimin. Nëse kontributi juaj shpërfillet në mënyrë të përsëritur, përshkruani atë që keni bërë dhe efektin e saj faktikisht; vetë-përfaqësimi i saktë nuk është arrogancë.'
    },
    'A.6': {
      low: "Një rezultat më i ulët mund të mbështesë objektivitetin dhe vendimet e vështira që nuk mund t'i kënaqin të gjithë. Nëse njerëzit e përjetojnë vendimin si të ftohtë ose nëse kostoja e tij njerëzore humbet, pyesni se kush e mban barrën dhe shoqëroni arsyetimin me një shpjegim të qartë.",
      high: 'Një rezultat më i lartë mund të mbështesë dhembshurinë dhe njohjen e shpejtë të vuajtjes. Nëse ndjeshmëria bëhet rraskapitëse ose tejkalon faktet përkatëse, vendosni kufij emocionalë dhe verifikoni se çfarë ndihme do të përmirësojë në të vërtetë situatën.'
    },
    'C.1': {
      low: 'Një rezultat më i ulët mund të inkurajojë kujdes, përgatitje dhe kërkim të ndihmës kur është e nevojshme. Nëse dyshimi për veten ju pengon të filloni, ndani detyrën në copa të vogla dhe përdorni hapat e përfunduar si dëshmi të aftësisë.',
      high: 'Një rezultat më i lartë mund të mbështesë pronësinë, këmbënguljen dhe besimin në zgjidhjen e problemeve. Nëse besimi bëhet mbivlerësim ose ngurrim për të kërkuar ndihmë, kryeni një para-vdekje të shkurtër dhe kërkoni nga një person i ditur të sfidojë planin.'
    },
    'C.2': {
      low: 'Një rezultat më i ulët mund të mbështesë fleksibilitetin dhe improvizimin kur planet ndryshojnë. Nëse çrregullimi kushton kohë ose bën që detyrimet të zhduken, krijoni vetëm disa shtëpi, lista dhe rutina të besueshme për gjërat që kanë më shumë rëndësi.',
      high: "Një rezultat më i lartë mund ta bëjë punën të qartë, të besueshme dhe të lehtë për t'u rifilluar. Nëse rendi kthehet në perfeksionizëm ose ndryshimi bëhet shqetësues, përcaktoni se çfarë është mjaft e mirë dhe lini një plogështi të qëllimshme në plan."
    },
    'C.3': {
      low: 'Një rezultat më i ulët mund të ndihmojë në pyetjen e rregullave dhe përshtatjen e detyrimeve me kontekstin. Nëse të tjerët nuk mund të mbështeten në angazhimet tuaja ose qoshet etike janë prerë, bëni premtime të qarta dhe rilidhni çdo detyrim me arsyen që ka rëndësi.',
      high: "Një rezultat më i lartë mund të mbështesë integritetin dhe ndjekjen e besueshme. Nëse detyra krijon ngurtësi ose një ngarkesë të paqëndrueshme, renditni detyrimet konkurruese dhe rinegocioni ato herët në vend që t'i mbani në heshtje të gjitha."
    },
    'C.4': {
      low: 'Një rezultat më i ulët mund të mbrojë ekuilibrin dhe të lejojë kënaqësinë pa konkurrencë të vazhdueshme. Nëse bëhet stagnim ose lë të papërdorura aftësitë e çmuara, zgjidhni një objektiv personalisht kuptimplotë dhe përcaktoni momentin e ardhshëm të vogël.',
      high: 'Një rezultat më i lartë mund të mbështesë zotërimin dhe përpjekjet e qëndrueshme drejt qëllimeve kërkuese. Nëse vetëvlerësimi lidhet me rezultatin ose përpjekja bëhet e djegur, përcaktoni se çfarë vlen si e mjaftueshme dhe mbroni pushimin dhe rolet që nuk lidhen me arritjet.'
    },
    'C.5': {
      low: 'Një rezultat më i ulët mund të mbështesë spontanitetin dhe reagimin ndaj ndryshimit të prioriteteve. Nëse fillimi ose mbarimi është vazhdimisht i vështirë, zvogëloni hapin e parë, ndryshoni mjedisin dhe shtoni një shenjë të dukshme ose përgjegjësinë e një personi tjetër.',
      high: 'Një rezultat më i lartë mund të mbështesë ndjekjen edhe kur motivimi është i ulët. Nëse këmbëngulja vazhdon për të kaluar kthimet në rënie, vendosni rregulla ndalimi dhe rishikoni nëse qëllimi ende e meriton përpjekjen.'
    },
    'C.6': {
      low: "Një rezultat më i ulët mund të mbështesë shpejtësinë, eksperimentimin dhe veprimin me informacion jo të plotë. Nëse përsëriten gabime të parandalueshme, shtoni një pauzë të shkurtër dhe listë kontrolli përpara vendimeve që janë të kushtueshme ose të vështira për t'u kthyer.",
      high: 'Një rezultat më i lartë mund të mbështesë analizën e rrezikut dhe vendime të kujdesshme dhe me cilësi të lartë. Nëse kujdesi shkakton humbje të kohës ose përsiatje të përsëritur, caktoni një afat vendimi dhe preferoni një pilot të kthyeshëm në vend të pritjes për siguri.'
    }
  },
  sr: {
    'N.1': {
      low: 'Нижи резултат може вам помоћи да останете смирени и спречите да несигурност преузме контролу. Ако вас та смиреност наведе да потцените ризике или да се премало припремите, наведите највероватнији ризик и један резервни ризик пре важне одлуке.',
      high: 'Већи резултат може вам помоћи да рано уочите ризике и знакове упозорења. Ако вам брига стално заокупља пажњу, одвојите оно што је могуће од вероватног, поставите ограничење времена за бригу и изаберите једну конкретну следећу акцију; потражите стручну подршку ако упорно ремети свакодневни живот.'
    },
    'N.2': {
      low: 'Нижи резултат може вас учинити уједначеним и тешко провоцирати. Ако сте склони сузбијању легитимног беса или остављате границе ненаглашеним, рано наведите проблем и опишите понашање које желите да промените.',
      high: 'Већи резултат вам може помоћи да брзо откријете неправедност и одбраните оно што је важно. Ако бес ескалира сукобе или покреће импулсивне реакције, застаните пре него што одговорите и наведите специфично понашање, утицај и потребу уместо да нападате особу.'
    },
    'N.3': {
      low: 'Нижи резултат често подржава емоционални опоравак и стабилну енергију. Ако тугу друге особе или вашу сопствену потребу за одмором због тога можете лако превидети, успорите, саслушајте и признајте губитак пре него што покушате да га решите.',
      high: 'Већи резултат може учинити разочарање и губитак посебно израженим, што може открити шта вам је дубоко важно. Стално лоше расположење није нешто што морате третирати само као особину: одржавајте рутине и задатке малима, останите повезани са људима од поверења и тражите професионалну подршку када потраје или угрози свакодневни живот.'
    },
    'N.4': {
      low: 'Нижи резултат може учинити да се друштвене ситуације осећају опуштено и да смањи страх од пресуде. Ако вам понекад недостаје како сте наишли, тражите конкретне повратне информације и проверите одговор друге особе уместо да претпостављате да је све добро слетело.',
      high: 'Већи резултат може вас учинити пажљивим према друштвеним очекивањима и реакцијама других људи. Ако се самонадгледање претвори у размишљање или избегавање, пребаците пажњу на заједнички задатак, постепено приступајте тешким ситуацијама и судите о интеракцији на основу доказа, а не замишљеног испитивања.'
    },
    'N.5': {
      low: 'Нижи резултат подржава уздржаност и способност одлагања задовољства. Ако уздржаност постане претерана контрола или оставља премало простора за уживање, намерно направите простор за безопасну спонтаност уместо да чекате док притисак не порасте.',
      high: 'Већи резултат може донети спонтаност, апетит и уживање у непосредном искуству. Ако пориви више пута стварају трошкове због којих ћете касније пожалити, додајте трење пре него што предузмете акцију: сачекајте, уклоните окидаче, поставите ограничења унапред или учините жељени дугорочни избор лакшим за постизање.'
    },
    'N.6': {
      low: 'Нижи резултат може вам помоћи да размишљате јасно и да се понашате постојано под притиском. Ако вас то доведе до потцењивања напрезања у себи или другима, планирајте непредвиђене ситуације и одвојите време за испитивање и опоравак након захтевних периода.',
      high: 'Већи резултат може учинити да рано приметите преоптерећење и потражите подршку пре него што ресурси понестане. Ако притисак изазива смрзавање или конфузију, смањите истовремене захтеве, увежбајте првих неколико корака унапред и користите једноставан писани план када је стрес висок.'
    },
    'E.1': {
      low: 'Нижи резултат може подржати независност и мали, селективан друштвени круг. Ако се резерва погрешно сматра незаинтересованошћу или спречава стварање корисних односа, експлицитно дајте знак топлине и одржавајте неколико редовних тачака контакта.',
      high: 'Већи резултат може олакшати повезивање, поверење и нове везе. Ако пријатељство води до превелике посвећености или поверења пре него што се заслужи, убрзајте самооткривање, проверите важне тврдње и оставите простора да кажете не.'
    },
    'E.2': {
      low: 'Нижи резултат може пружити фокус, удобност са самоћом и мање зависности од групне стимулације. Ако се самоћа претвори у изолацију или групе постају све теже, бирајте мања окупљања и планирајте време опоравка уместо да потпуно избегавате контакт.',
      high: 'Већи резултат може донети енергију групама и помоћи у стварању друштвеног замаха. Ако компанија истискује фокусирани рад или чини самоћу непријатном, заштитите време без прекида и вежбајте слушање без потребе да одржавате интеракцију у покрету.'
    },
    'E.3': {
      low: 'Нижи резултат може направити простор за слушање, сарадњу и вођство других људи. Ако ваше потребе или стручност остану невидљиви, припремите једну јасну реченицу, упутите директан захтев или говорите једном пред почетак дискусије.',
      high: 'Виши резултат може помоћи групи у доношењу одлука и дати смјер када други оклевају. Ако заузимате превише простора, тражите различита мишљења, сачекајте пре него што одговорите и експлицитно изразите власништво уместо да претпостављате сагласност.'
    },
    'E.4': {
      low: 'Нижи резултат може подржати несметан темпо и сталну пажњу без сталног кретања. Ако се важан посао више пута одлаже, изаберите мали број приоритета и дајте им видљиве рокове или временске блокове.',
      high: 'Већи резултат може створити замах и јак капацитет за акцију. Ако активност постане преоптерећена или заузета без напретка, разликовати кретање од исхода и планирајте бафере и опоравак исто тако намерно као и задатке.'
    },
    'E.5': {
      low: 'Нижи резултат може фаворизовати сигурност, стабилност и задовољство без интензивне стимулације. Ако избегавање новина сужава ваш избор, покушајте са малим, реверзибилним експериментима чији су ризици унапред познати.',
      high: 'Виши резултат може подржати храброст, истраживање и уживање у живописним искуствима. Ако досада изазива непотребан ризик, поставите границе пре него што узбуђење порасте и потражите стимулацију у окружењима у којима је лоша страна садржана.'
    },
    'E.6': {
      low: 'Нижи резултат може донети озбиљност и реалистичан тон када би се оптимизам осећао лажним. Ако уважавање или топлина остану скривени, реците то јасно и створите мале прилике за уживање уместо да очекујете да ће се позитивно осећање појавити само од себе.',
      high: 'Виши резултат може подићи морал групе и учинити позитивна искуства лаким за уочавање. Ако ведрина прекрива бол или ризик, прво признајте шта је тешко, а затим тражите наду без порицања чињеница.'
    },
    'O.1': {
      low: 'Нижи резултат може подржати конкретно размишљање и пажњу на оно што је практично и видљиво. Ако познати одговори истискују боље могућности, генеришите неколико алтернатива пре него што процените која је реална.',
      high: 'Виши резултат може подржати креативност, менталну симулацију и оригиналне везе. Ако идеје остају у сањарењу или распршују пажњу, ухватите их, изаберите једну и претворите је у најмањи опипљиви тест.'
    },
    'O.2': {
      low: 'Нижи резултат може задржати пажњу на функцији, јасноћи и директној корисности. Ако се естетско искуство или ресторативна лепота стално занемарује, пробајте то на кратке начине под ниским притиском и приметите шта заиста привлачи вашу пажњу.',
      high: 'Виши резултат може да изоштри осетљивост на форму, лепоту и суптилне детаље. Ако естетски стандарди одузимају превише времена или превазилазе функцију, прво дефинишите практична ограничења и одлучите где се префињеност заиста исплати.'
    },
    'O.3': {
      low: 'Нижи резултат може подржати смиреност и одлуке које мање утичу на расположење тренутка. Ако осећања постане тешко препознати или се пропусте сигнали других људи, направите кратку проверу тела и емоција пре него што одлучите шта је потребно.',
      high: 'Виши резултат може подржати емоционалну свест, емпатију и нијансирани унутрашњи живот. Ако осећања постану неодољива или диктирају одлуке, наведите емоцију, дозволите јој да се смири и разликујете оно што осећате од онога што докази показују.'
    },
    'O.4': {
      low: 'Нижи резултат може подржати континуитет, мајсторство и поуздане рутине. Ако рутина постане крутост или страх од новости, уведите једну малу, реверзибилну промену док остатак структуре одржавате познатим.',
      high: 'Већи резултат може подржати прилагодљивост и учење кроз истраживање. Ако новост ствара нестабилност или недовршене обавезе, задржите неколико сидара о којима се не може преговарати у погледу времена, новца и одговорности.'
    },
    'O.5': {
      low: 'Овај аспект се тиче интересовања за сложене и апстрактне идеје, а не за интелигенцију или коефицијент интелигенције. Нижи резултат може фаворизовати практичне одлуке; ако се непознате идеје пребрзо одбаце, питајте који доказ би вам променио мишљење и научите само оно што одлука захтева.',
      high: 'Виши резултат може подржати анализу, радозналост и удобност са сложеношћу. Ако се размишљање претвори у бескрајну дебату или парализу анализе, дефинишите критеријум одлуке и рок пре даљег истраживања.'
    },
    'O.6': {
      low: 'Нижи резултат може сачувати корисну традицију, заједничка очекивања и друштвени континуитет. Ако конвенција остане неупитна или искључује релевантне перспективе, поново погледајте разлог за правило и питајте на кога оно утиче.',
      high: 'Виши резултат може подржати критичко испитивање норми и конструктивну реформу. Ако се новост третира као аутоматски боља, тестирајте промене у малим корацима и сачувајте делове постојеће праксе који и даље функционишу.'
    },
    'A.1': {
      low: 'Нижи резултат може вам помоћи да приметите недоследност и заштитите се када су улози високи. Ако сумња блокира сарадњу, калибришите поверење уместо да га дајете или ускраћујете одједном: почните са малим обавезама и ажурирајте на основу доказа.',
      high: 'Већи резултат може олакшати отвореност и сарадњу. Ако вас добра вера оставља отвореним за експлоатацију, проверите тврдње са високим улозима, изразите очекивања и држите границе чак и са људима који вам се свиђају.'
    },
    'A.2': {
      low: 'Нижи резултат може подржати такт, преговоре и стратешку приватност. Ако ствара манипулацију или двосмисленост, разликовати легитимну границу од обмане и обавезати се на језику који друга особа може да провери.',
      high: 'Већи резултат може изградити поузданост кроз директност и транспарентност. Ако искреност постане грубост или претеривање, комбинујте истину са временом, релевантношћу и бригом о томе како се она испоручује.'
    },
    'A.3': {
      low: 'Нижи резултат може заштитити ограничено време и подстаћи аутономију других људи. Ако вас други доживе као недоступне или реципроцитет нарушава, изаберите облик помоћи који можете одржати и јасно наведите њен обим.',
      high: 'Већи резултат може створити снажну подршку и осећај заједнице. Ако помоћ изазива сагоревање или спречава друге да преузму одговорност, питајте да ли је помоћ потребна, договорите се о границама и немојте сваку потребу учинити својом обавезом.'
    },
    'A.4': {
      low: 'Нижи резултат може помоћи у одбрани стандарда и директном рјешавању сукоба. Ако неслагање постане хронична трења, одвојите потребе о којима се не може преговарати од флексибилних опција и користите заједничке критеријуме, а не силу.',
      high: 'Већи резултат може деескалирати конфликт и заштитити сарадњу. Ако се хармонија купује признавањем важних потреба, јасно наведите границу и дозволите неслагање с поштовањем, а да то не третирате као неуспех односа.'
    },
    'A.5': {
      low: 'Нижи резултат може подржати самозаступање и учинити доприносе видљивим. Ако се самопоуздање чује као супериорност или рад других нестане, износите тврдње са доказима и прецизно поделите заслуге.',
      high: 'Већи резултат може задржати пажњу на послу и олакшати сарадњу. Ако се ваш допринос више пута занемарује, опишите шта сте урадили и какав је чињенични ефекат; тачно самозаступање није ароганција.'
    },
    'A.6': {
      low: 'Нижи резултат може подржати објективност и тешке одлуке које не могу задовољити све. Ако људи доживе одлуку као хладну или су њени људски трошкови промашени, питајте ко сноси терет и упарите образложење са јасним објашњењем.',
      high: 'Виши резултат може подржати саосећање и брзо препознавање патње. Ако емпатија постане исцрпљена или превазиђе релевантне чињенице, поставите емоционалне границе и проверите која помоћ ће заиста побољшати ситуацију.'
    },
    'C.1': {
      low: 'Нижи резултат може подстаћи опрез, припрему и тражење помоћи када је потребна. Ако вас сумња у себе спречава да почнете, разбијте задатак на мале делове и користите завршене кораке као доказ способности.',
      high: 'Виши резултат може подржати власништво, упорност и самопоуздање у решавању проблема. Ако самопоуздање постане прецењивање или невољкост да тражите помоћ, покрените кратак пре-мортем и замолите упућену особу да оспори план.'
    },
    'C.2': {
      low: 'Нижи резултат може подржати флексибилност и импровизацију када се планови промене. Ако неред кошта времена или чини да обавезе нестану, направите само неколико поузданих домова, спискова и рутина за ствари које су најважније.',
      high: 'Већи резултат може учинити посао јасним, поузданим и лаким за наставак. Ако се ред претвори у перфекционизам или промена постане узнемирујућа, дефинишите шта је довољно добро и оставите намерно опуштање у плану.'
    },
    'C.3': {
      low: 'Нижи резултат може помоћи у постављању питања правила и прилагођавању обавеза контексту. Ако се други не могу ослонити на ваше обавезе или су етички углови прекинути, дајте обећања експлицитна и поново повежите сваку обавезу са разлогом који је важан.',
      high: 'Виши резултат може подржати интегритет и поуздано праћење. Ако дужност ствара крутост или неодржив терет, рангирајте конкурентне обавезе и преговарајте о њима раније уместо да их све тихо носите.'
    },
    'C.4': {
      low: 'Нижи резултат може заштитити равнотежу и омогућити задовољство без сталне конкуренције. Ако стагнира или остави цењене способности неискоришћене, изаберите лично значајну мету и дефинишите следећу малу прекретницу.',
      high: 'Виши резултат може подржати мајсторство и трајни напор ка захтевним циљевима. Ако самопоштовање постане везано за резултат или напор постане сагоревање, дефинишите шта се рачуна као довољно и заштитите одмор и улоге које нису повезане са постигнућем.'
    },
    'C.5': {
      low: 'Нижи резултат може подржати спонтаност и одговор на промену приоритета. Ако је почетак или завршетак више пута тежак, смањите први корак, промените окружење и додајте видљиви знак или одговорност друге особе.',
      high: 'Виши резултат може подржати праћење чак и када је мотивација ниска. Ако се упорност настави након опадајућих приноса, поставите правила заустављања и проверите да ли циљ и даље заслужује труд.'
    },
    'C.6': {
      low: 'Нижи резултат може да подржи брзину, експериментисање и акцију са непотпуним информацијама. Ако се грешке које се могу спречити понове, додајте кратку паузу и контролну листу пре одлука које су скупе или које је тешко поништити.',
      high: 'Виши резултат може подржати анализу ризика и пажљиве, висококвалитетне одлуке. Ако опрез проузрокује промашено време или поновљено размишљање, одредите рок за доношење одлуке и дајте предност реверзибилном пилоту него чекању на сигурност.'
    }
  },
  ss: {
    'N.1': {
      low: 'Emaphuzu laphansi angakusita kutsi uhlale upholile futsi ungaciniseki kutsi ungatsatsi. Nangabe loko kuthula kukuholela ekutsi ubukele phansi bungoti nobe ulungiselele kancane kakhulu, bhala bungoti lobungahle bube khona kanye nekubuya emuva lokukodwa ngaphambi kwekutsi wente sincumo lesibalulekile.',
      high: 'Emaphuzu laphakeme angakusita kutsi ubone bungoti kanye netimphawu tekwecwayisa kusenesikhatsi. Nangabe kukhatsateka kuphindzaphindza kudla kunaka kwakho, hlukanisa loko lokungenteka naloko lokungenteka, beka umkhawulo wesikhatsi sekukhatsateka, bese ukhetsa sento sinye lesicinile lesilandzelako; funa lusito lwebungcweti nangabe kuphikelela kuphazamisa imphilo yamalanga onkhe.'
    },
    'N.2': {
      low: 'Emaphuzu laphansi angakwenta utfukutsele ngendlela lefanako futsi kube matima kukucasula. Nangabe uvame kucindzetela intfukutselo lesemtsetfweni nobe ushiye imingcele ingakashiwo, ligama lenkinga kusenesikhatsi bese uchaza kutiphatsa lofuna kushintjwe.',
      high: 'Emaphuzu laphakeme angakwenta usheshe ubone kungabi nebulungisa futsi uvikele loko lokubalulekile. Nangabe intfukutselo ikhulisa kungcubutana nobe ibangela kutsi umuntfu asabele ngekushesha, yima ngaphambi kwekutsi uphendvule bese usho kutiphatsa lokutsite, umtselela, nesidzingo esikhundleni sekuhlasela lomuntfu.'
    },
    'N.3': {
      low: 'Emaphuzu laphansi avame kusekela kululama kwemiva kanye nemandla lacinile. Nangabe kwenta kudvumateka kwalomunye umuntfu nobe sidzingo sakho sekuphumula kube melula kutsi ungakunaki, yehlisa lizinga, ulalele futsi uvume kutsi ulahlekelwe ngaphambi kwekutsi wetame kukucatulula.',
      high: 'Emaphuzu laphakeme angenta kudvumateka nekulahlekelwa kuvele kakhulu, lokungaveta loko lokubaluleke kakhulu kuwe. Kuphikelela kwesimo lesiphansi akusiyo intfo lokufanele uyitsatse njengesici: gcina imikhuba nemisebenti incane, hlala uxhumekile nebantfu lobetsembekile, futsi ufune kusekelwa ngebungcweti uma kuhlala noma kukhubata imphilo yemalanga onkhe.'
    },
    'N.4': {
      low: 'Emaphuzu laphansi angenta timo tetenhlalakahle titive tikhululekile futsi tinciphise kwesaba kwehlulelwa. Uma ngalesinye sikhatsi uphutsa indlela lohlangana ngayo, cela imphendvulo letsite bese uhlola imphendvulo yalomunye umuntfu kunekutsi ucabange kutsi konkhe kufike kahle.',
      high: 'Emaphuzu laphakeme angakwenta unake lokulindzelwe ngumphakatsi kanye nendlela labanye bantfu labaphendvula ngayo. Uma kutigadza kugucuka kube kucabanga noma kugwema, shintsha kunaka emsebentini lowabelwana ngawo, sondzela etimeni letimatima kancane kancane, bese wehlulela kusebentisana ngebufakazi kunekuhlola lokucabangako.'
    },
    'N.5': {
      low: 'Emaphuzu laphansi asekela kutibamba kanye nemandla ekubambezeleka kweneliseka. Nangabe kutibamba kuba kulawula kakhulu nobe kushiya indzawo lencane kakhulu yekutijabulisa, ngamabomu yenta sikhala sekutivelela lokungenabungoti esikhundleni sekulindza kuze kube ngulapho kucindzeteleka kwakha.',
      high: 'Emaphuzu laphakeme angaletsa kutivelela, indlala, kanye nekujabulela lokuhlangenwe nako lokusheshako. Nangabe kuncenga lokuphindzaphindziwe kwenta tindleko lotisola ngato ngemuva kwesikhatsi, yengeta kungevani ngaphambi kwekutsi wente: lindza, susa tintfo letikubangela, beka imikhawulo kusengaphambili, nobe yenta kukhetsa lokufiswako kwesikhatsi lesidze kube lula kukufinyelela.'
    },
    'N.6': {
      low: 'Emaphuzu laphansi angakusita ucabange kahle futsi wente ngekuciniseka nangabe ucindzetelekile. Uma kukuholela ekubukeleni phansi kucindzeteleka kuwe noma kulabanye, hlela tintfo letingahle tibe khona futsi utfole sikhatsi sekutsi ucoce futsi ululame ngemuva kwetikhatsi letifunako.',
      high: 'Emaphuzu laphakeme angenta kutsi ubone kulayishwa kakhulu kusenesikhatsi futsi ufune kusekelwa ngaphambi kwekutsi tinsita tiphelele. Nangabe kucindzeteleka kubangela kubandza nobe kudideka, nciphisa tintfo letifunwa ngaso sonkhe sikhatsi, prakthiza tinyatselo tekucala letimbalwa kusengaphambili, bese usebentisa luhlelo lolubhaliwe lolulula nangabe kucindzeteleka kusetulu.'
    },
    'E.1': {
      low: 'Emaphuzu laphansi angasekela kutimela kanye nembutsano lomncane, lokhetsiwe wetenhlalo. Uma ngabe kugcinwa kweliphutsa ngekungabi nenshisekelo noma kugcina budlelwane lobulusito bungakhiwa, khombisa imfutfo ngalokucacile futsi ugcine emaphuzu lambalwa ekutsintsana njalo.',
      high: 'Emaphuzu laphakeme angenta rapport, kwetsemba, kanye nekuxhumana lokusha kufike kalula. Nangabe bungani buholela ekutibopheteleni kakhulu nobe ekwetsembeni ngaphambi kwekutsi kuzuzwe, sheshisa kutiveta, cinisekisa timangalo letibalulekile, bese ushiya indzawo yekutsi cha.'
    },
    'E.2': {
      low: 'Emaphuzu laphansi anganiketa kugcila, indvudvuto ngekuba wedwa, kanye nekuncika kancane ekuvuseleleni kwelicembu. Uma kuba wedwa kugucuka kube kuhlala wedwa noma emacembu aya ngekuba matima, khetsa imibutsano lemincane bese uhlela sikhatsi sekululama kunekugwema kuchumana ngalokuphelele.',
      high: 'Emaphuzu laphakeme angaletsa emandla emacenjini futsi asite ekwakheni umfutfo wetenhlalo. Nangabe inkampani icindzetela umsebenti logcile nobe yenta kutsi kuba wedwa kungakhululeki, vikela sikhatsi lesingaphazamiseki futsi utifundzise kulalela ngaphandle kwekudzinga kugcina kusebentisana kuhamba.'
    },
    'E.3': {
      low: 'Emaphuzu laphansi angenta indzawo yekulalela, kubambisana, kanye nebuholi balabanye bantfu. Nangabe tidzingo takho nobe bungcweti bakho buhlala bungabonakali, lungiselela umusho munye locacile, yenta sicelo lesicondzile, nobe ukhulume kanye ngasekucaleni kwengcoco.',
      high: 'Emaphuzu laphakeme angasita licembu kutsi lente tincumo futsi linikete sicondziso nangabe labanye bangabata. Nangabe utsatsa sikhala lesikhulu kakhulu, cela imibono lephikisanako, lindza ngaphambi kwekutsi uphendvule, futsi wente bunikazi bucace kunekutsi ucabange kutsi uyavumelana.'
    },
    'E.4': {
      low: 'Emaphuzu laphansi angasekela sivinini lesingaphutfumi kanye nekunakwa lokuchubekako ngaphandle kwekunyakata njalo. Nangabe umsebenti lobalulekile ubambezeleka ngekuphindzaphindza, khetsa linani lelincane letintfo letibalulekile bese ubanika imikhawulo lebonakalako nobe emabhulokhi esikhatsi.',
      high: 'Emaphuzu laphakeme angadala umfutfo kanye nemandla lacinile ekutsatsa sinyatselo. Uma umsebenti uba ngumtfwalo lomkhulu noma matasatasa ngaphandle kwenchubekelembili, yehlukanisa kunyakata kusuka emiphumeleni kanye neluhlelo lwema-buffers kanye nekululama ngenhloso njengemisebenti.'
    },
    'E.5': {
      low: 'Emaphuzu laphansi angatsandza kuphepha, kusimamisa, kanye nekweneliseka ngaphandle kwekuvuselela kakhulu. Nangabe kugwema tintfo letinsha kunciphisa lokukhetsako, zama kuhlola lokuncane, lokubuyiselwa emuva lokubungoti bakho kwatiwa kusengaphambili.',
      high: 'Emaphuzu laphakeme angasekela sibindzi, kuhlola, kanye nekujabulela lokuhlangenwe nako lokucacile. Uma sizungu siholela engotini lengadzingeki, beka imikhawulo ngaphambi kwekutsi injabulo ikhuphuke bese ufuna kuvuselela etindzaweni lapho khona lokubi kucuketfwe khona.'
    },
    'E.6': {
      low: 'Emaphuzu laphansi angaletsa kubaluleka kanye nethoni sibili lapho litsemba lingativa lingemanga. Nangabe kubonga nobe kufutfumala kuhlala kufihlekile, kusho ngalokucacile futsi udale tikhatsi letincane tekujabula esikhundleni sekulindzela kutsi umuva lomuhle uvele ngekwawo.',
      high: 'Emaphuzu laphakeme angaphakamisa kutiphatsa kwelicembu futsi ente lokuhlangenwe nako lokuhle kube lula kukunaka. Nangabe kujabula kugcizelela buhlungu nobe ingoti, vuma kucala kutsi yini lelukhuni, bese ufuna litsemba ngaphandle kwekuphika emaciniso.'
    },
    'O.1': {
      low: 'Emaphuzu laphansi angasekela kucabanga lokucinile kanye nekunaka loko lokusebentako nalokubonakalako. Nangabe timphendvulo letijwayelekile ticindzetela ematfuba lancono, yenta letinye tindlela letinyenti ngaphambi kwekutsi uhlole kutsi nguyiphi lekhonakalako.',
      high: 'Emaphuzu laphakeme angasekela kucamba, kulingisa kwengcondvo, kanye nekuxhumana kwasekucaleni. Nangabe imibono ihlala emaphusheni emini nobe isakate kunaka, yibambe, ukhetse yinye, bese uyayigucula ibe sivivinyo lesincane kakhulu lesibonakalako.'
    },
    'O.2': {
      low: 'Emaphuzu laphansi angagcina kunakwa emsebentini, kucaca, kanye nekusebenta ngalokucondzile. Uma ngabe lokuhlangenwe nako kwebuhle noma buhle lobuvuselelako bunganakwa njalo, busampula ngetindlela letimfisha, letinekucindzeteleka lokuphansi bese unaka kutsi yini lekubamba kunaka kwakho mbamba.',
      high: 'Emaphuzu laphakeme angalola kuzwela kwesimo, buhle, kanye nemininingwane lengabonakali. Uma emazinga ebuhle adla sikhatsi lesinyenti kakhulu noma acitsa umsebenti, chaza imikhawulo lesebentako kucala bese uncuma kutsi kucwengisiswa kufanelekile kuphi mbamba.'
    },
    'O.3': {
      low: 'Emaphuzu laphansi angasekela kuthula kanye netincumo letingagucuki kakhulu ngesimo salomzuzu. Nangabe kuba matima kuyibona imiva nobe timphawu talabanye bantfu tingaboni, yima kafishane uhlole umtimba nemiva ngaphambi kwekutsi uncume kutsi yini ledzingekako.',
      high: 'Emaphuzu laphakeme angasekela kucaphela imiva, kuzwelana, kanye nemphilo lengekhatsi le-nuanced. Nangabe imiva ikucindzetela nobe ikucondzisa tincumo, ligama lemiva, uvumele kutsi ihlale, futsi wehlukanise loko lokuvako naloko lokukhonjiswa bufakazi.'
    },
    'O.4': {
      low: 'Emaphuzu laphansi angasekela kuchubeka, buciko, kanye nemikhuba letsembekile. Uma inhlalakahle iba lukhuni noma kwesaba lokusha, yetfula lushintjo lunye loluncane, lolubuyela emuva ngesikhatsi ugcina sonkhe sakhiwo sijwayelekile.',
      high: 'Emaphuzu laphakeme angasekela kuvumelana nesimo kanye nekufundza ngekuhlola. Uma ngabe lokusha kudala kungasimami noma kutibophelela lokungakapheli, gcina tikhonkwane letimbalwa letingabonisani ngesikhatsi, imali, kanye nemitfwalo.'
    },
    'O.5': {
      low: 'Lesici siphatselene nekutsandza imibono leyinkimbinkimbi nalengabonakali, hhayi kuhlakanipha noma i-IQ. Emaphuzu laphansi angatsandza tincumo letisebentako; nangabe imibono longatayeleki ilahlwa ngekushesha, buta kutsi ngubuphi bufakazi lobungashintja umcondvo wakho futsi ufundze kuphela kutsi sincumo sidzinga ini.',
      high: 'Emaphuzu laphakeme angasekela kuhlatiya, kulangatelela, kanye nendvudvuto ngekuyinkimbinkimbi. Uma kucabanga kuphenduka inkhulumomphikiswano lengapheli noma kuhlatiya kukhubateka, chaza indlela yesincumo kanye nemncamulajucu ngaphambi kwekuhlola kabanti.'
    },
    'O.6': {
      low: 'Emaphuzu laphansi angagcina emasiko lalusito, lokulindzelwe ngekwabelana, kanye nekuchubeka kwetenhlalo. Nangabe umhlangano ungabutwa nobe ungafaki imibono lefanele, phindze uvakashele sizatfu semtsetfo bese ubuta kutsi ngubani lotsintsekako ngawo.',
      high: 'Emaphuzu laphakeme angasekela kuhlolwa lokubucayi kwemigomo kanye nekuguculwa lokwakhako. Uma busha buphatfwa njengalobuncono ngekuzenzakalela, hlola tingucuko ngetinyatselo letincane bese ugcina tincenye temkhuba lokhona letisasebenta.'
    },
    'A.1': {
      low: 'Emaphuzu laphansi angakusita kutsi ubone kungahambisani futsi utivikele nangabe tigaba tiphakeme. Uma tinsolo tivimbela kubambisana, linganisa kwetsemba esikhundleni sekuniketa noma kukugodla konkhe ngasikhatsi sinye: cala ngekutibophelela lokuncane bese uvuselela kusuka ebufakazini.',
      high: 'Emaphuzu laphakeme angenta kube lula kuvuleka nekubambisana. Nangabe kukholwa lokuhle kukushiya uvulekile kutsi usetjentiswe kabi, cinisekisa timangalo letisetulu, yenta lokulindzelekile kucace, futsi ugcine imingcele ngisho nasebantfu lobatsandzako.'
    },
    'A.2': {
      low: 'Emaphuzu laphansi angasekela buciko, kubonisana, kanye nebumfihlo bemasu. Uma kudala kuphatfwa kabi noma kungacaci kahle, yehlukanisa umncele losemtsetfweni ekukhohliseni bese wenta tibopho ngelulwimi lomunye umuntfu langalucinisekisa.',
      high: 'Emaphuzu laphakeme angakha kwetsembeka ngekucondzisa kanye nekuba sobala. Nangabe kwetsembeka kuba kukhuluma ngalokucondzile nobe kwabelana kakhulu, hlanganisa liciniso nesikhatsi, kufaneleka, kanye nekunakekela indlela lelikhulunywa ngayo.'
    },
    'A.3': {
      low: 'Emaphuzu laphansi angavikela sikhatsi lesincane futsi akhutsate kutimela kwalabanye bantfu. Nangabe labanye bakubona njengalongatfolakali nobe kubuyisana kuyaphela, khetsa luhlobo lwelusito longalugcina futsi usho bubanti balo ngalokucacile.',
      high: 'Emaphuzu laphakeme angakha kusekelwa lokucinile kanye nemuva wemmango. Nangabe kusita kubangela kuphelelwa ngemandla nobe kuvimbela labanye kutsi batsatse umtfwalo, buta kutsi lusito luyafunwa yini, vumelanani ngemikhawulo, futsi ungatenti tonkhe tidzingo tibe sibopho sakho.'
    },
    'A.4': {
      low: 'Emaphuzu laphansi angasita ekuvikeleni emazinga kanye nekubhekana nekungcubutana ngalokucondzile. Uma kungavumelani kuba kucabana lokungapheli, hlukanisa tidzingo letingabonisani kusuka etintfweni letigucugucukako bese usebentisa indlela leyabelwana ngayo kunekutsi uphocelele.',
      high: 'Emaphuzu laphakeme angacedza kungcubutana futsi avikele kubambisana. Nangabe kuvumelana kutsengwa ngekuvumela tidzingo letibalulekile, chaza umncele ngalokucacile futsi uvumele kungavumelani ngenhlonipho ngaphandle kwekukutsatsa njengekwehluleka kwebudlelwane.'
    },
    'A.5': {
      low: 'Emaphuzu laphansi angasekela kutimela futsi ente iminikelo ibonakale. Uma kutetsemba kuvakala njengebukhulu noma umsebenti walabanye uyanyamalala, yenta timangalo letinebufakazi bese wabelana ngesikweleti ngalokucondzile.',
      high: 'Emaphuzu laphakeme angagcina kunakwa emsebentini futsi ente kubambisana kube lula. Nangabe umnikelo wakho ungatsatfwa njengalobalulekile ngekuphindzaphindza, chaza loko lokwentile kanye nemphumela wako ngekweliciniso; kutimelela ngendlela lenembile akusiko kutigcabha.'
    },
    'A.6': {
      low: 'Emaphuzu laphansi angasekela kutsatsa tintfo ngendlela lefanele kanye netincumo letimatima letingeke tenetise wonkhe umuntfu. Nangabe bantfu bahlangabetana nesincumo njengalesibandzako nobe tindleko tayo tebantfu tiphutselwa, buta kutsi ngubani lothwele umtfwalo bese ubhangqa kucabanga nenchazelo lecacile.',
      high: 'Emaphuzu laphakeme angasekela luvelo kanye nekubona ngekushesha kuhlupheka. Nangabe kuzwelana kuba kudzinwa nobe kudlula emaciniso lafanele, beka imingcele yemiva futsi ucinisekise kutsi nguluphi lusito lolutawenta simo sibe ncono mbamba.'
    },
    'C.1': {
      low: 'Emaphuzu laphansi angakhutsata kucaphela, kulungiselela, kanye nekucela lusito nangabe ludzingeka. Nangabe kutingabata kukuvimbela kutsi ungacali, hlukanisa lomsebenti ube tincetu letincane bese usebentisa tinyatselo leticedziwe njengebufakazi bemandla.',
      high: 'Emaphuzu laphakeme angasekela bunikati, kuphikelela, kanye nekwetsemba ekusombululeni tinkinga. Uma kutetsemba kuba kulinganisa kakhulu noma kungafuni kufuna lusito, gijima pre-mortem lemfisha bese ucela umuntfu lonelwati kutsi aphikise luhlelo.'
    },
    'C.2': {
      low: 'Emaphuzu laphansi angasekela kugucugucuka kanye nekutentela uma tinhlelo tishintja. Nangabe kuphazamiseka kubita sikhatsi nobe kwenta tibopho tinyamalale, dala emakhaya lambalwa latsembekile, tinhlu, kanye netindlela tekusebenta tetintfo letibaluleke kakhulu.',
      high: 'Emaphuzu laphakeme angenta umsebenti ucace, wetsembeke futsi kube melula kuwucala kabusha. Nangabe kuhleleka kugucuka kube kuphelela nobe lushintjo lucindzetela, chaza kutsi yini lekahle ngalokwenele bese ushiya kuphumula ngemabomu eluhlelweni.'
    },
    'C.3': {
      low: 'Emaphuzu laphansi angasita imitsetfo yemibuto kanye nekuvumelanisa tibopho nesimo. Uma labanye bangakhoni kwetsembela etibopheteleni takho noma emakhona ekutiphatsa ancunywa, yenta tetsembiso tibe sobala bese uphindze uhlanganise sibopho ngasinye nesizatfu sekutsi sibalulekile.',
      high: 'Emaphuzu laphakeme angasekela bucotfo kanye nekulandzelela lokutsembekile. Uma umsebenti udala kucina noma umtfwalo longasimeme, beka tibopho letincintisanako bese uyatibonisana kabusha kusenesikhatsi esikhundleni sekutitfwala tonkhe buthule.'
    },
    'C.4': {
      low: 'Emaphuzu laphansi angavikela ibhalansi futsi avumele kweneliseka ngaphandle kwekuncintisana njalo. Uma ngabe kuba kumile noma kushiya emakhono labalulekile angasetjentiswa, khetsa lisu lelinenshokutsi kuwe bese uchaza lizinga lelincane lelilandzelako.',
      high: 'Emaphuzu laphakeme angasekela buciko kanye nemzamo lochubekako wekufinyelela imigomo lefunako. Uma ngabe kutitsatsa njengalobalulekile kuboshelwa emkhicitweni noma umtamo uba kushisa, chaza kutsi yini lebalwa njengaleyenele futsi uvikele kuphumula kanye netindzima letingakaphatselani nekuphumelelisa.'
    },
    'C.5': {
      low: 'Emaphuzu laphansi angasekela kutivelela kanye nekuphendvula ekugucukeni kwetintfo letibalulekile. Nangabe kucala nobe kucedza kumatima ngekuphindzaphindza, nciphisa sinyatselo sekucala, shintja simo, bese wengeta umkhondo lobonakalako nobe kutiphendvulela kwalomunye umuntfu.',
      high: 'Emaphuzu laphakeme angasekela kulandzelela ngisho noma sisusa siphansi. Uma kuphikelela kuchubeka ngetulu kwekubuya lokunciphako, beka imitsetfo yekumisa bese ubuyeketa kutsi lomgomo usafanelwe yini umzamo.'
    },
    'C.6': {
      low: 'Emaphuzu laphansi angasekela sivinini, kulinga, kanye nesento ngelulwati lolungakapheleli. Nangabe emaphutsa langavikeleka aphindzaphindzeka, yengeta sikhatsi lesifishane sekuma kanye neluhlu lwekuhlola ngaphambi kwetincumo letibitako nobe letimatima kutibuyisela emuva.',
      high: 'Emaphuzu laphakeme angasekela kuhlatiya bungoti kanye netincumo leticophelelako, letisezingeni leliphakeme. Uma kucaphela kubangela kuphutsa sikhatsi noma kuphindzaphindza kwekucabanga, beka umncamulajucu wesincumo bese unconota umshayeli lobuyela emuva kunekulindza kuciniseka.'
    }
  },
  sv: {
    'N.1': {
      low: 'En lägre poäng kan hjälpa dig att hålla dig lugn och förhindra att osäkerheten tar över. Om det lugnet leder till att du underskattar risker eller förbereder dig för lite, lista den mest sannolika risken och ett fallback innan ett viktigt beslut.',
      high: 'En högre poäng kan hjälpa dig att upptäcka risker och varningssignaler tidigt. Om oro upprepade gånger förtär din uppmärksamhet, separera det som är möjligt från det som är troligt, sätt en gräns för orostid och välj en konkret nästa åtgärd; söka professionellt stöd om det ihållande stör det dagliga livet.'
    },
    'N.2': {
      low: 'En lägre poäng kan göra dig jämn och svår att provocera. Om du tenderar att undertrycka legitim ilska eller lämna gränser opåverkade, namnge problemet tidigt och beskriv det beteende du vill ändra.',
      high: 'En högre poäng kan göra dig snabb att upptäcka orättvisa och försvara det som är viktigt. Om ilska eskalerar konflikter eller driver impulsiva reaktioner, pausa innan du svarar och ange det specifika beteendet, påverkan och behovet istället för att attackera personen.'
    },
    'N.3': {
      low: 'En lägre poäng stöder ofta emotionell återhämtning och stadig energi. Om det gör en annan persons sorg eller ditt eget behov av vila lätt att förbise, sakta ner, lyssna och erkänn förlusten innan du försöker lösa den.',
      high: 'En högre poäng kan göra besvikelse och förlust särskilt framträdande, vilket kan avslöja vad som är djupt viktigt för dig. Ihållande lågt humör är inte något du bara måste behandla som en egenskap: håll rutiner och uppgifter små, håll kontakten med pålitliga människor och sök professionellt stöd när det varar eller försämrar det dagliga livet.'
    },
    'N.4': {
      low: 'En lägre poäng kan få sociala situationer att kännas avslappnade och minska rädslan för att döma. Om du ibland missar hur du stöter på, be om specifik feedback och kontrollera den andra personens svar istället för att anta att allt landade bra.',
      high: 'En högre poäng kan göra dig uppmärksam på sociala förväntningar och andra människors reaktioner. Om självövervakning förvandlas till idisslande eller undvikande, flytta uppmärksamheten till den delade uppgiften, närma dig svåra situationer gradvis och bedöm interaktionen utifrån bevis snarare än inbillad granskning.'
    },
    'N.5': {
      low: 'En lägre poäng stöder återhållsamhet och förmågan att fördröja tillfredsställelse. Om återhållsamhet blir överkontroll eller lämnar för lite utrymme för njutning, skapa medvetet utrymme för ofarlig spontanitet istället för att vänta tills trycket byggs upp.',
      high: 'En högre poäng kan ge spontanitet, aptit och glädje av omedelbar upplevelse. Om drifter upprepade gånger skapar kostnader som du senare ångrar, lägg till friktion innan du agerar: vänta, ta bort triggers, sätt gränser i förväg eller gör det önskade långsiktiga valet lättare att nå.'
    },
    'N.6': {
      low: 'En lägre poäng kan hjälpa dig att tänka klart och agera stadigt under press. Om det leder till att du underskattar påfrestningar hos dig själv eller andra, planera oförutsedda händelser och ta dig tid att debriefa och återhämta dig efter krävande perioder.',
      high: 'En högre poäng kan göra att du märker överbelastning tidigt och söker support innan resurserna tar slut. Om tryck orsakar frysning eller förvirring, minska samtidiga krav, repetera de första stegen i förväg och använd en enkel skriftlig plan när stressen är hög.'
    },
    'E.1': {
      low: 'En lägre poäng kan stödja självständighet och en liten, selektiv umgängeskrets. Om reserv misstas för ointresse eller hindrar användbara relationer från att bildas, signalera värme explicit och upprätthåll några regelbundna kontaktpunkter.',
      high: 'En högre poäng kan göra rapport, förtroende och nya kontakter lätt. Om vänlighet leder till överengagemang eller förtroende innan det är förtjänat, sätt fart på självutlämnandet, verifiera viktiga påståenden och lämna utrymme att säga nej.'
    },
    'E.2': {
      low: 'En lägre poäng kan ge fokus, tröst med ensamhet och mindre beroende av gruppstimulering. Om ensamhet övergår i isolering eller grupper blir allt svårare, välj mindre sammankomster och planera återhämtningstiden istället för att undvika kontakt helt och hållet.',
      high: 'En högre poäng kan ge energi till grupper och bidra till att skapa social fart. Om företaget tränger ut fokuserat arbete eller gör ensamheten obekväm, skydda oavbruten tid och öva på att lyssna utan att behöva hålla interaktionen igång.'
    },
    'E.3': {
      low: 'En lägre poäng kan ge plats åt lyssnande, samarbete och andras ledarskap. Om dina behov eller expertis förblir osynliga, förbered en tydlig mening, gör en direkt begäran eller tala en gång nära diskussionens början.',
      high: 'En högre poäng kan hjälpa en grupp att fatta beslut och ge riktning när andra tvekar. Om du tar upp för mycket utrymme, be om avvikande åsikter, vänta innan du svarar och gör ägarskapet tydligt istället för att anta enighet.'
    },
    'E.4': {
      low: 'En lägre poäng kan stödja ett lugnt tempo och ihållande uppmärksamhet utan konstant rörelse. Om viktigt arbete försenas upprepade gånger, välj ett litet antal prioriteringar och ge dem synliga deadlines eller tidsblock.',
      high: 'En högre poäng kan skapa fart och en stark handlingsförmåga. Om aktiviteten blir överbelastning eller upptagen utan framsteg, särskilj rörelse från resultat och schemalägg buffertar och återhämtning lika medvetet som uppgifter.'
    },
    'E.5': {
      low: 'En lägre poäng kan gynna säkerhet, stabilitet och tillfredsställelse utan intensiv stimulering. Om att undvika nyhet begränsar dina val, prova små, reversibla experiment vars risker är kända i förväg.',
      high: 'En högre poäng kan stödja mod, utforskning och njutning av levande upplevelser. Om tristess leder till onödiga risker, sätt gränser innan spänningen stiger och sök stimulans i miljöer där nackdelen är begränsad.'
    },
    'E.6': {
      low: 'En lägre poäng kan ge allvar och en realistisk ton när optimism skulle kännas falsk. Om uppskattning eller värme förblir dold, säg det rent ut och skapa små tillfällen för njutning istället för att förvänta sig att positiv känsla ska dyka upp av sig själv.',
      high: 'En högre poäng kan lyfta gruppmoralen och göra positiva upplevelser lätta att lägga märke till. Om glädje glädjer över smärta eller risk, erkänn det som är svårt först, leta sedan efter hopp utan att förneka fakta.'
    },
    'O.1': {
      low: 'En lägre poäng kan stödja konkret tänkande och uppmärksamhet på vad som är praktiskt och observerbart. Om bekanta svar tränger undan bättre möjligheter, generera flera alternativ innan du utvärderar vilket som är realistiskt.',
      high: 'En högre poäng kan stödja kreativitet, mental simulering och ursprungliga kopplingar. Om idéer finns kvar i dagdrömmar eller sprider uppmärksamhet, fånga dem, välj en och förvandla den till det minsta påtagliga testet.'
    },
    'O.2': {
      low: 'En lägre poäng kan hålla uppmärksamheten på funktion, tydlighet och direkt användbarhet. Om estetisk upplevelse eller återställande skönhet konsekvent försummas, prova det på korta, lågtryckssätt och lägg märke till vad som verkligen håller din uppmärksamhet.',
      high: 'En högre poäng kan skärpa känsligheten för form, skönhet och subtila detaljer. Om estetiska standarder tar för mycket tid eller åsidosätter funktion, definiera de praktiska begränsningarna först och bestäm var förfining verkligen är värt det.'
    },
    'O.3': {
      low: 'En lägre poäng kan stödja lugn och beslut som är mindre påverkade av stundens stämning. Om känslor blir svåra att identifiera eller andra människors signaler missas, pausa för en kort kropps- och känslorkontroll innan du bestämmer dig för vad som behövs.',
      high: 'En högre poäng kan stödja känslomässig medvetenhet, empati och ett nyanserat inre liv. Om känslor blir överväldigande eller dikterar beslut, namnge känslan, låt den lugna sig och särskilj vad du känner från vad bevisen visar.'
    },
    'O.4': {
      low: 'En lägre poäng kan stödja kontinuitet, behärskning och pålitliga rutiner. Om rutinen blir stel eller rädsla för nyhet, inför en liten, reversibel förändring samtidigt som du håller resten av strukturen bekant.',
      high: 'En högre poäng kan stödja anpassningsförmåga och lärande genom utforskning. Om nyhet skapar instabilitet eller oavslutade åtaganden, behåll ett fåtal icke-förhandlingsbara ankare för tid, pengar och ansvar.'
    },
    'O.5': {
      low: 'Denna aspekt gäller intresse för komplexa och abstrakta idéer, inte intelligens eller IQ. En lägre poäng kan gynna praktiska beslut; om okända idéer avfärdas för snabbt, fråga vilka bevis som skulle ändra dig och ta reda på bara vad beslutet kräver.',
      high: 'En högre poäng kan stödja analys, nyfikenhet och komfort med komplexitet. Om tänkande förvandlas till ändlös debatt eller analysförlamning, definiera beslutskriteriet och deadline innan du utforskar vidare.'
    },
    'O.6': {
      low: 'En lägre poäng kan bevara användbara traditioner, delade förväntningar och social kontinuitet. Om konventionen inte ifrågasätts eller utesluter relevanta perspektiv, gå tillbaka till orsaken till regeln och fråga vem som påverkas av den.',
      high: 'En högre poäng kan stödja kritisk granskning av normer och konstruktiv reform. Om nyhet behandlas som automatiskt bättre, testa förändringar i små steg och bevara de delar av befintlig praxis som fortfarande fungerar.'
    },
    'A.1': {
      low: 'En lägre poäng kan hjälpa dig att märka inkonsekvens och skydda dig själv när insatserna är höga. Om misstanke blockerar samarbete, kalibrera förtroende istället för att bevilja eller undanhålla allt på en gång: börja med små åtaganden och uppdatera från bevis.',
      high: 'En högre poäng kan underlätta öppenhet och samarbete. Om god tro lämnar dig öppen för exploatering, verifiera påståenden med hög insats, gör förväntningar tydliga och håll gränser även med människor du gillar.'
    },
    'A.2': {
      low: 'En lägre poäng kan stödja takt, förhandling och strategisk integritet. Om det skapar manipulation eller tvetydighet, särskilj en legitim gräns från bedrägeri och gör åtaganden i språket som den andra personen kan verifiera.',
      high: 'En högre poäng kan bygga tillförlitlighet genom direkthet och transparens. Om ärlighet blir rakt på sak eller överdelar, kombinera sanning med timing, relevans och omsorg om hur den levereras.'
    },
    'A.3': {
      low: 'En lägre poäng kan skydda begränsad tid och uppmuntra andra människors autonomi. Om andra upplever dig som otillgänglig eller ömsesidigheten urholkas, välj en form av hjälp du kan upprätthålla och ange dess omfattning tydligt.',
      high: 'En högre poäng kan skapa starkt stöd och en känsla av gemenskap. Om hjälp orsakar utbrändhet eller hindrar andra från att ta ansvar, fråga om hjälp önskas, kom överens om gränser och gör inte alla behov till din skyldighet.'
    },
    'A.4': {
      low: 'En lägre poäng kan hjälpa till att försvara standarder och ta itu med konflikter direkt. Om oenighet blir kronisk friktion, separera icke-förhandlingsbara behov från flexibla alternativ och använd gemensamma kriterier snarare än våld.',
      high: 'En högre poäng kan deeskalera konflikter och skydda samarbetet. Om harmoni köps genom att medge viktiga behov, ange gränsen tydligt och tillåt respektfull oenighet utan att behandla det som misslyckande i relationen.'
    },
    'A.5': {
      low: 'En lägre poäng kan stödja självförespråkande och synliggöra bidrag. Om förtroende hörs som överlägsenhet eller andras arbete försvinner, gör påståenden med bevis och dela krediter exakt.',
      high: 'En högre poäng kan hålla uppmärksamheten på arbetet och underlätta samarbetet. Om ditt bidrag upprepade gånger förbises, beskriv vad du gjorde och dess faktiska effekt; korrekt självrepresentation är inte arrogans.'
    },
    'A.6': {
      low: 'En lägre poäng kan stödja objektivitet och svåra beslut som inte kan tillfredsställa alla. Om människor upplever beslutet som kallt eller om dess mänskliga kostnad missas, fråga vem som bär bördan och para ihop resonemanget med en tydlig förklaring.',
      high: 'En högre poäng kan stödja medkänsla och snabbt erkännande av lidande. Om empati blir utmattning eller åsidosätter relevanta fakta, sätt känslomässiga gränser och verifiera vilken hjälp som faktiskt kommer att förbättra situationen.'
    },
    'C.1': {
      low: 'En lägre poäng kan uppmuntra till försiktighet, förberedelse och att be om hjälp när det behövs. Om självtvivel hindrar dig från att börja, dela upp uppgiften i små bitar och använd genomförda steg som bevis på förmåga.',
      high: 'En högre poäng kan stödja ägarskap, uthållighet och förtroende för att lösa problem. Om självförtroende blir överskattning eller ovilja att söka hjälp, kör en kort förundersökning och be en kunnig person att utmana planen.'
    },
    'C.2': {
      low: 'En lägre poäng kan stödja flexibilitet och improvisation när planer ändras. Om oordning kostar tid eller gör att skyldigheter försvinner, skapa bara ett fåtal pålitliga hem, listor och rutiner för de saker som betyder mest.',
      high: 'En högre poäng kan göra arbetet tydligt, pålitligt och lätt att återuppta. Om ordning och reda övergår i perfektionism eller förändring blir besvärande, definiera vad som är bra nog och lämna medvetet slack i planen.'
    },
    'C.3': {
      low: 'En lägre poäng kan hjälpa till att ifrågasätta regler och anpassa skyldigheter till sammanhang. Om andra inte kan lita på dina åtaganden eller om etiska hörn skärs, gör löften tydliga och koppla varje förpliktelse till anledningen till att det är viktigt.',
      high: 'En högre poäng kan stödja integritet och pålitlig uppföljning. Om plikt skapar stelhet eller en ohållbar belastning, rangordna konkurrerande skyldigheter och omförhandla dem tidigt istället för att bära dem alla i tysthet.'
    },
    'C.4': {
      low: 'En lägre poäng kan skydda balansen och tillåta tillfredsställelse utan konstant konkurrens. Om det blir stagnation eller lämnar värdefulla förmågor oanvända, välj ett personligt meningsfullt mål och definiera nästa lilla milstolpe.',
      high: 'En högre poäng kan stödja behärskning och uthållig ansträngning mot krävande mål. Om självvärde blir knutet till resultat eller ansträngning blir utbränd, definiera vad som räknas som tillräckligt och skydda vila och roller som inte är relaterade till prestation.'
    },
    'C.5': {
      low: 'En lägre poäng kan stödja spontanitet och lyhördhet för ändrade prioriteringar. Om det är svårt att starta eller avsluta upprepade gånger, krymp det första steget, byt miljö och lägg till en synlig signal eller en annan persons ansvar.',
      high: 'En högre poäng kan stödja uppföljning även när motivationen är låg. Om uthålligheten fortsätter efter minskande avkastning, sätt stoppregler och se över om målet fortfarande förtjänar ansträngningen.'
    },
    'C.6': {
      low: 'En lägre poäng kan stödja hastighet, experiment och handling med ofullständig information. Om fel som kan förebyggas återkommer, lägg till en kort paus och checklista före beslut som är kostsamma eller svåra att vända.',
      high: 'En högre poäng kan stödja riskanalys och noggranna beslut av hög kvalitet. Om försiktighet orsakar missad timing eller upprepat idisslande, ställ in en beslutsdeadline och föredra en reversibel pilot framför att vänta på säkerhet.'
    }
  },
  th: {
    'N.1': {
      low: 'คะแนนที่ต่ำกว่าสามารถช่วยให้คุณสงบสติอารมณ์และป้องกันไม่ให้ความไม่แน่นอนเข้ามาครอบงำ หากความสงบนั้นทำให้คุณประเมินความเสี่ยงต่ำเกินไปหรือเตรียมตัวน้อยเกินไป ให้ระบุความเสี่ยงที่เป็นไปได้มากที่สุดและทางเลือกหนึ่งประการก่อนการตัดสินใจครั้งสำคัญ',
      high: 'คะแนนที่สูงขึ้นสามารถช่วยให้คุณสังเกตเห็นความเสี่ยงและสัญญาณเตือนได้ตั้งแต่เนิ่นๆ หากความกังวลซ้ำแล้วซ้ำเล่ากินความสนใจของคุณ ให้แยกสิ่งที่เป็นไปได้ออกจากสิ่งที่เป็นไปได้ กำหนดเวลาจำกัดความกังวล และเลือกการดำเนินการถัดไปที่เป็นรูปธรรม ขอความช่วยเหลือจากผู้เชี่ยวชาญหากมันรบกวนชีวิตประจำวันอย่างต่อเนื่อง'
    },
    'N.2': {
      low: 'คะแนนที่ต่ำกว่าสามารถทำให้คุณอารมณ์ร้อนและยั่วยุได้ยาก หากคุณมีแนวโน้มที่จะระงับความโกรธที่ชอบด้วยกฎหมายหรือปล่อยให้ขอบเขตไม่ระบุ ให้ตั้งชื่อปัญหาตั้งแต่เนิ่นๆ และอธิบายพฤติกรรมที่คุณต้องการเปลี่ยนแปลง',
      high: 'คะแนนที่สูงกว่าจะทำให้คุณตรวจพบความไม่ยุติธรรมและปกป้องสิ่งที่สำคัญได้อย่างรวดเร็ว ถ้าความโกรธเพิ่มความขัดแย้งหรือกระตุ้นให้เกิดปฏิกิริยาหุนหันพลันแล่น ให้หยุดก่อนตอบสนองและระบุพฤติกรรม ผลกระทบ และความจำเป็นเฉพาะเจาะจง แทนที่จะโจมตีบุคคลนั้น'
    },
    'N.3': {
      low: 'คะแนนที่ต่ำกว่ามักจะสนับสนุนการฟื้นตัวทางอารมณ์และพลังงานที่มั่นคง ถ้ามันทำให้ความเศร้าของคนอื่นหรือความต้องการพักผ่อนของคุณถูกมองข้าม ช้าลง รับฟัง และรับรู้ถึงการสูญเสียก่อนที่จะพยายามแก้ไข',
      high: 'คะแนนที่สูงกว่าอาจทำให้เกิดความผิดหวังและความสูญเสียโดยเฉพาะ ซึ่งสามารถเปิดเผยสิ่งที่สำคัญกับคุณได้อย่างลึกซึ้ง อารมณ์ต่ำอย่างต่อเนื่องไม่ใช่สิ่งที่คุณต้องมองว่าเป็นเพียงลักษณะนิสัย: รักษากิจวัตรและงานให้เล็กลง ติดต่อกับคนที่ไว้ใจได้ และขอความช่วยเหลือจากมืออาชีพเมื่ออารมณ์ดังกล่าวคงอยู่หรือบั่นทอนชีวิตประจำวัน'
    },
    'N.4': {
      low: 'คะแนนที่ต่ำกว่าจะทำให้สถานการณ์ทางสังคมรู้สึกผ่อนคลายและลดความกลัวการตัดสิน หากคุณพลาดโอกาสที่จะพบเจอ ลองขอความคิดเห็นที่เฉพาะเจาะจงและตรวจสอบคำตอบของอีกฝ่าย แทนที่จะคิดว่าทุกอย่างไปได้ด้วยดี',
      high: 'คะแนนที่สูงกว่าสามารถทำให้คุณใส่ใจต่อความคาดหวังทางสังคมและปฏิกิริยาของผู้อื่น หากการตรวจสอบตนเองกลายเป็นการครุ่นคิดหรือการหลีกเลี่ยง ให้เปลี่ยนความสนใจไปที่งานที่ใช้ร่วมกัน ค่อยๆ เข้าใกล้สถานการณ์ที่ยากลำบาก และตัดสินปฏิสัมพันธ์ด้วยหลักฐาน แทนที่จะจินตนาการถึงการพิจารณาอย่างรอบคอบ'
    },
    'N.5': {
      low: 'คะแนนที่ต่ำกว่าจะสนับสนุนความยับยั้งชั่งใจและความสามารถในการชะลอความพึงพอใจ หากการบังคับควบคุมกลายเป็นการควบคุมมากเกินไปหรือปล่อยให้มีที่ว่างสำหรับความบันเทิงน้อยเกินไป ให้จงใจสร้างที่ว่างเพื่อความเป็นธรรมชาติที่ไม่เป็นอันตราย แทนที่จะรอจนกว่าแรงกดดันจะก่อตัวขึ้น',
      high: 'คะแนนที่สูงกว่าสามารถนำมาซึ่งความเป็นธรรมชาติ ความอยากอาหาร และความเพลิดเพลินจากประสบการณ์ทันที หากสิ่งกระตุ้นซ้ำแล้วซ้ำเล่าสร้างความเสียหายให้คุณเสียใจในภายหลัง ให้เพิ่มความขัดแย้งก่อนดำเนินการ: รอ ขจัดสิ่งกระตุ้น กำหนดขีดจำกัดล่วงหน้า หรือทำให้ตัวเลือกระยะยาวที่ต้องการเข้าถึงได้ง่ายขึ้น'
    },
    'N.6': {
      low: 'คะแนนที่ต่ำกว่าสามารถช่วยให้คุณคิดได้อย่างชัดเจนและดำเนินการภายใต้ความกดดันได้อย่างมั่นคง หากสิ่งนี้ทำให้คุณดูแคลนความเครียดในตัวเองหรือผู้อื่นต่ำเกินไป ให้วางแผนเหตุฉุกเฉิน และจัดเวลาเพื่อซักถามและฟื้นตัวหลังจากช่วงระยะเวลาที่เรียกร้อง',
      high: 'คะแนนที่สูงกว่าจะทำให้คุณสังเกตเห็นว่ามีการใช้งานเกินพิกัดตั้งแต่เนิ่นๆ และขอความช่วยเหลือก่อนที่ทรัพยากรจะหมด หากความกดดันทำให้เย็นลงหรือสับสน ให้ลดความต้องการที่เกิดขึ้นพร้อมกัน ซ้อมขั้นตอนแรกๆ ล่วงหน้า และใช้แผนการเขียนง่ายๆ เมื่อเกิดความเครียดสูง'
    },
    'E.1': {
      low: 'คะแนนที่ต่ำกว่าสามารถสนับสนุนความเป็นอิสระและวงสังคมขนาดเล็กที่เลือกสรรได้ หากการสงวนถูกเข้าใจผิดว่าไม่สนใจหรือรักษาความสัมพันธ์ที่เป็นประโยชน์ไม่ให้ก่อตัวขึ้น ให้ส่งสัญญาณความอบอุ่นอย่างชัดเจนและรักษาจุดติดต่อเป็นประจำสองสามจุด',
      high: 'คะแนนที่สูงกว่าสามารถสร้างสายสัมพันธ์ ความไว้วางใจ และการเชื่อมต่อใหม่ๆ ได้อย่างง่ายดาย หากความเป็นมิตรนำไปสู่การผูกมัดมากเกินไปหรือความไว้วางใจก่อนที่จะได้รับ ให้รีบเปิดเผยตัวเอง ตรวจสอบคำกล่าวอ้างที่สำคัญ และเว้นช่องว่างไว้เพื่อปฏิเสธ'
    },
    'E.2': {
      low: 'คะแนนที่ต่ำกว่าสามารถให้สมาธิ ความสบายใจกับความสันโดษ และการพึ่งพาการกระตุ้นเป็นกลุ่มน้อยลง หากความสันโดษกลายเป็นความโดดเดี่ยวหรือการรวมกลุ่มกลายเป็นเรื่องยากมากขึ้น ให้เลือกการรวมกลุ่มเล็กๆ และวางแผนเวลาพักฟื้น แทนที่จะหลีกเลี่ยงการพบปะกันโดยสิ้นเชิง',
      high: 'คะแนนที่สูงกว่าสามารถนำพลังมาสู่กลุ่มและช่วยสร้างแรงผลักดันทางสังคม หากบริษัทเบียดเสียดกับงานที่มีสมาธิหรือทำให้ความสันโดษอึดอัด ให้รักษาเวลาไว้อย่างต่อเนื่องและฝึกการฟังโดยไม่จำเป็นต้องให้ปฏิสัมพันธ์ดำเนินต่อไป'
    },
    'E.3': {
      low: 'คะแนนที่ต่ำกว่าสามารถสร้างพื้นที่สำหรับการรับฟัง ความร่วมมือ และการเป็นผู้นำของผู้อื่น หากความต้องการหรือความเชี่ยวชาญของคุณยังคงมองไม่เห็น ให้เตรียมประโยคที่ชัดเจน ส่งคำขอโดยตรง หรือพูดครั้งเดียวเมื่อใกล้เริ่มการสนทนา',
      high: 'คะแนนที่สูงกว่าสามารถช่วยให้กลุ่มตัดสินใจและชี้แนะเมื่อผู้อื่นลังเล หากคุณใช้พื้นที่มากเกินไป ขอความคิดเห็นที่ไม่เห็นด้วย รอก่อนที่จะตอบ และชี้แจงความเป็นเจ้าของอย่างชัดเจน แทนที่จะถือว่าตกลง'
    },
    'E.4': {
      low: 'คะแนนที่ต่ำกว่าสามารถรองรับการก้าวที่ไม่เร่งรีบและความสนใจอย่างต่อเนื่องโดยไม่ต้องเคลื่อนไหวอย่างต่อเนื่อง หากงานสำคัญเกิดความล่าช้าซ้ำๆ ให้เลือกลำดับความสำคัญจำนวนเล็กน้อย และกำหนดกำหนดเวลาหรือช่วงเวลาที่ชัดเจน',
      high: 'คะแนนที่สูงกว่าสามารถสร้างแรงผลักดันและความสามารถในการดำเนินการที่แข็งแกร่งได้ หากกิจกรรมกลายเป็นภาระมากเกินไปหรืองานยุ่งไม่มีความคืบหน้า ให้แยกแยะการเคลื่อนไหวออกจากผลลัพธ์ และกำหนดเวลาบัฟเฟอร์และการกู้คืนโดยจงใจพอๆ กับงาน'
    },
    'E.5': {
      low: 'คะแนนที่ต่ำกว่าอาจเป็นประโยชน์ต่อความปลอดภัย ความมั่นคง และความพึงพอใจโดยไม่ต้องมีการกระตุ้นที่รุนแรง หากการหลีกเลี่ยงสิ่งแปลกใหม่ทำให้ตัวเลือกของคุณแคบลง ให้ลองทำการทดลองขนาดเล็กที่สามารถย้อนกลับได้ โดยทราบความเสี่ยงล่วงหน้า',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนความกล้าหาญ การสำรวจ และความเพลิดเพลินกับประสบการณ์ที่สดใส หากความเบื่อทำให้เกิดความเสี่ยงโดยไม่จำเป็น ให้กำหนดขอบเขตก่อนที่ความตื่นเต้นจะเกิดขึ้นและแสวงหาสิ่งกระตุ้นในสภาพแวดล้อมที่มีข้อเสียอยู่'
    },
    'E.6': {
      low: 'คะแนนที่ต่ำกว่าอาจนำมาซึ่งความจริงจังและน้ำเสียงที่สมจริง เมื่อการมองโลกในแง่ดีอาจรู้สึกว่าเป็นเท็จ หากความซาบซึ้งหรือความอบอุ่นยังคงซ่อนอยู่ ให้พูดออกมาอย่างชัดเจนและสร้างโอกาสเล็กๆ น้อยๆ เพื่อความเพลิดเพลิน แทนที่จะคาดหวังว่าความรู้สึกดีๆ จะปรากฏออกมาเอง',
      high: 'คะแนนที่สูงกว่าสามารถยกระดับขวัญกำลังใจของกลุ่มและทำให้สังเกตเห็นประสบการณ์เชิงบวกได้ง่าย หากความร่าเริงบดบังความเจ็บปวดหรือความเสี่ยง ให้ยอมรับสิ่งที่ยากก่อน แล้วมองหาความหวังโดยไม่ปฏิเสธข้อเท็จจริง'
    },
    'O.1': {
      low: 'คะแนนที่ต่ำกว่าสามารถสนับสนุนการคิดอย่างเป็นรูปธรรมและความใส่ใจต่อสิ่งที่ปฏิบัติได้จริงและสังเกตได้ หากคำตอบที่คุ้นเคยมาบดบังความเป็นไปได้ที่ดีกว่า ให้สร้างทางเลือกหลายๆ ทางเลือกก่อนที่จะประเมินว่าคำตอบใดที่เป็นจริง',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนความคิดสร้างสรรค์ การจำลองทางจิต และการเชื่อมโยงดั้งเดิม หากแนวคิดยังคงอยู่ในฝันกลางวันหรือกระจายความสนใจ ให้จับความคิดเหล่านั้น เลือกหนึ่งแนวคิด และเปลี่ยนให้เป็นแบบทดสอบที่จับต้องได้เล็กน้อยที่สุด'
    },
    'O.2': {
      low: 'คะแนนที่ต่ำกว่าสามารถให้ความสำคัญกับฟังก์ชัน ความชัดเจน และประโยชน์โดยตรงได้ หากประสบการณ์ด้านสุนทรียศาสตร์หรือความงามเชิงบูรณะถูกละเลยอยู่เสมอ ให้ลองชิมด้วยวิธีสั้นๆ ที่กดดันต่ำ และสังเกตสิ่งที่ดึงดูดความสนใจของคุณอย่างแท้จริง',
      high: 'คะแนนที่สูงกว่าสามารถเพิ่มความละเอียดอ่อนต่อรูปแบบ ความสวยงาม และรายละเอียดปลีกย่อยได้ หากมาตรฐานด้านสุนทรียศาสตร์ใช้เวลามากเกินไปหรือแทนที่ฟังก์ชัน ให้กำหนดข้อจำกัดในทางปฏิบัติก่อน และตัดสินใจว่าส่วนใดที่การปรับแต่งจะคุ้มค่าอย่างแท้จริง'
    },
    'O.3': {
      low: 'คะแนนที่ต่ำกว่าสามารถสนับสนุนความสงบและการตัดสินใจที่ได้รับผลกระทบจากอารมณ์ในขณะนั้นน้อยลง หากความรู้สึกกลายเป็นเรื่องยากที่จะระบุหรือสัญญาณของผู้อื่นหายไป ให้หยุดชั่วคราวเพื่อตรวจร่างกายและอารมณ์สั้นๆ ก่อนที่จะตัดสินใจว่าต้องการอะไร',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนการรับรู้ทางอารมณ์ ความเห็นอกเห็นใจ และชีวิตภายในที่เหมาะสมยิ่ง หากความรู้สึกท่วมท้นหรือบงการการตัดสินใจ ให้ตั้งชื่ออารมณ์ ปล่อยให้อารมณ์สงบลง และแยกแยะสิ่งที่คุณรู้สึกจากหลักฐานที่แสดง'
    },
    'O.4': {
      low: 'คะแนนที่ต่ำกว่าสามารถรองรับความต่อเนื่อง ความชำนาญ และกิจวัตรที่เชื่อถือได้ หากกิจวัตรกลายเป็นเรื่องเข้มงวดหรือกลัวสิ่งแปลกใหม่ ให้แนะนำการเปลี่ยนแปลงเล็กๆ น้อยๆ ที่สามารถย้อนกลับได้ในขณะที่ยังคงรักษาโครงสร้างที่เหลือให้คุ้นเคย',
      high: 'คะแนนที่สูงกว่าจะสนับสนุนความสามารถในการปรับตัวและการเรียนรู้ผ่านการสำรวจ หากความแปลกใหม่ทำให้เกิดความไม่มั่นคงหรือข้อผูกพันที่ยังไม่เสร็จสิ้น ให้รักษาเวลา เงิน และความรับผิดชอบไว้สองสามอย่าง'
    },
    'O.5': {
      low: 'แง่มุมนี้เกี่ยวข้องกับความสนใจในแนวคิดที่ซับซ้อนและเป็นนามธรรม ไม่ใช่ความฉลาดหรือไอคิว คะแนนที่ต่ำกว่าสามารถสนับสนุนการตัดสินใจเชิงปฏิบัติได้ หากแนวคิดที่ไม่คุ้นเคยถูกละทิ้งเร็วเกินไป ให้ถามว่าหลักฐานใดที่อาจเปลี่ยนใจคุณ และเรียนรู้เฉพาะสิ่งที่ต้องการในการตัดสินใจ',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนการวิเคราะห์ ความอยากรู้อยากเห็น และความสะดวกสบายที่มีความซับซ้อน หากการคิดกลายเป็นการถกเถียงไม่รู้จบหรือการวิเคราะห์เป็นอัมพาต ให้กำหนดเกณฑ์การตัดสินใจและกำหนดเวลาก่อนที่จะสำรวจเพิ่มเติม'
    },
    'O.6': {
      low: 'คะแนนที่ต่ำกว่าสามารถรักษาประเพณีที่เป็นประโยชน์ ความคาดหวังที่มีร่วมกัน และความต่อเนื่องทางสังคม หากแบบแผนไม่มีข้อกังขาหรือละทิ้งมุมมองที่เกี่ยวข้อง ให้ทบทวนเหตุผลของกฎดังกล่าวอีกครั้งและถามว่าใครบ้างที่ได้รับผลกระทบจากกฎดังกล่าว',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนการตรวจสอบบรรทัดฐานเชิงวิพากษ์และการปฏิรูปเชิงสร้างสรรค์ได้ หากถือว่าความแปลกใหม่ดีขึ้นโดยอัตโนมัติ ให้ทดสอบการเปลี่ยนแปลงในขั้นตอนเล็กๆ และรักษาส่วนของแนวทางปฏิบัติที่มีอยู่ซึ่งยังคงใช้ได้ผลอยู่'
    },
    'A.1': {
      low: 'คะแนนที่ต่ำกว่าจะช่วยให้คุณสังเกตเห็นความไม่สอดคล้องกันและป้องกันตัวเองเมื่อมีเดิมพันสูง หากความสงสัยขัดขวางความร่วมมือ ให้ปรับเทียบความไว้วางใจแทนที่จะให้หรือระงับไว้ทั้งหมดในคราวเดียว เริ่มต้นด้วยข้อผูกพันเล็กๆ น้อยๆ และอัปเดตจากหลักฐาน',
      high: 'คะแนนที่สูงกว่าจะทำให้การเปิดกว้างและความร่วมมือง่ายขึ้น หากความสุจริตใจทำให้คุณเปิดรับการแสวงหาผลประโยชน์ ให้ตรวจสอบการกล่าวอ้างที่มีเดิมพันสูง สร้างความคาดหวังที่ชัดเจน และรักษาขอบเขตแม้กระทั่งกับคนที่คุณชอบ'
    },
    'A.2': {
      low: 'คะแนนที่ต่ำกว่าสามารถสนับสนุนชั้นเชิง การเจรจา และความเป็นส่วนตัวเชิงกลยุทธ์ได้ หากทำให้เกิดการบิดเบือนหรือความคลุมเครือ ให้แยกแยะขอบเขตที่ถูกต้องจากการหลอกลวง และให้คำมั่นสัญญาในภาษาที่บุคคลอื่นสามารถตรวจสอบได้',
      high: 'คะแนนที่สูงกว่าสามารถสร้างความน่าเชื่อถือได้ด้วยความตรงไปตรงมาและความโปร่งใส หากความซื่อสัตย์กลายเป็นเรื่องตรงไปตรงมาหรือเปิดเผยมากเกินไป ให้ผสมผสานความจริงเข้ากับจังหวะเวลา ความเกี่ยวข้อง และความใส่ใจเกี่ยวกับวิธีการนำเสนอ'
    },
    'A.3': {
      low: 'คะแนนที่ต่ำกว่าสามารถปกป้องเวลาที่จำกัดและส่งเสริมความเป็นอิสระของผู้อื่น หากผู้อื่นพบว่าคุณไม่พร้อมอยู่หรือความสัมพันธ์ซึ่งกันและกันพังทลายลง ให้เลือกรูปแบบความช่วยเหลือที่คุณสามารถดำรงไว้ได้และระบุขอบเขตอย่างชัดเจน',
      high: 'คะแนนที่สูงกว่าสามารถสร้างการสนับสนุนที่แข็งแกร่งและความรู้สึกเป็นชุมชนได้ หากการช่วยเหลือทำให้เกิดความเหนื่อยหน่ายหรือขัดขวางไม่ให้ผู้อื่นรับผิดชอบ ให้ถามว่าต้องการความช่วยเหลือหรือไม่ ตกลงเรื่องขีดจำกัด และอย่าทำให้ทุกความต้องการเป็นภาระหน้าที่ของคุณ'
    },
    'A.4': {
      low: 'คะแนนที่ต่ำกว่าสามารถช่วยปกป้องมาตรฐานและแก้ไขข้อขัดแย้งได้โดยตรง หากความขัดแย้งกลายเป็นความขัดแย้งเรื้อรัง ให้แยกความต้องการที่ไม่สามารถต่อรองได้ออกจากตัวเลือกที่ยืดหยุ่น และใช้เกณฑ์ที่ใช้ร่วมกันแทนที่จะใช้กำลัง',
      high: 'คะแนนที่สูงกว่าสามารถลดความขัดแย้งและปกป้องความร่วมมือได้ ถ้าความสามัคคีถูกซื้อโดยการยอมรับความต้องการที่สำคัญ ให้ระบุขอบเขตอย่างชัดเจนและยอมให้มีความขัดแย้งโดยไม่ถือว่าเป็นความล้มเหลวของความสัมพันธ์'
    },
    'A.5': {
      low: 'คะแนนที่ต่ำกว่าสามารถสนับสนุนการสนับสนุนตนเองและทำให้มองเห็นการมีส่วนร่วมได้ หากได้ยินความเชื่อมั่นว่ามีความเหนือกว่าหรืองานของผู้อื่นหายไป ให้อ้างโดยมีหลักฐานและแบ่งปันเครดิตอย่างแม่นยำ',
      high: 'คะแนนที่สูงกว่าสามารถดึงความสนใจไปที่งานและทำให้การทำงานร่วมกันง่ายขึ้น หากการบริจาคของคุณถูกมองข้ามซ้ำๆ ให้อธิบายสิ่งที่คุณทำและผลกระทบตามความเป็นจริง การแสดงตนอย่างถูกต้องไม่ใช่ความเย่อหยิ่ง'
    },
    'A.6': {
      low: 'คะแนนที่ต่ำกว่าสามารถสนับสนุนความเป็นกลางและการตัดสินใจที่ยากลำบากซึ่งไม่สามารถตอบสนองทุกคนได้ หากผู้คนเผชิญกับการตัดสินใจที่เย็นชาหรือสูญเสียต้นทุนมนุษย์ ให้ถามว่าใครเป็นผู้รับภาระและจับคู่เหตุผลกับคำอธิบายที่ชัดเจน',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนความเห็นอกเห็นใจและการรับรู้ถึงความทุกข์ได้อย่างรวดเร็ว หากความเห็นอกเห็นใจหมดสิ้นไปหรือแทนที่ข้อเท็จจริงที่เกี่ยวข้อง ให้กำหนดขอบเขตทางอารมณ์และตรวจสอบว่าสิ่งใดที่ช่วยปรับปรุงสถานการณ์ได้จริง'
    },
    'C.1': {
      low: 'คะแนนที่ต่ำกว่าสามารถกระตุ้นให้เกิดความระมัดระวัง การเตรียมตัว และการขอความช่วยเหลือเมื่อจำเป็น หากความสงสัยในตัวเองทำให้คุณไม่สามารถเริ่มต้นได้ ให้แบ่งงานออกเป็นชิ้นเล็กๆ และใช้ขั้นตอนที่เสร็จสิ้นแล้วเป็นหลักฐานแสดงความสามารถ',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนความเป็นเจ้าของ ความพากเพียร และความมั่นใจในการแก้ปัญหา หากความมั่นใจกลายเป็นการประเมินค่าสูงเกินไปหรือไม่เต็มใจที่จะขอความช่วยเหลือ ให้ทำการชันสูตรพลิกศพก่อนและขอให้ผู้มีความรู้ท้าทายแผนดังกล่าว'
    },
    'C.2': {
      low: 'คะแนนที่ต่ำกว่าสามารถรองรับความยืดหยุ่นและการแสดงด้นสดเมื่อแผนมีการเปลี่ยนแปลง หากความผิดปกติทำให้เสียเวลาหรือทำให้ภาระผูกพันหายไป ให้สร้างบ้าน รายการ และกิจวัตรที่เชื่อถือได้เพียงไม่กี่แห่งสำหรับสิ่งที่สำคัญที่สุด',
      high: 'คะแนนที่สูงกว่าจะทำให้งานมีความชัดเจน เชื่อถือได้ และกลับมาทำงานต่อได้ง่าย หากระเบียบกลายเป็นลัทธิพอใจ แต่สิ่งดีเลิศหรือการเปลี่ยนแปลงกลายเป็นเรื่องน่าวิตก ให้กำหนดว่าอะไรดีพอและปล่อยให้แผนหย่อนโดยเจตนา'
    },
    'C.3': {
      low: 'คะแนนที่ต่ำกว่าสามารถช่วยตั้งคำถามเกี่ยวกับกฎเกณฑ์และปรับภาระผูกพันให้เข้ากับบริบทได้ หากผู้อื่นไม่สามารถพึ่งพาคำมั่นสัญญาของคุณได้หรือมุมจริยธรรมถูกตัด ให้สัญญาอย่างชัดเจนและเชื่อมโยงภาระผูกพันแต่ละข้อเข้ากับเหตุผลที่สำคัญ',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนความซื่อสัตย์และการติดตามผลที่เชื่อถือได้ หากหน้าที่สร้างความเข้มงวดหรือภาระที่ไม่ยั่งยืน ให้จัดอันดับภาระผูกพันที่แข่งขันกันและเจรจาใหม่ตั้งแต่เนิ่นๆ แทนที่จะแบกภาระทั้งหมดอย่างเงียบๆ'
    },
    'C.4': {
      low: 'คะแนนที่ต่ำกว่าสามารถรักษาความสมดุลและทำให้เกิดความพึงพอใจโดยไม่มีการแข่งขันอย่างต่อเนื่อง ถ้ามันหยุดนิ่งหรือทิ้งความสามารถอันมีค่าไว้โดยไม่ได้ใช้ ให้เลือกเป้าหมายที่มีความหมายส่วนตัวและกำหนดเป้าหมายเล็กๆ น้อยๆ ถัดไป',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนความเชี่ยวชาญและความพยายามที่ยั่งยืนไปสู่เป้าหมายที่ต้องการได้ หากคุณค่าในตนเองผูกติดอยู่กับผลผลิตหรือความพยายามกลายเป็นความเหนื่อยหน่าย ให้กำหนดสิ่งที่ถือว่าเพียงพอและปกป้องการพักผ่อนและบทบาทที่ไม่เกี่ยวข้องกับความสำเร็จ'
    },
    'C.5': {
      low: 'คะแนนที่ต่ำกว่าสามารถสนับสนุนความเป็นธรรมชาติและการตอบสนองต่อการเปลี่ยนแปลงลำดับความสำคัญได้ หากการเริ่มต้นหรือสิ้นสุดเป็นเรื่องยากซ้ำๆ ให้ย่อขั้นตอนแรก เปลี่ยนสภาพแวดล้อม และเพิ่มสัญญาณที่มองเห็นได้หรือความรับผิดชอบของบุคคลอื่น',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนการติดตามผลได้แม้ว่าแรงจูงใจจะต่ำก็ตาม หากความพากเพียรยังคงให้ผลตอบแทนที่ลดลง ให้ตั้งกฎการหยุดและตรวจสอบว่าเป้าหมายยังสมควรได้รับความพยายามหรือไม่'
    },
    'C.6': {
      low: 'คะแนนที่ต่ำกว่าสามารถรองรับความเร็ว การทดลอง และการดำเนินการที่มีข้อมูลที่ไม่สมบูรณ์ หากข้อผิดพลาดที่ป้องกันได้เกิดขึ้นอีก ให้เพิ่มการหยุดชั่วคราวสั้นๆ และรายการตรวจสอบก่อนที่จะตัดสินใจซึ่งมีค่าใช้จ่ายสูงหรือยากที่จะย้อนกลับ',
      high: 'คะแนนที่สูงกว่าสามารถสนับสนุนการวิเคราะห์ความเสี่ยงและการตัดสินใจอย่างรอบคอบและมีคุณภาพสูง หากความระมัดระวังทำให้พลาดกำหนดเวลาหรือครุ่นคิดซ้ำๆ ให้กำหนดเส้นตายการตัดสินใจและเลือกใช้นักบินแบบพลิกกลับได้มากกว่าการรอความแน่นอน'
    }
  },
  tr: {
    'N.1': {
      low: 'Daha düşük bir puan sakin kalmanıza ve belirsizliğin sizi ele geçirmesine engel olmanıza yardımcı olabilir. Bu sakinlik, riskleri hafife almanıza veya çok az hazırlık yapmanıza neden oluyorsa, önemli bir karardan önce en olası riski ve bir geri dönüşü listeleyin.',
      high: 'Daha yüksek bir puan, riskleri ve uyarı işaretlerini erken fark etmenize yardımcı olabilir. Endişe sürekli olarak dikkatinizi tüketiyorsa, mümkün olanı muhtemel olandan ayırın, endişe süresine bir sınır koyun ve bir sonraki somut eylemi seçin; günlük yaşamı sürekli olarak bozuyorsa profesyonel destek alın.'
    },
    'N.2': {
      low: 'Daha düşük bir puan sizi daha soğukkanlı hale getirebilir ve kışkırtılması zor hale getirebilir. Meşru öfkeyi bastırma veya sınırları belirtmeden bırakma eğilimindeyseniz, sorunun adını erkenden belirleyin ve değiştirilmesini istediğiniz davranışı açıklayın.',
      high: 'Daha yüksek bir puan adaletsizliği tespit etmenizi ve önemli olanı savunmanızı hızlandırabilir. Öfke çatışmaları tırmandırıyorsa veya dürtüsel tepkilere yol açıyorsa, yanıt vermeden önce durun ve kişiye saldırmak yerine spesifik davranışı, etkiyi ve ihtiyacı belirtin.'
    },
    'N.3': {
      low: 'Daha düşük bir puan genellikle duygusal iyileşmeyi ve istikrarlı enerjiyi destekler. Başka bir kişinin üzüntüsünü veya kendi dinlenme ihtiyacınızı görmezden gelmenizi kolaylaştırıyorsa, yavaşlayın, dinleyin ve çözmeye çalışmadan önce kaybı kabul edin.',
      high: 'Daha yüksek bir puan, hayal kırıklığını ve kaybı özellikle belirgin hale getirebilir ve bu da sizin için neyin derinden önemli olduğunu ortaya çıkarabilir. Sürekli moral bozukluğu, yalnızca bir özellik olarak ele almanız gereken bir şey değildir: Rutinleri ve görevleri küçük tutun, güvenilir insanlarla bağlantıda kalın ve uzun sürdüğünde veya günlük yaşamı olumsuz etkilediğinde profesyonel destek alın.'
    },
    'N.4': {
      low: 'Daha düşük bir puan, sosyal durumların daha rahat geçmesini sağlayabilir ve yargılanma korkusunu azaltabilir. Bazen nasıl karşılaştığınızı özlüyorsanız, her şeyin yolunda gittiğini varsaymak yerine, özel geri bildirim isteyin ve diğer kişinin yanıtını kontrol edin.',
      high: 'Daha yüksek bir puan, sosyal beklentilere ve diğer insanların tepkilerine karşı dikkatli olmanızı sağlayabilir. Kendini izleme derin düşünmeye veya kaçınmaya dönüşürse, dikkati paylaşılan göreve çevirin, zor durumlara kademeli olarak yaklaşın ve etkileşimi hayali bir inceleme yerine kanıtlara göre değerlendirin.'
    },
    'N.5': {
      low: 'Daha düşük bir puan, kısıtlamayı ve hazzı erteleme yeteneğini destekler. Kısıtlama aşırı kontrole dönüşürse veya keyif için çok az alan bırakırsa, baskı oluşana kadar beklemek yerine kasıtlı olarak zararsız kendiliğindenliğe yer açın.',
      high: 'Daha yüksek bir puan kendiliğindenliği, iştahı ve anlık deneyimlerden keyif almayı sağlayabilir. Dürtüler tekrar tekrar sonradan pişmanlık duyacağınız maliyetlere neden oluyorsa, harekete geçmeden önce sürtünmeyi artırın: bekleyin, tetikleyicileri kaldırın, sınırları önceden belirleyin veya istenen uzun vadeli seçime ulaşılmasını kolaylaştırın.'
    },
    'N.6': {
      low: 'Daha düşük bir puan, net düşünmenize ve baskı altında istikrarlı bir şekilde hareket etmenize yardımcı olabilir. Kendinizdeki veya başkalarındaki gerilimi hafife almanıza yol açıyorsa, beklenmedik durumları planlayın ve bilgi almak ve zorlu dönemlerden sonra iyileşmek için zaman ayırın.',
      high: 'Daha yüksek bir puan, aşırı yükü erken fark etmenize ve kaynaklar tükenmeden destek aramanıza neden olabilir. Baskı donmaya veya kafa karışıklığına neden oluyorsa, eş zamanlı talepleri azaltın, ilk birkaç adımı önceden prova edin ve stres yüksek olduğunda basit bir yazılı plan kullanın.'
    },
    'E.1': {
      low: 'Daha düşük bir puan bağımsızlığı ve küçük, seçici bir sosyal çevreyi destekleyebilir. Eğer çekingenlik ilgisizlikle karıştırılıyorsa ya da faydalı ilişkilerin kurulmasını engelliyorsa, açıkça sıcaklık gösterin ve birkaç düzenli temas noktasını koruyun.',
      high: 'Daha yüksek bir puan, uyumun, güvenin ve yeni bağlantıların kolayca kurulmasını sağlayabilir. Dostluk, hak edilmeden önce aşırı bağlılığa veya güvene yol açıyorsa, kendini ifşa etmeye hız verin, önemli iddiaları doğrulayın ve hayır deme fırsatı bırakın.'
    },
    'E.2': {
      low: 'Daha düşük bir puan odaklanmayı, yalnızlık konusunda rahatlığı ve grup uyarımlarına daha az bağımlılığı sağlayabilir. Yalnızlık izolasyona dönüşürse veya gruplar giderek zorlaşırsa, temastan tamamen kaçınmak yerine daha küçük toplantılar seçin ve iyileşme zamanını planlayın.',
      high: 'Daha yüksek bir puan gruplara enerji getirebilir ve sosyal ivme yaratılmasına yardımcı olabilir. Şirket odaklanılan işin dışına çıkarsa veya yalnızlığı rahatsız edici hale getirirse, kesintisiz zamanı koruyun ve etkileşimi devam ettirmeye gerek kalmadan dinleme pratiği yapın.'
    },
    'E.3': {
      low: 'Daha düşük bir puan dinlemeye, işbirliğine ve diğer insanların liderliğine yer açabilir. İhtiyaçlarınız veya uzmanlığınız görünmez kalırsa, net bir cümle hazırlayın, doğrudan bir talepte bulunun veya tartışmanın başlangıcına yakın bir zamanda konuşun.',
      high: 'Daha yüksek bir puan, bir grubun karar almasına ve diğerleri tereddüt ettiğinde yön vermesine yardımcı olabilir. Çok fazla yer kaplıyorsanız, farklı görüşler isteyin, yanıtlamadan önce bekleyin ve fikir birliğini varsaymak yerine sahipliğinizi açıkça belirtin.'
    },
    'E.4': {
      low: 'Daha düşük bir puan, telaşsız bir tempoyu ve sürekli hareket olmadan sürekli dikkati destekleyebilir. Önemli iş sürekli olarak erteleniyorsa, az sayıda öncelik seçin ve bunlara görünür son tarihler veya zaman blokları verin.',
      high: 'Daha yüksek bir puan, ivme ve güçlü bir eylem kapasitesi yaratabilir. Faaliyet aşırı yüke veya ilerleme olmadan meşgullüğe dönüşürse, hareketi sonuçlardan ayırın ve arabellekleri ve kurtarmayı görevler gibi kasıtlı olarak programlayın.'
    },
    'E.5': {
      low: 'Daha düşük bir puan, yoğun uyarım olmadan güvenliği, istikrarı ve memnuniyeti destekleyebilir. Yenilikten kaçınmak seçeneklerinizi daraltıyorsa, riskleri önceden bilinen küçük, geri döndürülebilir deneyler deneyin.',
      high: 'Daha yüksek bir puan cesareti, keşfetmeyi ve canlı deneyimlerden keyif almayı destekleyebilir. Can sıkıntısı gereksiz riske yol açıyorsa, heyecan artmadan önce sınırları belirleyin ve olumsuzlukların kontrol altına alındığı ortamlarda teşvik arayın.'
    },
    'E.6': {
      low: 'İyimserliğin yanıltıcı olacağı durumlarda, daha düşük bir puan ciddiyet ve gerçekçi bir üslup getirebilir. Takdir veya sıcaklık gizli kalıyorsa, olumlu duyguların kendiliğinden ortaya çıkmasını beklemek yerine, bunu açıkça söyleyin ve keyif için küçük fırsatlar yaratın.',
      high: 'Daha yüksek bir puan grubun moralini yükseltebilir ve olumlu deneyimlerin fark edilmesini kolaylaştırabilir. Eğer neşe acıyı veya riski gölgede bırakıyorsa, önce neyin zor olduğunu kabul edin, sonra gerçekleri inkar etmeden umudu arayın.'
    },
    'O.1': {
      low: 'Daha düşük bir puan, somut düşünmeyi ve neyin pratik ve gözlemlenebilir olduğuna dikkat etmeyi destekleyebilir. Eğer tanıdık cevaplar daha iyi olasılıkları dışlıyorsa, hangisinin gerçekçi olduğunu değerlendirmeden önce birkaç alternatif oluşturun.',
      high: 'Daha yüksek bir puan yaratıcılığı, zihinsel simülasyonu ve orijinal bağlantıları destekleyebilir. Fikirler hayallerde kalırsa veya dikkat dağılırsa, onları yakalayın, birini seçin ve bunu en küçük somut teste dönüştürün.'
    },
    'O.2': {
      low: 'Daha düşük bir puan, dikkatin işleve, netliğe ve doğrudan kullanışlılığa odaklanmasını sağlayabilir. Estetik deneyim veya onarıcı güzellik sürekli olarak ihmal ediliyorsa, kısa ve düşük basınçlı yollarla örnekleyin ve gerçekten dikkatinizi çeken şeyin ne olduğuna dikkat edin.',
      high: 'Daha yüksek bir puan, biçime, güzelliğe ve ince ayrıntılara karşı hassasiyeti artırabilir. Estetik standartlar çok fazla zaman harcıyorsa veya işlevi geçersiz kılıyorsa, önce pratik kısıtlamaları tanımlayın ve iyileştirmenin gerçekten buna değeceği yere karar verin.'
    },
    'O.3': {
      low: 'Daha düşük bir puan, soğukkanlılığı ve o andaki ruh halinden daha az etkilenen kararları destekleyebilir. Duyguları tanımlamak zorlaşırsa veya diğer insanların sinyalleri kaçırılırsa, neyin gerekli olduğuna karar vermeden önce kısa bir beden ve duygu kontrolü için duraklayın.',
      high: 'Daha yüksek bir puan duygusal farkındalığı, empatiyi ve incelikli bir iç yaşamı destekleyebilir. Duygular bunaltıcı hale gelirse veya kararları dikte ederse, duyguyu adlandırın, sakinleşmesine izin verin ve hissettiklerinizi kanıtların gösterdiğinden ayırın.'
    },
    'O.4': {
      low: 'Daha düşük bir puan sürekliliği, ustalığı ve güvenilir rutinleri destekleyebilir. Rutin katılığa veya yenilik korkusuna dönüşürse, yapının geri kalanını tanıdık tutarken küçük, geri döndürülebilir bir değişiklik yapın.',
      high: 'Daha yüksek bir puan, uyum sağlamayı ve keşfetme yoluyla öğrenmeyi destekleyebilir. Yenilik istikrarsızlık veya tamamlanmamış taahhütler yaratıyorsa, zaman, para ve sorumluluklar için birkaç tartışılamaz dayanak noktası bulundurun.'
    },
    'O.5': {
      low: "Bu yön, zeka veya IQ'ya değil, karmaşık ve soyut fikirlere olan ilgiyle ilgilidir. Daha düşük bir puan pratik kararların lehine olabilir; Eğer alışılmadık fikirler çok çabuk reddedilirse, hangi kanıtların fikrinizi değiştireceğini sorun ve yalnızca kararın neyi gerektirdiğini öğrenin.",
      high: 'Daha yüksek bir puan, karmaşıklığın getirdiği analiz, merak ve rahatlığı destekleyebilir. Düşünme sonsuz bir tartışmaya veya analiz felcine dönüşürse, daha fazla araştırma yapmadan önce karar kriterini ve son tarihi tanımlayın.'
    },
    'O.6': {
      low: 'Daha düşük bir puan yararlı gelenekleri, ortak beklentileri ve sosyal sürekliliği koruyabilir. Eğer sözleşme sorgulanmazsa veya ilgili bakış açılarını hariç tutarsa, kuralın nedenini tekrar gözden geçirin ve bundan kimin etkilendiğini sorun.',
      high: 'Daha yüksek bir puan, normların eleştirel incelemesini ve yapıcı reformu destekleyebilir. Yenilik otomatik olarak daha iyi olarak değerlendiriliyorsa, değişiklikleri küçük adımlarla test edin ve mevcut uygulamanın hala işe yarayan kısımlarını koruyun.'
    },
    'A.1': {
      low: 'Daha düşük bir puan, tutarsızlığı fark etmenize ve risk yüksek olduğunda kendinizi korumanıza yardımcı olabilir. Eğer şüphe işbirliğini engelliyorsa, güveni bir anda kabul etmek ya da esirgemek yerine güveni ayarlayın: küçük taahhütlerle başlayın ve kanıtlardan yola çıkarak güncelleyin.',
      high: 'Daha yüksek bir puan açıklık ve işbirliğini kolaylaştırabilir. Eğer iyi niyet sizi istismara açık bırakıyorsa, yüksek riskli iddiaları doğrulayın, beklentileri açıkça belirtin ve sevdiğiniz insanlarla bile sınırlarınızı koruyun.'
    },
    'A.2': {
      low: 'Daha düşük bir puan inceliği, müzakereyi ve stratejik gizliliği destekleyebilir. Manipülasyon veya belirsizlik yaratıyorsa meşru sınırı aldatmadan ayırın ve diğer kişinin doğrulayabileceği bir dilde taahhütlerde bulunun.',
      high: 'Daha yüksek bir puan, doğrudanlık ve şeffaflık yoluyla güvenilirliği artırabilir. Dürüstlük açık sözlülüğe veya aşırı paylaşıma dönüşürse, gerçeği zamanlama, alaka ve nasıl sunulduğuna dikkat etme ile birleştirin.'
    },
    'A.3': {
      low: 'Daha düşük bir puan, sınırlı süreyi koruyabilir ve diğer insanların özerkliğini teşvik edebilir. Başkaları sizi ulaşılmaz olarak görüyorsa veya karşılıklılık aşınıyorsa, sürdürebileceğiniz bir yardım biçimi seçin ve kapsamını açıkça belirtin.',
      high: 'Daha yüksek bir puan, güçlü bir destek ve topluluk duygusu yaratabilir. Yardım etmek tükenmişliğe neden oluyorsa veya başkalarının sorumluluk almasını engelliyorsa, yardımın istenip istenmediğini sorun, sınırlar üzerinde anlaşın ve her ihtiyacı yükümlülüğünüz haline getirmeyin.'
    },
    'A.4': {
      low: 'Daha düşük bir puan, standartların savunulmasına ve çatışmanın doğrudan ele alınmasına yardımcı olabilir. Anlaşmazlık kronik bir sürtüşmeye dönüşürse, pazarlık konusu olmayan ihtiyaçları esnek seçeneklerden ayırın ve zorlama yerine ortak kriterleri kullanın.',
      high: 'Daha yüksek bir puan çatışmayı azaltabilir ve işbirliğini koruyabilir. Uyum, önemli ihtiyaçlardan vazgeçilerek elde ediliyorsa, sınırı açıkça belirtin ve anlaşmazlığa saygıyla yaklaşıp bunu ilişki başarısızlığı olarak ele almadan izin verin.'
    },
    'A.5': {
      low: 'Daha düşük bir puan, öz savunuculuğu destekleyebilir ve katkıları görünür kılabilir. Güven üstünlük olarak duyulursa veya başkalarının emeği ortadan kalkarsa, delillerle iddialarda bulunun ve krediyi tam olarak paylaşın.',
      high: 'Daha yüksek bir puan, dikkatin işe odaklanmasını sağlayabilir ve işbirliğini kolaylaştırabilir. Katkınız defalarca gözden kaçırılıyorsa, ne yaptığınızı ve etkisini gerçeklere dayalı olarak açıklayın; Kendini doğru şekilde temsil etmek kibir değildir.'
    },
    'A.6': {
      low: 'Daha düşük bir puan, objektifliği ve herkesi tatmin edemeyecek zor kararları destekleyebilir. İnsanlar kararın soğuk olduğunu düşünürse veya insani maliyeti gözden kaçırılırsa, yükü kimin üstlendiğini sorun ve gerekçeyi net bir açıklamayla eşleştirin.',
      high: 'Daha yüksek bir puan şefkati ve acının hızla tanınmasını destekleyebilir. Empati yorgunluğa dönüşürse veya ilgili gerçekleri geçersiz kılarsa, duygusal sınırlar koyun ve durumu gerçekten iyileştirecek yardımın ne olduğunu doğrulayın.'
    },
    'C.1': {
      low: 'Daha düşük bir puan, dikkatli olmayı, hazırlığı ve ihtiyaç duyulduğunda yardım istemeyi teşvik edebilir. Eğer kendinizden şüphe duymanız sizi başlamaktan alıkoyuyorsa, görevi küçük parçalara bölün ve tamamlanan adımları yeteneğinizin kanıtı olarak kullanın.',
      high: 'Daha yüksek bir puan, sorunların çözümünde sahiplenmeyi, ısrarı ve güveni destekleyebilir. Eğer güven, abartmaya veya yardım arama konusunda isteksizliğe dönüşürse, kısa bir ön otopsi yapın ve bilgili bir kişiden plana itiraz etmesini isteyin.'
    },
    'C.2': {
      low: 'Daha düşük bir puan, planlar değiştiğinde esnekliği ve doğaçlamayı destekleyebilir. Eğer düzensizlik zamana mal oluyorsa veya yükümlülükleri ortadan kaldırıyorsa, en önemli şeyler için yalnızca birkaç güvenilir ev, liste ve rutin oluşturun.',
      high: 'Daha yüksek bir puan, işi net, güvenilir ve sürdürülmesi kolay hale getirebilir. Düzen mükemmeliyetçiliğe dönüşürse veya değişim sıkıntılı hale gelirse, neyin yeterince iyi olduğunu tanımlayın ve planda kasıtlı olarak gevşeklik bırakın.'
    },
    'C.3': {
      low: 'Daha düşük bir puan, kuralların sorgulanmasına ve yükümlülüklerin bağlama göre uyarlanmasına yardımcı olabilir. Başkaları sizin taahhütlerinize güvenemiyorsa veya etik köşeler kesiliyorsa, vaatleri açık bir şekilde yapın ve her yükümlülüğü, önemli olan nedene yeniden bağlayın.',
      high: 'Daha yüksek bir puan bütünlüğü ve güvenilir takibi destekleyebilir. Eğer görev katılık veya sürdürülemez bir yük yaratıyorsa, rakip yükümlülükleri sıralayın ve hepsini sessizce üstlenmek yerine erkenden yeniden müzakere edin.'
    },
    'C.4': {
      low: 'Daha düşük bir puan dengeyi koruyabilir ve sürekli rekabet olmaksızın tatmine olanak sağlayabilir. Durağanlığa dönüşürse veya değerli yetenekleri kullanılmadan bırakırsa, kişisel olarak anlamlı bir hedef seçin ve bir sonraki küçük dönüm noktasını tanımlayın.',
      high: 'Daha yüksek bir puan, ustalığı ve zorlu hedeflere yönelik sürekli çabayı destekleyebilir. Öz değer çıktıya bağlı hale gelirse veya çaba tükenmişliğe dönüşürse, neyin yeterli olduğunu tanımlayın ve dinlenmeyi ve başarı ile ilgisi olmayan rolleri koruyun.'
    },
    'C.5': {
      low: 'Daha düşük bir puan, kendiliğindenliği ve değişen önceliklere yanıt vermeyi destekleyebilir. Başlamak veya bitirmek sürekli olarak zor oluyorsa, ilk adımı kısaltın, ortamı değiştirin ve görünür bir işaret veya başka bir kişinin sorumluluğunu ekleyin.',
      high: 'Daha yüksek bir puan, motivasyon düşük olduğunda bile devamı destekleyebilir. Eğer ısrar, azalan getiriler sonrasında da devam ediyorsa, durdurma kuralları belirleyin ve hedefin hâlâ çabayı hak edip etmediğini gözden geçirin.'
    },
    'C.6': {
      low: 'Daha düşük bir puan, hızı, denemeyi ve eksik bilgiyle eylemi destekleyebilir. Önlenebilir hatalar tekrarlanırsa maliyetli veya geri alınması zor kararlardan önce kısa bir duraklama ve kontrol listesi ekleyin.',
      high: 'Daha yüksek bir puan, risk analizini ve dikkatli, yüksek kaliteli kararları destekleyebilir. Dikkat, zamanlamanın kaçırılmasına veya tekrar tekrar düşünmeye neden oluyorsa, bir karar için son tarih belirleyin ve kesinliği beklemek yerine geri döndürülebilir bir pilot uygulamayı tercih edin.'
    }
  },
  uk: {
    'N.1': {
      low: 'Нижчий бал може допомогти вам зберігати спокій і не допустити невизначеності. Якщо цей спокій спонукає вас недооцінювати ризики або надто мало готуватися, складіть список найімовірніших ризиків і один запасний варіант перед прийняттям важливого рішення.',
      high: 'Вищий бал може допомогти вам завчасно помітити ризики та попереджувальні знаки. Якщо занепокоєння постійно поглинає вашу увагу, відокремте те, що можливо, від того, що ймовірно, встановіть ліміт часу для занепокоєння та виберіть одну конкретну наступну дію; зверніться за професійною підтримкою, якщо це постійно заважає повсякденному життю.'
    },
    'N.2': {
      low: 'Нижчий бал може зробити вас врівноваженим і важким для провокацій. Якщо ви схильні придушувати законний гнів або залишаєте межі невизначеними, назвіть проблему якомога раніше та опишіть поведінку, яку ви хочете змінити.',
      high: 'Вищий бал допоможе вам швидко виявити несправедливість і захистити те, що має значення. Якщо гнів викликає ескалацію конфліктів або спонукає до імпульсивних реакцій, зробіть паузу, перш ніж відповісти, і сформулюйте конкретну поведінку, вплив і потребу замість того, щоб нападати на людину.'
    },
    'N.3': {
      low: 'Нижчий бал часто сприяє емоційному відновленню та стабільній енергії. Якщо через це легко не помітити смуток іншої людини або вашу власну потребу у відпочинку, уповільніть темп, вислухайте та визнайте втрату, перш ніж намагатися її вирішити.',
      high: 'Вищий бал може зробити розчарування та втрату особливо помітними, що може виявити, що для вас глибоко важливо. Постійний низький настрій – це не те, що ви повинні розглядати як рису характеру: зробіть рутину та завдання невеликими, залишайтеся на зв’язку з людьми, яким довіряєте, і шукайте професійної підтримки, коли це триває або заважає повсякденному життю.'
    },
    'N.4': {
      low: 'Нижчий бал може зробити соціальні ситуації розслабленими та зменшити страх перед осудом. Якщо ви інколи не знаєте, як ви натрапили, попросіть конкретний відгук і перевірте відповідь іншої людини, а не припускайте, що все добре.',
      high: 'Вищий бал може змусити вас бути уважнішими до соціальних очікувань і реакції інших людей. Якщо самоконтроль перетворюється на роздуми або уникнення, переключіть увагу на спільне завдання, підходьте до складних ситуацій поступово та оцінюйте взаємодію за доказами, а не за уявним оглядом.'
    },
    'N.5': {
      low: 'Нижчий бал підтримує стриманість і здатність відкласти задоволення. Якщо стриманість стає надмірним контролем або залишає надто мало місця для насолоди, навмисно звільніть місце для нешкідливої ​​спонтанності замість того, щоб чекати, поки тиск зросте.',
      high: 'Вищий бал може принести спонтанність, апетит і насолоду від безпосереднього досвіду. Якщо спонукання постійно спричиняють витрати, про які ви потім шкодуєте, додайте тертя, перш ніж діяти: зачекайте, усуньте тригери, заздалегідь встановіть обмеження або зробіть бажаний довгостроковий вибір легшим.'
    },
    'N.6': {
      low: 'Нижчий бал може допомогти вам чітко мислити та діяти стабільно під тиском. Якщо це спонукає вас недооцінювати напругу в собі чи в інших, сплануйте непередбачені ситуації та виділіть час для аналізу та відновлення після важких періодів.',
      high: 'Вищий бал може змусити вас завчасно помітити перевантаження та звернутися за підтримкою до того, як ресурси закінчаться. Якщо тиск викликає завмирання або збентеження, зменшіть одночасні вимоги, відрепетируйте перші кілька кроків заздалегідь і використовуйте простий письмовий план, коли стрес високий.'
    },
    'E.1': {
      low: 'Нижчий бал може підтверджувати незалежність і вузьке, вибіркове коло спілкування. Якщо стриманість помилково сприймають як незацікавленість або перешкоджають формуванню корисних стосунків, явно висловлюйте теплоту та підтримуйте кілька регулярних точок контакту.',
      high: 'Вищий бал може полегшити взаєморозуміння, довіру та нові зв’язки. Якщо дружелюбність призводить до надмірної відданості або довіри, перш ніж її заслужити, прискоріть саморозкриття, перевірте важливі твердження та залиште місце сказати «ні».'
    },
    'E.2': {
      low: 'Нижчий бал може забезпечити зосередженість, комфорт із самотністю та меншу залежність від групової стимуляції. Якщо самотність перетворюється на самотність або групам стає все важче, вибирайте менші збори та плануйте час для відновлення, а не уникайте контакту взагалі.',
      high: 'Вищий бал може принести енергію групам і допомогти створити соціальний імпульс. Якщо компанія витісняє цілеспрямовану роботу або робить самотність некомфортною, захистіть безперервний час і тренуйтеся слухати, не потребуючи підтримки взаємодії.'
    },
    'E.3': {
      low: 'Нижчий бал може звільнити місце для слухання, співпраці та лідерства інших людей. Якщо ваші потреби чи досвід залишаються непомітними, підготуйте одне чітке речення, зробіть прямий запит або висловіться один раз на початку обговорення.',
      high: 'Вищий бал може допомогти групі приймати рішення та давати напрямок, коли інші вагаються. Якщо ви займаєте забагато місця, попросіть висловити незгодні думки, зачекайте, перш ніж відповідати, і чітко виразіть своє право власності, а не припускайте згоду.'
    },
    'E.4': {
      low: 'Нижчий бал може підтримувати неквапливий темп і тривалу увагу без постійного руху. Якщо важлива робота неодноразово відкладається, виберіть невелику кількість пріоритетів і дайте їм видимі терміни або часові блоки.',
      high: 'Вищий бал може створити імпульс і сильну здатність до дій. Якщо діяльність стає перевантаженою або зайнятою без прогресу, виділіть рух від результатів і заплануйте буфери та відновлення так само свідомо, як і завдання.'
    },
    'E.5': {
      low: 'Нижчий бал може сприяти безпеці, стабільності та задоволенню без інтенсивної стимуляції. Якщо уникнення новизни звужує ваш вибір, спробуйте невеликі оборотні експерименти, ризики яких відомі заздалегідь.',
      high: 'Вищий бал може підтримувати сміливість, дослідження та насолоду яскравими враженнями. Якщо нудьга спонукає до непотрібного ризику, встановіть межі до того, як збудження зросте, і шукайте стимулу в умовах, де стримано негативну сторону.'
    },
    'E.6': {
      low: 'Нижчий бал може принести серйозність і реалістичний тон, коли оптимізм здасться помилковим. Якщо вдячність або теплота залишаються прихованими, скажіть це відкрито та створюйте невеликі випадки для насолоди замість того, щоб чекати, що позитивні почуття з’являться самі по собі.',
      high: 'Вищий бал може підняти моральний дух групи та зробити позитивний досвід легко поміченим. Якщо життєрадісність приховує біль або ризик, спочатку визнайте, що важко, а потім шукайте надії, не заперечуючи фактів.'
    },
    'O.1': {
      low: 'Нижчий бал може підтримувати конкретне мислення та увагу до того, що є практичним і помітним. Якщо знайомі відповіді витісняють кращі можливості, створіть кілька альтернатив, перш ніж оцінювати, яка з них реалістична.',
      high: 'Вищий бал може підтримувати творчість, розумове моделювання та оригінальні зв’язки. Якщо ідеї залишаються в мріях або розсіюють увагу, захопіть їх, виберіть одну та перетворіть її на найменший відчутний тест.'
    },
    'O.2': {
      low: 'Нижчий бал може привернути увагу до функціональності, ясності та прямої корисності. Якщо постійно нехтують естетичним досвідом або відновлюючою красою, спробуйте це короткими, ненапруженими способами та зверніть увагу на те, що справді привертає вашу увагу.',
      high: 'Вищий бал може загострити чутливість до форми, краси та тонких деталей. Якщо естетичні стандарти забирають надто багато часу або перекривають функції, спочатку визначте практичні обмеження та вирішіть, де покращення справді того варте.'
    },
    'O.3': {
      low: 'Нижчий бал може підтримувати спокій і рішення, які менше залежать від настрою моменту. Якщо почуття стає важко визначити або сигнали інших людей пропускаються, зробіть паузу для короткої перевірки тіла та емоцій, перш ніж вирішити, що потрібно.',
      high: 'Вищий бал може підтримувати емоційну усвідомленість, емпатію та тонке внутрішнє життя. Якщо почуття переважають або диктують рішення, назвіть емоцію, дайте їй влягтися та відокремте те, що ти відчуваєш, від того, що показують докази.'
    },
    'O.4': {
      low: 'Нижчий бал може підтримувати безперервність, майстерність і надійність процедур. Якщо рутина перетворюється на жорсткість або страх перед новизною, внесіть одну невелику оборотну зміну, зберігаючи решту структури знайомою.',
      high: 'Вищий бал може сприяти адаптації та навчанню через дослідження. Якщо новизна створює нестабільність або незавершені зобов’язання, збережіть кілька неможливих якорів щодо часу, грошей і обов’язків.'
    },
    'O.5': {
      low: 'Цей аспект стосується інтересу до складних і абстрактних ідей, а не до інтелекту чи IQ. Нижчий бал може сприяти практичним рішенням; якщо незнайомі ідеї відкидаються занадто швидко, запитайте, які докази змінили б вашу думку, і дізнайтеся лише те, що вимагає рішення.',
      high: 'Вищий бал може підтримувати аналіз, допитливість і комфорт із складністю. Якщо роздуми перетворюються на нескінченні дебати чи параліч аналізу, визначте критерій прийняття рішення та крайній термін, перш ніж досліджувати далі.'
    },
    'O.6': {
      low: 'Нижчий бал може зберегти корисні традиції, спільні очікування та соціальну наступність. Якщо умовність не викликає сумнівів або виключає відповідні точки зору, перегляньте причину правила та запитайте, кого воно стосується.',
      high: 'Вищий бал може сприяти критичному аналізу норм і конструктивній реформі. Якщо новизна вважається автоматично кращою, тестуйте зміни невеликими кроками та зберігайте ті частини існуючої практики, які все ще працюють.'
    },
    'A.1': {
      low: 'Нижчий бал може допомогти вам помітити непослідовність і захистити себе, коли ставки високі. Якщо підозра блокує співпрацю, відкалібруйте довіру замість того, щоб надавати або приховувати все відразу: почніть з невеликих зобов’язань і оновлюйте докази.',
      high: 'Вищий бал може полегшити відкритість і співпрацю. Якщо добросовісність робить вас відкритими для експлуатації, перевірте високі твердження, чітко висловлюйте очікування та дотримуйтесь кордонів навіть з людьми, які вам подобаються.'
    },
    'A.2': {
      low: 'Нижчий бал може підтримувати такт, переговори та стратегічну конфіденційність. Якщо це створює маніпуляції або двозначність, відрізнити законний кордон від обману та взяти зобов’язання мовою, яку інша особа може перевірити.',
      high: 'Вищий бал може підвищити надійність завдяки прямоті та прозорості. Якщо чесність перетворюється на відвертість або надмірне розповсюдження, поєднайте правду з часом, доречністю та подбайте про те, як це буде доставлено.'
    },
    'A.3': {
      low: 'Нижчий бал може захистити обмежений час і заохочувати автономію інших людей. Якщо інші сприймають вас як недоступного або взаємність руйнується, виберіть форму допомоги, яку ви можете підтримувати, і чітко вкажіть її масштаб.',
      high: 'Вищий бал може створити сильну підтримку та відчуття спільності. Якщо допомога викликає виснаження або заважає іншим взяти на себе відповідальність, запитайте, чи потрібна допомога, домовтеся про обмеження та не робіть кожну потребу своїм обов’язком.'
    },
    'A.4': {
      low: 'Нижчий бал може допомогти захистити стандарти та безпосередньо вирішити конфлікт. Якщо незгода стає хронічним тертям, відокремте потреби, що не підлягають обговоренню, від гнучких варіантів і використовуйте спільні критерії, а не силу.',
      high: 'Вищий бал може зменшити ескалацію конфлікту та захистити співпрацю. Якщо гармонія досягається визнанням важливих потреб, чітко сформулюйте межу та дозвольте шанобливу незгоду, не розглядаючи це як провал стосунків.'
    },
    'A.5': {
      low: 'Нижчий бал може підтримувати самозахист і зробити внесок помітним. Якщо впевненість сприймається як перевага або робота інших зникає, пред’являйте претензії з доказами та чітко розподіляйте заслуги.',
      high: 'Вищий бал може утримати увагу на роботі та полегшити співпрацю. Якщо ваш внесок неодноразово не помічається, опишіть фактично те, що ви зробили, і його ефект; точне самозображення не є зарозумілістю.'
    },
    'A.6': {
      low: 'Нижчий бал може підтримувати об’єктивність і важкі рішення, які не можуть задовольнити всіх. Якщо люди сприйняли рішення як холодне або не помітили його людську ціну, запитайте, хто несе тягар, і поєднайте аргументацію з чітким поясненням.',
      high: 'Вищий бал може підтримувати співчуття та швидке визнання страждань. Якщо співчуття стає виснаженим або перекриває релевантні факти, встановіть емоційні межі та перевірте, яка допомога справді покращить ситуацію.'
    },
    'C.1': {
      low: 'Нижчий бал може спонукати до обережності, підготовки та звернення за допомогою, коли вона потрібна. Якщо невпевненість у собі заважає вам розпочати, розбийте завдання на дрібні частини та використовуйте виконані кроки як доказ здатності.',
      high: 'Вищий бал може підтримувати відповідальність, наполегливість і впевненість у вирішенні проблем. Якщо впевненість переходить у завищену оцінку або небажання звертатися за допомогою, проведіть коротке передсмертне обстеження та попросіть обізнану людину оскаржити план.'
    },
    'C.2': {
      low: 'Нижчий бал може сприяти гнучкості та імпровізації, коли плани змінюються. Якщо безлад вимагає часу або змушує зникати зобов’язання, створіть лише кілька надійних домівок, списків і процедур для найважливіших речей.',
      high: 'Вищий бал може зробити роботу зрозумілою, надійною та легкою для відновлення. Якщо порядок перетворюється на перфекціонізм або зміни стають неприємними, визначте, що є достатньо добрим, і залиште навмисну ​​слабину в плані.'
    },
    'C.3': {
      low: 'Нижчий бал може допомогти поставити під сумнів правила та адаптувати зобов’язання до контексту. Якщо інші не можуть покластися на ваші зобов’язання або етичні обмеження зрізані, чітко пообіцяйте та пов’яжіть кожне зобов’язання з причиною, з якої воно має значення.',
      high: 'Вищий бал може підтримувати цілісність і надійне виконання завдань. Якщо обов’язки створюють жорсткість або нестійке навантаження, ранжуйте конкуруючі зобов’язання та завчасно перегляньте їх, замість того, щоб мовчки виконувати їх усі.'
    },
    'C.4': {
      low: 'Нижчий бал може захистити баланс і забезпечити задоволення без постійної конкуренції. Якщо це стає стагнацією або залишає цінні здібності невикористаними, виберіть особисто значущу ціль і визначте наступну невелику віху.',
      high: 'Вищий бал може підтримувати майстерність і постійні зусилля для досягнення вимогливих цілей. Якщо самооцінка стає пов’язаною з продуктивністю або зусилля стають виснаженням, визначте, що вважається достатнім, і захистіть відпочинок і ролі, не пов’язані з досягненнями.'
    },
    'C.5': {
      low: 'Нижчий бал може сприяти спонтанності та чуйності на зміну пріоритетів. Якщо почати або закінчити постійно важко, зменшіть перший крок, змініть середовище та додайте видиму підказку або відповідальність іншої особи.',
      high: 'Вищий бал може підтримувати подальше виконання, навіть якщо мотивація низька. Якщо наполегливість продовжується після зменшення віддачі, установіть правила зупинки та перевірте, чи ціль усе ще заслуговує зусиль.'
    },
    'C.6': {
      low: 'Нижчий бал може підтримувати швидкість, експерименти та дії з неповною інформацією. Якщо помилки, яким можна було б запобігти, повторюються, додайте коротку паузу та контрольний список перед рішеннями, які є дорогими або важко скасувати.',
      high: 'Вищий бал може сприяти аналізу ризиків і прийняттю обережних високоякісних рішень. Якщо обережність спричиняє пропущений час або повторне роздумування, встановіть крайній термін для прийняття рішення та віддайте перевагу оборотному пілоту, а не очікуванню певності.'
    }
  },
  ur: {
    'N.1': {
      low: 'کم سکور آپ کو پرسکون رہنے اور غیر یقینی صورتحال کو سنبھالنے سے روکنے میں مدد کر سکتا ہے۔ اگر یہ سکون آپ کو خطرات کو کم کرنے یا بہت کم تیاری کرنے کی طرف لے جاتا ہے، تو کسی اہم فیصلے سے پہلے ممکنہ خطرے اور ایک فال بیک کی فہرست بنائیں۔',
      high: 'زیادہ اسکور آپ کو خطرات اور انتباہی علامات کو جلد محسوس کرنے میں مدد کر سکتا ہے۔ اگر فکر بار بار آپ کی توجہ ہڑپ کرتی ہے، تو جو ممکن ہے اسے ممکنہ سے الگ کریں، فکر کے وقت کی ایک حد مقرر کریں، اور ایک ٹھوس اگلی کارروائی کا انتخاب کریں۔ پیشہ ورانہ مدد حاصل کریں اگر یہ مسلسل روزمرہ کی زندگی میں خلل ڈالتا ہے۔'
    },
    'N.2': {
      low: 'کم اسکور آپ کو ہموار اور مشتعل کرنے میں مشکل بنا سکتا ہے۔ اگر آپ جائز غصے کو دبانا چاہتے ہیں یا حدود کو بغیر کسی بیان کے چھوڑ دیتے ہیں، تو مسئلہ کو جلد نام دیں اور اس رویے کی وضاحت کریں جسے آپ تبدیل کرنا چاہتے ہیں۔',
      high: 'ایک اعلی سکور آپ کو ناانصافی کا پتہ لگانے اور اہم چیزوں کا دفاع کرنے میں جلدی کر سکتا ہے۔ اگر غصہ تنازعات کو بڑھاتا ہے یا جذباتی ردعمل کا باعث بنتا ہے تو جواب دینے سے پہلے رکیں اور شخص پر حملہ کرنے کے بجائے مخصوص رویے، اثر اور ضرورت کو بیان کریں۔'
    },
    'N.3': {
      low: 'کم سکور اکثر جذباتی بحالی اور مستحکم توانائی کی حمایت کرتا ہے۔ اگر یہ کسی دوسرے شخص کی اداسی یا آپ کی اپنی آرام کی ضرورت کو نظر انداز کرنے کے لیے آسان بناتا ہے، اسے حل کرنے کی کوشش کرنے سے پہلے اسے سست کر دیں، سنیں، اور نقصان کو تسلیم کریں۔',
      high: 'زیادہ اسکور مایوسی اور نقصان کو خاص طور پر نمایاں کر سکتا ہے، جو آپ کے لیے کیا اہمیت رکھتا ہے۔ مستقل پست مزاج کوئی ایسی چیز نہیں ہے جسے آپ محض ایک خاصیت کے طور پر پیش کریں: معمولات اور کاموں کو چھوٹا رکھیں، بھروسہ مند لوگوں سے جڑے رہیں، اور پیشہ ورانہ مدد حاصل کریں جب یہ روزمرہ کی زندگی کو جاری رکھے یا خراب کرے۔'
    },
    'N.4': {
      low: 'کم سکور سماجی حالات کو پر سکون محسوس کر سکتا ہے اور فیصلے کے خوف کو کم کر سکتا ہے۔ اگر آپ کبھی کبھی یاد کرتے ہیں کہ آپ کیسے آتے ہیں، مخصوص رائے طلب کریں اور دوسرے شخص کے جواب کو چیک کریں بجائے یہ کہ سب کچھ ٹھیک ہے۔',
      high: 'زیادہ اسکور آپ کو سماجی توقعات اور دوسرے لوگوں کے رد عمل پر توجہ دے سکتا ہے۔ اگر خود نگرانی افواہوں یا اجتناب میں بدل جاتی ہے تو مشترکہ کام کی طرف توجہ مبذول کریں، مشکل حالات سے بتدریج رجوع کریں، اور تعامل کو تصوراتی جانچ کے بجائے ثبوت کے ذریعے پرکھیں۔'
    },
    'N.5': {
      low: 'کم سکور تحمل اور تسکین میں تاخیر کرنے کی صلاحیت کی حمایت کرتا ہے۔ اگر تحمل حد سے زیادہ کنٹرول ہو جائے یا لطف اندوز ہونے کے لیے بہت کم جگہ چھوڑ دی جائے تو دباؤ بننے تک انتظار کرنے کے بجائے جان بوجھ کر بے ضرر بے خودی کے لیے جگہ بنائیں۔',
      high: 'ایک اعلی سکور بے ساختہ، بھوک اور فوری تجربے سے لطف اندوز ہو سکتا ہے۔ اگر بار بار زور دینے سے اخراجات پیدا ہوتے ہیں تو آپ کو بعد میں پچھتاوا ہوتا ہے، عمل کرنے سے پہلے رگڑ شامل کریں: انتظار کریں، محرکات کو ہٹا دیں، پہلے سے حدیں مقرر کریں، یا مطلوبہ طویل مدتی انتخاب تک پہنچنا آسان بنائیں۔'
    },
    'N.6': {
      low: 'کم سکور آپ کو واضح طور پر سوچنے اور دباؤ میں مستقل طور پر کام کرنے میں مدد کر سکتا ہے۔ اگر یہ آپ کو اپنے آپ میں یا دوسروں میں تناؤ کو کم کرنے کی طرف لے جاتا ہے تو، ہنگامی حالات کی منصوبہ بندی کریں اور ڈیبریف کے لیے وقت نکالیں اور مدت کے بعد صحت یاب ہونے کے لیے وقت نکالیں۔',
      high: 'زیادہ اسکور آپ کو اوورلوڈ کو جلد محسوس کر سکتا ہے اور وسائل ختم ہونے سے پہلے مدد حاصل کر سکتا ہے۔ اگر دباؤ جمنے یا الجھن کا سبب بنتا ہے، بیک وقت مطالبات کو کم کریں، پہلے چند مراحل کی پہلے سے مشق کریں، اور جب دباؤ زیادہ ہو تو ایک سادہ تحریری منصوبہ استعمال کریں۔'
    },
    'E.1': {
      low: 'کم سکور آزادی اور ایک چھوٹے، منتخب سماجی حلقے کی حمایت کر سکتا ہے۔ اگر ریزرو کو عدم دلچسپی کے لیے غلطی سے سمجھا جاتا ہے یا مفید تعلقات کو بننے سے روکتا ہے، تو واضح طور پر گرمجوشی کا اشارہ کریں اور رابطے کے چند باقاعدہ پوائنٹس کو برقرار رکھیں۔',
      high: 'زیادہ اسکور آپس میں ربط، اعتماد اور نئے کنکشن کو آسانی سے بنا سکتا ہے۔ اگر دوستی حد سے زیادہ کمٹمنٹ یا اعتماد کا باعث بنتی ہے اس سے پہلے کہ کمائی جائے، تو خود انکشاف کو تیز کریں، اہم دعووں کی تصدیق کریں، اور نہ کہنے کی گنجائش چھوڑ دیں۔'
    },
    'E.2': {
      low: 'کم سکور توجہ، تنہائی کے ساتھ سکون اور گروپ محرک پر کم انحصار فراہم کر سکتا ہے۔ اگر تنہائی تنہائی میں بدل جاتی ہے یا گروہ تیزی سے مشکل ہو جاتے ہیں، تو چھوٹے اجتماعات کا انتخاب کریں اور مکمل طور پر رابطے سے گریز کرنے کے بجائے بحالی کے وقت کی منصوبہ بندی کریں۔',
      high: 'زیادہ اسکور گروپوں میں توانائی لا سکتا ہے اور سماجی رفتار پیدا کرنے میں مدد کر سکتا ہے۔ اگر کمپنی توجہ مرکوز کرنے والے کام سے باہر نکلتی ہے یا تنہائی کو غیر آرام دہ بناتی ہے، تو بلا روک ٹوک وقت کی حفاظت کریں اور بات چیت کو جاری رکھنے کی ضرورت کے بغیر سننے کی مشق کریں۔'
    },
    'E.3': {
      low: 'کم سکور سننے، تعاون اور دوسرے لوگوں کی قیادت کے لیے جگہ بنا سکتا ہے۔ اگر آپ کی ضروریات یا مہارت پوشیدہ رہتی ہے تو، ایک واضح جملہ تیار کریں، براہ راست درخواست کریں، یا بحث کے آغاز کے قریب ایک بار بولیں۔',
      high: 'ایک اعلی اسکور ایک گروپ کو فیصلے کرنے اور ہدایت دینے میں مدد کر سکتا ہے جب دوسرے ہچکچاتے ہیں۔ اگر آپ بہت زیادہ جگہ لیتے ہیں، تو اختلاف رائے کے لیے پوچھیں، جواب دینے سے پہلے انتظار کریں، اور سمجھوتہ کرنے کے بجائے ملکیت کو واضح کریں۔'
    },
    'E.4': {
      low: 'ایک کم سکور بغیر کسی حرکت کے بغیر تیز رفتار اور مسلسل توجہ کی حمایت کر سکتا ہے۔ اگر اہم کام میں بار بار تاخیر ہو رہی ہے، تو ترجیحات کی ایک چھوٹی تعداد کا انتخاب کریں اور انہیں دکھائی دینے والی ڈیڈ لائن یا ٹائم بلاکس دیں۔',
      high: 'ایک اعلی سکور رفتار اور عمل کے لیے مضبوط صلاحیت پیدا کر سکتا ہے۔ اگر سرگرمی بغیر کسی پیش رفت کے اوورلوڈ یا مصروفیت بن جاتی ہے، تو حرکت کو نتائج اور شیڈول بفرز اور ریکوری کو کاموں کی طرح جان بوجھ کر الگ کریں۔'
    },
    'E.5': {
      low: 'ایک کم سکور بغیر کسی شدید محرک کے حفاظت، استحکام اور اطمینان کے حق میں ہو سکتا ہے۔ اگر نیاپن سے پرہیز کرنا آپ کے انتخاب کو محدود کرتا ہے، تو چھوٹے، الٹ جانے والے تجربات کی کوشش کریں جن کے خطرات پہلے سے معلوم ہوں۔',
      high: 'ایک اعلی سکور ہمت، تلاش، اور وشد تجربات سے لطف اندوز ہونے کی حمایت کر سکتا ہے۔ اگر بوریت غیر ضروری خطرے کو بڑھاتی ہے تو جوش بڑھنے سے پہلے حدیں طے کریں اور ان ترتیبات میں محرک تلاش کریں جہاں منفی پہلو موجود ہوں۔'
    },
    'E.6': {
      low: 'کم سکور سنجیدگی اور حقیقت پسندانہ لہجہ لا سکتا ہے جب امید جھوٹی محسوس ہوگی۔ اگر تعریف یا گرمجوشی پوشیدہ رہتی ہے، تو اسے صاف الفاظ میں کہیں اور لطف اندوز ہونے کے لیے چھوٹے مواقع پیدا کریں بجائے اس کے کہ مثبت احساس خود ظاہر ہو جائے۔',
      high: 'ایک اعلی سکور گروپ کے حوصلے کو بلند کر سکتا ہے اور مثبت تجربات کو آسانی سے محسوس کر سکتا ہے۔ اگر خوش مزاجی درد یا خطرے سے زیادہ چمکتی ہے، تو پہلے اس بات کو تسلیم کریں کہ کیا مشکل ہے، پھر حقائق سے انکار کیے بغیر امید کی تلاش کریں۔'
    },
    'O.1': {
      low: 'ایک کم اسکور عملی اور قابل مشاہدہ چیزوں پر ٹھوس سوچ اور توجہ کی حمایت کر سکتا ہے۔ اگر واقف جوابات سے بہتر امکانات پیدا ہوتے ہیں، تو یہ جانچنے سے پہلے کہ کون سا حقیقت پسندانہ ہے کئی متبادل تیار کریں۔',
      high: 'ایک اعلی اسکور تخلیقی صلاحیتوں، ذہنی تخروپن اور اصل کنکشن کی حمایت کر سکتا ہے۔ اگر خیالات دن کے خوابوں میں رہتے ہیں یا توجہ کو بکھرتے ہیں، تو ان پر گرفت کریں، ایک کا انتخاب کریں، اور اسے سب سے چھوٹے ٹھوس امتحان میں بدل دیں۔'
    },
    'O.2': {
      low: 'کم سکور فنکشن، وضاحت اور براہ راست افادیت پر توجہ دے سکتا ہے۔ اگر جمالیاتی تجربہ یا بحالی خوبصورتی کو مسلسل نظر انداز کیا جاتا ہے، تو مختصر، کم دباؤ والے طریقوں سے اس کا نمونہ لیں اور دیکھیں کہ حقیقی طور پر آپ کی توجہ کس چیز پر ہے۔',
      high: 'ایک اعلی سکور شکل، خوبصورتی اور باریک تفصیلات کے لیے حساسیت کو تیز کر سکتا ہے۔ اگر جمالیاتی معیارات بہت زیادہ وقت خرچ کرتے ہیں یا فنکشن کو اوور رائڈ کرتے ہیں، تو پہلے عملی رکاوٹوں کی وضاحت کریں اور فیصلہ کریں کہ تطہیر واقعی قابل کہاں ہے۔'
    },
    'O.3': {
      low: 'کم سکور آرام اور فیصلوں کی حمایت کر سکتا ہے جو اس وقت کے مزاج سے کم متاثر ہوتے ہیں۔ اگر احساسات کو پہچاننا مشکل ہو جاتا ہے یا دوسرے لوگوں کے اشارے چھوٹ جاتے ہیں، تو یہ فیصلہ کرنے سے پہلے کہ کیا ضرورت ہے، جسم اور جذبات کی ایک مختصر جانچ کے لیے رکیں۔',
      high: 'ایک اعلی سکور جذباتی بیداری، ہمدردی، اور ایک اہم اندرونی زندگی کی حمایت کر سکتا ہے. اگر احساسات حاوی ہو جاتے ہیں یا فیصلوں کا حکم دیتے ہیں، تو جذبات کو نام دیں، اسے حل ہونے دیں، اور شواہد سے جو آپ محسوس کرتے ہیں اس میں فرق کریں۔'
    },
    'O.4': {
      low: 'کم سکور تسلسل، مہارت اور قابل اعتماد معمولات کی حمایت کر سکتا ہے۔ اگر معمول سختی یا نیاپن کا خوف بن جاتا ہے، تو باقی ڈھانچے کو مانوس رکھتے ہوئے ایک چھوٹی، الٹ جانے والی تبدیلی متعارف کروائیں۔',
      high: 'ایک اعلی سکور دریافت کے ذریعے موافقت اور سیکھنے میں مدد کر سکتا ہے۔ اگر نیاپن عدم استحکام یا نامکمل وعدوں کو جنم دیتا ہے، تو وقت، پیسے اور ذمہ داریوں کے لیے چند غیر گفت و شنید اینکرز رکھیں۔'
    },
    'O.5': {
      low: 'یہ پہلو پیچیدہ اور تجریدی خیالات میں دلچسپی سے متعلق ہے، نہ کہ ذہانت یا IQ۔ کم سکور عملی فیصلوں کے حق میں ہو سکتا ہے۔ اگر ناواقف خیالات کو بہت جلد مسترد کر دیا جاتا ہے، تو پوچھیں کہ کون سے ثبوت آپ کے ذہن کو بدلیں گے اور صرف وہی سیکھیں جو فیصلہ کی ضرورت ہے۔',
      high: 'ایک اعلی سکور تجزیہ، تجسس، اور پیچیدگی کے ساتھ سکون کی حمایت کر سکتا ہے۔ اگر سوچ لامتناہی بحث یا تجزیہ کے فالج میں بدل جاتی ہے، تو مزید دریافت کرنے سے پہلے فیصلے کے معیار اور آخری تاریخ کی وضاحت کریں۔'
    },
    'O.6': {
      low: 'کم سکور مفید روایات، مشترکہ توقعات اور سماجی تسلسل کو محفوظ رکھ سکتا ہے۔ اگر کنونشن بلا شبہ جاتا ہے یا متعلقہ نقطہ نظر کو خارج کرتا ہے، تو اصول کی وجہ پر نظرثانی کریں اور پوچھیں کہ اس سے کون متاثر ہوا ہے۔',
      high: 'زیادہ اسکور معیارات کی تنقیدی جانچ اور تعمیری اصلاحات کی حمایت کر سکتا ہے۔ اگر نیاپن کو خود بخود بہتر سمجھا جاتا ہے تو چھوٹے قدموں میں تبدیلیوں کی جانچ کریں اور موجودہ پریکٹس کے ان حصوں کو محفوظ کریں جو اب بھی کام کرتے ہیں۔'
    },
    'A.1': {
      low: 'کم سکور آپ کو عدم مطابقت کو محسوس کرنے اور داؤ پر لگنے پر اپنے آپ کو بچانے میں مدد کر سکتا ہے۔ اگر شبہ تعاون کو روکتا ہے، تو یہ سب کچھ ایک ساتھ دینے یا روکنے کے بجائے اعتماد کیلیبریٹ کریں: چھوٹے وعدوں کے ساتھ شروع کریں اور شواہد سے تازہ کاری کریں۔',
      high: 'زیادہ اسکور کھلے پن اور تعاون کو آسان بنا سکتا ہے۔ اگر نیک نیتی آپ کو استحصال کے لیے کھلا چھوڑ دیتی ہے، بلند بانگ دعوؤں کی تصدیق کریں، توقعات کو واضح کریں، اور اپنی پسند کے لوگوں کے ساتھ بھی حدود رکھیں۔'
    },
    'A.2': {
      low: 'کم سکور حکمت عملی، گفت و شنید اور حکمت عملی کی رازداری کی حمایت کر سکتا ہے۔ اگر یہ ہیرا پھیری یا ابہام پیدا کرتا ہے، تو فریب سے ایک جائز حد کو الگ کریں اور اس زبان میں وعدے کریں جو دوسرا شخص تصدیق کر سکتا ہے۔',
      high: 'زیادہ اسکور درستگی اور شفافیت کے ذریعے اعتبار پیدا کر سکتا ہے۔ اگر ایمانداری دو ٹوک پن یا اوور شیئرنگ بن جاتی ہے، تو سچائی کو وقت، مطابقت اور اس بات کی دیکھ بھال کے ساتھ جوڑیں۔'
    },
    'A.3': {
      low: 'کم سکور محدود وقت کی حفاظت کر سکتا ہے اور دوسرے لوگوں کی خود مختاری کی حوصلہ افزائی کر سکتا ہے۔ اگر دوسرے لوگ آپ کو دستیاب نہ ہونے یا آپس میں کمی کے طور پر محسوس کرتے ہیں، تو مدد کی ایسی شکل کا انتخاب کریں جسے آپ برقرار رکھ سکیں اور اس کا دائرہ واضح طور پر بیان کریں۔',
      high: 'زیادہ اسکور مضبوط حمایت اور برادری کا احساس پیدا کر سکتا ہے۔ اگر مدد کرنا جلن کا سبب بنتا ہے یا دوسروں کو ذمہ داری لینے سے روکتا ہے، تو پوچھیں کہ کیا مدد مطلوب ہے، حدود پر متفق ہوں، اور ہر ضرورت کو اپنی ذمہ داری نہ بنائیں۔'
    },
    'A.4': {
      low: 'کم سکور معیارات کا دفاع کرنے اور تنازعات کو براہ راست حل کرنے میں مدد کر سکتا ہے۔ اگر اختلاف دائمی رگڑ بن جاتا ہے تو، غیر گفت و شنید ضروریات کو لچکدار اختیارات سے الگ کریں اور طاقت کے بجائے مشترکہ معیار استعمال کریں۔',
      high: 'زیادہ اسکور تنازعات کو کم کر سکتا ہے اور تعاون کی حفاظت کر سکتا ہے۔ اگر ہم آہنگی اہم ضروریات کو تسلیم کرتے ہوئے خریدی جاتی ہے، تو حد کو واضح طور پر بیان کریں اور اسے رشتے کی ناکامی سمجھے بغیر احترام کے ساتھ اختلاف رائے کی اجازت دیں۔'
    },
    'A.5': {
      low: 'کم اسکور خود وکالت کی حمایت کر سکتا ہے اور شراکت کو مرئی بنا سکتا ہے۔ اگر اعتماد کو برتری کے طور پر سنا جاتا ہے یا دوسروں کا کام غائب ہوجاتا ہے، تو ثبوت کے ساتھ دعوے کریں اور کریڈٹ کو قطعی طور پر شیئر کریں۔',
      high: 'زیادہ اسکور کام پر توجہ دے سکتا ہے اور تعاون کو آسان بنا سکتا ہے۔ اگر آپ کی شراکت کو بار بار نظر انداز کیا جاتا ہے، تو بیان کریں کہ آپ نے کیا کیا اور اس کا اثر حقیقت میں؛ خود کی درست نمائندگی تکبر نہیں ہے۔'
    },
    'A.6': {
      low: 'کم اسکور معروضیت اور مشکل فیصلوں کی حمایت کر سکتا ہے جو ہر کسی کو مطمئن نہیں کر سکتا۔ اگر لوگوں کو فیصلہ ٹھنڈا محسوس ہوتا ہے یا اس کی انسانی قیمت چھوٹ جاتی ہے تو پوچھیں کہ بوجھ کون اٹھاتا ہے اور استدلال کو واضح وضاحت کے ساتھ جوڑیں۔',
      high: 'ایک اعلی سکور ہمدردی اور تکلیف کی فوری شناخت کی حمایت کر سکتا ہے۔ اگر ہمدردی تھکن بن جاتی ہے یا متعلقہ حقائق کو اوور رائیڈ کر دیتی ہے تو جذباتی حدود طے کریں اور تصدیق کریں کہ کون سی مدد حقیقت میں صورتحال کو بہتر بنائے گی۔'
    },
    'C.1': {
      low: 'کم سکور احتیاط، تیاری، اور ضرورت پڑنے پر مدد مانگنے کی حوصلہ افزائی کر سکتا ہے۔ اگر خود شک آپ کو شروع کرنے سے روکتا ہے، تو کام کو چھوٹے چھوٹے ٹکڑوں میں توڑ دیں اور مکمل ہونے والے مراحل کو قابلیت کے ثبوت کے طور پر استعمال کریں۔',
      high: 'ایک اعلی اسکور ملکیت، استقامت اور مسائل کو حل کرنے میں اعتماد کی حمایت کر سکتا ہے۔ اگر اعتماد حد سے بڑھ جاتا ہے یا مدد لینے میں ہچکچاہٹ بن جاتا ہے، تو ایک مختصر پری مارٹم کروائیں اور کسی باشعور شخص سے اس منصوبے کو چیلنج کرنے کو کہیں۔'
    },
    'C.2': {
      low: 'منصوبہ بندی میں تبدیلی کے وقت کم سکور لچک اور اصلاح کی حمایت کر سکتا ہے۔ اگر خرابی کی وجہ سے وقت لگتا ہے یا ذمہ داریاں ختم ہوجاتی ہیں، تو ان چیزوں کے لیے صرف چند قابل اعتماد گھر، فہرستیں اور معمولات بنائیں جو سب سے اہم ہیں۔',
      high: 'زیادہ اسکور کام کو واضح، قابل اعتماد اور دوبارہ شروع کرنے میں آسان بنا سکتا ہے۔ اگر ترتیب کمال پرستی میں بدل جاتی ہے یا تبدیلی پریشان کن ہو جاتی ہے تو اس کی وضاحت کریں کہ کیا اچھا ہے اور منصوبہ بندی میں جان بوجھ کر سستی چھوڑ دیں۔'
    },
    'C.3': {
      low: 'کم سکور سوال کے اصولوں اور ذمہ داریوں کو سیاق و سباق کے مطابق ڈھالنے میں مدد کر سکتا ہے۔ اگر دوسرے آپ کے وعدوں پر بھروسہ نہیں کر سکتے ہیں یا اخلاقی کونے کاٹ دیے گئے ہیں، تو واضح وعدے کریں اور ہر ذمہ داری کو اس وجہ سے جوڑ دیں۔',
      high: 'ایک اعلی اسکور سالمیت اور قابل اعتماد پیروی کی حمایت کر سکتا ہے۔ اگر ڈیوٹی سختی یا غیر پائیدار بوجھ پیدا کرتی ہے تو مسابقتی ذمہ داریوں کی درجہ بندی کریں اور ان سب کو خاموشی سے اٹھانے کے بجائے جلد از جلد ان پر دوبارہ مذاکرات کریں۔'
    },
    'C.4': {
      low: 'کم سکور توازن کی حفاظت کر سکتا ہے اور مسلسل مقابلے کے بغیر اطمینان کی اجازت دیتا ہے۔ اگر یہ جمود بن جاتا ہے یا قابل قدر صلاحیتوں کو غیر استعمال شدہ چھوڑ دیتا ہے، تو ذاتی طور پر ایک بامعنی ہدف کا انتخاب کریں اور اگلے چھوٹے سنگ میل کی وضاحت کریں۔',
      high: 'ایک اعلی سکور مطلوبہ اہداف کی طرف مہارت اور مستقل کوشش کی حمایت کر سکتا ہے۔ اگر خود کی قدر پیداوار سے منسلک ہو جاتی ہے یا کوشش ختم ہو جاتی ہے، تو اس کی وضاحت کریں کہ کیا شمار کافی ہے اور آرام اور کردار کی حفاظت کریں جو کامیابی سے متعلق نہیں ہے۔'
    },
    'C.5': {
      low: 'کم سکور ترجیحات کو تبدیل کرنے کے لیے بے ساختہ اور ردعمل کی حمایت کر سکتا ہے۔ اگر شروع کرنا یا ختم کرنا بار بار مشکل ہوتا ہے، تو پہلا قدم سکڑیں، ماحول کو تبدیل کریں، اور دکھائی دینے والا اشارہ یا کسی دوسرے شخص کا احتساب شامل کریں۔',
      high: 'حوصلہ افزائی کم ہونے پر بھی اعلی اسکور فالو تھرو کی حمایت کر سکتا ہے۔ اگر استقامت ماضی میں کم ہوتی ہوئی واپسی کو جاری رکھتی ہے، تو روکنے کے اصول طے کریں اور جائزہ لیں کہ آیا مقصد اب بھی کوشش کا مستحق ہے۔'
    },
    'C.6': {
      low: 'کم سکور نامکمل معلومات کے ساتھ رفتار، تجربہ اور عمل کی حمایت کر سکتا ہے۔ اگر روکے جانے والی غلطیاں دوبارہ ہوتی ہیں، تو ان فیصلوں سے پہلے ایک مختصر وقفہ اور چیک لسٹ شامل کریں جو مہنگے ہوں یا اسے ریورس کرنا مشکل ہو۔',
      high: 'ایک اعلی اسکور خطرے کے تجزیہ اور محتاط، اعلیٰ معیار کے فیصلوں کی حمایت کر سکتا ہے۔ اگر احتیاط کی وجہ سے وقت کی کمی یا بار بار افواہیں آتی ہیں، تو فیصلہ کرنے کی آخری تاریخ طے کریں اور یقین کے انتظار کے مقابلے میں الٹنے والے پائلٹ کو ترجیح دیں۔'
    }
  },
  vi: {
    'N.1': {
      low: 'Điểm thấp hơn có thể giúp bạn giữ bình tĩnh và tránh sự không chắc chắn tiếp quản. Nếu sự bình tĩnh đó khiến bạn đánh giá thấp rủi ro hoặc chuẩn bị quá ít, hãy liệt kê rủi ro có thể xảy ra nhất và một phương án dự phòng trước khi đưa ra quyết định quan trọng.',
      high: 'Điểm cao hơn có thể giúp bạn nhận thấy rủi ro và dấu hiệu cảnh báo sớm. Nếu sự lo lắng liên tục làm bạn mất tập trung, hãy tách những gì có thể xảy ra khỏi những gì có thể xảy ra, đặt ra giới hạn về thời gian lo lắng và chọn một hành động cụ thể tiếp theo; tìm kiếm sự hỗ trợ chuyên nghiệp nếu nó liên tục làm gián đoạn cuộc sống hàng ngày.'
    },
    'N.2': {
      low: 'Điểm thấp hơn có thể khiến bạn trở nên nóng nảy và khó khiêu khích. Nếu bạn có xu hướng kìm nén sự tức giận chính đáng hoặc không xác định ranh giới, hãy sớm nêu tên vấn đề và mô tả hành vi mà bạn muốn thay đổi.',
      high: 'Điểm cao hơn có thể giúp bạn nhanh chóng phát hiện sự không công bằng và bảo vệ những gì quan trọng. Nếu sự tức giận làm leo thang xung đột hoặc thúc đẩy các phản ứng bốc đồng, hãy tạm dừng trước khi phản ứng và nêu rõ hành vi, tác động và nhu cầu cụ thể thay vì tấn công người đó.'
    },
    'N.3': {
      low: 'Điểm thấp hơn thường hỗ trợ phục hồi cảm xúc và năng lượng ổn định. Nếu điều đó khiến nỗi buồn của người khác hoặc nhu cầu nghỉ ngơi của bạn dễ bị bỏ qua, hãy sống chậm lại, lắng nghe và thừa nhận sự mất mát trước khi cố gắng giải quyết nó.',
      high: 'Điểm cao hơn có thể khiến sự thất vọng và mất mát trở nên đặc biệt nổi bật, điều này có thể tiết lộ điều gì thực sự quan trọng đối với bạn. Tâm trạng chán nản dai dẳng không phải là điều bạn phải coi chỉ là một đặc điểm: giữ các thói quen và nhiệm vụ ở mức nhỏ, duy trì kết nối với những người đáng tin cậy và tìm kiếm sự hỗ trợ chuyên nghiệp khi nó kéo dài hoặc làm suy yếu cuộc sống hàng ngày.'
    },
    'N.4': {
      low: 'Điểm thấp hơn có thể khiến các tình huống xã hội trở nên thoải mái hơn và giảm bớt nỗi sợ bị phán xét. Nếu đôi khi bạn bỏ lỡ cách mình gặp phải, hãy yêu cầu phản hồi cụ thể và kiểm tra phản hồi của người khác thay vì cho rằng mọi thứ đều diễn ra tốt đẹp.',
      high: 'Điểm cao hơn có thể khiến bạn chú ý đến những mong đợi của xã hội và phản ứng của người khác. Nếu việc tự giám sát chuyển sang trầm ngâm hoặc né tránh, hãy chuyển sự chú ý sang nhiệm vụ chung, dần dần tiếp cận các tình huống khó khăn và đánh giá sự tương tác bằng bằng chứng thay vì sự xem xét kỹ lưỡng tưởng tượng.'
    },
    'N.5': {
      low: 'Điểm thấp hơn hỗ trợ sự kiềm chế và khả năng trì hoãn sự hài lòng. Nếu sự kiềm chế trở nên quá mức kiểm soát hoặc có quá ít không gian để tận hưởng, hãy cố tình dành không gian cho sự tự phát vô hại thay vì đợi cho đến khi áp lực tăng lên.',
      high: 'Điểm cao hơn có thể mang lại sự tự nhiên, thèm ăn và thích thú với trải nghiệm ngay lập tức. Nếu sự thôi thúc liên tục tạo ra cái giá mà sau này bạn phải hối hận, hãy tạo thêm xích mích trước khi hành động: chờ đợi, loại bỏ các yếu tố kích hoạt, đặt ra giới hạn trước hoặc thực hiện dễ dàng hơn để đạt được lựa chọn dài hạn mong muốn.'
    },
    'N.6': {
      low: 'Điểm thấp hơn có thể giúp bạn suy nghĩ rõ ràng và hành động vững vàng trước áp lực. Nếu điều đó khiến bạn đánh giá thấp sự căng thẳng ở bản thân hoặc người khác, hãy lập kế hoạch dự phòng và dành thời gian để suy ngẫm và hồi phục sau những khoảng thời gian căng thẳng.',
      high: 'Điểm cao hơn có thể khiến bạn sớm nhận thấy tình trạng quá tải và tìm kiếm sự hỗ trợ trước khi hết tài nguyên. Nếu áp lực gây tê liệt hoặc bối rối, hãy giảm nhu cầu đồng thời, luyện tập trước một số bước đầu tiên và sử dụng một kế hoạch bằng văn bản đơn giản khi căng thẳng cao.'
    },
    'E.1': {
      low: 'Điểm thấp hơn có thể hỗ trợ sự độc lập và một nhóm xã hội nhỏ, có chọn lọc. Nếu sự dè dặt bị hiểu nhầm là không quan tâm hoặc khiến các mối quan hệ hữu ích không hình thành, hãy thể hiện sự nồng nhiệt một cách rõ ràng và duy trì một vài điểm liên lạc thường xuyên.',
      high: 'Điểm cao hơn có thể khiến mối quan hệ, sự tin tưởng và những kết nối mới trở nên dễ dàng. Nếu sự thân thiện dẫn đến sự cam kết quá mức hoặc sự tin tưởng trước khi nó đạt được, hãy tăng tốc độ bộc lộ bản thân, xác minh những tuyên bố quan trọng và chừa chỗ để nói không.'
    },
    'E.2': {
      low: 'Điểm thấp hơn có thể mang lại sự tập trung, thoải mái khi ở một mình và ít phụ thuộc hơn vào sự kích thích nhóm. Nếu sự cô đơn biến thành sự cô lập hoặc các nhóm ngày càng trở nên khó khăn, hãy chọn những cuộc tụ tập nhỏ hơn và lên kế hoạch cho thời gian phục hồi thay vì tránh tiếp xúc hoàn toàn.',
      high: 'Điểm cao hơn có thể mang lại năng lượng cho các nhóm và giúp tạo động lực xã hội. Nếu công ty lấn át công việc tập trung hoặc khiến việc ở một mình không thoải mái, hãy bảo vệ thời gian không bị gián đoạn và luyện tập lắng nghe mà không cần phải tiếp tục tương tác.'
    },
    'E.3': {
      low: 'Điểm thấp hơn có thể nhường chỗ cho sự lắng nghe, hợp tác và khả năng lãnh đạo của người khác. Nếu nhu cầu hoặc kiến ​​thức chuyên môn của bạn vẫn chưa được ẩn giấu, hãy chuẩn bị một câu rõ ràng, đưa ra yêu cầu trực tiếp hoặc phát biểu một lần khi gần bắt đầu cuộc thảo luận.',
      high: 'Điểm cao hơn có thể giúp một nhóm đưa ra quyết định và đưa ra phương hướng khi những người khác còn do dự. Nếu bạn chiếm quá nhiều không gian, hãy hỏi những quan điểm bất đồng, đợi trước khi trả lời và thể hiện quyền sở hữu rõ ràng thay vì giả định đồng ý.'
    },
    'E.4': {
      low: 'Điểm thấp hơn có thể hỗ trợ tốc độ không vội vã và duy trì sự chú ý mà không cần chuyển động liên tục. Nếu công việc quan trọng liên tục bị trì hoãn, hãy chọn một số ít ưu tiên và đưa ra thời hạn hoặc khung thời gian rõ ràng cho chúng.',
      high: 'Điểm cao hơn có thể tạo ra động lực và năng lực hành động mạnh mẽ. Nếu hoạt động trở nên quá tải hoặc bận rộn mà không có tiến triển, hãy phân biệt chuyển động với kết quả và lên lịch trình đệm cũng như phục hồi một cách có chủ ý như nhiệm vụ.'
    },
    'E.5': {
      low: 'Điểm thấp hơn có thể mang lại sự an toàn, ổn định và hài lòng mà không cần sự kích thích mạnh mẽ. Nếu việc né tránh sự mới lạ thu hẹp sự lựa chọn của bạn, hãy thử những thử nghiệm nhỏ, có thể đảo ngược mà rủi ro được biết trước.',
      high: 'Điểm cao hơn có thể hỗ trợ lòng can đảm, sự khám phá và tận hưởng những trải nghiệm sống động. Nếu sự nhàm chán dẫn đến rủi ro không cần thiết, hãy đặt ra giới hạn trước khi sự phấn khích tăng lên và tìm kiếm sự kích thích trong những bối cảnh có nhược điểm.'
    },
    'E.6': {
      low: 'Điểm thấp hơn có thể mang lại sự nghiêm túc và giọng điệu thực tế khi sự lạc quan có vẻ sai lầm. Nếu sự đánh giá cao hoặc sự ấm áp vẫn bị ẩn giấu, hãy nói thẳng ra và tạo ra những dịp nhỏ để tận hưởng thay vì mong đợi cảm giác tích cực tự xuất hiện.',
      high: 'Điểm cao hơn có thể nâng cao tinh thần của nhóm và khiến những trải nghiệm tích cực trở nên dễ dàng nhận thấy. Nếu sự vui vẻ che đậy nỗi đau hoặc rủi ro, trước tiên hãy thừa nhận điều khó khăn, sau đó tìm kiếm hy vọng mà không phủ nhận sự thật.'
    },
    'O.1': {
      low: 'Điểm thấp hơn có thể hỗ trợ tư duy cụ thể và sự chú ý đến những gì thực tế và có thể quan sát được. Nếu những câu trả lời quen thuộc lấn át những khả năng tốt hơn, hãy tạo ra một số lựa chọn thay thế trước khi đánh giá xem cái nào là thực tế.',
      high: 'Điểm cao hơn có thể hỗ trợ khả năng sáng tạo, mô phỏng tinh thần và các kết nối độc đáo. Nếu các ý tưởng vẫn còn trong giấc mơ hoặc làm phân tán sự chú ý, hãy nắm bắt chúng, chọn một ý tưởng và biến nó thành thử nghiệm hữu hình nhỏ nhất.'
    },
    'O.2': {
      low: 'Điểm thấp hơn có thể thu hút sự chú ý vào chức năng, sự rõ ràng và tính hữu ích trực tiếp. Nếu trải nghiệm thẩm mỹ hoặc vẻ đẹp phục hồi liên tục bị bỏ qua, hãy thử nghiệm nó theo những cách ngắn gọn, ít áp lực và để ý xem điều gì thực sự thu hút sự chú ý của bạn.',
      high: 'Điểm cao hơn có thể nâng cao độ nhạy cảm về hình thức, vẻ đẹp và chi tiết tinh tế. Nếu các tiêu chuẩn thẩm mỹ tiêu tốn quá nhiều thời gian hoặc ghi đè lên chức năng, trước tiên hãy xác định các giới hạn thực tế và quyết định xem việc tinh chỉnh ở đâu thực sự xứng đáng.'
    },
    'O.3': {
      low: 'Điểm thấp hơn có thể hỗ trợ sự bình tĩnh và đưa ra những quyết định ít bị ảnh hưởng bởi tâm trạng nhất thời. Nếu cảm xúc trở nên khó xác định hoặc tín hiệu của người khác bị bỏ qua, hãy tạm dừng để kiểm tra cơ thể và cảm xúc một cách ngắn gọn trước khi quyết định điều gì là cần thiết.',
      high: 'Điểm cao hơn có thể hỗ trợ nhận thức về cảm xúc, sự đồng cảm và đời sống nội tâm đa sắc thái. Nếu cảm xúc trở nên lấn át hoặc ra lệnh cho các quyết định, hãy đặt tên cho cảm xúc đó, để nó lắng xuống và phân biệt những gì bạn cảm thấy với những gì bằng chứng cho thấy.'
    },
    'O.4': {
      low: 'Điểm thấp hơn có thể hỗ trợ các thói quen liên tục, thành thạo và đáng tin cậy. Nếu thói quen trở nên cứng nhắc hoặc sợ hãi sự mới lạ, hãy đưa ra một thay đổi nhỏ, có thể đảo ngược trong khi vẫn giữ phần còn lại của cấu trúc quen thuộc.',
      high: 'Điểm cao hơn có thể hỗ trợ khả năng thích ứng và học hỏi thông qua khám phá. Nếu sự mới lạ tạo ra sự bất ổn hoặc những cam kết chưa hoàn thành, hãy giữ một vài điểm neo không thể thương lượng về thời gian, tiền bạc và trách nhiệm.'
    },
    'O.5': {
      low: 'Khía cạnh này liên quan đến sự quan tâm đến những ý tưởng phức tạp và trừu tượng, chứ không phải trí thông minh hay IQ. Điểm thấp hơn có thể ủng hộ các quyết định thực tế; nếu những ý tưởng xa lạ bị loại bỏ quá nhanh, hãy hỏi bằng chứng nào sẽ thay đổi suy nghĩ của bạn và chỉ tìm hiểu xem quyết định đó yêu cầu những gì.',
      high: 'Điểm cao hơn có thể hỗ trợ khả năng phân tích, sự tò mò và sự thoải mái với sự phức tạp. Nếu suy nghĩ trở thành cuộc tranh luận bất tận hoặc tê liệt phân tích, hãy xác định tiêu chí và thời hạn đưa ra quyết định trước khi khám phá sâu hơn.'
    },
    'O.6': {
      low: 'Điểm thấp hơn có thể bảo tồn những truyền thống hữu ích, những kỳ vọng chung và tính liên tục của xã hội. Nếu quy ước không bị nghi ngờ hoặc loại trừ các quan điểm liên quan, hãy xem lại lý do của quy tắc và hỏi xem ai bị ảnh hưởng bởi nó.',
      high: 'Điểm cao hơn có thể hỗ trợ việc kiểm tra quan trọng các chuẩn mực và cải cách mang tính xây dựng. Nếu tính mới được coi là tự động tốt hơn, hãy thử nghiệm những thay đổi theo từng bước nhỏ và duy trì những phần thực tiễn hiện có vẫn còn hiệu quả.'
    },
    'A.1': {
      low: 'Điểm thấp hơn có thể giúp bạn nhận thấy sự không nhất quán và tự bảo vệ mình khi rủi ro cao. Nếu sự nghi ngờ cản trở sự hợp tác, hãy điều chỉnh niềm tin thay vì đồng ý hoặc từ chối tất cả cùng một lúc: hãy bắt đầu với những cam kết nhỏ và cập nhật từ bằng chứng.',
      high: 'Điểm cao hơn có thể làm cho sự cởi mở và hợp tác trở nên dễ dàng hơn. Nếu thiện chí khiến bạn dễ bị lợi dụng, hãy xác minh các tuyên bố có tính rủi ro cao, đưa ra những kỳ vọng rõ ràng và giữ ranh giới ngay cả với những người bạn thích.'
    },
    'A.2': {
      low: 'Điểm thấp hơn có thể hỗ trợ sự khéo léo, đàm phán và quyền riêng tư chiến lược. Nếu nó tạo ra sự thao túng hoặc mơ hồ, hãy phân biệt ranh giới hợp pháp với sự lừa dối và đưa ra cam kết bằng ngôn ngữ mà người khác có thể xác minh.',
      high: 'Điểm cao hơn có thể xây dựng độ tin cậy thông qua tính trực tiếp và minh bạch. Nếu sự trung thực trở nên thẳng thừng hoặc chia sẻ quá mức, hãy kết hợp sự thật với thời điểm, mức độ phù hợp và quan tâm đến cách nó được truyền tải.'
    },
    'A.3': {
      low: 'Điểm thấp hơn có thể bảo vệ thời gian có hạn và khuyến khích sự tự chủ của người khác. Nếu người khác cho rằng bạn không sẵn sàng hoặc mối quan hệ có đi có lại bị xói mòn, hãy chọn một hình thức trợ giúp mà bạn có thể duy trì và nêu rõ phạm vi của nó.',
      high: 'Điểm cao hơn có thể tạo ra sự hỗ trợ mạnh mẽ và ý thức cộng đồng. Nếu việc giúp đỡ gây ra kiệt sức hoặc ngăn cản người khác nhận trách nhiệm, hãy hỏi xem có cần giúp đỡ không, đồng ý về các giới hạn và đừng biến mọi nhu cầu thành nghĩa vụ của mình.'
    },
    'A.4': {
      low: 'Điểm thấp hơn có thể giúp bảo vệ các tiêu chuẩn và giải quyết xung đột một cách trực tiếp. Nếu sự bất đồng trở thành xích mích kinh niên, hãy tách những nhu cầu không thể thương lượng ra khỏi các lựa chọn linh hoạt và sử dụng các tiêu chí chung thay vì ép buộc.',
      high: 'Điểm cao hơn có thể làm giảm xung đột và bảo vệ sự hợp tác. Nếu sự hòa hợp được mua bằng cách thừa nhận những nhu cầu quan trọng, hãy nêu rõ ranh giới và cho phép sự bất đồng một cách tôn trọng mà không coi đó là sự thất bại trong mối quan hệ.'
    },
    'A.5': {
      low: 'Điểm thấp hơn có thể hỗ trợ việc tự vận động và thể hiện những đóng góp rõ ràng. Nếu sự tự tin được lắng nghe khi tính ưu việt hoặc công việc của người khác biến mất, hãy đưa ra tuyên bố bằng bằng chứng và chia sẻ công lao một cách chính xác.',
      high: 'Điểm cao hơn có thể giúp bạn tập trung vào công việc và cộng tác dễ dàng hơn. Nếu đóng góp của bạn liên tục bị bỏ qua, hãy mô tả những gì bạn đã làm và tác dụng của nó một cách thực tế; sự tự thể hiện chính xác không phải là kiêu ngạo.'
    },
    'A.6': {
      low: 'Điểm thấp hơn có thể hỗ trợ tính khách quan và những quyết định khó khăn không thể làm hài lòng tất cả mọi người. Nếu mọi người cảm thấy quyết định đó là lạnh lùng hoặc cái giá phải trả về con người của nó bị bỏ qua, hãy hỏi xem ai là người chịu gánh nặng và kết hợp lý do với lời giải thích rõ ràng.',
      high: 'Điểm cao hơn có thể hỗ trợ lòng trắc ẩn và nhanh chóng nhận ra đau khổ. Nếu sự đồng cảm trở nên cạn kiệt hoặc lấn át những sự thật liên quan, hãy đặt ra ranh giới cảm xúc và xác minh xem sự trợ giúp nào sẽ thực sự cải thiện tình hình.'
    },
    'C.1': {
      low: 'Điểm thấp hơn có thể khuyến khích sự thận trọng, chuẩn bị và yêu cầu trợ giúp khi cần thiết. Nếu sự nghi ngờ bản thân khiến bạn không thể bắt đầu, hãy chia nhiệm vụ thành từng phần nhỏ và sử dụng các bước đã hoàn thành làm bằng chứng về năng lực.',
      high: 'Điểm cao hơn có thể hỗ trợ tính chủ động, tính kiên trì và sự tự tin trong việc giải quyết vấn đề. Nếu sự tự tin trở nên được đánh giá quá cao hoặc miễn cưỡng tìm kiếm sự giúp đỡ, hãy tiến hành khám nghiệm tử thi ngắn gọn và nhờ một người hiểu biết phản đối kế hoạch.'
    },
    'C.2': {
      low: 'Điểm thấp hơn có thể hỗ trợ tính linh hoạt và ứng biến khi kế hoạch thay đổi. Nếu sự rối loạn gây tốn thời gian hoặc khiến các nghĩa vụ biến mất, hãy chỉ tạo một vài ngôi nhà, danh sách và thói quen đáng tin cậy cho những việc quan trọng nhất.',
      high: 'Điểm cao hơn có thể làm cho công việc trở nên rõ ràng, đáng tin cậy và dễ tiếp tục. Nếu trật tự trở thành chủ nghĩa hoàn hảo hoặc sự thay đổi trở nên khó khăn, hãy xác định điều gì là đủ tốt và để lại những khoảng trống có chủ ý trong kế hoạch.'
    },
    'C.3': {
      low: 'Điểm thấp hơn có thể giúp đặt câu hỏi về các quy tắc và điều chỉnh nghĩa vụ cho phù hợp với bối cảnh. Nếu người khác không thể tin tưởng vào những cam kết của bạn hoặc các khía cạnh đạo đức bị cắt đứt, hãy đưa ra những lời hứa rõ ràng và kết nối từng nghĩa vụ với lý do nó quan trọng.',
      high: 'Điểm cao hơn có thể hỗ trợ tính toàn vẹn và khả năng theo dõi đáng tin cậy. Nếu nghĩa vụ tạo ra sự cứng nhắc hoặc gánh nặng không bền vững, hãy xếp hạng các nghĩa vụ cạnh tranh và đàm phán lại chúng sớm thay vì âm thầm gánh vác tất cả.'
    },
    'C.4': {
      low: 'Điểm thấp hơn có thể bảo vệ sự cân bằng và mang lại sự hài lòng mà không cần phải cạnh tranh liên tục. Nếu nó trở nên trì trệ hoặc khiến những khả năng quý giá không được sử dụng, hãy chọn một mục tiêu có ý nghĩa cho cá nhân và xác định cột mốc nhỏ tiếp theo.',
      high: 'Điểm cao hơn có thể hỗ trợ khả năng làm chủ và nỗ lực bền bỉ hướng tới các mục tiêu đòi hỏi khắt khe. Nếu giá trị bản thân bị ràng buộc với kết quả đầu ra hoặc nỗ lực trở nên kiệt sức, hãy xác định thế nào là đủ và bảo vệ sự nghỉ ngơi cũng như những vai trò không liên quan đến thành tích.'
    },
    'C.5': {
      low: 'Điểm thấp hơn có thể hỗ trợ tính tự phát và khả năng đáp ứng với các ưu tiên thay đổi. Nếu việc bắt đầu hoặc kết thúc liên tục khó khăn, hãy thu gọn bước đầu tiên, thay đổi môi trường và thêm một dấu hiệu rõ ràng hoặc trách nhiệm của người khác.',
      high: 'Điểm cao hơn có thể hỗ trợ việc theo đuổi ngay cả khi động lực thấp. Nếu sự kiên trì tiếp tục diễn ra trong quá khứ với lợi nhuận giảm dần, hãy đặt ra các quy tắc dừng lại và xem xét liệu mục tiêu có còn xứng đáng với nỗ lực hay không.'
    },
    'C.6': {
      low: 'Điểm thấp hơn có thể hỗ trợ tốc độ, thử nghiệm và hành động với thông tin không đầy đủ. Nếu tái diễn những lỗi có thể phòng ngừa được, hãy tạm dừng ngắn và kiểm tra danh sách trước khi đưa ra những quyết định tốn kém hoặc khó đảo ngược.',
      high: 'Điểm cao hơn có thể hỗ trợ phân tích rủi ro và đưa ra các quyết định cẩn thận, chất lượng cao. Nếu sự thận trọng khiến bạn bỏ lỡ thời gian hoặc suy ngẫm lặp đi lặp lại, hãy đặt ra thời hạn quyết định và ưu tiên một phương án thí điểm có thể đảo ngược hơn là chờ đợi sự chắc chắn.'
    }
  }
};

insightsByLocale.sr = serbianObjectToLatin(insightsByLocale.sr);

export function getPersonalityFacetInsight(
  locale: string,
  domain: string,
  facet: number
): PersonalityFacetInsight {
  const key = `${domain}.${facet}`;
  return insightsByLocale[locale]?.[key] ?? insightsByLocale.en[key];
}
