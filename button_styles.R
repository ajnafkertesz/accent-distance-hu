# generate html
instruction_page1 <-
  '<head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Először a felső audio ikon fog besötétedni és hallani fogod a célszót</p>
      <div class="target">
        <div class="label">Célszó</div>
        <img src="resource/image/play.png" alt="Target Sound" class="icon">
      </div>
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/noplay.png" alt="Speaker 1" class="icon">
        </div>
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/noplay.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

instruction_page2 <-
  '<head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Aztán the bal oldali audio ikon fog besötétedni és hallani fogod az első beszélőt.</p>
      <div class="target">
        <div class="label">Célszó</div>
        <img src="resource/image/noplay.png" alt="Target Sound" class="icon">
      </div>
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/play.png" alt="Speaker 1" class="icon">
        </div>
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/noplay.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

instruction_page3 <-
  '<head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Ez után the jobb oldali audio ikon fog besötétedni és hallani fogod a második beszélőt.</p>
      <div class="target">
        <div class="label">Célszó</div>
        <img src="resource/image/noplay.png" alt="Target Sound" class="icon">
      </div>
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/noplay.png" alt="Speaker 1" class="icon">
        </div>
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/play.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

instruction_page4 <-
  '<head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Végül, ki kell választanod azt a beszélőt, akinek a kiejtése jobban hasonlított a célszóra.</p>
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/noplay.png" alt="Speaker 1" class="icon">
        </div>
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/noplay.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

html_speak1 <-
  '<head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="target">
        <div class="label">Célszó</div>
        <img src="resource/image/play.png" alt="Target Sound" class="icon">
      </div>
  
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/noplay.png" alt="Speaker 1" class="icon">
        </div>
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/noplay.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

html_speak2 <-
  '<head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="target">
        <div class="label">Célszó</div>
        <img src="resource/image/noplay.png" alt="Target Sound" class="icon">
      </div>
  
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/play.png" alt="Speaker 1" class="icon">
        </div>
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/noplay.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

html_speak3 <- 
  '
  <head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="target">
        <div class="label">Célszó</div>
        <img src="resource/image/noplay.png" alt="Target Sound" class="icon">
      </div>
  
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/noplay.png" alt="Speaker 1" class="icon">
        </div>
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/play.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

choice1 <- 
  '
  <head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
        margin: 75px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 1</div>
          <img src="resource/image/noplay.png" alt="Speaker 1" class="icon">
        </div>
      </div>
    </div>
  </body>'

choice2 <- 
  '<head>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin-top: 50px;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .target {
        margin-bottom: 40px;
      }
  
      .label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
  
      .image-row {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 20px;
      }
  
      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .icon {
        width: 150px;
        height: auto;
        border: 1px solid #ccc;
        background-color: #eee;
        padding: 10px;
        margin: 75px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="image-row">
        <div class="speaker">
          <div class="label">Beszélő 2</div>
          <img src="resource/image/noplay.png" alt="Speaker 2" class="icon">
        </div>
      </div>
    </div>
  </body>'

html_choices <- c(choice1, choice2)