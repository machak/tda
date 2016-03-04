/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.pironet.tda.utils;

import javax.swing.DefaultListSelectionModel;
import javax.swing.JTable;

/**
 * @author irockel
 */
public class ThreadsTableSelectionModel extends DefaultListSelectionModel {
    private static final long serialVersionUID = -7146401444109552942L;
    private JTable table = null;

    public ThreadsTableSelectionModel(JTable table) {
        this.table = table;

    }

    public JTable getTable() {
        return (table);
    }

}
