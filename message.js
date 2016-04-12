/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

module.exports = function(
  reviewers: Array<string>,
  mentionSentenceBuilder: (reviewers: Array<string>) => string,
  defaultMessageGenerator: (reviewers: Array<string>) => string
): string {
  var phrazes = [

    'Эсмеральда: Как тебя зовут?\n' +
    'Бутч: ' + mentionSentenceBuilder(reviewers) + '.\n' +
    'Эсмеральда: Что это означает?\n' +
    'Бутч: Я американец, дорогуша. Наши имена вообще нихрена не значат.',

    '— Я вернусь быстрее, чем ты успеешь сказать ' + mentionSentenceBuilder(reviewers) +'.\n' +
    '— ' + mentionSentenceBuilder(reviewers) + '.\n' +
    '— Ну, может, не так быстро.',

    'Марселлас: Если ' + mentionSentenceBuilder(reviewers) +  ' в Индокитае, я хочу, ' +
    'чтобы в их рисовой чашке прятался ' +
    'специально обученный негр с пистолетом наголо, готовый их пристрелить его!',

    'Бутч: Если я с ' + mentionSentenceBuilder(reviewers) + ' резок, то это потому, что времени нет.',

    'Мэйнард: Никто не убивает никого у меня в магазине. Только ' +
        mentionSentenceBuilder(reviewers) + ' и Зед.',

    'Зед: Эни-бени, трали-вали, с ' + mentionSentenceBuilder(reviewers) + ' в прятки мы играли.\n' +
    'В грунт по уши закопали. Эни-бени, мени-мать, будут там теперь вонять.',

    'Бутч: Ты в норме? ' + mentionSentenceBuilder(reviewers) + '\n' +
    'Марселлас: Нет, мужик. Я, капец как далек от нормы.',

    'Фабиан: Чей это мотоцикл?\n' +
    'Бутч: Это не мотоцикл, это чоппер, ' + mentionSentenceBuilder(reviewers) + '.',

    'Фабиан: А чей это чоппер?\n' +
    'Бутч: Зеда.\n' +
    'Фабиан: А кто такой Зед?\n' +
    'Бутч: Зед мёртв, ' + mentionSentenceBuilder(reviewers) + '. Зед мёртв.',

    'Джулс: Мы же договорились, что мы будем хладнокровны. А когда ты на меня орёшь, ' +
    'я начинаю нервничать. А когда я нервничаю, я начинаю бояться. А когда охрененному ' +
    'пацану становится страшно, он может застрелить каких-нибудь ' +
     mentionSentenceBuilder(reviewers),

     'Вульф: Объясняю для особо умных. Я здесь не для того, чтобы о чём-то просить. ' +
     'Я здесь для того, чтобы говорить ' + mentionSentenceBuilder(reviewers) + ', что надо делать. ' +
     'И, если вам не чужд инстинкт ' +
     'самосохранения, давайте-ка, блин, бегом приступайте. Я здесь для того, чтобы помогать. ' +
     'Но, если мою помощь не ценят — желаю удачи.'

  ];
  // This file is a place where you can change the way the message the bot
  // uses to comment. For example:
  //
  //   return 'Please review this ' + mentionSentenceBuilder(reviewers);
  //
  // will print
  //
  //   Please review this @georgecodes and @vjeux
	//return defaultMessageGenerator(reviewers);
  var randomNumber = randomInteger(0, phrazes.length - 1);
  return phrazes[randomNumber];
};
