## Facebook Graph API Docs

![taskinoz github io_Facebook-API-Tester_](https://github.com/taskinoz/Facebook-API-Tester/assets/7439692/eb1b8917-7fd5-4d30-9f32-a3c36db32109)

![taskinoz github io_Facebook-API-Tester_ (1)](https://github.com/taskinoz/Facebook-API-Tester/assets/7439692/8e4baa0a-e594-49b3-abbd-c8f6d310b1b2)


## Live Demo
[Facebook API Tester](https://taskinoz.github.io/Facebook-API-Tester/)

### React Docs

`https://www.electronjs.org/docs/latest/tutorial/quick-start`

### Product Set

`https://developers.facebook.com/docs/graph-api/reference/product-set/`

### Product Catalogue

`https://developers.facebook.com/docs/marketing-api/reference/product-catalog/products/`

### Curl Command

**Product Set**
```bash
curl -G \
-d 'limit=1000' \
-d 'after=0' \
-d 'fields=fields=id,retailer_id,name,short_description,description,currency,price,product_catalog,manufacturer_part_number,custom_label_0,custom_label_1,custom_label_2,custom_label_3,custom_label_4,image_url,url' \
-d 'access_token=ACCESS_TOKEN' \
-d 'appsecret_proof=APP_SECRET' \
https://graph.facebook.com/API_VERSION/PRODUCT_SET/products
```

**Product Catalogue**
```bash
curl -G \
  -d 'limit=500' \
  -d 'access_token=ACCESS_TOKEN' \
  -d 'appsecret_proof=APP_SECRET' \
  https://graph.facebook.com/API_VERSION/PRODUCT_CATEGORY/product_sets
```
