### Visit `.env.sample`

- create `.env.local` file

```sh
$ touch cp .env.sample .env.local
```

- fill in Firebase and Stripe credentials

### Live

https://puppy-shop.herokuapp.com

### To add data to firestore (not the best explanation, but at least we have something here)

- Add effect hook to `App.js` with firebase util.
- Update collections key and collections array as needed, as well as mapped data that is needed e.g. title, items

```sh
useEffect(() => {
  addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
}, [collectionsArray])
```

- Add appropriate selector to `mapStateToProps`: e.g.

```sh
  const mapStateToProps = createStructuredSelector({
    collectionsArray: selectCollectionsForPreview
  });
```
