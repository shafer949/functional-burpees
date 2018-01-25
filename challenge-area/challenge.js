const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=18';

 const fetchedQuestionsPromise = async () => {
     try {
         const questions = await fetch(BASE_URL);
         const data = await questions.json();
         const results = await data.results;
         return results;
    } catch (error) {
         console.error(error);
    } 
 };

const removeHTMLEntityQuotesFromQuestions = (data) => {
    const list = data.map(res =>  res.question.includes('&quot;') ? res.question.replace(/&quot;/g, '"') : res.question);
    return list;
    
};
fetchedQuestionsPromise().then((data) => {
    const transformedQuestions = removeHTMLEntityQuotesFromQuestions(data);
    console.log('Results with HTML entities removed:', transformedQuestions);
});


const filterQuestionsByDifficulty = (data, difficulty = 'easy') => {
    return  data.filter(res => res.difficulty === difficulty);
};
fetchedQuestionsPromise().then((data) => {
    const filteredQuestions = filterQuestionsByDifficulty(data);
    console.log('Easy questions only:', filteredQuestions);
});


const sortQuestionsByDifficulty = (data) => {
    return [...data].sort((a,b) => a.difficulty.toUpperCase() > b.difficulty.toUpperCase());
};
fetchedQuestionsPromise().then((data) => {
    const sortedQuestions = sortQuestionsByDifficulty(data);
    console.log('Sorted by difficulty:', sortedQuestions);
});


const questionCountBasedOnDificulty = (data) => {
       const questionCountByDifficulty = {
            easy: [...filterQuestionsByDifficulty(data)],
            medium: [...filterQuestionsByDifficulty(data, 'medium')],
            hard: [...filterQuestionsByDifficulty(data, 'hard')]
        }   
        return questionCountByDifficulty;
};
fetchedQuestionsPromise().then((data) => {
    const questionCount = questionCountBasedOnDificulty(data);
    console.log('Number of questions based on difficulty:', questionCount);
});


const questionCategoryIsTheSame = (data, category = 'Science: Computers') => {
    return data.every(res => res.category === category);
};
fetchedQuestionsPromise().then((data) => {
    const checkCategoryIsTheSame = questionCategoryIsTheSame(data);
    console.log('Questions are from the same category:', checkCategoryIsTheSame);
});


const filterAndSortQuestions = (data, difficulty = 'medium') => {
    const questionsByType = filterQuestionsByDifficulty(data, difficulty);
    const sortedQuestionsByType = [...questionsByType].sort((a,b) => a.type > b.type);
    return sortedQuestionsByType;
};
fetchedQuestionsPromise().then((data) => {
    const questionsFilteredAndSorted = filterAndSortQuestions(data);
    console.log('Medium questions sorted by type:', questionsFilteredAndSorted);
});