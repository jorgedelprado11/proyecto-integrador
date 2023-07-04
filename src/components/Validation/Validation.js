const validation = (userData) => {
  const errors = {};

  //Validaciones para email
  if (
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      userData.email
    )
  )
    errors.email = "ingrese un email válido";
  if (!userData.email) errors.email = "ingrese un email";
  if (userData.email.length > 35)
    errors.email = "ha superado el limite de caracteres(35)";

  //validaciones para password
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/.test(
      userData.password
    )
  )
    errors.password = `la contraseña debe contener: 
    -Entre 6 y 10 caracteres
    -Al menos una mayúscula y una minuscula
    -Al menos un dígito
    -Al menos 1 caracter especial`;

  return errors;
};

export default validation;
