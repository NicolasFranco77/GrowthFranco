# GROWTH

Growth es un ecommerce desarrollado en React Js. Permite al usuario ver productos, filtrarlos por categoría, acceder a su descripción, agregarlos al carrito y luego hacer el checkout.

### [Live Site](https://quizzical-kilby-8a8c9f.netlify.app/)

![Navegacion](https://i.ibb.co/S6z1f0S/gifnav.gif)

## Construido con:

- [React JS](https://es.reactjs.org)
- [Material UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)

## Instalación

Luego de descargar o clonar este repositorio se debe:

1- Instalar las dependencias.

```
npm i
```

2 - Duplicar el archivo `env.example` como `.env`. y luego ingresar los datos provistos por Firebase.

```
cp .env.example .env
```

3- Iniciar el servidor local.

```
npm start
```

## Estructura

### Componentes:

En `components` se encuentran los componentes del proyecto. Los encargados de comunicarse con la base de datos son:

- **ItemListContainer** : utiliza la función getProducts (importada de services/firebase) para traer los productos.
- **ItemDetailContainer**: utiliza la función getProductsById (importada de services/firebase) para traer el producto seleccionado.
- **CheckoutForm/Review** : utiliza la función createOrder (importada de services/firebase) para crear un nuevo documento en la colección encargada de almacenar los pedidos.

### Context:

En `context/cartContext.js` se encuentra la lógica necesaria para poder trabajar con el carrito y su información desde cualquier componente.

### Firebase:

En `services/firebase ` se encuentra la lógica que nos permite traer los productos desde la base de datos y también generar un nuevo documento cuando se realiza una compra.

### Material UI :

Para mantener el orden, cada componente tiene un `styles.js` para poder modificar los estilos según la necesidad de nuestro proyecto.
