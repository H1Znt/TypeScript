import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];
    private _totalPrice: number = 0;
    private _totalQuantity: number = 0;

    addItem(item: Buyable): void {
        this._items.push(item);
    }

    addTotalPrice(price: number): void{
        this._totalPrice += price;
    }

    addTotalQuantity(price: number, quantity: number): void{
        this._totalQuantity += price - (price * (quantity/100));
    }

    removeItem(id: number): void{
        this._items = this._items.filter(item => item.id !== id);
    }
    
    get items(): Buyable[] {
        return [...this._items]; 
    }

    get totalPrice(): number{
        return this._totalPrice;
    }

    get totalQuantity(): number{
        return this._totalQuantity;
    }
}
