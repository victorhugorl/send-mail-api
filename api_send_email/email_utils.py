from django.core.mail import EmailMessage
from django.template.loader import render_to_string

def send_html_email(dict):
    subject = dict['subject']
    html_content = dict['msg_html']
    from_email = 'emailsubmit6@gmail.com'
    to = dict['mailto']

    email = EmailMessage(subject, html_content, from_email, [to])
    email.content_subtype = 'html'  # Define o conteúdo como HTML
    email.send()