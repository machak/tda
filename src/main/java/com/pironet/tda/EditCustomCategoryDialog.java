/*
 * EditCustomCategoryDialog.java
 *
 * This file is part of TDA - Thread Dump Analysis Tool.
 *
 * TDA is free software; you can redistribute it and/or modify
 * it under the terms of the Lesser GNU General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * TDA is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Lesser GNU General Public License for more details.
 *
 * You should have received a copy of the Lesser GNU General Public License
 * along with TDA; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * $Id: EditCustomCategoryDialog.java,v 1.3 2008-04-30 09:03:33 irockel Exp $
 */
package com.pironet.tda;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.Frame;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.GridLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.DefaultListModel;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextField;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

import com.pironet.tda.filter.Filter;
import com.pironet.tda.utils.Const;
import com.pironet.tda.utils.PrefManager;
import com.pironet.tda.utils.ResourceManager;

/**
 * dialog for editing filters.
 *
 * @author irockel
 */
public class EditCustomCategoryDialog extends JDialog {
    private static final long serialVersionUID = 3634852144772181579L;
    private SettingsPanel settingsPanel;
    private JButton okButton;
    private Frame frame;
    private JList<CustomCategory> catList;
    private boolean isAdd = false;

    /**
     * Creates a new instance of PreferencesDialog
     */
    public EditCustomCategoryDialog(Frame owner, String frameTitle, JList<CustomCategory> catList, boolean isAdd) {
        super(owner, frameTitle);
        try {
            setIconImage(TDA.createImageIcon(Const.ICON_FILTERS).getImage());
        } catch (NoSuchMethodError nsme) {
            // ignore, for 1.4 backward compatibility
        }

        this.isAdd = isAdd;
        this.catList = catList;
        frame = owner;
        getContentPane().setLayout(new BorderLayout());
        initPanel();
    }

    private void initPanel() {
        settingsPanel = new SettingsPanel(!isAdd ? catList.getSelectedValue() : null);
        getContentPane().add(settingsPanel, BorderLayout.CENTER);
        okButton = new JButton(ResourceManager.translate("ok.button"));
        final JButton cancelButton = new JButton(ResourceManager.translate("cancel.button"));
        final JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        buttonPanel.add(okButton);
        buttonPanel.add(cancelButton);
        getContentPane().add(buttonPanel, BorderLayout.SOUTH);

        okButton.addActionListener(e -> {
            if (frame != null) {
                frame.setEnabled(true);
            }
            if (!isAdd) {
                CustomCategory cat = catList.getModel().getElementAt(catList.getSelectedIndex());
                applyCat(cat);
                // reset to fire change event.
                ((DefaultListModel<CustomCategory>)catList.getModel()).setElementAt(cat, catList.getSelectedIndex());

            } else {
                CustomCategory cat = new CustomCategory(settingsPanel.name.getText());
                applyCat(cat);
                addToList(cat);
            }
            dispose();
        });

        cancelButton.addActionListener(e -> {
            if (frame != null) {
                frame.setEnabled(true);
            }
            dispose();
        });
        reset();
    }

    /**
     * apply settings to category
     *
     * @param cat the category
     */
    private void applyCat(CustomCategory cat) {
        cat.setName(settingsPanel.name.getText());
        DefaultListModel dlm = ((DefaultListModel)settingsPanel.catFilters.getModel());
        cat.resetFilters();
        for (int i = 0; i < dlm.getSize(); i++) {
            cat.addToFilters((Filter)dlm.elementAt(i));
        }
    }

    private void addToList(CustomCategory cat) {
        final DefaultListModel<CustomCategory> dlm = ((DefaultListModel<CustomCategory>)catList.getModel());

        dlm.ensureCapacity(dlm.getSize() + 1);
        dlm.addElement(cat);
        catList.ensureIndexIsVisible(dlm.getSize());
    }

    public void reset() {
        getRootPane().setDefaultButton(okButton);
    }

    class SettingsPanel extends JPanel implements ListSelectionListener, ActionListener {
        private static final long serialVersionUID = -8178578773476105054L;
        JList<Filter> catFilters = null;
        JList<Filter> filterList = null;

        JTextField name = null;

        JButton addButton = null;
        JButton removeButton = null;

        JScrollPane catPane = null;
        JScrollPane filterPane = null;

        public SettingsPanel(CustomCategory presetCat) {
            setLayout(new BorderLayout());

            add(createNamePanel(), BorderLayout.NORTH);
            add(createSelectionPanel(), BorderLayout.CENTER);
            if (presetCat != null) {
                fillCatData(presetCat);
            }
        }

