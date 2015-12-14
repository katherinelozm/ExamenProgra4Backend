var gift = require('../schemas/gift');

exports.getGifts = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var gifts = gift.find({});
    reply(gifts);
  }
}

exports.createGift = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var newGift = new gift({
      name: request.payload.name,
      description: request.payload.description,
      weight: request.payload.weight,
      destination: request.payload.destination,
      status: request.payload.status,
    });
    newGift.save();
    console.log('gift saved');
    return reply('ok');
  }
}
