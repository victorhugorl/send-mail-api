fetch("http://localhost:8000/api/mail", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    subject: "Teste de e-mail",
    msg_html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
    }
    .header {
      background-color: #333333;
      color: #ffffff;
      padding: 10px;
      text-align: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .footer {
      background-color: #f4f4f4;
      color: #333333;
      text-align: center;
      padding: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <table class="email-container" cellspacing="0" cellpadding="0">
    <tr>
      <td class="header">
        <h1>Victor Hugo mandou, a multidão abalou!</h1>
      </td>
    </tr>
    <tr>
      <td class="content">
        <p>Olá,</p>
        <p>Obrigado por se inscrever no nosso serviço. Estamos felizes em tê-lo conosco.</p>
        <p>Atenciosamente,<br>Equipe XYZ</p>
      </td>
    </tr>
    <tr>
      <td class="footer">
        <p>&copy; 2024 Victor Corp. Todos os direitos reservados.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    mailto: "victorlimasg@outlook.com",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
