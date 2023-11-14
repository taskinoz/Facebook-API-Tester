## Graph API Docs

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