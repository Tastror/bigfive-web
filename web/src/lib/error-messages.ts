import { serbianObjectToLatin } from '@/lib/serbian';

export type ErrorMessages = {
  pageNotFoundTitle: string;
  pageNotFound: string;
  resultNotFoundTitle: string;
  resultNotFound: string;
  comparisonNotFoundTitle: string;
  comparisonNotFound: string;
  invalidResultIdTitle: string;
  invalidResultId: string;
  duplicateResultId: string;
  invalidComparisonTitle: string;
  invalidComparison: string;
  loadFailedTitle: string;
  resultLoadFailed: string;
  comparisonLoadFailed: string;
  unexpectedTitle: string;
  unexpectedDescription: string;
  goBack: string;
  tryAgain: string;
  recovering: string;
};

type ErrorLocale =
  | 'ar'
  | 'da'
  | 'de'
  | 'en'
  | 'es'
  | 'fi'
  | 'fr'
  | 'hi'
  | 'id'
  | 'is'
  | 'it'
  | 'ja'
  | 'ko'
  | 'no'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'sv'
  | 'th'
  | 'uk'
  | 'zh-hans'
  | 'zh-hant'
  | 'sq'
  | 'hy'
  | 'bn'
  | 'pt-br'
  | 'bg'
  | 'ca'
  | 'hr'
  | 'cs'
  | 'nl'
  | 'et'
  | 'he'
  | 'hu'
  | 'fa'
  | 'ro'
  | 'sr'
  | 'ss'
  | 'sl'
  | 'tr'
  | 'ur'
  | 'vi';

