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
          type: ['object', 'null'],
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
                examples: [1]
              },
              name: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/name',
                type: 'string',
                title: 'The Name Schema',
                default: '',
                examples: ['Brown Brim'],
                pattern: '^(.*)$'
              },
              imageUrl: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/imageUrl',
                type: 'string',
                title: 'The Imageurl Schema',
                default: '',
                examples: ['https://i.ibb.co/ZYW3VTp/brown-brim.png'],
                pattern: '^(.*)$'
              },
              price: {
                $id:
                  '#/properties/cart/properties/cartItems/items/properties/price',
                type: 'integer',
                title: 'The Price Schema',
                default: 0,
                examples: [25]
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
          type: 'object',
          title: 'The Collections Schema',
          required: ['hats', 'sneakers', 'jackets', 'womens', 'mens'],
          properties: {
            hats: {
              $id: '#/properties/shop/properties/collections/properties/hats',
              type: 'object',
              title: 'The Hats Schema',
              required: ['id', 'title', 'routeName', 'items'],
              properties: {
                id: {
                  $id:
                    '#/properties/shop/properties/collections/properties/hats/properties/id',
                  type: 'integer',
                  title: 'The Id Schema',
                  default: 0,
                  examples: [1]
                },
                title: {
                  $id:
                    '#/properties/shop/properties/collections/properties/hats/properties/title',
                  type: 'string',
                  title: 'The Title Schema',
                  default: '',
                  examples: ['Hats'],
                  pattern: '^(.*)$'
                },
                routeName: {
                  $id:
                    '#/properties/shop/properties/collections/properties/hats/properties/routeName',
                  type: 'string',
                  title: 'The Routename Schema',
                  default: '',
                  examples: ['hats'],
                  pattern: '^(.*)$'
                },
                items: {
                  $id:
                    '#/properties/shop/properties/collections/properties/hats/properties/items',
                  type: 'array',
                  title: 'The Items Schema',
                  items: {
                    $id:
                      '#/properties/shop/properties/collections/properties/hats/properties/items/items',
                    type: 'object',
                    title: 'The Items Schema',
                    required: ['id', 'name', 'imageUrl', 'price'],
                    properties: {
                      id: {
                        $id:
                          '#/properties/shop/properties/collections/properties/hats/properties/items/items/properties/id',
                        type: 'integer',
                        title: 'The Id Schema',
                        default: 0,
                        examples: [1]
                      },
                      name: {
                        $id:
                          '#/properties/shop/properties/collections/properties/hats/properties/items/items/properties/name',
                        type: 'string',
                        title: 'The Name Schema',
                        default: '',
                        examples: ['Brown Brim'],
                        pattern: '^(.*)$'
                      },
                      imageUrl: {
                        $id:
                          '#/properties/shop/properties/collections/properties/hats/properties/items/items/properties/imageUrl',
                        type: 'string',
                        title: 'The Imageurl Schema',
                        default: '',
                        examples: ['https://i.ibb.co/ZYW3VTp/brown-brim.png'],
                        pattern: '^(.*)$'
                      },
                      price: {
                        $id:
                          '#/properties/shop/properties/collections/properties/hats/properties/items/items/properties/price',
                        type: 'integer',
                        title: 'The Price Schema',
                        default: 0,
                        examples: [25]
                      }
                    }
                  }
                }
              }
            },
            sneakers: {
              $id:
                '#/properties/shop/properties/collections/properties/sneakers',
              type: 'object',
              title: 'The Sneakers Schema',
              required: ['id', 'title', 'routeName', 'items'],
              properties: {
                id: {
                  $id:
                    '#/properties/shop/properties/collections/properties/sneakers/properties/id',
                  type: 'integer',
                  title: 'The Id Schema',
                  default: 0,
                  examples: [2]
                },
                title: {
                  $id:
                    '#/properties/shop/properties/collections/properties/sneakers/properties/title',
                  type: 'string',
                  title: 'The Title Schema',
                  default: '',
                  examples: ['Sneakers'],
                  pattern: '^(.*)$'
                },
                routeName: {
                  $id:
                    '#/properties/shop/properties/collections/properties/sneakers/properties/routeName',
                  type: 'string',
                  title: 'The Routename Schema',
                  default: '',
                  examples: ['sneakers'],
                  pattern: '^(.*)$'
                },
                items: {
                  $id:
                    '#/properties/shop/properties/collections/properties/sneakers/properties/items',
                  type: 'array',
                  title: 'The Items Schema',
                  items: {
                    $id:
                      '#/properties/shop/properties/collections/properties/sneakers/properties/items/items',
                    type: 'object',
                    title: 'The Items Schema',
                    required: ['id', 'name', 'imageUrl', 'price'],
                    properties: {
                      id: {
                        $id:
                          '#/properties/shop/properties/collections/properties/sneakers/properties/items/items/properties/id',
                        type: 'integer',
                        title: 'The Id Schema',
                        default: 0,
                        examples: [10]
                      },
                      name: {
                        $id:
                          '#/properties/shop/properties/collections/properties/sneakers/properties/items/items/properties/name',
                        type: 'string',
                        title: 'The Name Schema',
                        default: '',
                        examples: ['Adidas NMD'],
                        pattern: '^(.*)$'
                      },
                      imageUrl: {
                        $id:
                          '#/properties/shop/properties/collections/properties/sneakers/properties/items/items/properties/imageUrl',
                        type: 'string',
                        title: 'The Imageurl Schema',
                        default: '',
                        examples: ['https://i.ibb.co/0s3pdnc/adidas-nmd.png'],
                        pattern: '^(.*)$'
                      },
                      price: {
                        $id:
                          '#/properties/shop/properties/collections/properties/sneakers/properties/items/items/properties/price',
                        type: 'integer',
                        title: 'The Price Schema',
                        default: 0,
                        examples: [220]
                      }
                    }
                  }
                }
              }
            },
            jackets: {
              $id:
                '#/properties/shop/properties/collections/properties/jackets',
              type: 'object',
              title: 'The Jackets Schema',
              required: ['id', 'title', 'routeName', 'items'],
              properties: {
                id: {
                  $id:
                    '#/properties/shop/properties/collections/properties/jackets/properties/id',
                  type: 'integer',
                  title: 'The Id Schema',
                  default: 0,
                  examples: [3]
                },
                title: {
                  $id:
                    '#/properties/shop/properties/collections/properties/jackets/properties/title',
                  type: 'string',
                  title: 'The Title Schema',
                  default: '',
                  examples: ['Jackets'],
                  pattern: '^(.*)$'
                },
                routeName: {
                  $id:
                    '#/properties/shop/properties/collections/properties/jackets/properties/routeName',
                  type: 'string',
                  title: 'The Routename Schema',
                  default: '',
                  examples: ['jackets'],
                  pattern: '^(.*)$'
                },
                items: {
                  $id:
                    '#/properties/shop/properties/collections/properties/jackets/properties/items',
                  type: 'array',
                  title: 'The Items Schema',
                  items: {
                    $id:
                      '#/properties/shop/properties/collections/properties/jackets/properties/items/items',
                    type: 'object',
                    title: 'The Items Schema',
                    required: ['id', 'name', 'imageUrl', 'price'],
                    properties: {
                      id: {
                        $id:
                          '#/properties/shop/properties/collections/properties/jackets/properties/items/items/properties/id',
                        type: 'integer',
                        title: 'The Id Schema',
                        default: 0,
                        examples: [18]
                      },
                      name: {
                        $id:
                          '#/properties/shop/properties/collections/properties/jackets/properties/items/items/properties/name',
                        type: 'string',
                        title: 'The Name Schema',
                        default: '',
                        examples: ['Black Jean Shearling'],
                        pattern: '^(.*)$'
                      },
                      imageUrl: {
                        $id:
                          '#/properties/shop/properties/collections/properties/jackets/properties/items/items/properties/imageUrl',
                        type: 'string',
                        title: 'The Imageurl Schema',
                        default: '',
                        examples: [
                          'https://i.ibb.co/XzcwL5s/black-shearling.png'
                        ],
                        pattern: '^(.*)$'
                      },
                      price: {
                        $id:
                          '#/properties/shop/properties/collections/properties/jackets/properties/items/items/properties/price',
                        type: 'integer',
                        title: 'The Price Schema',
                        default: 0,
                        examples: [125]
                      }
                    }
                  }
                }
              }
            },
            womens: {
              $id: '#/properties/shop/properties/collections/properties/womens',
              type: 'object',
              title: 'The Womens Schema',
              required: ['id', 'title', 'routeName', 'items'],
              properties: {
                id: {
                  $id:
                    '#/properties/shop/properties/collections/properties/womens/properties/id',
                  type: 'integer',
                  title: 'The Id Schema',
                  default: 0,
                  examples: [4]
                },
                title: {
                  $id:
                    '#/properties/shop/properties/collections/properties/womens/properties/title',
                  type: 'string',
                  title: 'The Title Schema',
                  default: '',
                  examples: ['Womens'],
                  pattern: '^(.*)$'
                },
                routeName: {
                  $id:
                    '#/properties/shop/properties/collections/properties/womens/properties/routeName',
                  type: 'string',
                  title: 'The Routename Schema',
                  default: '',
                  examples: ['womens'],
                  pattern: '^(.*)$'
                },
                items: {
                  $id:
                    '#/properties/shop/properties/collections/properties/womens/properties/items',
                  type: 'array',
                  title: 'The Items Schema',
                  items: {
                    $id:
                      '#/properties/shop/properties/collections/properties/womens/properties/items/items',
                    type: 'object',
                    title: 'The Items Schema',
                    required: ['id', 'name', 'imageUrl', 'price'],
                    properties: {
                      id: {
                        $id:
                          '#/properties/shop/properties/collections/properties/womens/properties/items/items/properties/id',
                        type: 'integer',
                        title: 'The Id Schema',
                        default: 0,
                        examples: [23]
                      },
                      name: {
                        $id:
                          '#/properties/shop/properties/collections/properties/womens/properties/items/items/properties/name',
                        type: 'string',
                        title: 'The Name Schema',
                        default: '',
                        examples: ['Blue Tanktop'],
                        pattern: '^(.*)$'
                      },
                      imageUrl: {
                        $id:
                          '#/properties/shop/properties/collections/properties/womens/properties/items/items/properties/imageUrl',
                        type: 'string',
                        title: 'The Imageurl Schema',
                        default: '',
                        examples: ['https://i.ibb.co/7CQVJNm/blue-tank.png'],
                        pattern: '^(.*)$'
                      },
                      price: {
                        $id:
                          '#/properties/shop/properties/collections/properties/womens/properties/items/items/properties/price',
                        type: 'integer',
                        title: 'The Price Schema',
                        default: 0,
                        examples: [25]
                      }
                    }
                  }
                }
              }
            },
            mens: {
              $id: '#/properties/shop/properties/collections/properties/mens',
              type: 'object',
              title: 'The Mens Schema',
              required: ['id', 'title', 'routeName', 'items'],
              properties: {
                id: {
                  $id:
                    '#/properties/shop/properties/collections/properties/mens/properties/id',
                  type: 'integer',
                  title: 'The Id Schema',
                  default: 0,
                  examples: [5]
                },
                title: {
                  $id:
                    '#/properties/shop/properties/collections/properties/mens/properties/title',
                  type: 'string',
                  title: 'The Title Schema',
                  default: '',
                  examples: ['Mens'],
                  pattern: '^(.*)$'
                },
                routeName: {
                  $id:
                    '#/properties/shop/properties/collections/properties/mens/properties/routeName',
                  type: 'string',
                  title: 'The Routename Schema',
                  default: '',
                  examples: ['mens'],
                  pattern: '^(.*)$'
                },
                items: {
                  $id:
                    '#/properties/shop/properties/collections/properties/mens/properties/items',
                  type: 'array',
                  title: 'The Items Schema',
                  items: {
                    $id:
                      '#/properties/shop/properties/collections/properties/mens/properties/items/items',
                    type: 'object',
                    title: 'The Items Schema',
                    required: ['id', 'name', 'imageUrl', 'price'],
                    properties: {
                      id: {
                        $id:
                          '#/properties/shop/properties/collections/properties/mens/properties/items/items/properties/id',
                        type: 'integer',
                        title: 'The Id Schema',
                        default: 0,
                        examples: [30]
                      },
                      name: {
                        $id:
                          '#/properties/shop/properties/collections/properties/mens/properties/items/items/properties/name',
                        type: 'string',
                        title: 'The Name Schema',
                        default: '',
                        examples: ['Camo Down Vest'],
                        pattern: '^(.*)$'
                      },
                      imageUrl: {
                        $id:
                          '#/properties/shop/properties/collections/properties/mens/properties/items/items/properties/imageUrl',
                        type: 'string',
                        title: 'The Imageurl Schema',
                        default: '',
                        examples: ['https://i.ibb.co/xJS0T3Y/camo-vest.png'],
                        pattern: '^(.*)$'
                      },
                      price: {
                        $id:
                          '#/properties/shop/properties/collections/properties/mens/properties/items/items/properties/price',
                        type: 'integer',
                        title: 'The Price Schema',
                        default: 0,
                        examples: [325]
                      }
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
          examples: [true]
        }
      }
    }
  }
};
