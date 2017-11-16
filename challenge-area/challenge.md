## Welcome to the Functional Burpees challenge area

### Purpose

These are a series of **independent** exercises that are aimed at enforcing commom functional style programming methods and styles using es6+

### Submission

1. Fork this repository
2. Clone your copy to your desktop
3. Create a new branch: `git checkout -b <YOUR_FIRSTNAME_ANSWERS>`
4. Begin making your changes
5. Once done, push your branch to your repo: `git push origin <YOUR_FIRSTNAME_ANSWERS>`
6. Select your new branch on GitHub and click the "pull request" button.

### Starting

  Building off of our previous knowledge, all steps below will contain these same assumptions:

  * You have fetched data from [HERE](https://opentdb.com/api.php?amount=10&category=18)

  * You are working with the original JSON data that came back from the `fetch` request for each challenge.

  * You can verify your answers in the browser console, using the latest version of Chrome


## Challenges

A successful answer, will be one that solves the challenge asked, while not mutating the original JSON returned from the `fetch` request.

1. Iterate over the results array, any questions that have & quot; in the text, `replace` that with actual quotes. 

  _HINT_: `replace(/&quot;/g, '"')` is the method and regex expression.

2. The results array should only contain easy questions

3. Based on the results that came back, return a new arrary of results, sorted by difficulty

4. Return an object that shows how many easy, medium, and hard questions there are.

5. Check to see if `every` category have "Science: Computers" as its value?

BONUS

6. Grab only the medium questions, and sort them by type (multiple choice or boolean)

## Support

I purposely left out clues that indicated which iteration method to use, `map, filter` etc.  As such, I expect there are multitple ways to complete many of the task. Refer to above on what is considered a "successful answer". It's ok to get creative.

Support can be found from the following, in order.

1. The primer section of this repo
2. [MDN](https://developer.mozilla.org/en-US/)
3. A peer within our training group
4. A peer outside of our training group
5. Myself

Based on the [honor system](https://en.wikipedia.org/wiki/Honor_system), if seeking help from a peer, I ask that you include that alongside your code.
ie) "Chris helped me with choosing which method to use." or "Ravi walked me through refactoring this part."

Explicitly Disallowed Support

1. StackOverflow

While useful and not actively discouraged, for these exercises, I'm not concerned with how a stranger solved the issue, rather how those I'm mentoring grasp these concepts and collaborate--when necessary. 

Good luck! Remember this is supposed to be challenging AND fun! 