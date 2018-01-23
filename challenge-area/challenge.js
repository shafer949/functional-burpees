const BASE_URL = `https://opentdb.com/api.php?amount=10&category=18`;
const fetchedQuestions = fetchQuestions(BASE_URL);

 async function fetchQuestions(url) {
     let questions, data;
     try {
         questions = await fetch(url);
         data = await questions.json();
   } catch (error) {
         console.error(error);
     } finally {
         const results = await data.results;
         return results;
     }
 };

 async function removeHTMLEntityQuotesFromQuestions(data) {
     let questions;
    try {
        questions = await data;
  } catch (error) {
        console.error(error);
    } finally {
        const list = questions.map(res => {
            return res.question.includes('&quot;') ? res.question.replace(/&quot;/g, '"') : res.question;
        });
        return console.log('Results with HTML entities removed:', list);
    }
};
removeHTMLEntityQuotesFromQuestions(fetchedQuestions);

async function filterQuestionsByDifficulty(data, difficultyType) {
    let questions;
   try {
       questions = await data;
 } catch (error) {
       console.error(error);
   } finally {
        return console.log(difficultyType + ' questions only:', questions.filter(res => res.difficulty == difficultyType));   
   }
};
filterQuestionsByDifficulty(fetchedQuestions, "easy");

async function sortQuestionsByDifficulty(data) {
    let questions;
   try {
       questions = await data;
 } catch (error) {
       console.error(error);
   } finally {
    return console.log('Sorted by difficulty:', [...questions].sort((a,b) => a.difficulty.toUpperCase() > b.difficulty.toUpperCase()));
   }
};
sortQuestionsByDifficulty(fetchedQuestions);

async function difficultyQuestionCount(data, difficultyType) {
    let questions;
   try {
       questions = await data;
    } catch (error) {
       console.error(error);
    } finally {
        return questions.reduce((sum,curr) => {
            return curr.difficulty === difficultyType ? ++sum : sum
       },0);
    }
};

async function questionCountBasedOnDificulty(data) {
    let questions;
   try {
       questions = await data;
    } catch (error) {
       console.error(error);
    } finally {
        const object = {
            "easy questions": 0,
            "medium questions": 0,
            "hard questions": 0
        }
        const questionsCountObject =  questions.reduce((sum,curr) => {
            const type = curr.difficulty + ' questions';
            return Object.assign(sum, {
                [type]: (++sum[type])
            });
           
       },object);
       return console.log('Number of questions based on difficulty:', questionsCountObject);
    }
};
questionCountBasedOnDificulty(fetchedQuestions, 'difficulty');

async function checkQuestionCategory(data, category) {
    let questions;
   try {
       questions = await data;
    } catch (error) {
       console.error(error);
    } finally {
        return console.log('Questions are from the same category:', questions.every(res => res.category === category));
    }
};
checkQuestionCategory(fetchedQuestions, "Science: Computers");

async function filterAndSortQuestions(data, difficultyType, filterType) {
    let questions;
   try {
       questions = await data;
    } catch (error) {
       console.error(error);
    } finally {
        const mediumQuestions = questions.filter(res => res.difficulty == difficultyType);
        const sortedMediumQuestions = [...mediumQuestions].sort((a,b) => { 
            a[filterType] > b[filterType]
        });
        return console.log('Medium questions sorted by type:', sortedMediumQuestions);
    }
};
filterAndSortQuestions(fetchedQuestions, "medium", "boolean"); 

//Caden assited me with errors that I ran across with async await. Ended up being a typo.  
//Caden also helped point me in the direction of Object.assign() for #4.