export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  quantity: Scalars['Int'];
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CartItemConnection = {
  __typename?: 'CartItemConnection';
  values?: Maybe<Array<Maybe<CartItem>>>;
  groupBy?: Maybe<CartItemGroupBy>;
  aggregate?: Maybe<CartItemAggregator>;
};

export type CartItemAggregator = {
  __typename?: 'CartItemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<CartItemAggregatorSum>;
  avg?: Maybe<CartItemAggregatorAvg>;
  min?: Maybe<CartItemAggregatorMin>;
  max?: Maybe<CartItemAggregatorMax>;
};

export type CartItemAggregatorSum = {
  __typename?: 'CartItemAggregatorSum';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type CartItemAggregatorAvg = {
  __typename?: 'CartItemAggregatorAvg';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type CartItemAggregatorMin = {
  __typename?: 'CartItemAggregatorMin';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type CartItemAggregatorMax = {
  __typename?: 'CartItemAggregatorMax';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type CartItemGroupBy = {
  __typename?: 'CartItemGroupBy';
  id?: Maybe<Array<Maybe<CartItemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CartItemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CartItemConnectionUpdated_At>>>;
  quantity?: Maybe<Array<Maybe<CartItemConnectionQuantity>>>;
  unitPrice?: Maybe<Array<Maybe<CartItemConnectionUnitPrice>>>;
  totalPrice?: Maybe<Array<Maybe<CartItemConnectionTotalPrice>>>;
  published_at?: Maybe<Array<Maybe<CartItemConnectionPublished_At>>>;
};

export type CartItemConnectionId = {
  __typename?: 'CartItemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CartItemConnection>;
};

export type CartItemConnectionCreated_At = {
  __typename?: 'CartItemConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CartItemConnection>;
};

export type CartItemConnectionUpdated_At = {
  __typename?: 'CartItemConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CartItemConnection>;
};

export type CartItemConnectionQuantity = {
  __typename?: 'CartItemConnectionQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CartItemConnection>;
};

export type CartItemConnectionUnitPrice = {
  __typename?: 'CartItemConnectionUnitPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<CartItemConnection>;
};

export type CartItemConnectionTotalPrice = {
  __typename?: 'CartItemConnectionTotalPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<CartItemConnection>;
};

export type CartItemConnectionPublished_At = {
  __typename?: 'CartItemConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CartItemConnection>;
};

export type CartItemInput = {
  quantity: Scalars['Int'];
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCartItemInput = {
  quantity?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCartItemInput = {
  data?: Maybe<CartItemInput>;
};

export type CreateCartItemPayload = {
  __typename?: 'createCartItemPayload';
  cartItem?: Maybe<CartItem>;
};

export type UpdateCartItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCartItemInput>;
};

export type UpdateCartItemPayload = {
  __typename?: 'updateCartItemPayload';
  cartItem?: Maybe<CartItem>;
};

export type DeleteCartItemInput = {
  where?: Maybe<InputId>;
};

export type DeleteCartItemPayload = {
  __typename?: 'deleteCartItemPayload';
  cartItem?: Maybe<CartItem>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  items?: Maybe<Array<Maybe<Item>>>;
};


export type CategoryItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  values?: Maybe<Array<Maybe<Category>>>;
  groupBy?: Maybe<CategoryGroupBy>;
  aggregate?: Maybe<CategoryAggregator>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  image?: Maybe<Array<Maybe<CategoryConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<CategoryConnectionPublished_At>>>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionImage = {
  __typename?: 'CategoryConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionPublished_At = {
  __typename?: 'CategoryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryInput = {
  name: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type Home = {
  __typename?: 'Home';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description: Scalars['String'];
  featuredItem?: Maybe<Array<Maybe<ComponentComponentFeaturedItem>>>;
  hero?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type HomeInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  featuredItem?: Maybe<Array<Maybe<ComponentComponentFeaturedItemInput>>>;
  hero?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomeInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featuredItem?: Maybe<Array<Maybe<EditComponentComponentFeaturedItemInput>>>;
  hero?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHomeInput = {
  data?: Maybe<EditHomeInput>;
};

export type UpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<Home>;
};

export type DeleteHomePayload = {
  __typename?: 'deleteHomePayload';
  home?: Maybe<Home>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  secondName?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  image?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  category?: Maybe<Category>;
  published_at?: Maybe<Scalars['DateTime']>;
  toppings?: Maybe<Array<Maybe<Topping>>>;
  variants?: Maybe<Array<Maybe<Variant>>>;
};


export type ItemToppingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ItemVariantsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  values?: Maybe<Array<Maybe<Item>>>;
  groupBy?: Maybe<ItemGroupBy>;
  aggregate?: Maybe<ItemAggregator>;
};

export type ItemAggregator = {
  __typename?: 'ItemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ItemAggregatorSum>;
  avg?: Maybe<ItemAggregatorAvg>;
  min?: Maybe<ItemAggregatorMin>;
  max?: Maybe<ItemAggregatorMax>;
};

export type ItemAggregatorSum = {
  __typename?: 'ItemAggregatorSum';
  price?: Maybe<Scalars['Float']>;
};

export type ItemAggregatorAvg = {
  __typename?: 'ItemAggregatorAvg';
  price?: Maybe<Scalars['Float']>;
};

export type ItemAggregatorMin = {
  __typename?: 'ItemAggregatorMin';
  price?: Maybe<Scalars['Float']>;
};

export type ItemAggregatorMax = {
  __typename?: 'ItemAggregatorMax';
  price?: Maybe<Scalars['Float']>;
};

export type ItemGroupBy = {
  __typename?: 'ItemGroupBy';
  id?: Maybe<Array<Maybe<ItemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ItemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ItemConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ItemConnectionName>>>;
  secondName?: Maybe<Array<Maybe<ItemConnectionSecondName>>>;
  price?: Maybe<Array<Maybe<ItemConnectionPrice>>>;
  image?: Maybe<Array<Maybe<ItemConnectionImage>>>;
  description?: Maybe<Array<Maybe<ItemConnectionDescription>>>;
  slug?: Maybe<Array<Maybe<ItemConnectionSlug>>>;
  category?: Maybe<Array<Maybe<ItemConnectionCategory>>>;
  published_at?: Maybe<Array<Maybe<ItemConnectionPublished_At>>>;
};

export type ItemConnectionId = {
  __typename?: 'ItemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionCreated_At = {
  __typename?: 'ItemConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionUpdated_At = {
  __typename?: 'ItemConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionName = {
  __typename?: 'ItemConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionSecondName = {
  __typename?: 'ItemConnectionSecondName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionPrice = {
  __typename?: 'ItemConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionImage = {
  __typename?: 'ItemConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionDescription = {
  __typename?: 'ItemConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionSlug = {
  __typename?: 'ItemConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionCategory = {
  __typename?: 'ItemConnectionCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionPublished_At = {
  __typename?: 'ItemConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemInput = {
  name: Scalars['String'];
  secondName?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  category?: Maybe<Scalars['ID']>;
  toppings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  variants?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditItemInput = {
  name?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['ID']>;
  toppings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  variants?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateItemInput = {
  data?: Maybe<ItemInput>;
};

export type CreateItemPayload = {
  __typename?: 'createItemPayload';
  item?: Maybe<Item>;
};

export type UpdateItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditItemInput>;
};

export type UpdateItemPayload = {
  __typename?: 'updateItemPayload';
  item?: Maybe<Item>;
};

export type DeleteItemInput = {
  where?: Maybe<InputId>;
};

export type DeleteItemPayload = {
  __typename?: 'deleteItemPayload';
  item?: Maybe<Item>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  quantity: Scalars['Int'];
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  order?: Maybe<Order>;
  item?: Maybe<Item>;
  variant?: Maybe<Variant>;
  toppings?: Maybe<Array<Maybe<Topping>>>;
};


export type OrderItemToppingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  values?: Maybe<Array<Maybe<OrderItem>>>;
  groupBy?: Maybe<OrderItemGroupBy>;
  aggregate?: Maybe<OrderItemAggregator>;
};

export type OrderItemAggregator = {
  __typename?: 'OrderItemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<OrderItemAggregatorSum>;
  avg?: Maybe<OrderItemAggregatorAvg>;
  min?: Maybe<OrderItemAggregatorMin>;
  max?: Maybe<OrderItemAggregatorMax>;
};

export type OrderItemAggregatorSum = {
  __typename?: 'OrderItemAggregatorSum';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderItemAggregatorAvg = {
  __typename?: 'OrderItemAggregatorAvg';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderItemAggregatorMin = {
  __typename?: 'OrderItemAggregatorMin';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderItemAggregatorMax = {
  __typename?: 'OrderItemAggregatorMax';
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderItemGroupBy = {
  __typename?: 'OrderItemGroupBy';
  id?: Maybe<Array<Maybe<OrderItemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrderItemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrderItemConnectionUpdated_At>>>;
  quantity?: Maybe<Array<Maybe<OrderItemConnectionQuantity>>>;
  unitPrice?: Maybe<Array<Maybe<OrderItemConnectionUnitPrice>>>;
  totalPrice?: Maybe<Array<Maybe<OrderItemConnectionTotalPrice>>>;
  order?: Maybe<Array<Maybe<OrderItemConnectionOrder>>>;
  item?: Maybe<Array<Maybe<OrderItemConnectionItem>>>;
  variant?: Maybe<Array<Maybe<OrderItemConnectionVariant>>>;
};

export type OrderItemConnectionId = {
  __typename?: 'OrderItemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionCreated_At = {
  __typename?: 'OrderItemConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionUpdated_At = {
  __typename?: 'OrderItemConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionQuantity = {
  __typename?: 'OrderItemConnectionQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionUnitPrice = {
  __typename?: 'OrderItemConnectionUnitPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionTotalPrice = {
  __typename?: 'OrderItemConnectionTotalPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionOrder = {
  __typename?: 'OrderItemConnectionOrder';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionItem = {
  __typename?: 'OrderItemConnectionItem';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemConnectionVariant = {
  __typename?: 'OrderItemConnectionVariant';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderItemConnection>;
};

export type OrderItemInput = {
  quantity: Scalars['Int'];
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['ID']>;
  item?: Maybe<Scalars['ID']>;
  toppings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  variant?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOrderItemInput = {
  quantity?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['ID']>;
  item?: Maybe<Scalars['ID']>;
  toppings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  variant?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateOrderItemInput = {
  data?: Maybe<OrderItemInput>;
};

export type CreateOrderItemPayload = {
  __typename?: 'createOrderItemPayload';
  orderItem?: Maybe<OrderItem>;
};

export type UpdateOrderItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderItemInput>;
};

export type UpdateOrderItemPayload = {
  __typename?: 'updateOrderItemPayload';
  orderItem?: Maybe<OrderItem>;
};

export type DeleteOrderItemInput = {
  where?: Maybe<InputId>;
};

export type DeleteOrderItemPayload = {
  __typename?: 'deleteOrderItemPayload';
  orderItem?: Maybe<OrderItem>;
};

export enum Enum_Order_Status {
  Paid = 'paid',
  Unpaid = 'unpaid'
}

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  status?: Maybe<Enum_Order_Status>;
  total?: Maybe<Scalars['Float']>;
  checkout_session?: Maybe<Scalars['String']>;
  user?: Maybe<UsersPermissionsUser>;
  published_at?: Maybe<Scalars['DateTime']>;
  order_items?: Maybe<Array<Maybe<OrderItem>>>;
};


export type OrderOrder_ItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  values?: Maybe<Array<Maybe<Order>>>;
  groupBy?: Maybe<OrderGroupBy>;
  aggregate?: Maybe<OrderAggregator>;
};

export type OrderAggregator = {
  __typename?: 'OrderAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<OrderAggregatorSum>;
  avg?: Maybe<OrderAggregatorAvg>;
  min?: Maybe<OrderAggregatorMin>;
  max?: Maybe<OrderAggregatorMax>;
};

export type OrderAggregatorSum = {
  __typename?: 'OrderAggregatorSum';
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorAvg = {
  __typename?: 'OrderAggregatorAvg';
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorMin = {
  __typename?: 'OrderAggregatorMin';
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorMax = {
  __typename?: 'OrderAggregatorMax';
  total?: Maybe<Scalars['Float']>;
};

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  id?: Maybe<Array<Maybe<OrderConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrderConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrderConnectionUpdated_At>>>;
  status?: Maybe<Array<Maybe<OrderConnectionStatus>>>;
  total?: Maybe<Array<Maybe<OrderConnectionTotal>>>;
  checkout_session?: Maybe<Array<Maybe<OrderConnectionCheckout_Session>>>;
  user?: Maybe<Array<Maybe<OrderConnectionUser>>>;
  published_at?: Maybe<Array<Maybe<OrderConnectionPublished_At>>>;
};

export type OrderConnectionId = {
  __typename?: 'OrderConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionCreated_At = {
  __typename?: 'OrderConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionUpdated_At = {
  __typename?: 'OrderConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionStatus = {
  __typename?: 'OrderConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionTotal = {
  __typename?: 'OrderConnectionTotal';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionCheckout_Session = {
  __typename?: 'OrderConnectionCheckout_session';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionUser = {
  __typename?: 'OrderConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionPublished_At = {
  __typename?: 'OrderConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderInput = {
  status?: Maybe<Enum_Order_Status>;
  total?: Maybe<Scalars['Float']>;
  checkout_session?: Maybe<Scalars['String']>;
  order_items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOrderInput = {
  status?: Maybe<Enum_Order_Status>;
  total?: Maybe<Scalars['Float']>;
  checkout_session?: Maybe<Scalars['String']>;
  order_items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateOrderInput = {
  data?: Maybe<OrderInput>;
};

export type CreateOrderPayload = {
  __typename?: 'createOrderPayload';
  order?: Maybe<Order>;
};

export type UpdateOrderInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderInput>;
};

export type UpdateOrderPayload = {
  __typename?: 'updateOrderPayload';
  order?: Maybe<Order>;
};

export type DeleteOrderInput = {
  where?: Maybe<InputId>;
};

export type DeleteOrderPayload = {
  __typename?: 'deleteOrderPayload';
  order?: Maybe<Order>;
};

export type Topping = {
  __typename?: 'Topping';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  internalName: Scalars['String'];
  name: Scalars['String'];
  markup: Scalars['Float'];
  items?: Maybe<Array<Maybe<Item>>>;
};


export type ToppingItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ToppingConnection = {
  __typename?: 'ToppingConnection';
  values?: Maybe<Array<Maybe<Topping>>>;
  groupBy?: Maybe<ToppingGroupBy>;
  aggregate?: Maybe<ToppingAggregator>;
};

export type ToppingAggregator = {
  __typename?: 'ToppingAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ToppingAggregatorSum>;
  avg?: Maybe<ToppingAggregatorAvg>;
  min?: Maybe<ToppingAggregatorMin>;
  max?: Maybe<ToppingAggregatorMax>;
};

export type ToppingAggregatorSum = {
  __typename?: 'ToppingAggregatorSum';
  markup?: Maybe<Scalars['Float']>;
};

export type ToppingAggregatorAvg = {
  __typename?: 'ToppingAggregatorAvg';
  markup?: Maybe<Scalars['Float']>;
};

export type ToppingAggregatorMin = {
  __typename?: 'ToppingAggregatorMin';
  markup?: Maybe<Scalars['Float']>;
};

export type ToppingAggregatorMax = {
  __typename?: 'ToppingAggregatorMax';
  markup?: Maybe<Scalars['Float']>;
};

export type ToppingGroupBy = {
  __typename?: 'ToppingGroupBy';
  id?: Maybe<Array<Maybe<ToppingConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ToppingConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ToppingConnectionUpdated_At>>>;
  internalName?: Maybe<Array<Maybe<ToppingConnectionInternalName>>>;
  name?: Maybe<Array<Maybe<ToppingConnectionName>>>;
  markup?: Maybe<Array<Maybe<ToppingConnectionMarkup>>>;
};

export type ToppingConnectionId = {
  __typename?: 'ToppingConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ToppingConnection>;
};

export type ToppingConnectionCreated_At = {
  __typename?: 'ToppingConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ToppingConnection>;
};

export type ToppingConnectionUpdated_At = {
  __typename?: 'ToppingConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ToppingConnection>;
};

export type ToppingConnectionInternalName = {
  __typename?: 'ToppingConnectionInternalName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ToppingConnection>;
};

export type ToppingConnectionName = {
  __typename?: 'ToppingConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ToppingConnection>;
};

export type ToppingConnectionMarkup = {
  __typename?: 'ToppingConnectionMarkup';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ToppingConnection>;
};

export type ToppingInput = {
  internalName: Scalars['String'];
  name: Scalars['String'];
  markup: Scalars['Float'];
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditToppingInput = {
  internalName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  markup?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateToppingInput = {
  data?: Maybe<ToppingInput>;
};

export type CreateToppingPayload = {
  __typename?: 'createToppingPayload';
  topping?: Maybe<Topping>;
};

export type UpdateToppingInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditToppingInput>;
};

export type UpdateToppingPayload = {
  __typename?: 'updateToppingPayload';
  topping?: Maybe<Topping>;
};

export type DeleteToppingInput = {
  where?: Maybe<InputId>;
};

export type DeleteToppingPayload = {
  __typename?: 'deleteToppingPayload';
  topping?: Maybe<Topping>;
};

export type Variant = {
  __typename?: 'Variant';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  internalName: Scalars['String'];
  name: Scalars['String'];
  markup: Scalars['Float'];
  items?: Maybe<Array<Maybe<Item>>>;
};


export type VariantItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type VariantConnection = {
  __typename?: 'VariantConnection';
  values?: Maybe<Array<Maybe<Variant>>>;
  groupBy?: Maybe<VariantGroupBy>;
  aggregate?: Maybe<VariantAggregator>;
};

export type VariantAggregator = {
  __typename?: 'VariantAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<VariantAggregatorSum>;
  avg?: Maybe<VariantAggregatorAvg>;
  min?: Maybe<VariantAggregatorMin>;
  max?: Maybe<VariantAggregatorMax>;
};

export type VariantAggregatorSum = {
  __typename?: 'VariantAggregatorSum';
  markup?: Maybe<Scalars['Float']>;
};

export type VariantAggregatorAvg = {
  __typename?: 'VariantAggregatorAvg';
  markup?: Maybe<Scalars['Float']>;
};

export type VariantAggregatorMin = {
  __typename?: 'VariantAggregatorMin';
  markup?: Maybe<Scalars['Float']>;
};

export type VariantAggregatorMax = {
  __typename?: 'VariantAggregatorMax';
  markup?: Maybe<Scalars['Float']>;
};

export type VariantGroupBy = {
  __typename?: 'VariantGroupBy';
  id?: Maybe<Array<Maybe<VariantConnectionId>>>;
  created_at?: Maybe<Array<Maybe<VariantConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<VariantConnectionUpdated_At>>>;
  internalName?: Maybe<Array<Maybe<VariantConnectionInternalName>>>;
  name?: Maybe<Array<Maybe<VariantConnectionName>>>;
  markup?: Maybe<Array<Maybe<VariantConnectionMarkup>>>;
};

export type VariantConnectionId = {
  __typename?: 'VariantConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VariantConnection>;
};

export type VariantConnectionCreated_At = {
  __typename?: 'VariantConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VariantConnection>;
};

export type VariantConnectionUpdated_At = {
  __typename?: 'VariantConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VariantConnection>;
};

export type VariantConnectionInternalName = {
  __typename?: 'VariantConnectionInternalName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VariantConnection>;
};

export type VariantConnectionName = {
  __typename?: 'VariantConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VariantConnection>;
};

export type VariantConnectionMarkup = {
  __typename?: 'VariantConnectionMarkup';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<VariantConnection>;
};

export type VariantInput = {
  internalName: Scalars['String'];
  name: Scalars['String'];
  markup: Scalars['Float'];
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditVariantInput = {
  internalName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  markup?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateVariantInput = {
  data?: Maybe<VariantInput>;
};

export type CreateVariantPayload = {
  __typename?: 'createVariantPayload';
  variant?: Maybe<Variant>;
};

export type UpdateVariantInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVariantInput>;
};

export type UpdateVariantPayload = {
  __typename?: 'updateVariantPayload';
  variant?: Maybe<Variant>;
};

export type DeleteVariantInput = {
  where?: Maybe<InputId>;
};

export type DeleteVariantPayload = {
  __typename?: 'deleteVariantPayload';
  variant?: Maybe<Variant>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  orders?: Maybe<Array<Maybe<Order>>>;
};


export type UsersPermissionsUserOrdersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentComponentFeaturedItem = {
  __typename?: 'ComponentComponentFeaturedItem';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  color: Scalars['String'];
  item?: Maybe<Item>;
};

export type ComponentComponentFeaturedItemInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  color: Scalars['String'];
  item?: Maybe<Scalars['ID']>;
};

export type EditComponentComponentFeaturedItemInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['ID']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | CartItem | CartItemConnection | CartItemAggregator | CartItemAggregatorSum | CartItemAggregatorAvg | CartItemAggregatorMin | CartItemAggregatorMax | CartItemGroupBy | CartItemConnectionId | CartItemConnectionCreated_At | CartItemConnectionUpdated_At | CartItemConnectionQuantity | CartItemConnectionUnitPrice | CartItemConnectionTotalPrice | CartItemConnectionPublished_At | CreateCartItemPayload | UpdateCartItemPayload | DeleteCartItemPayload | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionCreated_At | CategoryConnectionUpdated_At | CategoryConnectionName | CategoryConnectionImage | CategoryConnectionPublished_At | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | Home | UpdateHomePayload | DeleteHomePayload | Item | ItemConnection | ItemAggregator | ItemAggregatorSum | ItemAggregatorAvg | ItemAggregatorMin | ItemAggregatorMax | ItemGroupBy | ItemConnectionId | ItemConnectionCreated_At | ItemConnectionUpdated_At | ItemConnectionName | ItemConnectionSecondName | ItemConnectionPrice | ItemConnectionImage | ItemConnectionDescription | ItemConnectionSlug | ItemConnectionCategory | ItemConnectionPublished_At | CreateItemPayload | UpdateItemPayload | DeleteItemPayload | OrderItem | OrderItemConnection | OrderItemAggregator | OrderItemAggregatorSum | OrderItemAggregatorAvg | OrderItemAggregatorMin | OrderItemAggregatorMax | OrderItemGroupBy | OrderItemConnectionId | OrderItemConnectionCreated_At | OrderItemConnectionUpdated_At | OrderItemConnectionQuantity | OrderItemConnectionUnitPrice | OrderItemConnectionTotalPrice | OrderItemConnectionOrder | OrderItemConnectionItem | OrderItemConnectionVariant | CreateOrderItemPayload | UpdateOrderItemPayload | DeleteOrderItemPayload | Order | OrderConnection | OrderAggregator | OrderAggregatorSum | OrderAggregatorAvg | OrderAggregatorMin | OrderAggregatorMax | OrderGroupBy | OrderConnectionId | OrderConnectionCreated_At | OrderConnectionUpdated_At | OrderConnectionStatus | OrderConnectionTotal | OrderConnectionCheckout_Session | OrderConnectionUser | OrderConnectionPublished_At | CreateOrderPayload | UpdateOrderPayload | DeleteOrderPayload | Topping | ToppingConnection | ToppingAggregator | ToppingAggregatorSum | ToppingAggregatorAvg | ToppingAggregatorMin | ToppingAggregatorMax | ToppingGroupBy | ToppingConnectionId | ToppingConnectionCreated_At | ToppingConnectionUpdated_At | ToppingConnectionInternalName | ToppingConnectionName | ToppingConnectionMarkup | CreateToppingPayload | UpdateToppingPayload | DeleteToppingPayload | Variant | VariantConnection | VariantAggregator | VariantAggregatorSum | VariantAggregatorAvg | VariantAggregatorMin | VariantAggregatorMax | VariantGroupBy | VariantConnectionId | VariantConnectionCreated_At | VariantConnectionUpdated_At | VariantConnectionInternalName | VariantConnectionName | VariantConnectionMarkup | CreateVariantPayload | UpdateVariantPayload | DeleteVariantPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentComponentFeaturedItem;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cartItem?: Maybe<CartItem>;
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  cartItemsConnection?: Maybe<CartItemConnection>;
  category?: Maybe<Category>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  home?: Maybe<Home>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  itemsConnection?: Maybe<ItemConnection>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<Maybe<OrderItem>>>;
  orderItemsConnection?: Maybe<OrderItemConnection>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  ordersConnection?: Maybe<OrderConnection>;
  topping?: Maybe<Topping>;
  toppings?: Maybe<Array<Maybe<Topping>>>;
  toppingsConnection?: Maybe<ToppingConnection>;
  variant?: Maybe<Variant>;
  variants?: Maybe<Array<Maybe<Variant>>>;
  variantsConnection?: Maybe<VariantConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCartItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCartItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCartItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHomeArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrderItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrderItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrderItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrdersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrdersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryToppingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryToppingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryToppingsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVariantArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryVariantsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryVariantsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCartItem?: Maybe<CreateCartItemPayload>;
  updateCartItem?: Maybe<UpdateCartItemPayload>;
  deleteCartItem?: Maybe<DeleteCartItemPayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  updateHome?: Maybe<UpdateHomePayload>;
  deleteHome?: Maybe<DeleteHomePayload>;
  createItem?: Maybe<CreateItemPayload>;
  updateItem?: Maybe<UpdateItemPayload>;
  deleteItem?: Maybe<DeleteItemPayload>;
  createOrderItem?: Maybe<CreateOrderItemPayload>;
  updateOrderItem?: Maybe<UpdateOrderItemPayload>;
  deleteOrderItem?: Maybe<DeleteOrderItemPayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  updateOrder?: Maybe<UpdateOrderPayload>;
  deleteOrder?: Maybe<DeleteOrderPayload>;
  createTopping?: Maybe<CreateToppingPayload>;
  updateTopping?: Maybe<UpdateToppingPayload>;
  deleteTopping?: Maybe<DeleteToppingPayload>;
  createVariant?: Maybe<CreateVariantPayload>;
  updateVariant?: Maybe<UpdateVariantPayload>;
  deleteVariant?: Maybe<DeleteVariantPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCartItemArgs = {
  input?: Maybe<CreateCartItemInput>;
};


export type MutationUpdateCartItemArgs = {
  input?: Maybe<UpdateCartItemInput>;
};


export type MutationDeleteCartItemArgs = {
  input?: Maybe<DeleteCartItemInput>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationUpdateHomeArgs = {
  input?: Maybe<UpdateHomeInput>;
};


export type MutationCreateItemArgs = {
  input?: Maybe<CreateItemInput>;
};


export type MutationUpdateItemArgs = {
  input?: Maybe<UpdateItemInput>;
};


export type MutationDeleteItemArgs = {
  input?: Maybe<DeleteItemInput>;
};


export type MutationCreateOrderItemArgs = {
  input?: Maybe<CreateOrderItemInput>;
};


export type MutationUpdateOrderItemArgs = {
  input?: Maybe<UpdateOrderItemInput>;
};


export type MutationDeleteOrderItemArgs = {
  input?: Maybe<DeleteOrderItemInput>;
};


export type MutationCreateOrderArgs = {
  input?: Maybe<CreateOrderInput>;
};


export type MutationUpdateOrderArgs = {
  input?: Maybe<UpdateOrderInput>;
};


export type MutationDeleteOrderArgs = {
  input?: Maybe<DeleteOrderInput>;
};


export type MutationCreateToppingArgs = {
  input?: Maybe<CreateToppingInput>;
};


export type MutationUpdateToppingArgs = {
  input?: Maybe<UpdateToppingInput>;
};


export type MutationDeleteToppingArgs = {
  input?: Maybe<DeleteToppingInput>;
};


export type MutationCreateVariantArgs = {
  input?: Maybe<CreateVariantInput>;
};


export type MutationUpdateVariantArgs = {
  input?: Maybe<UpdateVariantInput>;
};


export type MutationDeleteVariantArgs = {
  input?: Maybe<DeleteVariantInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};






