<?php
if ((isset($_POST['name']) && $_POST['tel'] != "")) { //Проверка отправилось ли наше поля и не пустые ли они
  $to = 'v@tolkachev.biz'; //Почта получателя, через запятую можно указать сколько угодно адресов
  $subject = 'Заявка на имплантацию';
  $message = '
  <html>
    <head>
      <title>' . $subject . '</title>
    </head>
    <body>
      <p>Имя: ' . $_POST['name'] . '</p>
      <p>Телефон: ' . $_POST['tel'] . '</p>
      <p>Дата: ' . $_POST['date'] . '</p>
      <p>Время: ' . $_POST['time'] . '</p>
    </body>
  </html>';
  $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
  $headers .= "From: implant@factorsmile.ru\r\n"; //Наименование и почта отправителя
  if (mail($to, $subject, $message, $headers)) {
    echo 'success';
  } else {
    echo 'error';
  }
}?>