const errorMessages: Record<ErrorLocale, ErrorMessages> = {
  en: {
    pageNotFoundTitle: 'Page not found',
    pageNotFound: 'The requested page could not be found.',
    resultNotFoundTitle: 'Result not found',
    resultNotFound:
      'No saved test result was found for this ID. Check the ID and try again.',
    comparisonNotFoundTitle: 'Comparison results not found',
    comparisonNotFound:
      'At least one saved test result in this comparison could not be found, so the comparison cannot be displayed.',
    invalidResultIdTitle: 'Invalid result ID',
    invalidResultId: 'Enter a valid 24-character result ID.',
    duplicateResultId: 'This result has already been added.',
    invalidComparisonTitle: 'Invalid comparison link',
    invalidComparison:
      'This comparison link is malformed or contains invalid result data.',
    loadFailedTitle: 'A different error occurred',
    resultLoadFailed:
      'An unexpected error occurred while loading the result. Please try again later.',
    comparisonLoadFailed:
      'An unexpected error occurred while loading the comparison. Please try again later.',
    unexpectedTitle: 'Something went wrong',
    unexpectedDescription: 'An unexpected error occurred. Please try again.',
    goBack: 'Go back to the previous page',
    tryAgain: 'Try again',
    recovering: 'Recovering the page'
  },
  'zh-hans': {
    pageNotFoundTitle: '找不到页面',
    pageNotFound: '找不到您请求的页面。',
    resultNotFoundTitle: '找不到测试结果',
    resultNotFound: '找不到此 ID 对应的已保存测试结果。请检查 ID 后重试。',
    comparisonNotFoundTitle: '找不到比较所需的结果',
    comparisonNotFound:
      '此比较中至少有一项已保存的测试结果不存在，因此无法显示比较。',
    invalidResultIdTitle: '结果 ID 无效',
    invalidResultId: '请输入有效的 24 位结果 ID。',
    duplicateResultId: '此结果已经添加。',
    invalidComparisonTitle: '比较链接无效',
    invalidComparison: '此比较链接格式不正确，或包含无效的结果数据。',
    loadFailedTitle: '出现其他错误',
    resultLoadFailed: '加载测试结果时发生了意外错误。请稍后重试。',
    comparisonLoadFailed: '加载比较时发生了意外错误。请稍后重试。',
    unexpectedTitle: '出现其他错误',
    unexpectedDescription: '发生了意外错误，请重试。',
    goBack: '返回上一页',
    tryAgain: '重试',
    recovering: '正在恢复页面'
  },
  'zh-hant': {
    pageNotFoundTitle: '找不到頁面',
    pageNotFound: '找不到您要求的頁面。',
    resultNotFoundTitle: '找不到測驗結果',
    resultNotFound: '找不到此 ID 對應的已儲存測驗結果。請檢查 ID 後再試一次。',
    comparisonNotFoundTitle: '找不到比較所需的結果',
    comparisonNotFound:
      '此比較中至少有一筆已儲存的測驗結果不存在，因此無法顯示比較。',
    invalidResultIdTitle: '結果 ID 無效',
    invalidResultId: '請輸入有效的 24 位結果 ID。',
    duplicateResultId: '此結果已經加入。',
    invalidComparisonTitle: '比較連結無效',
    invalidComparison: '此比較連結格式不正確，或包含無效的結果資料。',
    loadFailedTitle: '發生其他錯誤',
    resultLoadFailed: '載入測驗結果時發生意外錯誤。請稍後再試。',
    comparisonLoadFailed: '載入比較時發生意外錯誤。請稍後再試。',
    unexpectedTitle: '發生其他錯誤',
    unexpectedDescription: '發生意外錯誤，請再試一次。',
    goBack: '返回上一頁',
    tryAgain: '再試一次',
    recovering: '正在復原頁面'
  },
  ar: {
    pageNotFoundTitle: 'الصفحة غير موجودة',
    pageNotFound: 'تعذّر العثور على الصفحة المطلوبة.',
    resultNotFoundTitle: 'لم يتم العثور على النتيجة',
    resultNotFound:
      'لم يتم العثور على نتيجة اختبار محفوظة لهذا المعرّف. تحقّق من المعرّف وحاول مرة أخرى.',
    comparisonNotFoundTitle: 'لم يتم العثور على نتائج المقارنة',
    comparisonNotFound:
      'تعذّر العثور على نتيجة اختبار محفوظة واحدة على الأقل في هذه المقارنة، لذلك لا يمكن عرضها.',
    invalidResultIdTitle: 'معرّف النتيجة غير صالح',
    invalidResultId: 'أدخل معرّف نتيجة صالحًا مكوّنًا من 24 حرفًا.',
    duplicateResultId: 'تمت إضافة هذه النتيجة بالفعل.',
    invalidComparisonTitle: 'رابط المقارنة غير صالح',
    invalidComparison:
      'رابط المقارنة هذا غير صحيح أو يحتوي على بيانات نتائج غير صالحة.',
    loadFailedTitle: 'حدث خطأ آخر',
    resultLoadFailed:
      'حدث خطأ غير متوقع أثناء تحميل النتيجة. حاول مرة أخرى لاحقًا.',
    comparisonLoadFailed:
      'حدث خطأ غير متوقع أثناء تحميل المقارنة. حاول مرة أخرى لاحقًا.',
    unexpectedTitle: 'حدث خطأ ما',
    unexpectedDescription: 'حدث خطأ غير متوقع. حاول مرة أخرى.',
    goBack: 'العودة إلى الصفحة السابقة',
    tryAgain: 'حاول مرة أخرى',
    recovering: 'جارٍ استعادة الصفحة'
  },
  da: {
    pageNotFoundTitle: 'Siden blev ikke fundet',
    pageNotFound: 'Den ønskede side kunne ikke findes.',
    resultNotFoundTitle: 'Testresultatet blev ikke fundet',
    resultNotFound:
      'Der blev ikke fundet et gemt testresultat for dette id. Kontrollér id’et, og prøv igen.',
    comparisonNotFoundTitle: 'Sammenligningsresultaterne blev ikke fundet',
    comparisonNotFound:
      'Mindst ét gemt testresultat i denne sammenligning blev ikke fundet, så sammenligningen kan ikke vises.',
    invalidResultIdTitle: 'Ugyldigt resultat-id',
    invalidResultId: 'Indtast et gyldigt resultat-id på 24 tegn.',
    duplicateResultId: 'Dette resultat er allerede tilføjet.',
    invalidComparisonTitle: 'Ugyldigt sammenligningslink',
    invalidComparison:
      'Dette sammenligningslink er forkert formateret eller indeholder ugyldige resultatdata.',
    loadFailedTitle: 'Der opstod en anden fejl',
    resultLoadFailed:
      'Der opstod en uventet fejl under indlæsning af resultatet. Prøv igen senere.',
    comparisonLoadFailed:
      'Der opstod en uventet fejl under indlæsning af sammenligningen. Prøv igen senere.',
    unexpectedTitle: 'Noget gik galt',
    unexpectedDescription: 'Der opstod en uventet fejl. Prøv igen.',
    goBack: 'Gå tilbage til den forrige side',
    tryAgain: 'Prøv igen',
    recovering: 'Gendanner siden'
  },
  de: {
    pageNotFoundTitle: 'Seite nicht gefunden',
    pageNotFound: 'Die angeforderte Seite wurde nicht gefunden.',
    resultNotFoundTitle: 'Testergebnis nicht gefunden',
    resultNotFound:
      'Für diese ID wurde kein gespeichertes Testergebnis gefunden. Prüfe die ID und versuche es erneut.',
    comparisonNotFoundTitle: 'Vergleichsergebnisse nicht gefunden',
    comparisonNotFound:
      'Mindestens ein gespeichertes Testergebnis in diesem Vergleich wurde nicht gefunden. Der Vergleich kann daher nicht angezeigt werden.',
    invalidResultIdTitle: 'Ungültige Ergebnis-ID',
    invalidResultId: 'Gib eine gültige Ergebnis-ID mit 24 Zeichen ein.',
    duplicateResultId: 'Dieses Ergebnis wurde bereits hinzugefügt.',
    invalidComparisonTitle: 'Ungültiger Vergleichslink',
    invalidComparison:
      'Dieser Vergleichslink ist fehlerhaft oder enthält ungültige Ergebnisdaten.',
    loadFailedTitle: 'Ein anderer Fehler ist aufgetreten',
    resultLoadFailed:
      'Beim Laden des Ergebnisses ist ein unerwarteter Fehler aufgetreten. Bitte versuche es später erneut.',
    comparisonLoadFailed:
      'Beim Laden des Vergleichs ist ein unerwarteter Fehler aufgetreten. Bitte versuche es später erneut.',
    unexpectedTitle: 'Etwas ist schiefgelaufen',
    unexpectedDescription:
      'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.',
    goBack: 'Zur vorherigen Seite',
    tryAgain: 'Erneut versuchen',
    recovering: 'Seite wird wiederhergestellt'
  },
  es: {
    pageNotFoundTitle: 'Página no encontrada',
    pageNotFound: 'No se pudo encontrar la página solicitada.',
    resultNotFoundTitle: 'Resultado no encontrado',
    resultNotFound:
      'No se encontró ningún resultado guardado para este ID. Comprueba el ID e inténtalo de nuevo.',
    comparisonNotFoundTitle: 'Resultados de comparación no encontrados',
    comparisonNotFound:
      'No se pudo encontrar al menos uno de los resultados guardados de esta comparación, por lo que no se puede mostrar.',
    invalidResultIdTitle: 'ID de resultado no válido',
    invalidResultId: 'Introduce un ID de resultado válido de 24 caracteres.',
    duplicateResultId: 'Este resultado ya se ha añadido.',
    invalidComparisonTitle: 'Enlace de comparación no válido',
    invalidComparison:
      'Este enlace de comparación tiene un formato incorrecto o contiene datos de resultados no válidos.',
    loadFailedTitle: 'Se produjo otro error',
    resultLoadFailed:
      'Se produjo un error inesperado al cargar el resultado. Inténtalo de nuevo más tarde.',
    comparisonLoadFailed:
      'Se produjo un error inesperado al cargar la comparación. Inténtalo de nuevo más tarde.',
    unexpectedTitle: 'Algo salió mal',
    unexpectedDescription:
      'Se produjo un error inesperado. Inténtalo de nuevo.',
    goBack: 'Volver a la página anterior',
    tryAgain: 'Intentarlo de nuevo',
    recovering: 'Restaurando la página'
  },
  fi: {
    pageNotFoundTitle: 'Sivua ei löytynyt',
    pageNotFound: 'Pyydettyä sivua ei löytynyt.',
    resultNotFoundTitle: 'Testitulosta ei löytynyt',
    resultNotFound:
      'Tälle tunnukselle ei löytynyt tallennettua testitulosta. Tarkista tunnus ja yritä uudelleen.',
    comparisonNotFoundTitle: 'Vertailutuloksia ei löytynyt',
    comparisonNotFound:
      'Vähintään yhtä tämän vertailun tallennettua testitulosta ei löytynyt, joten vertailua ei voida näyttää.',
    invalidResultIdTitle: 'Virheellinen tulostunnus',
    invalidResultId: 'Anna kelvollinen 24 merkin tulostunnus.',
    duplicateResultId: 'Tämä tulos on jo lisätty.',
    invalidComparisonTitle: 'Virheellinen vertailulinkki',
    invalidComparison:
      'Tämä vertailulinkki on virheellinen tai sisältää virheellisiä tulostietoja.',
    loadFailedTitle: 'Tapahtui muu virhe',
    resultLoadFailed:
      'Tulosta ladattaessa tapahtui odottamaton virhe. Yritä myöhemmin uudelleen.',
    comparisonLoadFailed:
      'Vertailua ladattaessa tapahtui odottamaton virhe. Yritä myöhemmin uudelleen.',
    unexpectedTitle: 'Jokin meni pieleen',
    unexpectedDescription: 'Tapahtui odottamaton virhe. Yritä uudelleen.',
    goBack: 'Palaa edelliselle sivulle',
    tryAgain: 'Yritä uudelleen',
    recovering: 'Palautetaan sivua'
  },
  fr: {
    pageNotFoundTitle: 'Page introuvable',
    pageNotFound: 'La page demandée est introuvable.',
    resultNotFoundTitle: 'Résultat introuvable',
    resultNotFound:
      'Aucun résultat enregistré n’a été trouvé pour cet identifiant. Vérifiez l’identifiant et réessayez.',
    comparisonNotFoundTitle: 'Résultats de comparaison introuvables',
    comparisonNotFound:
      'Au moins un résultat enregistré de cette comparaison est introuvable. La comparaison ne peut donc pas être affichée.',
    invalidResultIdTitle: 'Identifiant de résultat non valide',
    invalidResultId:
      'Saisissez un identifiant de résultat valide de 24 caractères.',
    duplicateResultId: 'Ce résultat a déjà été ajouté.',
    invalidComparisonTitle: 'Lien de comparaison non valide',
    invalidComparison:
      'Ce lien de comparaison est incorrect ou contient des données de résultat non valides.',
    loadFailedTitle: 'Une autre erreur est survenue',
    resultLoadFailed:
      'Une erreur inattendue est survenue lors du chargement du résultat. Réessayez plus tard.',
    comparisonLoadFailed:
      'Une erreur inattendue est survenue lors du chargement de la comparaison. Réessayez plus tard.',
    unexpectedTitle: 'Une erreur est survenue',
    unexpectedDescription: 'Une erreur inattendue est survenue. Réessayez.',
    goBack: 'Revenir à la page précédente',
    tryAgain: 'Réessayer',
    recovering: 'Restauration de la page'
  },
  hi: {
    pageNotFoundTitle: 'पेज नहीं मिला',
    pageNotFound: 'माँगा गया पेज नहीं मिला।',
    resultNotFoundTitle: 'परीक्षण परिणाम नहीं मिला',
    resultNotFound:
      'इस ID के लिए कोई सहेजा हुआ परीक्षण परिणाम नहीं मिला। ID जाँचें और फिर से प्रयास करें।',
    comparisonNotFoundTitle: 'तुलना के परिणाम नहीं मिले',
    comparisonNotFound:
      'इस तुलना में कम-से-कम एक सहेजा हुआ परीक्षण परिणाम नहीं मिला, इसलिए तुलना दिखाई नहीं जा सकती।',
    invalidResultIdTitle: 'अमान्य परिणाम ID',
    invalidResultId: '24 अक्षरों वाली मान्य परिणाम ID दर्ज करें।',
    duplicateResultId: 'यह परिणाम पहले ही जोड़ा जा चुका है।',
    invalidComparisonTitle: 'अमान्य तुलना लिंक',
    invalidComparison: 'यह तुलना लिंक गलत है या इसमें अमान्य परिणाम डेटा है।',
    loadFailedTitle: 'कोई अन्य त्रुटि हुई',
    resultLoadFailed:
      'परिणाम लोड करते समय कोई अनपेक्षित त्रुटि हुई। कृपया बाद में फिर से प्रयास करें।',
    comparisonLoadFailed:
      'तुलना लोड करते समय कोई अनपेक्षित त्रुटि हुई। कृपया बाद में फिर से प्रयास करें।',
    unexpectedTitle: 'कुछ गलत हो गया',
    unexpectedDescription:
      'कोई अनपेक्षित त्रुटि हुई। कृपया फिर से प्रयास करें।',
    goBack: 'पिछले पेज पर वापस जाएँ',
    tryAgain: 'फिर से प्रयास करें',
    recovering: 'पेज पुनर्स्थापित किया जा रहा है'
  },
  id: {
    pageNotFoundTitle: 'Halaman tidak ditemukan',
    pageNotFound: 'Halaman yang diminta tidak dapat ditemukan.',
    resultNotFoundTitle: 'Hasil tes tidak ditemukan',
    resultNotFound:
      'Tidak ada hasil tes tersimpan untuk ID ini. Periksa ID lalu coba lagi.',
    comparisonNotFoundTitle: 'Hasil perbandingan tidak ditemukan',
    comparisonNotFound:
      'Setidaknya satu hasil tes tersimpan dalam perbandingan ini tidak ditemukan, sehingga perbandingan tidak dapat ditampilkan.',
    invalidResultIdTitle: 'ID hasil tidak valid',
    invalidResultId: 'Masukkan ID hasil 24 karakter yang valid.',
    duplicateResultId: 'Hasil ini sudah ditambahkan.',
    invalidComparisonTitle: 'Tautan perbandingan tidak valid',
    invalidComparison:
      'Tautan perbandingan ini salah format atau berisi data hasil yang tidak valid.',
    loadFailedTitle: 'Terjadi kesalahan lain',
    resultLoadFailed:
      'Terjadi kesalahan tak terduga saat memuat hasil. Coba lagi nanti.',
    comparisonLoadFailed:
      'Terjadi kesalahan tak terduga saat memuat perbandingan. Coba lagi nanti.',
    unexpectedTitle: 'Terjadi kesalahan',
    unexpectedDescription: 'Terjadi kesalahan tak terduga. Coba lagi.',
    goBack: 'Kembali ke halaman sebelumnya',
    tryAgain: 'Coba lagi',
    recovering: 'Memulihkan halaman'
  },
  is: {
    pageNotFoundTitle: 'Síða fannst ekki',
    pageNotFound: 'Umbeðin síða fannst ekki.',
    resultNotFoundTitle: 'Prófniðurstaða fannst ekki',
    resultNotFound:
      'Engin vistuð prófniðurstaða fannst fyrir þetta auðkenni. Athugaðu auðkennið og reyndu aftur.',
    comparisonNotFoundTitle: 'Samanburðarniðurstöður fundust ekki',
    comparisonNotFound:
      'Að minnsta kosti ein vistuð prófniðurstaða í þessum samanburði fannst ekki og því er ekki hægt að birta samanburðinn.',
    invalidResultIdTitle: 'Ógilt niðurstöðuauðkenni',
    invalidResultId: 'Sláðu inn gilt 24 stafa niðurstöðuauðkenni.',
    duplicateResultId: 'Þessari niðurstöðu hefur þegar verið bætt við.',
    invalidComparisonTitle: 'Ógildur samanburðarhlekkur',
    invalidComparison:
      'Þessi samanburðarhlekkur er rangt sniðinn eða inniheldur ógild niðurstöðugögn.',
    loadFailedTitle: 'Önnur villa kom upp',
    resultLoadFailed:
      'Óvænt villa kom upp við að hlaða prófniðurstöðunni. Reyndu aftur síðar.',
    comparisonLoadFailed:
      'Óvænt villa kom upp við að hlaða samanburðinum. Reyndu aftur síðar.',
    unexpectedTitle: 'Eitthvað fór úrskeiðis',
    unexpectedDescription: 'Óvænt villa kom upp. Reyndu aftur.',
    goBack: 'Fara aftur á fyrri síðu',
    tryAgain: 'Reyna aftur',
    recovering: 'Endurheimti síðuna'
  },
  it: {
    pageNotFoundTitle: 'Pagina non trovata',
    pageNotFound: 'La pagina richiesta non è stata trovata.',
    resultNotFoundTitle: 'Risultato non trovato',
    resultNotFound:
      'Non è stato trovato alcun risultato salvato per questo ID. Controlla l’ID e riprova.',
    comparisonNotFoundTitle: 'Risultati del confronto non trovati',
    comparisonNotFound:
      'Non è stato trovato almeno un risultato salvato in questo confronto, quindi il confronto non può essere visualizzato.',
    invalidResultIdTitle: 'ID risultato non valido',
    invalidResultId: 'Inserisci un ID risultato valido di 24 caratteri.',
    duplicateResultId: 'Questo risultato è già stato aggiunto.',
    invalidComparisonTitle: 'Link di confronto non valido',
    invalidComparison:
      'Questo link di confronto non è corretto o contiene dati di risultato non validi.',
    loadFailedTitle: 'Si è verificato un altro errore',
    resultLoadFailed:
      'Si è verificato un errore imprevisto durante il caricamento del risultato. Riprova più tardi.',
    comparisonLoadFailed:
      'Si è verificato un errore imprevisto durante il caricamento del confronto. Riprova più tardi.',
    unexpectedTitle: 'Qualcosa è andato storto',
    unexpectedDescription: 'Si è verificato un errore imprevisto. Riprova.',
    goBack: 'Torna alla pagina precedente',
    tryAgain: 'Riprova',
    recovering: 'Ripristino della pagina'
  },
  ja: {
    pageNotFoundTitle: 'ページが見つかりません',
    pageNotFound: '指定されたページが見つかりませんでした。',
    resultNotFoundTitle: 'テスト結果が見つかりません',
    resultNotFound:
      'この ID に対応する保存済みのテスト結果が見つかりません。ID を確認して、もう一度お試しください。',
    comparisonNotFoundTitle: '比較結果が見つかりません',
    comparisonNotFound:
      'この比較に含まれる保存済みのテスト結果が少なくとも 1 件見つからないため、比較を表示できません。',
    invalidResultIdTitle: '結果 ID が無効です',
    invalidResultId: '24 文字の有効な結果 ID を入力してください。',
    duplicateResultId: 'この結果はすでに追加されています。',
    invalidComparisonTitle: '比較リンクが無効です',
    invalidComparison:
      'この比較リンクの形式が正しくないか、無効な結果データが含まれています。',
    loadFailedTitle: '別のエラーが発生しました',
    resultLoadFailed:
      '結果の読み込み中に予期しないエラーが発生しました。しばらくしてからもう一度お試しください。',
    comparisonLoadFailed:
      '比較の読み込み中に予期しないエラーが発生しました。しばらくしてからもう一度お試しください。',
    unexpectedTitle: '問題が発生しました',
    unexpectedDescription:
      '予期しないエラーが発生しました。もう一度お試しください。',
    goBack: '前のページに戻る',
    tryAgain: 'もう一度試す',
    recovering: 'ページを復元しています'
  },
  ko: {
    pageNotFoundTitle: '페이지를 찾을 수 없습니다',
    pageNotFound: '요청한 페이지를 찾을 수 없습니다.',
    resultNotFoundTitle: '검사 결과를 찾을 수 없습니다',
    resultNotFound:
      '이 ID에 해당하는 저장된 검사 결과를 찾을 수 없습니다. ID를 확인한 후 다시 시도해 주세요.',
    comparisonNotFoundTitle: '비교 결과를 찾을 수 없습니다',
    comparisonNotFound:
      '이 비교에 포함된 저장된 검사 결과 중 하나 이상을 찾을 수 없어 비교를 표시할 수 없습니다.',
    invalidResultIdTitle: '결과 ID가 올바르지 않습니다',
    invalidResultId: '유효한 24자 결과 ID를 입력해 주세요.',
    duplicateResultId: '이 결과는 이미 추가되었습니다.',
    invalidComparisonTitle: '비교 링크가 올바르지 않습니다',
    invalidComparison:
      '이 비교 링크의 형식이 잘못되었거나 유효하지 않은 결과 데이터가 포함되어 있습니다.',
    loadFailedTitle: '다른 오류가 발생했습니다',
    resultLoadFailed:
      '결과를 불러오는 중 예기치 않은 오류가 발생했습니다. 나중에 다시 시도해 주세요.',
    comparisonLoadFailed:
      '비교를 불러오는 중 예기치 않은 오류가 발생했습니다. 나중에 다시 시도해 주세요.',
    unexpectedTitle: '문제가 발생했습니다',
    unexpectedDescription:
      '예기치 않은 오류가 발생했습니다. 다시 시도해 주세요.',
    goBack: '이전 페이지로 돌아가기',
    tryAgain: '다시 시도',
    recovering: '페이지를 복구하는 중입니다'
  },
  no: {
    pageNotFoundTitle: 'Siden ble ikke funnet',
    pageNotFound: 'Den forespurte siden ble ikke funnet.',
    resultNotFoundTitle: 'Testresultatet ble ikke funnet',
    resultNotFound:
      'Det ble ikke funnet noe lagret testresultat for denne ID-en. Kontroller ID-en og prøv igjen.',
    comparisonNotFoundTitle: 'Sammenligningsresultatene ble ikke funnet',
    comparisonNotFound:
      'Minst ett lagret testresultat i denne sammenligningen ble ikke funnet, så sammenligningen kan ikke vises.',
    invalidResultIdTitle: 'Ugyldig resultat-ID',
    invalidResultId: 'Skriv inn en gyldig resultat-ID på 24 tegn.',
    duplicateResultId: 'Dette resultatet er allerede lagt til.',
    invalidComparisonTitle: 'Ugyldig sammenligningslenke',
    invalidComparison:
      'Denne sammenligningslenken er feilformatert eller inneholder ugyldige resultatdata.',
    loadFailedTitle: 'Det oppsto en annen feil',
    resultLoadFailed:
      'Det oppsto en uventet feil under lasting av resultatet. Prøv igjen senere.',
    comparisonLoadFailed:
      'Det oppsto en uventet feil under lasting av sammenligningen. Prøv igjen senere.',
    unexpectedTitle: 'Noe gikk galt',
    unexpectedDescription: 'Det oppsto en uventet feil. Prøv igjen.',
    goBack: 'Gå tilbake til forrige side',
    tryAgain: 'Prøv igjen',
    recovering: 'Gjenoppretter siden'
  },
  pl: {
    pageNotFoundTitle: 'Nie znaleziono strony',
    pageNotFound: 'Nie udało się znaleźć żądanej strony.',
    resultNotFoundTitle: 'Nie znaleziono wyniku testu',
    resultNotFound:
      'Nie znaleziono zapisanego wyniku testu dla tego identyfikatora. Sprawdź identyfikator i spróbuj ponownie.',
    comparisonNotFoundTitle: 'Nie znaleziono wyników do porównania',
    comparisonNotFound:
      'Nie znaleziono co najmniej jednego zapisanego wyniku w tym porównaniu, dlatego nie można go wyświetlić.',
    invalidResultIdTitle: 'Nieprawidłowy identyfikator wyniku',
    invalidResultId: 'Wprowadź prawidłowy 24-znakowy identyfikator wyniku.',
    duplicateResultId: 'Ten wynik został już dodany.',
    invalidComparisonTitle: 'Nieprawidłowy link porównania',
    invalidComparison:
      'Ten link porównania jest nieprawidłowy lub zawiera nieprawidłowe dane wyników.',
    loadFailedTitle: 'Wystąpił inny błąd',
    resultLoadFailed:
      'Podczas wczytywania wyniku wystąpił nieoczekiwany błąd. Spróbuj ponownie później.',
    comparisonLoadFailed:
      'Podczas wczytywania porównania wystąpił nieoczekiwany błąd. Spróbuj ponownie później.',
    unexpectedTitle: 'Coś poszło nie tak',
    unexpectedDescription: 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie.',
    goBack: 'Wróć do poprzedniej strony',
    tryAgain: 'Spróbuj ponownie',
    recovering: 'Przywracanie strony'
  },
  pt: {
    pageNotFoundTitle: 'Página não encontrada',
    pageNotFound: 'Não foi possível encontrar a página solicitada.',
    resultNotFoundTitle: 'Resultado não encontrado',
    resultNotFound:
      'Não foi encontrado nenhum resultado guardado para este ID. Verifique o ID e tente novamente.',
    comparisonNotFoundTitle: 'Resultados da comparação não encontrados',
    comparisonNotFound:
      'Não foi possível encontrar pelo menos um resultado guardado nesta comparação, por isso a comparação não pode ser apresentada.',
    invalidResultIdTitle: 'ID de resultado inválido',
    invalidResultId: 'Introduza um ID de resultado válido com 24 caracteres.',
    duplicateResultId: 'Este resultado já foi adicionado.',
    invalidComparisonTitle: 'Ligação de comparação inválida',
    invalidComparison:
      'Esta ligação de comparação está malformada ou contém dados de resultado inválidos.',
    loadFailedTitle: 'Ocorreu outro erro',
    resultLoadFailed:
      'Ocorreu um erro inesperado ao carregar o resultado. Tente novamente mais tarde.',
    comparisonLoadFailed:
      'Ocorreu um erro inesperado ao carregar a comparação. Tente novamente mais tarde.',
    unexpectedTitle: 'Algo correu mal',
    unexpectedDescription: 'Ocorreu um erro inesperado. Tente novamente.',
    goBack: 'Voltar à página anterior',
    tryAgain: 'Tentar novamente',
    recovering: 'A restaurar a página'
  },
  ru: {
    pageNotFoundTitle: 'Страница не найдена',
    pageNotFound: 'Запрошенная страница не найдена.',
    resultNotFoundTitle: 'Результат теста не найден',
    resultNotFound:
      'Для этого ID не найден сохранённый результат теста. Проверьте ID и повторите попытку.',
    comparisonNotFoundTitle: 'Результаты для сравнения не найдены',
    comparisonNotFound:
      'Не найден как минимум один сохранённый результат из этого сравнения, поэтому сравнение невозможно показать.',
    invalidResultIdTitle: 'Недействительный ID результата',
    invalidResultId: 'Введите действительный 24-значный ID результата.',
    duplicateResultId: 'Этот результат уже добавлен.',
    invalidComparisonTitle: 'Недействительная ссылка на сравнение',
    invalidComparison:
      'Эта ссылка на сравнение имеет неверный формат или содержит недействительные данные результатов.',
    loadFailedTitle: 'Произошла другая ошибка',
    resultLoadFailed:
      'При загрузке результата произошла непредвиденная ошибка. Повторите попытку позже.',
    comparisonLoadFailed:
      'При загрузке сравнения произошла непредвиденная ошибка. Повторите попытку позже.',
    unexpectedTitle: 'Что-то пошло не так',
    unexpectedDescription:
      'Произошла непредвиденная ошибка. Повторите попытку.',
    goBack: 'Вернуться на предыдущую страницу',
    tryAgain: 'Повторить попытку',
    recovering: 'Восстановление страницы'
  },
  sv: {
    pageNotFoundTitle: 'Sidan hittades inte',
    pageNotFound: 'Den begärda sidan kunde inte hittas.',
    resultNotFoundTitle: 'Testresultatet hittades inte',
    resultNotFound:
      'Inget sparat testresultat hittades för detta ID. Kontrollera ID:t och försök igen.',
    comparisonNotFoundTitle: 'Jämförelseresultaten hittades inte',
    comparisonNotFound:
      'Minst ett sparat testresultat i den här jämförelsen hittades inte, så jämförelsen kan inte visas.',
    invalidResultIdTitle: 'Ogiltigt resultat-ID',
    invalidResultId: 'Ange ett giltigt resultat-ID med 24 tecken.',
    duplicateResultId: 'Det här resultatet har redan lagts till.',
    invalidComparisonTitle: 'Ogiltig jämförelselänk',
    invalidComparison:
      'Den här jämförelselänken är felaktig eller innehåller ogiltiga resultatdata.',
    loadFailedTitle: 'Ett annat fel inträffade',
    resultLoadFailed:
      'Ett oväntat fel inträffade när resultatet lästes in. Försök igen senare.',
    comparisonLoadFailed:
      'Ett oväntat fel inträffade när jämförelsen lästes in. Försök igen senare.',
    unexpectedTitle: 'Något gick fel',
    unexpectedDescription: 'Ett oväntat fel inträffade. Försök igen.',
    goBack: 'Gå tillbaka till föregående sida',
    tryAgain: 'Försök igen',
    recovering: 'Återställer sidan'
  },
  th: {
    pageNotFoundTitle: 'ไม่พบหน้า',
    pageNotFound: 'ไม่พบหน้าที่คุณร้องขอ',
    resultNotFoundTitle: 'ไม่พบผลการทดสอบ',
    resultNotFound:
      'ไม่พบผลการทดสอบที่บันทึกไว้สำหรับ ID นี้ โปรดตรวจสอบ ID แล้วลองอีกครั้ง',
    comparisonNotFoundTitle: 'ไม่พบผลลัพธ์สำหรับการเปรียบเทียบ',
    comparisonNotFound:
      'ไม่พบผลการทดสอบที่บันทึกไว้อย่างน้อยหนึ่งรายการในการเปรียบเทียบนี้ จึงไม่สามารถแสดงการเปรียบเทียบได้',
    invalidResultIdTitle: 'ID ผลลัพธ์ไม่ถูกต้อง',
    invalidResultId: 'โปรดป้อน ID ผลลัพธ์ที่ถูกต้องจำนวน 24 ตัวอักษร',
    duplicateResultId: 'เพิ่มผลลัพธ์นี้แล้ว',
    invalidComparisonTitle: 'ลิงก์เปรียบเทียบไม่ถูกต้อง',
    invalidComparison:
      'ลิงก์เปรียบเทียบนี้มีรูปแบบไม่ถูกต้องหรือมีข้อมูลผลลัพธ์ที่ไม่ถูกต้อง',
    loadFailedTitle: 'เกิดข้อผิดพลาดอื่น',
    resultLoadFailed:
      'เกิดข้อผิดพลาดที่ไม่คาดคิดขณะโหลดผลลัพธ์ โปรดลองอีกครั้งในภายหลัง',
    comparisonLoadFailed:
      'เกิดข้อผิดพลาดที่ไม่คาดคิดขณะโหลดการเปรียบเทียบ โปรดลองอีกครั้งในภายหลัง',
    unexpectedTitle: 'เกิดข้อผิดพลาด',
    unexpectedDescription: 'เกิดข้อผิดพลาดที่ไม่คาดคิด โปรดลองอีกครั้ง',
    goBack: 'กลับไปหน้าก่อนหน้า',
    tryAgain: 'ลองอีกครั้ง',
    recovering: 'กำลังกู้คืนหน้า'
  },
  uk: {
    pageNotFoundTitle: 'Сторінку не знайдено',
    pageNotFound: 'Не вдалося знайти запитану сторінку.',
    resultNotFoundTitle: 'Результат тесту не знайдено',
    resultNotFound:
      'Для цього ID не знайдено збереженого результату тесту. Перевірте ID і повторіть спробу.',
    comparisonNotFoundTitle: 'Результати для порівняння не знайдено',
    comparisonNotFound:
      'Не знайдено принаймні один збережений результат у цьому порівнянні, тому порівняння неможливо показати.',
    invalidResultIdTitle: 'Недійсний ID результату',
    invalidResultId: 'Введіть дійсний 24-значний ID результату.',
    duplicateResultId: 'Цей результат уже додано.',
    invalidComparisonTitle: 'Недійсне посилання на порівняння',
    invalidComparison:
      'Це посилання на порівняння має неправильний формат або містить недійсні дані результатів.',
    loadFailedTitle: 'Сталася інша помилка',
    resultLoadFailed:
      'Під час завантаження результату сталася неочікувана помилка. Спробуйте пізніше.',
    comparisonLoadFailed:
      'Під час завантаження порівняння сталася неочікувана помилка. Спробуйте пізніше.',
    unexpectedTitle: 'Щось пішло не так',
    unexpectedDescription: 'Сталася неочікувана помилка. Спробуйте ще раз.',
    goBack: 'Повернутися на попередню сторінку',
    tryAgain: 'Спробувати ще раз',
    recovering: 'Відновлення сторінки'
  },
  sq: {
    pageNotFoundTitle: 'Faqja nuk u gjet',
    pageNotFound: 'Faqja e kërkuar nuk mund të gjendej.',
    resultNotFoundTitle: 'Rezultati nuk u gjet',
    resultNotFound:
      'Nuk u gjet asnjë rezultat testimi i ruajtur për këtë ID. Kontrollo ID-në dhe provo sërish.',
    comparisonNotFoundTitle: 'Rezultatet e krahasimit nuk u gjetën',
    comparisonNotFound:
      'Të paktën një rezultat i ruajtur i testit në këtë krahasim nuk mund të gjendej, kështu që krahasimi nuk mund të shfaqet.',
    invalidResultIdTitle: 'ID e pavlefshme e rezultatit',
    invalidResultId: 'Fut një ID të vlefshme rezultati me 24 karaktere.',
    duplicateResultId: 'Ky rezultat tashmë është shtuar.',
    invalidComparisonTitle: 'Lidhje e pavlefshme krahasimi',
    invalidComparison:
      'Kjo lidhje krahasimi është e keqformuar ose përmban të dhëna të pavlefshme rezultati.',
    loadFailedTitle: 'Ndodhi një gabim tjetër',
    resultLoadFailed:
      'Ndodhi një gabim i papritur gjatë ngarkimit të rezultatit. Ju lutemi provoni përsëri më vonë.',
    comparisonLoadFailed:
      'Ndodhi një gabim i papritur gjatë ngarkimit të krahasimit. Ju lutemi provoni përsëri më vonë.',
    unexpectedTitle: 'Diçka shkoi keq',
    unexpectedDescription:
      'Ndodhi një gabim i papritur. Ju lutemi provoni përsëri.',
    goBack: 'Kthehuni në faqen e mëparshme',
    tryAgain: 'Provo sërish',
    recovering: 'Rikuperimi i faqes'
  },
  hy: {
    pageNotFoundTitle: 'Էջը չի գտնվել',
    pageNotFound: 'Հայցվող էջը չհաջողվեց գտնել:',
    resultNotFoundTitle: 'Արդյունքը չի գտնվել',
    resultNotFound:
      'Այս ID-ի համար պահպանված փորձարկման արդյունք չի գտնվել: Ստուգեք ID-ն և նորից փորձեք:',
    comparisonNotFoundTitle: 'Համեմատության արդյունքները չեն գտնվել',
    comparisonNotFound:
      'Այս համեմատության մեջ առնվազն մեկ պահպանված թեստի արդյունք չի գտնվել, ուստի համեմատությունը չի կարող ցուցադրվել:',
    invalidResultIdTitle: 'Անվավեր արդյունքի ID',
    invalidResultId: 'Մուտքագրեք վավեր 24 նիշանոց արդյունքի ID:',
    duplicateResultId: 'Այս արդյունքն արդեն ավելացվել է։',
    invalidComparisonTitle: 'Համեմատության անվավեր հղում',
    invalidComparison:
      'Համեմատության այս հղումը սխալ ձևավորված է կամ պարունակում է անվավեր արդյունքների տվյալներ:',
    loadFailedTitle: 'Տեղի ունեցավ այլ սխալ',
    resultLoadFailed:
      'Արդյունքը բեռնելիս անսպասելի սխալ առաջացավ: Խնդրում ենք փորձել ավելի ուշ:',
    comparisonLoadFailed:
      'Համեմատությունը բեռնելիս անսպասելի սխալ տեղի ունեցավ: Խնդրում ենք փորձել ավելի ուշ:',
    unexpectedTitle: 'Սխալ առաջացավ',
    unexpectedDescription:
      'Անսպասելի սխալ տեղի ունեցավ: Խնդրում ենք կրկին փորձել:',
    goBack: 'Վերադարձ դեպի նախորդ էջ',
    tryAgain: 'Նորից փորձեք',
    recovering: 'Էջի վերականգնում'
  },
  bn: {
    pageNotFoundTitle: 'পেজ পাওয়া যায়নি',
    pageNotFound: 'অনুরোধ করা পৃষ্ঠা খুঁজে পাওয়া যায়নি.',
    resultNotFoundTitle: 'ফলাফল পাওয়া যায়নি',
    resultNotFound:
      'এই আইডির জন্য কোনো সংরক্ষিত পরীক্ষার ফলাফল পাওয়া যায়নি। আইডি চেক করে আবার চেষ্টা করুন।',
    comparisonNotFoundTitle: 'তুলনা ফলাফল পাওয়া যায়নি',
    comparisonNotFound:
      'এই তুলনাতে অন্তত একটি সংরক্ষিত পরীক্ষার ফলাফল পাওয়া যায়নি, তাই তুলনাটি প্রদর্শন করা যাবে না।',
    invalidResultIdTitle: 'অবৈধ ফলাফল ID',
    invalidResultId: 'একটি বৈধ 24-অক্ষরের ফলাফল আইডি লিখুন।',
    duplicateResultId: 'এই ফলাফল ইতিমধ্যে যোগ করা হয়েছে.',
    invalidComparisonTitle: 'অবৈধ তুলনা লিঙ্ক',
    invalidComparison:
      'এই তুলনা লিঙ্কটি ত্রুটিপূর্ণ বা অবৈধ ফলাফল ডেটা রয়েছে৷',
    loadFailedTitle: 'একটি ভিন্ন ত্রুটি ঘটেছে',
    resultLoadFailed:
      'ফলাফল লোড করার সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে৷ পরে আবার চেষ্টা করুন.',
    comparisonLoadFailed:
      'তুলনা লোড করার সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে৷ পরে আবার চেষ্টা করুন.',
    unexpectedTitle: 'কিছু ভুল হয়েছে',
    unexpectedDescription: 'একটি অপ্রত্যাশিত ত্রুটি ঘটেছে৷ আবার চেষ্টা করুন.',
    goBack: 'আগের পৃষ্ঠায় ফিরে যান',
    tryAgain: 'আবার চেষ্টা করুন',
    recovering: 'পৃষ্ঠা পুনরুদ্ধার করা হচ্ছে'
  },
  'pt-br': {
    pageNotFoundTitle: 'Página não encontrada',
    pageNotFound: 'A página solicitada não foi encontrada.',
    resultNotFoundTitle: 'Resultado não encontrado',
    resultNotFound:
      'Nenhum resultado de teste salvo foi encontrado para este ID. Verifique o ID e tente novamente.',
    comparisonNotFoundTitle: 'Resultados de comparação não encontrados',
    comparisonNotFound:
      'Não foi possível encontrar pelo menos um resultado de teste salvo nesta comparação, portanto a comparação não pode ser exibida.',
    invalidResultIdTitle: 'ID de resultado inválido',
    invalidResultId: 'Insira um ID de resultado válido de 24 caracteres.',
    duplicateResultId: 'Este resultado já foi adicionado.',
    invalidComparisonTitle: 'Link de comparação inválido',
    invalidComparison:
      'Este link de comparação está malformado ou contém dados de resultados inválidos.',
    loadFailedTitle: 'Ocorreu um erro diferente',
    resultLoadFailed:
      'Ocorreu um erro inesperado ao carregar o resultado. Por favor, tente novamente mais tarde.',
    comparisonLoadFailed:
      'Ocorreu um erro inesperado ao carregar a comparação. Por favor, tente novamente mais tarde.',
    unexpectedTitle: 'Algo deu errado',
    unexpectedDescription:
      'Ocorreu um erro inesperado. Por favor, tente novamente.',
    goBack: 'Voltar para a página anterior',
    tryAgain: 'Tente novamente',
    recovering: 'Recuperando a página'
  },
  bg: {
    pageNotFoundTitle: 'Страницата не е намерена',
    pageNotFound: 'Исканата страница не може да бъде намерена.',
    resultNotFoundTitle: 'Резултатът не е намерен',
    resultNotFound:
      'Не е намерен записан резултат от теста за този идентификатор. Проверете ID и опитайте отново.',
    comparisonNotFoundTitle: 'Резултатите от сравнението не са намерени',
    comparisonNotFound:
      'Поне един записан резултат от теста в това сравнение не може да бъде намерен, така че сравнението не може да бъде показано.',
    invalidResultIdTitle: 'Невалиден ИД на резултата',
    invalidResultId: 'Въведете валиден 24-знаков идентификатор на резултата.',
    duplicateResultId: 'Този резултат вече е добавен.',
    invalidComparisonTitle: 'Невалидна връзка за сравнение',
    invalidComparison:
      'Тази връзка за сравнение е деформирана или съдържа невалидни резултати.',
    loadFailedTitle: 'Възникна различна грешка',
    resultLoadFailed:
      'Възникна неочаквана грешка при зареждането на резултата. Моля, опитайте отново по-късно.',
    comparisonLoadFailed:
      'Възникна неочаквана грешка при зареждането на сравнението. Моля, опитайте отново по-късно.',
    unexpectedTitle: 'Нещо се обърка',
    unexpectedDescription: 'Възникна неочаквана грешка. Моля, опитайте отново.',
    goBack: 'Върнете се на предишната страница',
    tryAgain: 'Опитайте отново',
    recovering: 'Възстановяване на страницата'
  },
  ca: {
    pageNotFoundTitle: "No s'ha trobat la pàgina",
    pageNotFound: "No s'ha pogut trobar la pàgina sol·licitada.",
    resultNotFoundTitle: "No s'ha trobat el resultat",
    resultNotFound:
      "No s'ha trobat cap resultat de prova desat per a aquest identificador. Comprova l'identificador i torna-ho a provar.",
    comparisonNotFoundTitle: "No s'han trobat resultats de comparació",
    comparisonNotFound:
      "No s'ha pogut trobar almenys un resultat de la prova desat en aquesta comparació, de manera que la comparació no es pot mostrar.",
    invalidResultIdTitle: 'Identificador de resultat no vàlid',
    invalidResultId:
      'Introduïu un identificador de resultat vàlid de 24 caràcters.',
    duplicateResultId: "Aquest resultat ja s'ha afegit.",
    invalidComparisonTitle: 'Enllaç de comparació no vàlid',
    invalidComparison:
      'Aquest enllaç de comparació té un format incorrecte o conté dades de resultats no vàlides.',
    loadFailedTitle: "S'ha produït un error diferent",
    resultLoadFailed:
      "S'ha produït un error inesperat en carregar el resultat. Si us plau, torna-ho a provar més tard.",
    comparisonLoadFailed:
      "S'ha produït un error inesperat en carregar la comparació. Si us plau, torna-ho a provar més tard.",
    unexpectedTitle: 'Alguna cosa va fallar',
    unexpectedDescription:
      "S'ha produït un error inesperat. Si us plau, torna-ho a provar.",
    goBack: 'Torna a la pàgina anterior',
    tryAgain: 'Torna-ho a provar',
    recovering: 'Recuperant la pàgina'
  },
  hr: {
    pageNotFoundTitle: 'Stranica nije pronađena',
    pageNotFound: 'Tražena stranica nije pronađena.',
    resultNotFoundTitle: 'Rezultat nije pronađen',
    resultNotFound:
      'Nije pronađen nijedan spremljeni rezultat testa za ovaj ID. Provjerite ID i pokušajte ponovno.',
    comparisonNotFoundTitle: 'Rezultati usporedbe nisu pronađeni',
    comparisonNotFound:
      'Najmanje jedan spremljeni rezultat testa u ovoj usporedbi nije moguće pronaći, pa se usporedba ne može prikazati.',
    invalidResultIdTitle: 'Nevažeći ID rezultata',
    invalidResultId: 'Unesite važeći ID rezultata od 24 znaka.',
    duplicateResultId: 'Ovaj rezultat je već dodan.',
    invalidComparisonTitle: 'Nevažeća veza za usporedbu',
    invalidComparison:
      'Ova veza za usporedbu je pogrešno oblikovana ili sadrži nevažeće podatke o rezultatima.',
    loadFailedTitle: 'Dogodila se drugačija pogreška',
    resultLoadFailed:
      'Došlo je do neočekivane pogreške prilikom učitavanja rezultata. Pokušajte ponovno kasnije.',
    comparisonLoadFailed:
      'Došlo je do neočekivane pogreške prilikom učitavanja usporedbe. Pokušajte ponovno kasnije.',
    unexpectedTitle: 'Nešto nije u redu',
    unexpectedDescription:
      'Došlo je do neočekivane pogreške. Molimo pokušajte ponovo.',
    goBack: 'Povratak na prethodnu stranicu',
    tryAgain: 'Pokušajte ponovno',
    recovering: 'Oporavak stranice'
  },
  cs: {
    pageNotFoundTitle: 'Stránka nenalezena',
    pageNotFound: 'Požadovaná stránka nebyla nalezena.',
    resultNotFoundTitle: 'Výsledek nenalezen',
    resultNotFound:
      'Pro toto ID nebyl nalezen žádný uložený výsledek testu. Zkontrolujte ID a zkuste to znovu.',
    comparisonNotFoundTitle: 'Výsledky srovnání nebyly nalezeny',
    comparisonNotFound:
      'Alespoň jeden uložený výsledek testu v tomto srovnání nebyl nalezen, takže srovnání nelze zobrazit.',
    invalidResultIdTitle: 'Neplatné ID výsledku',
    invalidResultId: 'Zadejte platné 24místné ID výsledku.',
    duplicateResultId: 'Tento výsledek již byl přidán.',
    invalidComparisonTitle: 'Neplatný odkaz na srovnání',
    invalidComparison:
      'Tento odkaz na porovnání má nesprávný tvar nebo obsahuje neplatná data výsledků.',
    loadFailedTitle: 'Došlo k jiné chybě',
    resultLoadFailed:
      'Při načítání výsledku došlo k neočekávané chybě. Zkuste to znovu později.',
    comparisonLoadFailed:
      'Při načítání porovnání došlo k neočekávané chybě. Zkuste to znovu později.',
    unexpectedTitle: 'Něco se pokazilo',
    unexpectedDescription: 'Došlo k neočekávané chybě. Zkuste to prosím znovu.',
    goBack: 'Vraťte se na předchozí stránku',
    tryAgain: 'Zkuste to znovu',
    recovering: 'Obnovení stránky'
  },
  nl: {
    pageNotFoundTitle: 'Pagina niet gevonden',
    pageNotFound: 'De opgevraagde pagina kon niet worden gevonden.',
    resultNotFoundTitle: 'Resultaat niet gevonden',
    resultNotFound:
      'Er is geen opgeslagen testresultaat gevonden voor deze ID. Controleer de ID en probeer het opnieuw.',
    comparisonNotFoundTitle: 'Vergelijkingsresultaten niet gevonden',
    comparisonNotFound:
      'Tenminste één opgeslagen testresultaat in deze vergelijking kon niet worden gevonden, dus de vergelijking kan niet worden weergegeven.',
    invalidResultIdTitle: 'Ongeldige resultaat-ID',
    invalidResultId: 'Voer een geldige resultaat-ID van 24 tekens in.',
    duplicateResultId: 'Dit resultaat is al toegevoegd.',
    invalidComparisonTitle: 'Ongeldige vergelijkingslink',
    invalidComparison:
      'Deze vergelijkingslink is onjuist opgemaakt of bevat ongeldige resultaatgegevens.',
    loadFailedTitle: 'Er is een andere fout opgetreden',
    resultLoadFailed:
      'Er is een onverwachte fout opgetreden tijdens het laden van het resultaat. Probeer het later opnieuw.',
    comparisonLoadFailed:
      'Er is een onverwachte fout opgetreden tijdens het laden van de vergelijking. Probeer het later opnieuw.',
    unexpectedTitle: 'Er is iets misgegaan',
    unexpectedDescription:
      'Er is een onverwachte fout opgetreden. Probeer het opnieuw.',
    goBack: 'Ga terug naar de vorige pagina',
    tryAgain: 'Probeer het opnieuw',
    recovering: 'De pagina herstellen'
  },
  et: {
    pageNotFoundTitle: 'Lehte ei leitud',
    pageNotFound: 'Soovitud lehte ei leitud.',
    resultNotFoundTitle: 'Tulemust ei leitud',
    resultNotFound:
      'Selle ID jaoks ei leitud ühtegi salvestatud testitulemust. Kontrollige ID-d ja proovige uuesti.',
    comparisonNotFoundTitle: 'Võrdlustulemusi ei leitud',
    comparisonNotFound:
      'Sellest võrdlusest ei leitud vähemalt ühte salvestatud testitulemust, seega ei saa võrdlust kuvada.',
    invalidResultIdTitle: 'Vale tulemuse ID',
    invalidResultId: 'Sisestage kehtiv 24-kohaline tulemuse ID.',
    duplicateResultId: 'See tulemus on juba lisatud.',
    invalidComparisonTitle: 'Vigane võrdluslink',
    invalidComparison:
      'See võrdluslink on valesti vormindatud või sisaldab kehtetuid tulemuste andmeid.',
    loadFailedTitle: 'Ilmnes teistsugune viga',
    resultLoadFailed:
      'Tulemuse laadimisel ilmnes ootamatu viga. Proovige hiljem uuesti.',
    comparisonLoadFailed:
      'Võrdluse laadimisel ilmnes ootamatu viga. Proovige hiljem uuesti.',
    unexpectedTitle: 'Midagi läks valesti',
    unexpectedDescription: 'Ilmnes ootamatu viga. Palun proovi uuesti.',
    goBack: 'Mine tagasi eelmisele lehele',
    tryAgain: 'Proovi uuesti',
    recovering: 'Lehe taastamine'
  },
  he: {
    pageNotFoundTitle: 'הדף לא נמצא',
    pageNotFound: 'הדף המבוקש לא נמצא.',
    resultNotFoundTitle: 'התוצאה לא נמצאה',
    resultNotFound:
      'לא נמצאה תוצאת בדיקה שמורה עבור מזהה זה. בדוק את המזהה ונסה שוב.',
    comparisonNotFoundTitle: 'תוצאות השוואה לא נמצאו',
    comparisonNotFound:
      'לא ניתן היה למצוא לפחות תוצאת בדיקה אחת שנשמרה בהשוואה זו, ולכן לא ניתן להציג את ההשוואה.',
    invalidResultIdTitle: 'מזהה תוצאה לא חוקי',
    invalidResultId: 'הזן מזהה תוצאה חוקי של 24 תווים.',
    duplicateResultId: 'תוצאה זו כבר נוספה.',
    invalidComparisonTitle: 'קישור השוואה לא חוקי',
    invalidComparison: 'קישור ההשוואה הזה פגום או מכיל נתוני תוצאות לא חוקיים.',
    loadFailedTitle: 'אירעה שגיאה אחרת',
    resultLoadFailed:
      'אירעה שגיאה בלתי צפויה בעת טעינת התוצאה. אנא נסה שוב מאוחר יותר.',
    comparisonLoadFailed:
      'אירעה שגיאה בלתי צפויה בעת טעינת ההשוואה. אנא נסה שוב מאוחר יותר.',
    unexpectedTitle: 'משהו השתבש',
    unexpectedDescription: 'אירעה שגיאה בלתי צפויה. אנא נסה שוב.',
    goBack: 'חזור לעמוד הקודם',
    tryAgain: 'נסה שוב',
    recovering: 'משחזר את הדף'
  },
  hu: {
    pageNotFoundTitle: 'Az oldal nem található',
    pageNotFound: 'A keresett oldal nem található.',
    resultNotFoundTitle: 'Az eredmény nem található',
    resultNotFound:
      'Ehhez az azonosítóhoz nem található mentett teszteredmény. Ellenőrizze az azonosítót, és próbálja újra.',
    comparisonNotFoundTitle: 'Összehasonlítási eredmények nem találhatók',
    comparisonNotFound:
      'Ebben az összehasonlításban legalább egy mentett teszteredmény nem található, ezért az összehasonlítás nem jeleníthető meg.',
    invalidResultIdTitle: 'Érvénytelen eredményazonosító',
    invalidResultId:
      'Adjon meg egy érvényes, 24 karakterből álló eredményazonosítót.',
    duplicateResultId: 'Ezt az eredményt már hozzáadtuk.',
    invalidComparisonTitle: 'Érvénytelen összehasonlító link',
    invalidComparison:
      'Ez az összehasonlító link rosszul formázott vagy érvénytelen eredményadatokat tartalmaz.',
    loadFailedTitle: 'Más hiba történt',
    resultLoadFailed:
      'Váratlan hiba történt az eredmény betöltése közben. Kérjük, próbálja újra később.',
    comparisonLoadFailed:
      'Váratlan hiba történt az összehasonlítás betöltése közben. Kérjük, próbálja újra később.',
    unexpectedTitle: 'Valami elromlott',
    unexpectedDescription: 'Váratlan hiba történt. Kérjük, próbálja újra.',
    goBack: 'Menjen vissza az előző oldalra',
    tryAgain: 'Próbáld újra',
    recovering: 'Az oldal helyreállítása'
  },
  fa: {
    pageNotFoundTitle: 'صفحه پیدا نشد',
    pageNotFound: 'صفحه درخواستی یافت نشد.',
    resultNotFoundTitle: 'نتیجه یافت نشد',
    resultNotFound:
      'هیچ نتیجه تست ذخیره شده ای برای این شناسه یافت نشد. شناسه را بررسی کنید و دوباره امتحان کنید.',
    comparisonNotFoundTitle: 'نتایج مقایسه یافت نشد',
    comparisonNotFound:
      'حداقل یک نتیجه تست ذخیره شده در این مقایسه یافت نشد، بنابراین مقایسه نمایش داده نمی شود.',
    invalidResultIdTitle: 'شناسه نتیجه نامعتبر است',
    invalidResultId: 'یک شناسه نتیجه 24 نویسه‌ای معتبر وارد کنید.',
    duplicateResultId: 'این نتیجه قبلاً اضافه شده است.',
    invalidComparisonTitle: 'لینک مقایسه نامعتبر است',
    invalidComparison:
      'این پیوند مقایسه نادرست است یا حاوی داده‌های نتیجه نامعتبر است.',
    loadFailedTitle: 'یک خطای متفاوت رخ داد',
    resultLoadFailed:
      'هنگام بارگیری نتیجه یک خطای غیرمنتظره روی داد. لطفاً بعداً دوباره امتحان کنید.',
    comparisonLoadFailed:
      'هنگام بارگیری مقایسه، یک خطای غیرمنتظره روی داد. لطفاً بعداً دوباره امتحان کنید.',
    unexpectedTitle: 'مشکلی پیش آمد',
    unexpectedDescription: 'یک خطای غیرمنتظره رخ داد. لطفا دوباره امتحان کنید.',
    goBack: 'به صفحه قبل برگردید',
    tryAgain: 'دوباره امتحان کنید',
    recovering: 'بازیابی صفحه'
  },
  ro: {
    pageNotFoundTitle: 'Pagina nu a fost găsită',
    pageNotFound: 'Pagina solicitată nu a putut fi găsită.',
    resultNotFoundTitle: 'Rezultatul nu a fost găsit',
    resultNotFound:
      'Nu a fost găsit niciun rezultat al testului salvat pentru acest ID. Verificați ID-ul și încercați din nou.',
    comparisonNotFoundTitle: 'Rezultatele comparației nu au fost găsite',
    comparisonNotFound:
      'Cel puțin un rezultat al testului salvat în această comparație nu a putut fi găsit, astfel încât comparația nu poate fi afișată.',
    invalidResultIdTitle: 'ID rezultat nevalid',
    invalidResultId: 'Introduceți un ID valid de rezultat de 24 de caractere.',
    duplicateResultId: 'Acest rezultat a fost deja adăugat.',
    invalidComparisonTitle: 'Link de comparație nevalid',
    invalidComparison:
      'Acest link de comparație este incorect sau conține date de rezultat nevalide.',
    loadFailedTitle: 'A apărut o eroare diferită',
    resultLoadFailed:
      'A apărut o eroare neașteptată la încărcarea rezultatului. Vă rugăm să încercați din nou mai târziu.',
    comparisonLoadFailed:
      'A apărut o eroare neașteptată la încărcarea comparației. Vă rugăm să încercați din nou mai târziu.',
    unexpectedTitle: 'Ceva a mers prost',
    unexpectedDescription:
      'A apărut o eroare neașteptată. Vă rugăm să încercați din nou.',
    goBack: 'Reveniți la pagina anterioară',
    tryAgain: 'Încercați din nou',
    recovering: 'Recuperarea paginii'
  },
  sr: {
    pageNotFoundTitle: 'Страница није пронађена',
    pageNotFound: 'Тражена страница није пронађена.',
    resultNotFoundTitle: 'Резултат није пронађен',
    resultNotFound:
      'Није пронађен ниједан сачуван резултат теста за овај ИД. Проверите ИД и покушајте поново.',
    comparisonNotFoundTitle: 'Резултати поређења нису пронађени',
    comparisonNotFound:
      'Најмање један сачувани резултат теста у овом поређењу није пронађен, тако да поређење не може да се прикаже.',
    invalidResultIdTitle: 'Неважећи ИД резултата',
    invalidResultId: 'Унесите важећи ИД резултата од 24 знака.',
    duplicateResultId: 'Овај резултат је већ додат.',
    invalidComparisonTitle: 'Неважећа веза за поређење',
    invalidComparison:
      'Ова веза за поређење је погрешно обликована или садржи неважеће податке о резултатима.',
    loadFailedTitle: 'Дошло је до другачије грешке',
    resultLoadFailed:
      'Дошло је до неочекиване грешке приликом учитавања резултата. Покушајте поново касније.',
    comparisonLoadFailed:
      'Дошло је до неочекиване грешке при учитавању поређења. Покушајте поново касније.',
    unexpectedTitle: 'Нешто је пошло по злу',
    unexpectedDescription: 'Дошло је до неочекиване грешке. Покушајте поново.',
    goBack: 'Вратите се на претходну страницу',
    tryAgain: 'Покушајте поново',
    recovering: 'Опоравак странице'
  },
  ss: {
    pageNotFoundTitle: 'Likhasi alitfolakali',
    pageNotFound: 'Likhasi leliceliwe alitfolakali.',
    resultNotFoundTitle: 'Umphumela awukatfolakali',
    resultNotFound:
      'Kute umphumela wekuhlola logciniwe lotfolakele wale-ID. Hlola i-ID bese uyazama futsi.',
    comparisonNotFoundTitle: 'Imiphumela yekucatsanisa ayitfolakali',
    comparisonNotFound:
      'Okungenani umphumela munye wekuhlola logciniwe kulokucatsanisa awuzange utfolakale, ngako-ke kucatsanisa akukhonjiswa.',
    invalidResultIdTitle: 'ID yemphumela lengasebenti',
    invalidResultId:
      'Faka i-ID yemphumela lesemtsetfweni lenetinhlavu letingu-24.',
    duplicateResultId: 'Lomphumela sewuvele wengetiwe.',
    invalidComparisonTitle: 'Sixhumanisi sekucatsanisa lesingasebenti',
    invalidComparison:
      'Lesixhumanisi sekucatsanisa asikalungi kahle noma sicuketse idatha yemphumela lengasebenti.',
    loadFailedTitle: 'Kwenteke liphutsa lelehlukile',
    resultLoadFailed:
      'Kwenteke liphutsa lelingakalindzeleki ngesikhatsi kulayisha umphumela. Sicela uphindze uzame ngemuva kwesikhatsi.',
    comparisonLoadFailed:
      'Kwenteke liphutsa lelingakalindzeleki ngesikhatsi kulayisha kucatsanisa. Sicela uphindze uzame ngemuva kwesikhatsi.',
    unexpectedTitle: 'Kukhona lokungahambanga kahle',
    unexpectedDescription:
      'Kwenteke liphutsa lelingakalindzeleki. Sicela uphindze uzame.',
    goBack: 'Buyela ekhasini lelidlule',
    tryAgain: 'Zama futsi',
    recovering: 'Kubuyisa lelikhasi'
  },
  sl: {
    pageNotFoundTitle: 'Stran ni najdena',
    pageNotFound: 'Zahtevane strani ni bilo mogoče najti.',
    resultNotFoundTitle: 'Rezultat ni bil najden',
    resultNotFound:
      'Za ta ID ni bil najden noben shranjen rezultat testa. Preverite ID in poskusite znova.',
    comparisonNotFoundTitle: 'Primerjalni rezultati niso bili najdeni',
    comparisonNotFound:
      'Vsaj enega shranjenega rezultata testa v tej primerjavi ni bilo mogoče najti, zato primerjave ni mogoče prikazati.',
    invalidResultIdTitle: 'Neveljaven ID rezultata',
    invalidResultId: 'Vnesite veljaven 24-mestni ID rezultata.',
    duplicateResultId: 'Ta rezultat je že dodan.',
    invalidComparisonTitle: 'Neveljavna primerjalna povezava',
    invalidComparison:
      'Ta primerjalna povezava je napačno oblikovana ali vsebuje neveljavne podatke o rezultatih.',
    loadFailedTitle: 'Prišlo je do drugačne napake',
    resultLoadFailed:
      'Med nalaganjem rezultata je prišlo do nepričakovane napake. Poskusite znova pozneje.',
    comparisonLoadFailed:
      'Med nalaganjem primerjave je prišlo do nepričakovane napake. Poskusite znova pozneje.',
    unexpectedTitle: 'Nekaj je šlo narobe',
    unexpectedDescription:
      'Prišlo je do nepričakovane napake. prosim poskusite znova',
    goBack: 'Vrni se na prejšnjo stran',
    tryAgain: 'poskusi ponovno',
    recovering: 'Obnavljanje strani'
  },
  tr: {
    pageNotFoundTitle: 'Sayfa bulunamadı',
    pageNotFound: 'İstenilen sayfa bulunamadı.',
    resultNotFoundTitle: 'Sonuç bulunamadı',
    resultNotFound:
      'Bu kimlik için kayıtlı test sonucu bulunamadı. Kimliği kontrol edip tekrar deneyin.',
    comparisonNotFoundTitle: 'Karşılaştırma sonuçları bulunamadı',
    comparisonNotFound:
      'Bu karşılaştırmada en az bir kayıtlı test sonucu bulunamadı, dolayısıyla karşılaştırma görüntülenemiyor.',
    invalidResultIdTitle: 'Geçersiz sonuç kimliği',
    invalidResultId: '24 karakterlik geçerli bir sonuç kimliği girin.',
    duplicateResultId: 'Bu sonuç zaten eklenmiş.',
    invalidComparisonTitle: 'Geçersiz karşılaştırma bağlantısı',
    invalidComparison:
      'Bu karşılaştırma bağlantısı hatalı biçimlendirilmiş veya geçersiz sonuç verileri içeriyor.',
    loadFailedTitle: 'Farklı bir hata oluştu',
    resultLoadFailed:
      'Sonuç yüklenirken beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    comparisonLoadFailed:
      'Karşılaştırma yüklenirken beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    unexpectedTitle: 'Bir şeyler ters gitti',
    unexpectedDescription:
      'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.',
    goBack: 'Önceki sayfaya geri dön',
    tryAgain: 'Tekrar dene',
    recovering: 'Sayfayı kurtarma'
  },
  ur: {
    pageNotFoundTitle: 'صفحہ نہیں ملا',
    pageNotFound: 'مطلوبہ صفحہ نہیں مل سکا۔',
    resultNotFoundTitle: 'نتیجہ نہیں ملا',
    resultNotFound:
      'اس ID کے لیے کوئی محفوظ شدہ ٹیسٹ کا نتیجہ نہیں ملا۔ ID چیک کریں اور دوبارہ کوشش کریں۔',
    comparisonNotFoundTitle: 'موازنہ کے نتائج نہیں ملے',
    comparisonNotFound:
      'اس موازنہ میں کم از کم ایک محفوظ شدہ ٹیسٹ کا نتیجہ نہیں مل سکا، اس لیے موازنہ ظاہر نہیں کیا جا سکتا۔',
    invalidResultIdTitle: 'غلط نتیجہ ID',
    invalidResultId: 'ایک درست 24 حروف کی نتیجہ ID درج کریں۔',
    duplicateResultId: 'یہ نتیجہ پہلے ہی شامل کیا جا چکا ہے۔',
    invalidComparisonTitle: 'غلط موازنہ لنک',
    invalidComparison: 'یہ موازنہ لنک خراب ہے یا اس میں غلط نتائج کا ڈیٹا ہے۔',
    loadFailedTitle: 'ایک مختلف خرابی پیش آگئی',
    resultLoadFailed:
      'نتیجہ لوڈ کرتے وقت ایک غیر متوقع خرابی پیش آگئی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔',
    comparisonLoadFailed:
      'موازنہ لوڈ کرتے وقت ایک غیر متوقع خرابی پیش آگئی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔',
    unexpectedTitle: 'کچھ غلط ہو گیا۔',
    unexpectedDescription:
      'ایک غیر متوقع خرابی پیش آگئی۔ براہ کرم دوبارہ کوشش کریں۔',
    goBack: 'پچھلے صفحے پر واپس جائیں۔',
    tryAgain: 'دوبارہ کوشش کریں۔',
    recovering: 'صفحہ بازیافت کرنا'
  },
  vi: {
    pageNotFoundTitle: 'Không tìm thấy trang',
    pageNotFound: 'Không thể tìm thấy trang được yêu cầu.',
    resultNotFoundTitle: 'Không tìm thấy kết quả',
    resultNotFound:
      'Không tìm thấy kết quả xét nghiệm đã lưu nào cho ID này. Hãy kiểm tra ID và thử lại.',
    comparisonNotFoundTitle: 'Không tìm thấy kết quả so sánh',
    comparisonNotFound:
      'Không thể tìm thấy ít nhất một kết quả kiểm tra đã lưu trong so sánh này, do đó không thể hiển thị so sánh.',
    invalidResultIdTitle: 'ID kết quả không hợp lệ',
    invalidResultId: 'Nhập ID kết quả gồm 24 ký tự hợp lệ.',
    duplicateResultId: 'Kết quả này đã được thêm vào.',
    invalidComparisonTitle: 'Liên kết so sánh không hợp lệ',
    invalidComparison:
      'Liên kết so sánh này không đúng định dạng hoặc chứa dữ liệu kết quả không hợp lệ.',
    loadFailedTitle: 'Đã xảy ra lỗi khác',
    resultLoadFailed:
      'Đã xảy ra lỗi không mong muốn khi tải kết quả. Vui lòng thử lại sau.',
    comparisonLoadFailed:
      'Đã xảy ra lỗi không mong muốn khi tải bản so sánh. Vui lòng thử lại sau.',
    unexpectedTitle: 'Đã xảy ra lỗi',
    unexpectedDescription: 'Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.',
    goBack: 'Quay lại trang trước',
    tryAgain: 'Thử lại',
    recovering: 'Khôi phục trang'
  }
};

errorMessages.sr = serbianObjectToLatin(errorMessages.sr);

export function getErrorMessages(locale: string): ErrorMessages {
  return errorMessages[locale as ErrorLocale] ?? errorMessages.en;
}
