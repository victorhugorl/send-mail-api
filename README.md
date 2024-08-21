# API simples para enviar e-mails com Django e Django Ninja

Para subir o projeto local altere as variáveis de ambiente:
* renomeie o arquivo `/.example` para `/.env`
```bash
cp .example .env
```
* Altere todas as chaves para configurar o seu e-mail ( a API usa como base o email configurado aqui)

* feito isso, se faz necessário ir em `/api-send-mail/` e alterar o `email_utils.py`

```python
def send_html_email(dict):
    subject = dict['subject']
    html_content = dict['msg_html']
    # Altere esse from_email para o email que configurou anteriormente
    from_email = 'seu@email.com'
   
```
* Feito isso é necessário criar um ambiente virtual e instalar os pacotes necessários para rodar a api
  ```bash
  python -m venv venv
  
  ```
* Ative o ambiente virtual
no linux
```bash
source venv/bin/activate
```
no Windows
```powershell
./venv/scrpipts/activate
```
* Logo após intalar os pacotes necessários
```bash
pip install -r requirements.txt
```
* Agora só executar o projeto django.
```bash
python manage.py runserver
```
Ele irá rodar na porta padrão django :8000

* Para testar basta abrir o navegador na seguinte rota `localhost:8000/api/hello`

e irá aparecer a mensagem "Hello World" no seu navegador

## Endpoints
A api possui as seguintes rotas:
`/api/hello` para teste de funcionamento do abiente
`/api/mail` para a funcionalidade devida

### Objeto a ser enviado
O padrão para o objeto é o seguinte:
```json
{
 "subject": "Assunto do seu E-mail",
 "msg": "Html Completo do corpo do seu E-mail"
 "mailto": "example@gmail.com" 
}
```
Subject: Assunto do email propriamente dito
msg: mensagem a ser enviada ( está aceitando html como padrão para mais personalização)
mailto: email da pessoa que deseja mandar o email



