<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="formdangnhap/cssf.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <title>Đăng nhập</title>
    <style>
        body {
  background-image: url('../img/vng.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
    </style>
</head>
<body>
    
    <form action="" class="form" id="form">
        <div class="title">
            <i class="fa-solid fa-user"></i>
            <h1>đăng nhập</h1>
        </div>
        <div class="enter-information">
            <label for="fullname" class="label">Tên đăng nhập<sup>*</sup></label>
            <input id="fullname" name="fullname" type="text" placeholder="Tên đăng nhập">
            <span class="message"></span>
        </div>
        <div class="enter-information">
            <label for="password" class="label">Nhập mật khẩu<sup>*</sup></label>
            <input id="password" name="password" type="password" placeholder="Tên đăng nhập">
            <span class="message"></span>
        </div>
        </div>
        <button >đăng Nhập</button>
        <hr>
        <p>Khi click nút đăng ký, bạn đã đồng ý với <b>thỏa thuận sử dụng</b> của chúng tôi</p>
        <hr>
        <div class="dangnhapkhac">
            <span>Hoặc đăng nhập bằng</span>
            <div class="google-fb">
                <a href="">
                <div class="icon" style="--clr: rgb(67,96,155); --clr1:rgb(86, 121, 192);">
                    <i class="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                </div>
                </a>
                <a href="">
                <div class="icon" style="--clr: rgb(220,73,63); --clr1: rgb(252, 93, 82);">
                    <i class="fa-brands fa-google"></i>
                    <span>Google +</span>
                </div>
                </a>
            </div>
            <p>Bạn đã có tài khoản?</p>
            <a href="../formdangky/index.php">Đăng Ký</a>
        </div>
    </form>
</body>
<script src="app.js"></script>
<script>
    checkForm({
        form: '#form',
        rules: [
            checkForm.isResquired('#fullname'),
            checkForm.isPassword('#password', 6),
            checkForm.isUsername('#username'),
        ]
    });
</script>
</html>