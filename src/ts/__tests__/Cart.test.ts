import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const user1 = new Movie(12, 2300, 5, 2012, 'США', 'Avengers', 'Фантастика', 137)
const user2 = new Movie(3, 1200, 7, 2012, 'Россия', 'Брат', 'Криминал', 140)

const cart = new Cart();


test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('Добавление новой карточки', () => {
  cart.addItem(user1);
  expect(cart.items.length).toBe(1);
})

test('Добавление стоимости карточки в корзину', () => {
  cart.addTotalPrice(user1.price);
  expect(cart.totalPrice).toBe(2300);
})

test('Подсчёт общей стоимости', () => {
  cart.addItem(user2);
  cart.addTotalPrice(user2.price);
  expect(cart.totalPrice).toBe(3500);
})

test('Подсчёт стоимости с учётом скидки', () => {
  cart.addTotalQuantity(user1.price, user1.quantity)
  expect(cart.totalQuantity).toBe(2185);
})

test('Подсчёт стоимости с учётом скидки двух карточек', () => {
  cart.addTotalQuantity(user2.price, user2.quantity)
  expect(cart.totalQuantity).toBe(3301);
})

test('Удаление карточки из корзины', () => {
  cart.removeItem(12);
  expect(cart.items.length).toBe(1);
})