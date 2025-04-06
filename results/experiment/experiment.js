var timeline = {
  "timeline": [
    {
      "timeline": [
        {
          "type": ["survey-text"],
          "questions": [
            {
              "prompt": ["Résztvevő azonosítási száma"],
              "placeholder": ["#"],
              "rows": [1],
              "columns": [40],
              "required": [true],
              "name": ["Participant ID"]
            }
          ],
          "randomize_question_order": false,
          "preamble": [""],
          "button_label": ["Tovább"],
          "post_trial_gap": [0]
        }
      ]
    },
    {
      "type": ["instructions"],
      "pages": ["<p>Üdvözlünk to the Fonetikai Hasonlóság Kutatásban!<\/p>\n  <p> Az instrukciókért kattints a \"tovább\" gombra.<\/p>"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Előző"],
      "button_label_next": ["Tovább"],
      "post_trial_gap": [250]
    },
    {
      "type": ["instructions"],
      "pages": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <p>Először a felső audio ikon fog besötétedni és hallani fogod a célszót<\/p>\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Előző"],
      "button_label_next": ["Tovább"],
      "post_trial_gap": [250]
    },
    {
      "type": ["instructions"],
      "pages": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <p>Aztán the bal oldali audio ikon fog besötétedni és hallani fogod az első beszélőt.<\/p>\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Előző"],
      "button_label_next": ["Tovább"],
      "post_trial_gap": [250]
    },
    {
      "type": ["instructions"],
      "pages": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <p>Ez után the jobb oldali audio ikon fog besötétedni és hallani fogod a második beszélőt.<\/p>\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Előző"],
      "button_label_next": ["Tovább"],
      "post_trial_gap": [250]
    },
    {
      "type": ["instructions"],
      "pages": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <p>Végül, ki kell választanod azt a beszélőt, akinek a kiejtése jobban hasonlított a célszóra.<\/p>\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Előző"],
      "button_label_next": ["Tovább"],
      "post_trial_gap": [250]
    },
    {
      "type": ["instructions"],
      "pages": ["<p> Összesen 30 triádot fogsz hallani.<\/p>\n  <p>Kattints a  \"továbbra\" a kezdéshez.<\/p>"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["Előző"],
      "button_label_next": ["Tovább"],
      "post_trial_gap": [250]
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["<p>Köszönjük a részvételt, a válaszaidat rögzítettük.<\/p>\n  <p>A kutatás befejezéséhez, kérlek töltsd ki ezt a rövid demográfiai adatlapot. Kattints <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://utexas.qualtrics.com/jfe/form/SV_es5YLeHNdLkWZ4W\">ide<\/a> az adatlaphoz.<\/p>"],
      "choices": jsPsych.ANY_KEY,
      "response_ends_trial": true,
      "post_trial_gap": [0]
    },
    {
      "timeline": [
        {
          "type": ["instructions"],
          "pages": ["1. Triád: Kattints a \"továbbra\" a kezdéshez."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/duftin_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/duftin_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/duftin_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["duftin_RU.wav", "duftin_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["2. Triád: Kattints a \"továbbra\" a kezdéshez."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tollaslabda_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tollaslabda_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tollaslabda_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["tollaslabda_RU.wav", "tollaslabda_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["3. Triád: Kattints a \"továbbra\" a kezdéshez."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tigris_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tigris_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tigris_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["tigris_US.wav", "tigris_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["4. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/fodraszat_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/fodraszat_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/fodraszat_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["fodraszat_US.wav", "fodraszat_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["5. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/szamar_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/szamar_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/szamar_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["szamar_RU.wav", "szamar_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["6. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/rozmar_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/rozmar_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/rozmar_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["rozmar_RU.wav", "rozmar_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["7. Triád: Kattints a \"továbbra\" a kezdéshez.\n"],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/vakolat_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/vakolat_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/vakolat_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["vakolat_US.wav", "vakolat_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["8. Triád: Kattints a \"továbbra\" a kezdéshez.\n"],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/kenguru_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/kenguru_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/kenguru_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["kenguru_US.wav", "kenguru_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["9. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/smink_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/smink_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/smink_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["smink_US.wav", "smink_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["1ö. Triád: Kattints a \"továbbra\" a kezdéshez.\n"],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/csimpanz_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/csimpanz_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/csimpanz_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["csimpanz_US.wav", "csimpanz_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["11. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/hernyo_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/hernyo_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/hernyo_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["hernyo_RU.wav", "hernyo_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["12. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/harcsa_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/harcsa_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/harcsa_US.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["harcsa_RU.wav", "harcsa_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["13. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/haszonallat_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/haszonallat_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/haszonallat_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["haszonallat_RU.wav", "haszonallat_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["14. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/akvarium_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/akvarium_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/akvarium_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["akvarium_US.wav", "akvarium_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["15. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/ragadozo_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/ragadozo_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/ragadozo_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["ragadozo_RU.wav", "ragadozo_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["16. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/virag_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/virag_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/virag_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["virag_RU.wav", "virag_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["17. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tucsok_HUN.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tucsok_RU.wav"],
          "choices": ["Tovább"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/tucsok_US.wav"],
          "choices": ["Tovább"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["tucsok_RU.wav", "tucsok_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["18. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/koporso_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/koporso_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/koporso_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["koporso_US.wav", "koporso_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["19. Triád: Kattints a \"továbbra\" a kezdéshez."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/teve_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/teve_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/teve_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["teve_US.wav", "teve_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["20. Triád: Kattints a \"továbbra\" a kezdéshez."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zsiraf_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zsiraf_RU.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zsiraf_US.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["zsiraf_RU.wav", "zsiraf_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["21. Triád: Kattints a \"továbbra\" a kezdéshez.\nn."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/mosogep_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/mosogep_RU.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/mosogep_US.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["mosogep_RU.wav", "mosogep_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["22. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/muzeum_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/muzeum_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/muzeum_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["muzeum_US.wav", "muzeum_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["23. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/kutyu_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/kutyu_RU.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/kutyu_US.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["kutyu_RU.wav", "kutyu_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["24. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/fogkefe_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/fogkefe_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/fogkefe_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["fogkefe_US.wav", "fogkefe_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["25. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zsemle_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zsemle_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zsemle_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["zsemle_US.wav", "zsemle_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["26. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/hidrogen_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/hidrogen_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/hidrogen_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["hidrogen_US.wav", "hidrogen_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["27. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/renszarvas_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/renszarvas_RU.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/renszarvas_US.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["renszarvas_RU.wav", "renszarvas_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["28. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/horcsog_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/horcsog_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/horcsog_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["horcsog_US.wav", "horcsog_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["29. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zebra_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zebra_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/zebra_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["zebra_US.wav", "zebra_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["30. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
          "key_forward": [39],
          "key_backward": [37],
          "allow_backward": true,
          "allow_keys": true,
          "show_clickable_nav": true,
          "button_label_previous": ["Previous"],
          "button_label_next": ["Next"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/krokodil_HUN.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/play.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/krokodil_US.wav"],
          "choices": ["Next"],
          "button_html": ["<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/krokodil_RU.wav"],
          "choices": ["Next"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"target\">\n        <div class=\"label\">Célszó<\/div>\n        <img src=\"resource/image/noplay.png\" alt=\"Target Sound\" class=\"icon\">\n      <\/div>\n  \n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/play.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "trial_ends_after_audio": true,
          "response_ends_trial": false,
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/blank.mp3"],
          "choices": ["Beszélő 1", "Beszélő 2"],
          "button_html": ["\n  <head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 1<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 1\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>", "<head>\n    <style>\n      body {\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n  \n      .container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .target {\n        margin-bottom: 40px;\n      }\n  \n      .label {\n        margin-bottom: 5px;\n        font-weight: normal;\n        font-size: 18px;\n        color: #333;\n      }\n  \n      .image-row {\n        display: flex;\n        justify-content: center;\n        gap: 100px;\n        margin-top: 20px;\n      }\n  \n      .speaker {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n  \n      .icon {\n        width: 150px;\n        height: auto;\n        border: 1px solid #ccc;\n        background-color: #eee;\n        padding: 10px;\n        margin: 75px;\n      }\n    <\/style>\n  <\/head>\n  <body>\n    <div class=\"container\">\n      <div class=\"image-row\">\n        <div class=\"speaker\">\n          <div class=\"label\">Beszélő 2<\/div>\n          <img src=\"resource/image/noplay.png\" alt=\"Speaker 2\" class=\"icon\">\n        <\/div>\n      <\/div>\n    <\/div>\n  <\/body>"],
          "margin_vertical": ["0px"],
          "margin_horizontal": ["8px"],
          "prompt": ["Kattints arra az ikonra amelyik beszélő legjobban hasonlított a célszóra."],
          "trial_ends_after_audio": false,
          "response_ends_trial": true,
          "post_trial_gap": [250],
          "data": {
            "speakers": ["krokodil_US.wav", "krokodil_RU.wav"]
          }
        }
      ],
      "randomize_order": true
    }
  ]
};

jsPsych.init(
{
  "timeline": [timeline],
  "use_webaudio": [true],
  "on_finish": function() {
    var data = jsPsych.data.get().csv();
    var file = 'xprmntr_local_name';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: file, filedata: data}));
  }
}
);
