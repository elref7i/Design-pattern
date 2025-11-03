//* Design Pattern

//* Type One Creational Pattern

const x = {
  name: "refai",
};

Object.defineProperty(x, "salary", {
  value: 1000,
  configurable: true, //* true means that the property can be deleted or modified => translate arabic "configurable" => قابل للحذف او التعديل
  writable: true, //* true means that the property can be changed => translate arabic to english => قابل للتعديل
  enumerable: true, //* true means that the property can be enumerated => translate arabic to english => قابل للعد
});
