<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="icon" href="img/logo.ico" type="img/png" sizes="16x16">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../Login/stilologo.css">
   <script src="../Login/ingreso.js"></script>
  <title>SoonRich | Restaurant</title>
</head>

<body>

    <!-- Formulario de Inicio de Sesión -->
    <section>
      <div class="form-box">
          <div class="form-value">
              <form method="post" action="">
                  <h2>Login</h2>
                  <?php
                  include("conexion.php");
                  include("controlador.php");
                  ?>
                  <div class="inputbox">
                      <ion-icon name="mail-outline"></ion-icon>
                      <input type="email" name="usuario" required>
                      <label for="">Email</label>
                  </div>
                  <div class="inputbox">
                      <ion-icon name="lock-closed-outline"></ion-icon>
                      <input type="password" name="contraseña" required>
                      <label for="">Password</label>
                  </div>
                  <div class="forget">
                      <label for=""><input type="checkbox">Remember Me  <a href="#">Forget Password</a></label>
                  </div>
                  <button name="ingreso">Log in</button>
                  <div class="btnregister">
                      <p>Don't have a account <a href="#">Register</a></p>
                  </div>
              </form>
          </div>
      </div>
  </section>
    <span id="togglePassword" class="toggle-password" onclick="togglePasswordVisibility()">Mostrar Contraseña</span>
     <!-- ALGUNOS ICONOS 
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  -->
</body>

</html>