        /**
         * fill the dialog with the preset filter data.
         */
        private void fillCatData(CustomCategory presetCategory) {
            name.setText(presetCategory.getName());
            DefaultListModel dlm = (DefaultListModel)filterList.getModel();
            for (int i = 0; i < dlm.getSize(); i++) {
                if (presetCategory.hasInFilters(((Filter)dlm.elementAt(i)).getName())) {
                    moveFilter(filterList, catFilters, i);

                    // fix index.
                    i--;
                }
            }
        }

        private JPanel createSelectionPanel() {
            GridBagLayout gridbag = new GridBagLayout();
            GridBagConstraints c = new GridBagConstraints();

            JPanel innerPanel = new JPanel(gridbag);
            catFilters = new JList<>();
            final DefaultListModel<Filter> model = new DefaultListModel<>();
            catFilters.setModel(model);
            filterList = new JList<>(PrefManager.get().getFilters());

            catFilters.addListSelectionListener(this);
            filterList.addListSelectionListener(this);

            // layouting dialog

            // info row
            c.insets = new Insets(5, 5, 5, 5);
            JLabel info = new JLabel(ResourceManager.translate("customcategory.catfilter.label"));
            gridbag.setConstraints(info, c);
            innerPanel.add(info);

            info = new JLabel(" ");
            gridbag.setConstraints(info, c);
            innerPanel.add(info);

            info = new JLabel(ResourceManager.translate("customcategory.availfilter.label"));
            c.gridwidth = GridBagConstraints.REMAINDER;
            gridbag.setConstraints(info, c);
            innerPanel.add(info);

            // list row

            // cat list
            c.weightx = 1.0;
            c.weighty = 1.0;
            c.fill = GridBagConstraints.BOTH;
            c.gridwidth = 1;
            catPane = new JScrollPane(catFilters);

            gridbag.setConstraints(catPane, c);
            innerPanel.add(catPane);

            // buttons
            JPanel innerButtonPanel = new JPanel(new GridLayout(2, 1, 5, 5));
            innerButtonPanel.add(addButton = new JButton(ResourceManager.translate("customcategory.add.button")));
            innerButtonPanel.add(removeButton = new JButton(ResourceManager.translate("customcategory.remove.button")));
            addButton.setEnabled(false);
            removeButton.setEnabled(false);
            addButton.addActionListener(this);
            removeButton.addActionListener(this);

            c.weightx = 0.0;
            c.weighty = 0.0;
            c.fill = GridBagConstraints.NONE;
            gridbag.setConstraints(innerButtonPanel, c);
            innerPanel.add(innerButtonPanel);

            // filter list
            c.weightx = 1.0;
            c.weighty = 1.0;
            c.insets = new Insets(5, 5, 5, 5);
            c.fill = GridBagConstraints.BOTH;
            filterPane = new JScrollPane(filterList);
            gridbag.setConstraints(filterPane, c);
            innerPanel.add(filterPane);

            return (innerPanel);

        }

        private JPanel createNamePanel() {
            JPanel panel = new JPanel(new BorderLayout());
            name = new JTextField(30);
            JPanel innerPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
            innerPanel.add(new JLabel(ResourceManager.translate("customcategory.name.label")));
            innerPanel.add(name);
            panel.add(innerPanel, BorderLayout.CENTER);
            return (panel);
        }

        public void valueChanged(ListSelectionEvent e) {
            if (filterList.getSelectedIndex() >= 0) {
                addButton.setEnabled(true);
            } else {
                addButton.setEnabled(false);
            }

            if (catFilters.getSelectedIndex() >= 0) {
                removeButton.setEnabled(true);
            } else {
                removeButton.setEnabled(false);
            }
        }

        public void actionPerformed(ActionEvent e) {
            String cmd = e.getActionCommand();

            if (ResourceManager.translate("customcategory.add.button").equals(cmd)) {
                moveFilter(filterList, catFilters, filterList.getSelectedIndex());
            } else if (ResourceManager.translate("customcategory.remove.button").equals(cmd)) {
                moveFilter(catFilters, filterList, catFilters.getSelectedIndex());
            }
        }

        private void moveFilter(JList fromList, JList<Filter> toList, int selectedItem) {
            final Filter filter = (Filter)fromList.getModel().getElementAt(selectedItem);
            ((DefaultListModel)fromList.getModel()).removeElementAt(selectedItem);
            final DefaultListModel<Filter> dlm = ((DefaultListModel<Filter>)toList.getModel());
            dlm.ensureCapacity(dlm.getSize() + 1);
            dlm.addElement(filter);
            toList.ensureIndexIsVisible(dlm.getSize());
        }

    }

}

