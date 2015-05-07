function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
};

BookReader.prototype.nextPage = function() {
  var nextPageIsValid = this.currentPage + 1 < this.book.length;
  if (nextPageIsValid){
    this.currentPage +=1;
  }
  return this.book[this.currentPage];
};
//   if (this.currentPage + 1 < this.book.length) {
//     this.currentPage += 1;
//   }
//   return this.book[this.currentPage];
// };

BookReader.prototype.previousPage = function() {
  if (this.currentPage > 0){
    this.currentPage -= 1;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.pagesLeft = function() {
  return this.book.length - (this.currentPage + 1);
};

BookReader.prototype.encouragement = function() {
  if (this.pagesLeft() > 1) {
    return "Keep going, only " + this.pagesLeft() + " pages left after this one!";
  } else {
    return "Keep going, this book is good 'til the last drop!";
  }
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
