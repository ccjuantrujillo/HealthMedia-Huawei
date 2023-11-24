<p class="large-text semi-bold">Inicia sesión</p>

<form action="">
  <div class="row">
    <div class="item-input">
      <label for="email">Tipo de documento</label>
      <select name="" id="">
        <option value="1">DNI</option>
        <option value="2">Pasaporte</option>
      </select>
    </div>
    <div class="item-input">
      <label for="documentNumber">N° de documento</label>
      <input type="text" id="documentNumber" />
    </div>
  </div>
  <div class="item-input">
    <label for="password">Contraseña</label>
    <input type="password" id="password" />
  </div>

  <div class="redirect small-text">
    <p>¿No tienes una cuenta aún?</p>
    <a href="/registro">Regístrate</a>
  </div>
  <input class="btn button-text" type="submit" value="Login" />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
  }

  form .row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
    align-self: stretch;
  }

  form .item-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex: 1 0 0;

    width: 100%;
  }

  form input[type="text"],
  form input[type="password"],
  form select {
    display: flex;
    padding: 0.5rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    border-radius: 0.5rem;
    border: 1px solid var(--secondary-100, #baceeb);
    background-color: var(--light);

    width: 100%;
  }

  form .redirect {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .redirect a {
    color: var(--secondary-500, #1a5bbc);
    font-weight: 600;
  }
</style>
