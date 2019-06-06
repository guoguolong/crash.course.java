package com.banyuan.mars.library;

import java.io.*;
import java.util.ArrayList;
import org.apache.commons.csv.*;

@SuppressWarnings("unchecked")

public class MasterReader {
    public static ArrayList parse(String file) throws Exception {
        Reader in = new StringReader("a,b,c");
        for (CSVRecord record : CSVFormat.DEFAULT.parse(in)) {
            for (String field : record) {
                System.out.print("\"" + field + "\", ");
            }
            System.out.println();
        }

        return new ArrayList();
    }

    // public static ArrayList _parse(Document document) {
    //     Element rootNode = document.getDocumentElement();

    //     NodeList bookNodes = rootNode.getChildNodes();
    //     ArrayList books = new ArrayList();
    //     int len = bookNodes.getLength();
    //     for (int i = 0; i < len; i++) {
    //         Node bookNode = bookNodes.item(i);
    //         if (bookNode.getNodeName() == "book") {
    //             Book book = new Book();
    //             NodeList props = bookNode.getChildNodes();
    //             for (int j = 0; j < props.getLength(); j++) {
    //                 Node item = props.item(j);
    //                 if (item.getNodeType() == Node.ELEMENT_NODE) {
    //                     String value = " ... ";
    //                     if (item.getFirstChild() != null) {
    //                         value = item.getFirstChild().getNodeValue();
    //                     }
    //                     if (item.getNodeName() == "name") {
    //                         book.setName(value);
    //                     }
    //                     if (item.getNodeName() == "price") {
    //                         book.setPrice(Float.valueOf(value));
    //                     }
    //                     if (item.getNodeName() == "press") {
    //                         book.setPress(value);
    //                     }
    //                     if (item.getNodeName() == "author") {
    //                         book.setAuthor(value);
    //                     }
    //                     if (item.getNodeName() == "figure") {
    //                         book.setFigure(value);
    //                     }
    //                     if (item.getNodeName() == "url") {
    //                         book.setUrl(value);
    //                     }
    //                     // System.out.println(item.getNodeName() + ": " + value);
    //                 }
    //             }
    //             books.add(book);
    //             // System.out.println(" ");
    //         }
    //     }
    //     return books;
    // }
}