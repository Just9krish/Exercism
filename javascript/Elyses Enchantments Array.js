// Retrive a card from card card stack

export function getItem(cards, position) {
  return cards[position];
}

// Exchange card with replacementCard

export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

// Add newCard at the end of card array

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

// Remove the card from the card array

export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

// Remove the card from the end of card array

export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

// Insert the card at the begning of array card

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

// Remove the card from the bottom of card array

export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

// Campare the number of strack by given stack size

export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
