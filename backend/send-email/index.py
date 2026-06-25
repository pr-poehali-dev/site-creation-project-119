import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту 6456609@list.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Имя и телефон обязательны'}
        }

    smtp_user = '6456609@list.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px; border: 2px solid #1B2CFF;">
      <h2 style="color: #1B2CFF; margin: 0 0 20px;">Новая заявка с сайта Чеки1 Сочи</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666;">Имя:</td><td style="padding: 8px 0; font-weight: bold;">{name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Телефон:</td><td style="padding: 8px 0; font-weight: bold;"><a href="tel:{phone}">{phone}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email:</td><td style="padding: 8px 0;">{email if email else '—'}</td></tr>
      </table>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.list.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }