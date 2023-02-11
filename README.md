# _{Mr.Roboger's Neighborhood}_
#### By _**{Timna Schulze}**_
#### _{Web Application that counts up to user's number and replaces some integers with words.}_
## Technologies Used
* _HTML_
* _CSS_
* _JavaScript_
## Description
_{This application uses loops, arrays, and branching to count up to a user's number. It also replaces all numbers that contain a 1 with "Beep!", all numbers that contain a 2 with "Boop!", and all numbers that contain a 3 with "Won't you be my neighbor!".}_
## Setup/Installation Requirements
* _Clone repository to your desktop._
* _Open ts/index.html in your browser._
## Known Bugs
* _Any known issues_
* _should go here_
## License
_For contributions or corrections, please contact Timna at timna.lansel@gmail.com_
Copyright (c) _Jan 11, 2023_ _Timna Schulze_

Describe: Mr. Roboger's Neighborhood

Test: "It will use the input number as a final number displayed, starting with 0."
Code: roboLanguage(8);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

Test: "It will replace any number containing a "1" with 'Beep!'."
Code: roboLanguage(1);
Expected Output: [0, "Beep!"]

Test: "It will replace any number containing a "2" with 'Boop!'."
Code: roboLanguage(2);
Expected Output: [0, "Beep!", "Boop!"]

Test: "It will replace any number containing a "3" with 'Won't you be my neighbor!'."
Code: roboLanguage(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!"]

Test: "It will substitute 1 unless a 2 is present."
Code: roboLanguage(12);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

Test: "It will substitute 2 unless a 3 is present."
Code: roboLanguage(23);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor!"]