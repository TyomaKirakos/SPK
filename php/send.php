<?php
$new_url = '../thanks.html';

$to = "evolutioner.tyoma@yandex.ru"; // емайл получателя данных из формы
$theme = "Запись на доп.образование"; // тема полученного емайла
$message = "ФИО: ".$_POST['fio']."<br>"; //присвоить переменной значение, полученное из формы name=name
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
if (mail($to, $theme, $message, $headers)){ //отправляет получателю на емайл значения переменных
    header('Location: '.$new_url);
}
?>