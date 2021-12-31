document.addEventListener('DOMContentLoaded', function() {

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
      evt.preventDefault(); // Preventing the form from submitting
      checkWord(); // Do your magic and check the entered word/sentence
      window.scrollTo(0,150);
    }
  
    // Get the focus to the text input to enter a word right away.
    document.getElementById('terminalTextInput').focus();
  
    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();
  
    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
  
    // Clear text input
    var clearInput = function(){
      document.getElementById('terminalTextInput').value = "";
    }
  
    // Scrtoll to the bottom of the results div
    var scrollToBottomOfResults = function(){
      var terminalResultsDiv = document.getElementById('terminalReslutsCont');
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }
  
    // Scroll to the bottom of the results
    scrollToBottomOfResults();
  
    // Add text to the results div
    var addTextToResults = function(textToAdd){
      document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
      scrollToBottomOfResults();
    }
  
    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function(){
      // Array of all the help keywords
      var helpKeyWords = [
        "- <b>ls</b> ",
        "- <b>cat</b> + [about.txt][qualification.txt][workexp.txt]",
        "- <b>view</b> + [home][personalweb][writingblog][certifications]",
        "- <b>Open</b> + website URL to open it in the browser (ex. open webdevtrick.com)",
        "- <b>Google</b> + keyword to search directly in Google (ex. google web development)",
        "- <b>YouTube</b> + keyword to search directly in YouTube (ex. Technical Freaks)",
        "- <b>Wiki</b> + keyword to search directly in Wikipedia (ex. wiki numbers)",
        "- <b>'Time'</b> will display the current time.",
        "- <b>'Date'</b> will display the current date.",
        "* There are more keywords that you have to discover by yourself."
      ].join('<br>');
      addTextToResults(helpKeyWords);
    }
    
    /*var start = function(){
      // Array of all the help keywords
      var start = [
          "____  ____      _    ____  _   _ ___ "
          "|  _ \|  _ \    / \  | __ )| | | |_ _|"
          "| |_) | |_) |  / _ \ |  _ \| |_| || | "
          "|  __/|  _ <  / ___ \| |_) |  _  || | "
          "|_|   |_| \_\/_/   \_\____/|_| |_|___|"

        
      ].join('<br>');
      addTextToResults(start);
    }*/
  
    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function(postTimeDay){
      var timeAndDate = new Date();
      var timeHours = timeAndDate.getHours();
      var timeMinutes = timeAndDate.getMinutes();
      var dateDay = timeAndDate.getDate();
      console.log(dateDay);
      var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
      var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.
  
      if (timeHours < 10){ // if 1 number display 0 before it.
        timeHours = "0" + timeHours;
      }
  
      if (timeMinutes < 10){ // if 1 number display 0 before it.
        timeMinutes = "0" + timeMinutes;
      }
  
      var currentTime = timeHours + ":" + timeMinutes;
      var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
  
      if (postTimeDay == "time"){
        addTextToResults(currentTime);
      }
      if (postTimeDay == "date"){
        addTextToResults(currentDate);
      }
    }
  
    // Opening links in a new window
    var openLinkInNewWindow = function(linkToOpen){
      window.open(linkToOpen, '_blank');
      clearInput();
    }
    var openlink = function(linkToOpen){
      window.open(linkToOpen,'_self');
      clearInput();
    }
  
    // Having a specific text reply to specific strings
    addTextToResults("Welcome to 4dolphu5@Arctic shell :). PLease read the following Instruction.");
    addTextToResults("*This terminal session is <b>ephemeran</b>, so it will go away if you close or refresh the browser! .");
    addTextToResults("Refreshing the tab would launch a new session :) ");
    addTextToResults("*Never Try 'rm -rf *' command !");
    var textReplies = function() {
      switch(textInputValueLowerCase){
        // replies
        case "clear":
          clearInput();
          openlink("https://Ad0lphus.github.io/terminal/index.html");
        case "prabith":
        case "4d0lphu5":
          clearInput();
          addTextToResults("prabith is owner of this blog and he is a Reverse Engineer, Full Stack Developer, SEO, and Graphic Designer");
          break;
        case "ls":
          clearInput();
          addTextToResults("about.txt <br> qualification.txt <br> courses.txt ");
          addTextToResults("use 'help view' command to know more :)");
          break;
        case "i love you":
        case "love you":
        case "love":
          clearInput();
          addTextToResults("Aww! Love you too ❤");
          break;
  
        case "hello":
        case "hi":
        case "hola":
        case "hey":
          clearInput();
          addTextToResults("Hello, I am Prabith AKA 4d0lphu5 :)");
          break;
        case "help cat":
          clearInput();
          addTextToResults("<b>cat</b> + [about.txt][qualification.txt][workexp.txt]");
          break;
        case "help view":
          clearInput();
          addTextToResults("<b>view</b> + [home][personalweb][writingblog][certifications]");
          break;
        case "help open":
          clearInput();
          addTextToResults("<b>Open</b> + website URL to open it in the browser (ex. open Ad0lphus.github.io)");
          break;
        case "help Google":
          clearInput();
          addTextToResults("<b>Google</b> + keyword to search directly in Google (ex. google web development)");
          break;
        case "help YouTube":
          clearInput();
          addTextToResults("<b>YouTube</b> + keyword to search directly in YouTube (ex. karikku)");
          break;
        case "help Wiki":
          clearInput();
          addTextToResults("<b>Wiki</b> + keyword to search directly in Wikipedia (ex. wiki numbers)");
          break;
        case "help Time":
          clearInput();
          addTextToResults("<b>'Time'</b> will display the current time.");
          break;
        case "help Date":
          clearInput();
          addTextToResults("<b>'Time'</b> will display the current date.");
          break;

        case "cat about.txt":
          clearInput();
          addTextToResults("I'm currently a First Year CSE student at <a href='https://www.amrita.edu/' target='_blank'>Amrita School of Engineering </a>, Amritapuri and aspiring software developer.Interested in working on backend, API's, Databases . Currently working on Cyber Security.");
          addTextToResults("<li>I’m a CTF player at <a href='https://bi0s.in/' target='_blank'>Team Bi0s</a></li>");
          addTextToResults("Ever since I was a little kid, software development has been my passion.Throughout high school, me and my friend came up with some ideas for Arduino projects, moving from 'Hello World' all the way to Solving real world problems, with dozens of projects in between. I learned Python C and C# then HTML, CSS and Javascript, tearing through any books I could find on anything remotely related to software development. I was insatiable.This passion carried me through my education at SLIIT. Here there were more resources available to me than I ever could have imagined as a kid. I studied new programming languages And it was here that I learned truly how much there was yet to learn.<br>So, now, in industry, this passion remains with me. I like apply my knowledge to do something different and unique.");
          break;
        case "cat qualification.txt":
          clearInput();
          addTextToResults("I've Completed my high school education from Kendriya Vidyalaya<br>Currently i am a B.Tech CSE Under Grad at Amrita Vishwa Vidyapeetham.");
          addTextToResults("Wanna know more ? use command 'view certifications'");
        break;
        case "cat workexp.txt":
          clearInput();
          addTextToResults("<li>Initially I worked as a Student innovator/Project Lead at Atal lab,KVP from 2016 to 2020<li>Currently i am working as a Reverse Engineer at Team Bi0s.");
        break;
        case "view home":
          clearInput();
          addTextToResults("Okay lets move to home page.");
          openLinkInNewWindow('https://Ad0lphus.github.io');
        break;
        case "view personalweb":
          clearInput();
          addTextToResults("Okay lemme show you my personal Blog.");
          openLinkInNewWindow('https://Ad0lphus.github.io/CV/index.html');
        break;
        case "view writingblog":
          clearInput();
          addTextToResults("Okay then, lets head over to my writing Blog.");
          openLinkInNewWindow('https://Ad0lphus.github.io/instaBlog/index.html');
        break;
        case "view certifications":
          clearInput();
          addTextToResults("Okay I'll show some of my certifications.");
          openLinkInNewWindow('https://Ad0lphus.github.io/CV/index.html#Certifications');
        break;
        case "what the":
        case "wtf":
          clearInput();
          addTextToResults("F***.");
          break;
  
        case "shit":
        case "poop":
        case "💩":
          clearInput();
          addTextToResults("💩");
          break;
  
        case "rm -rf *":
          clearInput();
          addTextToResults("idiot !!!...you need permission !! <br>btw lemme take you somewhere :P<br>Enjoyy!");
          openLinkInNewWindow("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
          break;
        // replies 
        case "YouTube":
        case "youtube":
          clearInput();
          addTextToResults("Type youtube + something to search for.");
          break;
        case "Google":
        case "google":
          clearInput();
          addTextToResults("Type google + something to search for.");
          break;
        case "Wiki":
        case "wiki":
        case "wikipedia":
          clearInput();
          addTextToResults("Type wiki + something to search for.");
          break;  
        case "Time":
        case "time":
          clearInput();
          getTimeAndDate("time");
          break;
        case "Date":
        case "date":
          clearInput();
          getTimeAndDate("date");
          break;
  
        case "help":
        case "?":
          clearInput();
          postHelpList();
          break;
  
        default:
        clearInput();
        addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
        break;
      }
    }
  
  // Main function to check the entered text and assign it to the correct function
    var checkWord = function() {
      textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
      textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string
  
      if (textInputValue != ""){ //checking if text was entered
        addTextToResults("<p class='userEnteredText'><b>Root$</b> " + textInputValue + "</p>");
        if (textInputValueLowerCase.substr(0,5) == "open ") { //if the first 5 characters = open + space
          openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
          addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
          openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
          addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,7) == "google ") {
          openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
          addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
          openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
          addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
        } else{
          textReplies();
        }
      }
    };
  
  });
