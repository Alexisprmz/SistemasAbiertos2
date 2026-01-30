# React

## ¿Qué es React?

React es una librería de **JavaScript** creada por **Facebook en 2013**, diseñada para construir **interfaces de usuario interactivas y dinámicas**.

Actualmente es utilizada por grandes empresas como:

* Netflix
* Instagram
* Airbnb
* WhatsApp Web

---

## Características principales

* Basada en **componentes reutilizables**.
* Cada componente puede manejar su propio **estado** mediante *Hooks*.
* Permite construir aplicaciones grandes a partir de **pequeñas piezas aisladas**.
* Facilita el mantenimiento y la **escalabilidad** del código.

---

## Métodos de instalación

### Opción 1: Create React App (tradicional)

```bash
npx create-react-app mi-proyecto
cd mi-proyecto
npm start
```

### Opción 2: Vite (recomendado)

```bash
npm create vite@latest mi-proyecto
cd mi-proyecto
npm install
npm run dev
```

---

## Atajos útiles

* **RFC** → Crea rápidamente un componente funcional.

---

## Hooks principales

### useState – Manejo de estado

Permite crear variables que, al cambiar, provocan el **re-renderizado** del componente.

```jsx
// variable        método para actualizar   valor inicial
const [customer, setCustomer] = useState({});
const [total, setTotal] = useState(0);
const [products, setProducts] = useState([]);
const [modal, setModal] = useState(false);

// Actualizar estado
setTotal(total + 1);
```

**Nota importante:**
Los hooks **NO** pueden declararse dentro de condicionales ni ciclos.

```jsx
// INCORRECTO
if (auth) {
  const [modal, setModal] = useState(false);
}
```

---

### useEffect – Efectos secundarios

Permite ejecutar código cuando una dependencia cambia.

```jsx
useEffect(() => {
  setData(db);
}, [db]); // Se ejecuta cuando 'db' cambia
```

---

## Manejo de eventos con onClick

Es importante entender cómo se ejecutan las funciones en los eventos.

### Sin parámetros

```jsx
<button onClick={handleClick}>
  Agregar al carrito
</button>
```

Se ejecuta **solo al hacer clic**.

---

### Ejecución inmediata (incorrecto)

```jsx
<button onClick={handleClick(guitar)}>
  Agregar al carrito
</button>
```

Se ejecuta inmediatamente al renderizar y puede provocar un bucle infinito.

---

### Con parámetros (correcto)

```jsx
<button onClick={() => handleClick(guitar)}>
  Agregar al carrito
</button>
```

Se ejecuta correctamente al hacer clic y permite pasar parámetros.

---

## Conceptos fundamentales

### Componentes

Los **componentes** son bloques reutilizables que representan partes de la interfaz.
Cada componente es una función que retorna JSX.

Sirven para dividir la aplicación en partes pequeñas y fáciles de mantener.

---

### Estado (useState)

El **estado** permite almacenar información que puede cambiar durante la ejecución de la aplicación, como los productos del carrito.

```jsx
const [cart, setCart] = useState([])
```

Cuando el estado cambia, React actualiza automáticamente la interfaz.

---

### Props

Las **props** permiten pasar información de un componente padre a uno hijo.

Se utilizan para compartir **datos y funciones** entre componentes.

---

### Método .map()

El método **.map()** se utiliza para recorrer arrays y renderizar listas de componentes de forma dinámica.

Es fundamental para mostrar productos o elementos del carrito.

---

### Virtual DOM

React utiliza el **Virtual DOM** para mejorar el rendimiento, actualizando solo las partes necesarias de la interfaz cuando cambia el estado.

---

## Ejecución del proyecto

```bash
npm install
npm run dev
```

---
