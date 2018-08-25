# Word-Guess-Game

A basic hangman game made with JavaScript. User plays against the computer. 
This is the classic Hangman game where the player is given a word and has 8 chances to guess the word one letter at a time.

Blank spaces are displayed on the screen equal to the length of the word chosen randomly from a list. Player can guess a letter by pressing a letter on the keyboard. If the letter is present in the word, the blank spaces are replaced with the letter at the right position. If the letter occurs more than once in the word, each occurence of the letter is replaced for a correct guess.

For each wrong guess, the chances are decreased by 1 and until all 8 chances are used up.

A new word is chosen after a successful game or after 8 failed guesses.
