using System.Globalization;
using CsvHelper;
using Microsoft.VisualBasic;
using ZstdSharp.Unsafe;
public class ConnectionCSV : DataHandler{
    private string pathToFileWithShops = "../Shops.csv";
    private string pathToFileWithProduct = "../Items.csv";
    private List<Shop>? shops;
    private List<Product>? products;

    ConnectionCSV(){
        var csv = getCSVReader(pathToFileWithShops);
        shops = csv.GetRecords<Shop>().ToList();
        csv = getCSVReader(pathToFileWithProduct);
        products = csv.GetRecords<Product>().ToList();
    }
    private CsvReader getCSVReader(string path){
        var reader = new StreamReader(path);        
        return new CsvReader(reader, CultureInfo.InvariantCulture);
    }
    public List<Shop> GetShops(){
        return shops;
    }
    public void AddShop(string _name, string _address){
        foreach (var shop in shops){
            if(shop.Name == _name && shop.Address == _address)
                return;
        }
        var lastShop = shops.Last();
        shops.Add(new Shop(lastShop.ID + 1, _name, _address));
    }
    public void AddProduct(string _name){
        foreach (var product in products){
            if(product.Name == _name)
                return;
        }
        var lastShop = products.Last();
        products.Add(new Product(lastShop.ID + 1, _name));
    }
    // public void AddProductInShop(List<IProductsShop> _products){
    //     foreach (var product in _products){
    //         foreach (var item in products){
    //             if(ShopProduct(product) == item)
    //         } 
    //     }
    //     string sqlC = "";
    //     if(res != null && int.Parse(res) == 0){
    //         sqlC = $"INSERT INTO `Shop_Product` (ID_Shop, ID_Product, Price, Count) VALUES ({product.IdShop}, {product.IdProduct}, {product.PriceProduct}, {product.CountProduct})";
    //     }else{
    //         if(product.PriceProduct != null){
    //             sqlC = $"UPDATE `Shop_Product` SET Price={product.PriceProduct}, Count=Count+{product.CountProduct} WHERE ID_Shop={product.IdShop} AND ID_Product={product.IdProduct}";
    //         }else{
    //             sqlC = $"UPDATE `Shop_Product` SET Count=Count+{product.CountProduct} WHERE ID_Shop={product.IdShop} AND ID_Product={product.IdProduct}";

    //         }
            
    //     }
    // }
    // public Shop GetShopWithCheapProduct(int _idProduct);
    // public List<ShopProduct> GetProductsByPrice(int _idShop, float _price);
    // public float BuyProducts(int _idShop, List<IListProduct> _products);
    // public IShopByListProducts GetShopWithCheapListProduct(List<IListProduct> _products);
    // public List<Product> GetAllProducts(){
    //     return products;
    // }
}