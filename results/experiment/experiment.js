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
      "pages": ["<p>Üdvözlünk a Fonetikai Hasonlóság Kutatásban!<\/p>\n  <p> Az instrukciókért kattints a \"tovább\" gombra.<\/p>"],
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
          "stimulus": ["resource/audio/kazan_HUN.wav"],
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
          "stimulus": ["resource/audio/kazan_US.wav"],
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
          "stimulus": ["resource/audio/kazan_RU.wav"],
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
            "speakers": ["kazan_US.wav", "kazan_RU.wav"]
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
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/jatszoter_HUN.wav"],
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
          "stimulus": ["resource/audio/jatszoter_US.wav"],
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
          "stimulus": ["resource/audio/jatszoter_RU.wav"],
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
            "speakers": ["jatszoter_US.wav", "jatszoter_RU.wav"]
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
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/teknosbeka_HUN.wav"],
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
          "stimulus": ["resource/audio/teknosbeka_RU.wav"],
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
          "stimulus": ["resource/audio/teknosbeka_US.wav"],
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
            "speakers": ["teknosbeka_RU.wav", "teknosbeka_US.wav"]
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
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/mosogep_HUN.wav"],
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
          "stimulus": ["resource/audio/mosogep_RU.wav"],
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
          "stimulus": ["resource/audio/mosogep_US.wav"],
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
            "speakers": ["mosogep_RU.wav", "mosogep_US.wav"]
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
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
          "post_trial_gap": [250]
        },
        {
          "type": ["audio-button-response"],
          "stimulus": ["resource/audio/email_HUN.wav"],
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
          "stimulus": ["resource/audio/email_US.wav"],
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
          "stimulus": ["resource/audio/email_RU.wav"],
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
            "speakers": ["email_US.wav", "email_RU.wav"]
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
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
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
          "pages": ["7. Triád: Kattints a \"továbbra\" a kezdéshez.\n"],
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
          "stimulus": ["resource/audio/osztriga_HUN.wav"],
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
          "stimulus": ["resource/audio/osztriga_US.wav"],
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
          "stimulus": ["resource/audio/osztriga_RU.wav"],
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
            "speakers": ["osztriga_US.wav", "osztriga_RU.wav"]
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
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
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
          "pages": ["9. Triád: Kattints a \"továbbra\" a kezdéshez.\n."],
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
          "stimulus": ["resource/audio/kutyu_HUN.wav"],
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
          "stimulus": ["resource/audio/kutyu_RU.wav"],
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
          "stimulus": ["resource/audio/kutyu_US.wav"],
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
            "speakers": ["kutyu_RU.wav", "kutyu_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["10. Triád: Kattints a \"továbbra\" a kezdéshez.\n"],
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
          "pages": ["11. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/zsiraf_HUN.wav"],
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
          "stimulus": ["resource/audio/zsiraf_US.wav"],
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
          "stimulus": ["resource/audio/zsiraf_RU.wav"],
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
            "speakers": ["zsiraf_US.wav", "zsiraf_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["12. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/kardhal_HUN.wav"],
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
          "stimulus": ["resource/audio/kardhal_RU.wav"],
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
          "stimulus": ["resource/audio/kardhal_US.wav"],
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
            "speakers": ["kardhal_RU.wav", "kardhal_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["13. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/papagaj_HUN.wav"],
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
          "stimulus": ["resource/audio/papagaj_RU.wav"],
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
          "stimulus": ["resource/audio/papagaj_US.wav"],
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
            "speakers": ["papagaj_RU.wav", "papagaj_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["14. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/rovar_HUN.wav"],
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
          "stimulus": ["resource/audio/rovar_US.wav"],
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
          "stimulus": ["resource/audio/rovar_RU.wav"],
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
            "speakers": ["rovar_US.wav", "rovar_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["15. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/liba_HUN.wav"],
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
          "stimulus": ["resource/audio/liba_US.wav"],
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
          "stimulus": ["resource/audio/liba_RU.wav"],
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
            "speakers": ["liba_US.wav", "liba_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["16. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/pancel_HUN.wav"],
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
          "stimulus": ["resource/audio/pancel_US.wav"],
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
          "stimulus": ["resource/audio/pancel_RU.wav"],
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
            "speakers": ["pancel_US.wav", "pancel_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["17. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/ragadozo_US.wav"],
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
          "stimulus": ["resource/audio/ragadozo_RU.wav"],
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
            "speakers": ["ragadozo_US.wav", "ragadozo_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["18. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/nagymama_HUN.wav"],
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
          "stimulus": ["resource/audio/nagymama_US.wav"],
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
          "stimulus": ["resource/audio/nagymama_RU.wav"],
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
            "speakers": ["nagymama_US.wav", "nagymama_RU.wav"]
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
          "button_label_previous": ["Előző"],
          "button_label_next": ["Tovább"],
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
          "pages": ["20. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/kagylo_HUN.wav"],
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
          "stimulus": ["resource/audio/kagylo_US.wav"],
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
          "stimulus": ["resource/audio/kagylo_RU.wav"],
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
            "speakers": ["kagylo_US.wav", "kagylo_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["21. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/pillango_HUN.wav"],
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
          "stimulus": ["resource/audio/pillango_US.wav"],
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
          "stimulus": ["resource/audio/pillango_RU.wav"],
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
            "speakers": ["pillango_US.wav", "pillango_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["22. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/bogar_HUN.wav"],
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
          "stimulus": ["resource/audio/bogar_US.wav"],
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
          "stimulus": ["resource/audio/bogar_RU.wav"],
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
            "speakers": ["bogar_US.wav", "bogar_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["23. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "pages": ["24. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/autopalya_HUN.wav"],
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
          "stimulus": ["resource/audio/autopalya_US.wav"],
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
          "stimulus": ["resource/audio/autopalya_RU.wav"],
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
            "speakers": ["autopalya_US.wav", "autopalya_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["25. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/arcszesz_HUN.wav"],
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
          "stimulus": ["resource/audio/arcszesz_RU.wav"],
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
          "stimulus": ["resource/audio/arcszesz_US.wav"],
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
            "speakers": ["arcszesz_RU.wav", "arcszesz_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["26. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/panda_HUN.wav"],
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
          "stimulus": ["resource/audio/panda_US.wav"],
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
          "stimulus": ["resource/audio/panda_RU.wav"],
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
            "speakers": ["panda_US.wav", "panda_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["27. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/palota_HUN.wav"],
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
          "stimulus": ["resource/audio/palota_RU.wav"],
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
          "stimulus": ["resource/audio/palota_US.wav"],
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
            "speakers": ["palota_RU.wav", "palota_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["28. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/vereb_HUN.wav"],
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
          "stimulus": ["resource/audio/vereb_RU.wav"],
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
          "stimulus": ["resource/audio/vereb_US.wav"],
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
            "speakers": ["vereb_RU.wav", "vereb_US.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["29. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/illat_HUN.wav"],
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
          "stimulus": ["resource/audio/illat_US.wav"],
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
          "stimulus": ["resource/audio/illat_RU.wav"],
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
            "speakers": ["illat_US.wav", "illat_RU.wav"]
          }
        },
        {
          "type": ["instructions"],
          "pages": ["30. Triád: Kattints a \"továbbra\" a kezdéshez."],
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
          "stimulus": ["resource/audio/virag_HUN.wav"],
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
          "stimulus": ["resource/audio/virag_US.wav"],
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
          "stimulus": ["resource/audio/virag_RU.wav"],
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
            "speakers": ["virag_US.wav", "virag_RU.wav"]
          }
        }
      ],
      "randomize_order": true
    },
    {
      "type": ["html-keyboard-response"],
      "stimulus": ["<p>Köszönjük a részvételt, a válaszaidat rögzítettük.<\/p>\n  <p>A kutatás befejezéséhez, kérlek töltsd ki ezt a rövid demográfiai adatlapot. Kattints <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://elteppk.eu.qualtrics.com/jfe/form/SV_5c07zAfGqueIV1k\">ide<\/a> az adatlaphoz.<\/p>"],
      "choices": jsPsych.ANY_KEY,
      "response_ends_trial": true,
      "post_trial_gap": [0]
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
