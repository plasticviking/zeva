// source: transactions.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.zeva.transactions.CreditValue', null, global);
goog.exportSymbol('proto.zeva.transactions.DollarValue', null, global);
goog.exportSymbol('proto.zeva.transactions.TransactionListRequest', null, global);
goog.exportSymbol('proto.zeva.transactions.TransactionSummary', null, global);
goog.exportSymbol('proto.zeva.transactions.TransactionType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zeva.transactions.DollarValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zeva.transactions.DollarValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zeva.transactions.DollarValue.displayName = 'proto.zeva.transactions.DollarValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zeva.transactions.CreditValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zeva.transactions.CreditValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zeva.transactions.CreditValue.displayName = 'proto.zeva.transactions.CreditValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zeva.transactions.TransactionListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zeva.transactions.TransactionListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zeva.transactions.TransactionListRequest.displayName = 'proto.zeva.transactions.TransactionListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zeva.transactions.TransactionSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zeva.transactions.TransactionSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zeva.transactions.TransactionSummary.displayName = 'proto.zeva.transactions.TransactionSummary';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zeva.transactions.DollarValue.prototype.toObject = function(opt_includeInstance) {
  return proto.zeva.transactions.DollarValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zeva.transactions.DollarValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.DollarValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    cents: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zeva.transactions.DollarValue}
 */
proto.zeva.transactions.DollarValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zeva.transactions.DollarValue;
  return proto.zeva.transactions.DollarValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zeva.transactions.DollarValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zeva.transactions.DollarValue}
 */
proto.zeva.transactions.DollarValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zeva.transactions.DollarValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zeva.transactions.DollarValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zeva.transactions.DollarValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.DollarValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCents();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 cents = 1;
 * @return {number}
 */
proto.zeva.transactions.DollarValue.prototype.getCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zeva.transactions.DollarValue} returns this
 */
proto.zeva.transactions.DollarValue.prototype.setCents = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zeva.transactions.CreditValue.prototype.toObject = function(opt_includeInstance) {
  return proto.zeva.transactions.CreditValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zeva.transactions.CreditValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.CreditValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    credits: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zeva.transactions.CreditValue}
 */
proto.zeva.transactions.CreditValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zeva.transactions.CreditValue;
  return proto.zeva.transactions.CreditValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zeva.transactions.CreditValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zeva.transactions.CreditValue}
 */
proto.zeva.transactions.CreditValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCredits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zeva.transactions.CreditValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zeva.transactions.CreditValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zeva.transactions.CreditValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.CreditValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredits();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 credits = 1;
 * @return {number}
 */
proto.zeva.transactions.CreditValue.prototype.getCredits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zeva.transactions.CreditValue} returns this
 */
proto.zeva.transactions.CreditValue.prototype.setCredits = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zeva.transactions.TransactionListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zeva.transactions.TransactionListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zeva.transactions.TransactionListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.TransactionListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zeva.transactions.TransactionListRequest}
 */
proto.zeva.transactions.TransactionListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zeva.transactions.TransactionListRequest;
  return proto.zeva.transactions.TransactionListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zeva.transactions.TransactionListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zeva.transactions.TransactionListRequest}
 */
proto.zeva.transactions.TransactionListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zeva.transactions.TransactionListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zeva.transactions.TransactionListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zeva.transactions.TransactionListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.TransactionListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zeva.transactions.TransactionSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.zeva.transactions.TransactionSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zeva.transactions.TransactionSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.TransactionSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    amount: (f = msg.getAmount()) && proto.zeva.transactions.DollarValue.toObject(includeInstance, f),
    credits: (f = msg.getCredits()) && proto.zeva.transactions.CreditValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zeva.transactions.TransactionSummary}
 */
proto.zeva.transactions.TransactionSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zeva.transactions.TransactionSummary;
  return proto.zeva.transactions.TransactionSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zeva.transactions.TransactionSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zeva.transactions.TransactionSummary}
 */
proto.zeva.transactions.TransactionSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.zeva.transactions.TransactionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.zeva.transactions.DollarValue;
      reader.readMessage(value,proto.zeva.transactions.DollarValue.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 4:
      var value = new proto.zeva.transactions.CreditValue;
      reader.readMessage(value,proto.zeva.transactions.CreditValue.deserializeBinaryFromReader);
      msg.setCredits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zeva.transactions.TransactionSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zeva.transactions.TransactionSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zeva.transactions.TransactionSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zeva.transactions.TransactionSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zeva.transactions.DollarValue.serializeBinaryToWriter
    );
  }
  f = message.getCredits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zeva.transactions.CreditValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.zeva.transactions.TransactionSummary.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.zeva.transactions.TransactionSummary} returns this
 */
proto.zeva.transactions.TransactionSummary.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TransactionType type = 2;
 * @return {!proto.zeva.transactions.TransactionType}
 */
proto.zeva.transactions.TransactionSummary.prototype.getType = function() {
  return /** @type {!proto.zeva.transactions.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zeva.transactions.TransactionType} value
 * @return {!proto.zeva.transactions.TransactionSummary} returns this
 */
proto.zeva.transactions.TransactionSummary.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional DollarValue amount = 3;
 * @return {?proto.zeva.transactions.DollarValue}
 */
proto.zeva.transactions.TransactionSummary.prototype.getAmount = function() {
  return /** @type{?proto.zeva.transactions.DollarValue} */ (
    jspb.Message.getWrapperField(this, proto.zeva.transactions.DollarValue, 3));
};


/**
 * @param {?proto.zeva.transactions.DollarValue|undefined} value
 * @return {!proto.zeva.transactions.TransactionSummary} returns this
*/
proto.zeva.transactions.TransactionSummary.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zeva.transactions.TransactionSummary} returns this
 */
proto.zeva.transactions.TransactionSummary.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zeva.transactions.TransactionSummary.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CreditValue credits = 4;
 * @return {?proto.zeva.transactions.CreditValue}
 */
proto.zeva.transactions.TransactionSummary.prototype.getCredits = function() {
  return /** @type{?proto.zeva.transactions.CreditValue} */ (
    jspb.Message.getWrapperField(this, proto.zeva.transactions.CreditValue, 4));
};


/**
 * @param {?proto.zeva.transactions.CreditValue|undefined} value
 * @return {!proto.zeva.transactions.TransactionSummary} returns this
*/
proto.zeva.transactions.TransactionSummary.prototype.setCredits = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zeva.transactions.TransactionSummary} returns this
 */
proto.zeva.transactions.TransactionSummary.prototype.clearCredits = function() {
  return this.setCredits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zeva.transactions.TransactionSummary.prototype.hasCredits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.zeva.transactions.TransactionType = {
  VALIDATION: 0,
  REDUCTION: 1,
  SOLD: 2,
  BOUGHT: 3
};

goog.object.extend(exports, proto.zeva.transactions);
