<? if ($_GET['status'] == 'success') { ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
    <title>Квиз-лендинг</title>
    <meta name="description" content="">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="pragma" content="no-cache">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/project.min.css">
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(95767749, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/95767749" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
</head>
<body>
<!-- ONE-STEP START -->
<div class="step-slide last_slide">
    <!-- AFTER SUBMIT START -->
    <div class="after-submit">
        <div class="container">
            <h4 class="after-submit__title">Өтініш жіберілді</h4>
            <h5 class="after-submit__descr">Біздің менеджер сізге қайта қоңырау шалып, ас үйіңіздің құнын хабарлайды және кез келген сұрақтарға жауап береді.</h5>
            <div class="_center text-center mb-4">
                <a href="/" class="btn btn-primary" style="margin-top: 0">басты бетке</a>
            </div>
        </div>
    </div>
    <!-- AFTER SUBMIT END -->
</div>
<!-- ONE-STEP END -->
</body>
<? } else {
    header ("Location: /");
} ?>
