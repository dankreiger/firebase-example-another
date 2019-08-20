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
          type: ['null', 'object'],
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
          title: 'The Cartitems Schema',
          items: {
            $id: '#/properties/cart/properties/cartItems/items',
            type: 'object',
            title: 'The Items Schema',
            required: ['id', 'name', 'imageUrl', 'price', 'quantity'],
            properties: {
              id: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/id',
                type: 'integer',
                title: 'The Id Schema',
                default: 0,
                examples: [24]
              },
              name: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/name',
                type: 'string',
                title: 'The Name Schema',
                default: '',
                examples: ['Floral Blouse'],
                pattern: '^(.*)$'
              },
              imageUrl: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/imageUrl',
                type: 'string',
                title: 'The Imageurl Schema',
                default: '',
                examples: ['https://i.ibb.co/4W2DGKm/floral-blouse.png'],
                pattern: '^(.*)$'
              },
              price: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/price',
                type: 'integer',
                title: 'The Price Schema',
                default: 0,
                examples: [20]
              },
              quantity: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/quantity',
                type: 'integer',
                title: 'The Quantity Schema',
                default: 0,
                examples: [1]
              }
            }
          }
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
                examples: ['shop/hats'],
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
          type: ['null', 'object'],
          title: 'The Collections Schema'
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
          examples: [true]
        }
      }
    }
  }
};
