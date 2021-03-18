import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdPerson as icon } from 'react-icons/md';

//  build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      //  create a new sub-item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>{icon}</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            //  make a new doucment id so we don't have a random string of numbers
            .documentId('downtown')
        ),
      //  add in the rest of our doucment items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
