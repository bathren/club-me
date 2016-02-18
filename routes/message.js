
exports.view = function(req, res){
  res.render('message', {
    'message': [
    { 'name': 'Running',
      'image': 'Running.jpg',
      'id': 'match1'
    },
    { 'name': 'Video Games',
      'image': 'VideoGames.jpg',
      'id': 'match2'
    },
    { 'name': 'Alcohol',
      'image': 'Alcohol.jpg',
      'id': 'match3'
    },
    ]
  });
}
