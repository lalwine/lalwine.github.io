    document.addEventListener('DOMContentLoaded', () => {

        document.getElementById("submit-password").addEventListener("click", function() {
            var password = document.getElementById("password-input").value;
            var correctPassword = "problemesdesmonefwilwi"; // Set your desired password here
            var errorMessage = document.querySelector('.error-message');
            var successMessage = document.querySelector('.success-message');
            
            if (password === correctPassword) {

                successMessage.textContent = 'Treeeees bien la Lwi. Tres smart! Bwinne Chwince!!';
                successMessage.classList.remove('hidden');
                errorMessage.textContent = ''; // Clear any previous error message
                // Hide the password overlay and show the main content
                setTimeout(function() {
                    document.getElementById("password-overlay").style.display = "none";
                    document.getElementById("main-content").classList.remove("hidden");
                }, 1700); // 2-second delay
            } else {
                // Show error message
                document.getElementById("error-message").textContent = "Incorrect password, please try again.";
            }
        });

        const questions = [
            {
                question: "Ce que je voulais être quand j'étais petite :",
                answers: ["Policiere", "Aventurière", "Veterinaire", "Docteur"],
                correct: 2,
                topic: "easy"
            },
            {
                question: "My first crush :",
                answers: ["Yassine Raissouni", "Abdkrim", "Touzani", "Abderahman"],
                correct: 1,
                topic: "easy"
            },
            {
                question: "Mon dessin animé préféré :",
                answers: ["Les Schtroumpfs", "Winx", "Martin matin", "Les minis justiciers"],
                correct: 1,
                topic: "easy"
            },
            {
                question: "Ma matière préférée :",
                answers: ["Physique", "Chimie", "Maths", "SVT"],
                correct: 3,
                topic: "easy"
            },
            {
                question: "Mon jeu préféré avec toi cet été :",
                answers: ["Sorry", "Échecs", "Uno", "Virus"],
                correct: 1,
                topic: "monetis"
            },
            {
                question: "Mon meilleur jeu quand j'étais petite :",
                answers: ["Pikiwiki", "Sirènes", "Narnia", "Badia"],
                correct: 0,
                topic: "medium"
            },
            {
                question: "Ma meilleure amie quand j'étais petite :",
                answers: ["Nour", "Hanan", "Fenna", "Rania"],
                correct: 0,
                topic: "medium"
            },
            {
                question: "Le Cereal que je mangeais le plus :",
                answers: ["Nesquik", "Crunch", "Lion", "Chocapic"],
                correct: 3,
                topic: "medium"
            },
            {
                question: "L'âge où j'ai arrêté le biberon :",
                answers: ["8", "7", "4", "5"],
                correct: 1,
                topic: "medium"
            },
            {
                question: "Notre chanson qu'on chante le plus :",
                answers: ["pam pam pam pidel", "Mone mone mone mone monetis", "lina benajiba lina lina lina", "lmoon ya lmoon talalallaa"],
                correct: 3,
                topic: "monetis"
            },
            {
                question: "Couleur de mon premier journal intime :",
                answers: ["Jaune", "Beige", "Bleu", "Rose"],
                correct: 2,
                topic: "hard"
            },
            {
                question: "Mon animal préféré quand j'étais petite :",
                answers: ["Cheval", "Mouton", "Chien", "Chat"],
                correct: 0,
                topic: "hard"
            },
            {
                question: "Mon premier animal de compagnie :",
                answers: ["Oiseau", "Poisson", "Lapin", "Poussin"],
                correct: 0,
                topic: "hard"
            },
            {
                question: "Mes règles pour la première fois :",
                answers: ["12 ans", "14 ans", "11 ans", "13 ans"],
                correct: 1,
                topic: "hard"
            },
            {
                question: "Le dessin animé qu'on regardait beaucoup ensemble :",
                answers: ["Witch", "Winx", "Les minis justiciers", "Franklin"],
                correct: 2,
                topic: "monetis"
            },
            {
                question: "Ma cicatrice du coude est à cause :",
                answers: ["Course", "Velo", "Trotinette", "Basket"],
                correct: 3,
                topic: "super"
            },
            {
                question: "Le pays que je veux beaucoup visiter :",
                answers: ["Angleterre", "Thailande", "Japon", "Canada"],
                correct: 2,
                topic: "super"
            },
            {
                question: "Ma première fois à l'hôpital :",
                answers: ["6 mois", "6 ans", "1 an", "16 ans"],
                correct: 0,
                topic: "super"
            },
            {
                question: "Mon premier voyage à l'étranger :",
                answers: ["14 ans", "16 ans", "10 ans", "17 ans"],
                correct: 0,
                topic: "super"
            },
            {
                question: "Ma meilleure amie d'enfance et pour la vie :",
                answers: ["Lina Benajiba", "La lui", "Luine Ben Luinti", "Toutes les réponses sont justes"],
                correct: 3,
                topic: "monetis"
            }
        ];
        
        

        let currentQuestion = 0;

        function unlockNextTile() {
            if (currentQuestion < totalTiles - 1) {
                currentQuestion++; // Move to the next question
                const nextTile = document.getElementById(`tile${currentQuestion + 1}`);
                nextTile.classList.remove('locked'); // Unlock the next tile
                nextTile.classList.remove('disabled'); // Make it interactive
            }
        }

        function handleClick(tileId) {
            const tile = document.getElementById(`tile${tileId}`);

            if (tileId - 1 > currentQuestion) {
                alert("Tu dois répondre à la question précedente en premier!");
                return;
            }

            if (!tile.classList.contains('clicked') && !clickedTiles[tileId - 1]) {
                tile.classList.add('clicked');
                clickedTiles[tileId - 1] = true;

                const questionContent = document.createElement('div');
                questionContent.classList.add('question-content');

                const answersContent = document.createElement('div');
                answersContent.classList.add('answers-content');

                tile.querySelector('.back').appendChild(questionContent);
                tile.querySelector('.back').appendChild(answersContent);

                const closeButton = document.createElement('button');
                closeButton.classList.add('close-btn');
                closeButton.textContent = '×';
                closeButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    handleClose(tileId);
                });
                tile.querySelector('.back').appendChild(closeButton);

                const chronoButton = document.createElement('button');
                chronoButton.classList.add('chrono-btn');
                chronoButton.style.backgroundImage = 'url("img/stopwatch.png")';
                chronoButton.addEventListener('click', () => {
                    startCountdown(tileId);
                    chronoButton.disabled = true; 
                })
                tile.querySelector('.back').appendChild(chronoButton);

                const questionData = questions[tileId - 1];
                questionContent.textContent = questionData.question;

                questionData.answers.forEach((answer, index) => {
                    const answerButton = document.createElement('button');
                    answerButton.classList.add('answer-btn');
                    answerButton.textContent = answer;
                    answerButton.addEventListener('click', () => {
                        handleAnswerClick(answerButton, index, tileId);
                    });
                    answersContent.appendChild(answerButton);
                });
                
                createCountdown(tileId);
            }
        }

        let correctAudio = new Audio('audio/lwineyalwine.mp3');
        let wrongAudio = new Audio('audio/lalwinelalwine.mp3');

        const pointsMapping = {
            easy: 1,
            medium: 3,
            hard: 5,
            super: 7,
            monetis: 9
        };

        let totalPoints = 0;
        const maxPoints = 100; // Based on the total points system you described

        function updateProgressBar() {
            const progressBar = document.getElementById('progress-fill');
            const progress = (totalPoints / maxPoints) * 100;
            progressBar.style.height = `${progress}%`;
            // Check milestones
            checkMilestones(progress);
        }
        
        function showMessage() {
            const endMessage = document.getElementById('end-message');
            endMessage.classList.remove('hidden');
        }

        function showQRCode() {
            const qrContainer = document.getElementById('qr-container');
            qrContainer.classList.remove('hidden');
        
            const closeButton = document.getElementById('close-qr-btn');
            closeButton.addEventListener('click', () => {
                qrContainer.classList.add('hidden');
            });
        }

        // Function to display the message first, then the QR code
        function showMessageAndQRCode() {
            // Show the message first
            const endMessage = document.getElementById('end-message');
            endMessage.classList.remove('hidden');
            
            // After 2 seconds (2000 milliseconds), show the QR code
            setTimeout(function() {
                endMessage.classList.add('hidden');
                const qrContainer = document.getElementById('qr-container');
                qrContainer.classList.remove('hidden');
                const closeButton = document.getElementById('close-qr-btn');
                closeButton.addEventListener('click', () => {
                    qrContainer.classList.add('hidden');
                });
            }, 10000);
        }

        let qrCodeShown = false; // Flag to track if QR code has been shown

        function checkMilestones(progress) {
            const milestones = {
                13: 'gift1',
                34: 'gift2',
                63: 'gift3',
                100: 'gift4'
            };
        
            for (const [threshold, giftId] of Object.entries(milestones)) {
                const gift = document.getElementById(giftId);
                const milestone = parseInt(threshold);
        
                if (progress >= milestone) {
                    if (!gift.classList.contains('milestone-reached')) {
                        gift.classList.add('milestone-reached');
                    }
                    if (threshold === '100' && !qrCodeShown) {
                        showMessageAndQRCode();
                        qrCodeShown = true;
                    }
                }
            }
        }

        function updateScore() {
            const scoreLabel = document.getElementById('score-value');
            scoreLabel.textContent = totalPoints;
        }

        function handleAnswerClick(answerButton, index, tileId) {
            const tile = document.getElementById(`tile${tileId}`);
            const answersContent = tile.querySelector('.answers-content');
            
            const countdownContent = tile.querySelector('.countdown');
            const isFlashing = countdownContent.classList.contains('flash-text');

            const questionData = questions[tileId - 1];
            if (countdownIntervals[tileId]) {  // Check if countdown is running
                stopCountdown(tileId);
                tickingAudio.pause();
                tickingAudio.currentTime = 0;

                if (isFlashing) {
                    countdownContent.classList.remove('flash-text');
                    tile.querySelector('.back').classList.remove('flash-background');
                }

                // Remove any existing GIFs
                const existingGifs = document.querySelectorAll('.result-gif');
                existingGifs.forEach(gif => gif.remove());

                // Create GIF element
                const gif = document.createElement('img');
                gif.classList.add('result-gif');
                gif.style.position = 'absolute';
                gif.style.top = '50%';
                gif.style.left = '50%';
                gif.style.transform = 'translate(-50%, -50%)';
                gif.style.zIndex = '1000';
                gif.style.width = '500px'; // Adjust size as needed
                gif.style.height = '500px'; // Adjust size as needed

                if (index === questionData.correct) {
                    correctAudio.play();
                    countdownContent.textContent = 'CORRECTE :D';
                    answerButton.classList.add('submitted');
                    tile.querySelector('.back').style.backgroundColor = '#14c93c';

                    // Award points based on topic
                    totalPoints += pointsMapping[questionData.topic];
                    updateProgressBar(); // Update the progress bar based on the points

                    updateScore(); // Update the score label

                    gif.src = 'img/happyhappy.gif'; // Path to the wrong answer GIF

                    unlockNextTile();
                    
                } else {
                    wrongAudio.play();
                    countdownContent.textContent = 'FAUX :(';
                    answerButton.classList.add('incorrect');
                    const correctAnswerButton = answersContent.querySelector(`.answer-btn:nth-child(${questionData.correct + 1})`);
                    correctAnswerButton.classList.add('correct');
                    correctAnswerButton.style.animation = 'flash 1.2s infinite';
                    tile.querySelector('.back').style.backgroundColor = '#ff5500';
                    
                    gif.src = 'img/grwinch.gif';

                    unlockNextTile();
                }

                console.log('Adding GIF:', gif.src);
                if (answersContent) {
                    answersContent.appendChild(gif);
                } else {
                    console.log('No answers-content element found in tile', tileId);
                }

                // Disable all answer buttons
                const allAnswerButtons = answersContent.querySelectorAll('.answer-btn');
                allAnswerButtons.forEach(button => {
                    button.disabled = true;
                });
                
            } else {
                countdownContent.textContent = 'Lancer le chrono en premier!';
                countdownContent.style.color = '#f52a48';
            }

        }

        function stopCountdown(tileId) {
            clearInterval(countdownIntervals[tileId]);
            countdownIntervals[tileId] = null;

        }

        let tickingAudio = new Audio('audio/clock-millionaire-cut.mp3');
        let tickingEnd = new Audio('audio/clock-millionaire-end.mp3');
        const countdownIntervals = {};

        function createCountdown(tileId){
            const tile = document.getElementById(`tile${tileId}`);
            const backTile = tile.querySelector('.back');
            const questionContent = tile.querySelector('.question-content');
            // Create the countdown element
            const countdownElement = document.createElement('div');
            countdownElement.classList.add('countdown');
            countdownElement.textContent = '20';

            // Check if there's a scrollbar
            if (backTile.scrollHeight > backTile.clientHeight) {
                // Move the countdown element to the top
                backTile.insertBefore(countdownElement, backTile.firstChild);
                questionContent.style.paddingTop = '10px';
            } else {
                // Append the countdown element at the end
                backTile.appendChild(countdownElement);
            }
        }

        function startCountdown(tileId) {
            const tile = document.getElementById(`tile${tileId}`);
            const backTile = tile.querySelector('.back');
            const countdownElement = backTile.querySelector('.countdown');

            countdownElement.textContent = '20';
            countdownElement.style.color = 'white';

            let countdownValue = 20;

            countdownInterval = setInterval(() => {
                countdownValue--;
                if (countdownValue >= 0) {
                    countdownElement.textContent = countdownValue;
                }

                if (countdownValue <= 0) {
                    clearInterval(countdownInterval);
                    countdownElement.textContent = 'TEMPS ÉCOULÉ !';
                    handleCountdownEnd(tileId);
                } else if (countdownValue <= 5) {
                    countdownElement.classList.add('flash-text');
                    backTile.classList.add('flash-background');
                }
            }, 1000);

            // Store the countdown interval ID in the object
            countdownIntervals[tileId] = countdownInterval;

            tickingAudio.play();
        }


        function handleCountdownEnd(tileId) {
            const tile = document.getElementById(`tile${tileId}`);
            tile.querySelector('.back').style.backgroundColor = '#ff5500';
            tile.querySelector('.back').classList.remove('flash-background');
            tile.querySelector('.countdown').classList.remove('flash-text');
            /* const answerButtons = tile.querySelector('.answers-content').querySelectorAll('.answer-btn');
            answerButtons.forEach(button => {
                button.disabled = true;
            }); */

        }

        function handleClose(tileId) {
            const tile = document.getElementById(`tile${tileId}`);
            tile.classList.remove('clicked');
            clickedTiles[tileId - 1] = true;
            tickingAudio.pause();
            tickingAudio.currentTime = 0;
            correctAudio.pause();
            correctAudio.currentTime = 0;
            wrongAudio.pause();
            wrongAudio.currentTime = 0;

            // Update the appearance of the tile in the grid
            tile.style.backgroundColor = 'black';
            tile.querySelector('.front').style.backgroundColor = 'black';

            const back = tile.querySelector('.back');

            // Remove flashing effect class if it exists
            if (back.classList.contains('flash-background')) {
                back.classList.remove('flash-background');
            }

            while (back.firstChild) {
                back.removeChild(back.firstChild);
            }

            // Clear the countdown interval associated with the closed tile
            clearInterval(countdownIntervals[tileId]);

            // Reset background color and remove flashing effect
            tile.querySelector('.back').style.backgroundColor = '';
            tile.querySelector('.countdown').classList.remove('flash-text');

            
        }

        // Function to assign colors based on topics
        function assignTileColor(topic) {
            switch (topic) {
                case 'easy':
                    return '#06d106'; // Light brown
                case 'medium':
                    return '#3d44ff'; // Green
                case 'hard':
                    return '#ff6219'; // Blue
                case 'super':
                    return '#f70202'; // Light yellowish
                case 'monetis':
                    return '#9807db';
                default:
                    return 'black';
            }
        }

        const board = document.getElementById('board');
        const totalTiles = questions.length;

        // Initialize an array to keep track of clicked tiles
        const clickedTiles = Array.from({ length: totalTiles }, () => false);

        // Loop through questions to create tiles
        for (let i = 0; i < questions.length; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');

            const front = document.createElement('div');
            front.classList.add('front');
            front.textContent = i + 1;

            // Set background color of front tile based on topic
            front.style.backgroundColor = assignTileColor(questions[i].topic);

            tile.appendChild(front);

            const back = document.createElement('div');
            back.classList.add('back');
            tile.appendChild(back);

            tile.id = `tile${i + 1}`;

            if (i > 0) {
                tile.classList.add('locked', 'disabled');
            }

            tile.addEventListener('click', () => handleClick(i + 1));
            board.appendChild(tile);
        }

    });