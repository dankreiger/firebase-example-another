export default {
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/root.json',
  type: 'object',
  title: 'The Root Schema',
  required: ['user', 'cart', 'directory', 'shop', '_persist'],
  properties: {
    user: {
      $id: '#/properties/user',
      type: 'object',
      title: 'The User Schema',
      required: ['currentUser'],
      properties: {
        currentUser: {
          $id: '#/properties/user/properties/currentUser',
          type: 'null',
          title: 'The Currentuser Schema',
          default: null,
          examples: [null]
        }
      }
    },
    cart: {
      $id: '#/properties/cart',
      type: 'object',
      title: 'The Cart Schema',
      required: ['hidden', 'cartItems'],
      properties: {
        hidden: {
          $id: '#/properties/cart/properties/hidden',
          type: 'boolean',
          title: 'The Hidden Schema',
          default: false,
          examples: [true]
        },
        cartItems: {
          $id: '#/properties/cart/properties/cartItems',
          type: 'array',
          title: 'The Cartitems Schema'
        }
      }
    },
    directory: {
      $id: '#/properties/directory',
      type: 'object',
      title: 'The Directory Schema',
      required: ['sections'],
      properties: {
        sections: {
          $id: '#/properties/directory/properties/sections',
          type: 'array',
          title: 'The Sections Schema',
          items: {
            $id: '#/properties/directory/properties/sections/items',
            type: 'object',
            title: 'The Items Schema',
            required: ['title', 'imageUrl', 'id', 'linkUrl'],
            properties: {
              title: {
                $id:
                  '#/properties/directory/properties/sections/items/properties/title',
                type: 'string',
                title: 'The Title Schema',
                default: '',
                examples: ['hats'],
                pattern: '^(.*)$'
              },
              imageUrl: {
                $id:
                  '#/properties/directory/properties/sections/items/properties/imageUrl',
                type: 'string',
                title: 'The Imageurl Schema',
                default: '',
                examples: ['https://i.ibb.co/cvpntL1/hats.png'],
                pattern: '^(.*)$'
              },
              id: {
                $id:
                  '#/properties/directory/properties/sections/items/properties/id',
                type: 'integer',
                title: 'The Id Schema',
                default: 0,
                examples: [1]
              },
              linkUrl: {
                $id:
                  '#/properties/directory/properties/sections/items/properties/linkUrl',
                type: 'string',
                title: 'The Linkurl Schema',
                default: '',
                examples: ['hats'],
                pattern: '^(.*)$'
              }
            }
          }
        }
      }
    },
    shop: {
      $id: '#/properties/shop',
      type: 'object',
      title: 'The Shop Schema',
      required: ['collections'],
      properties: {
        collections: {
          $id: '#/properties/shop/properties/collections',
          type: 'array',
          title: 'The Collections Schema',
          items: {
            $id: '#/properties/shop/properties/collections/items',
            type: 'object',
            title: 'The Items Schema',
            required: ['id', 'title', 'routeName', 'items'],
            properties: {
              id: {
                $id:
                  '#/properties/shop/properties/collections/items/properties/id',
                type: 'integer',
                title: 'The Id Schema',
                default: 0,
                examples: [1]
              },
              title: {
                $id:
                  '#/properties/shop/properties/collections/items/properties/title',
                type: 'string',
                title: 'The Title Schema',
                default: '',
                examples: ['Hats'],
                pattern: '^(.*)$'
              },
              routeName: {
                $id:
                  '#/properties/shop/properties/collections/items/properties/routeName',
                type: 'string',
                title: 'The Routename Schema',
                default: '',
                examples: ['hats'],
                pattern: '^(.*)$'
              },
              items: {
                $id:
                  '#/properties/shop/properties/collections/items/properties/items',
                type: 'array',
                title: 'The Items Schema',
                items: {
                  $id:
                    '#/properties/shop/properties/collections/items/properties/items/items',
                  type: 'object',
                  title: 'The Items Schema',
                  required: ['id', 'name', 'imageUrl', 'price'],
                  properties: {
                    id: {
                      $id:
                        '#/properties/shop/properties/collections/items/properties/items/items/properties/id',
                      type: 'integer',
                      title: 'The Id Schema',
                      default: 0,
                      examples: [1]
                    },
                    name: {
                      $id:
                        '#/properties/shop/properties/collections/items/properties/items/items/properties/name',
                      type: 'string',
                      title: 'The Name Schema',
                      default: '',
                      examples: ['Brown Brim'],
                      pattern: '^(.*)$'
                    },
                    imageUrl: {
                      $id:
                        '#/properties/shop/properties/collections/items/properties/items/items/properties/imageUrl',
                      type: 'string',
                      title: 'The Imageurl Schema',
                      default: '',
                      examples: ['https://i.ibb.co/ZYW3VTp/brown-brim.png'],
                      pattern: '^(.*)$'
                    },
                    price: {
                      $id:
                        '#/properties/shop/properties/collections/items/properties/items/items/properties/price',
                      type: 'integer',
                      title: 'The Price Schema',
                      default: 0,
                      examples: [25]
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    _persist: {
      $id: '#/properties/_persist',
      type: 'object',
      title: 'The _persist Schema',
      required: ['version', 'rehydrated'],
      properties: {
        version: {
          $id: '#/properties/_persist/properties/version',
          type: 'integer',
          title: 'The Version Schema',
          default: 0,
          examples: [-1]
        },
        rehydrated: {
          $id: '#/properties/_persist/properties/rehydrated',
          type: 'boolean',
          title: 'The Rehydrated Schema',
          default: false,
          examples: [false]
        }
      }
    }
  }
};
