package backend;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

public class ParseData {

    public static void main (String[] args) {
        //String filePath = "/Users/elin/Documents/Programmering/Exjobb/nds_accesslog_20170216.csv";
        String filePath = "/Users/emma/Chalmers/exjobb/Data/nds_accesslog_20170216.csv";
        String[] columnNames = {"LogId","InletId","LogDate","ActionFlag","StatusFlag","CustomerId","RFID","Weight","InletAddress","ErrorCode","Description"};
        Map<String,ArrayList<String>> allValues = new LinkedHashMap<>();
        String delimiter = ";";

        // Add the column names to the map
        for (String column : columnNames) {
            allValues.put(column, new ArrayList<>());
        }

        BufferedReader buff = null;

        try {
            String buffLine;
            buff = new BufferedReader(new FileReader(filePath));

            while ((buffLine = buff.readLine()) != null) {
                String[] split = buffLine.split(delimiter);

                if(!split[5].startsWith("00000000")) {
                    for(int i = 0; i < split.length; i++) {
                        ArrayList<String> newList = allValues.get(columnNames[i]);
                        newList.add(split[i]);
                        allValues.put(columnNames[i], newList);
                    }
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (buff != null) buff.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Length of first array:" + allValues.get(columnNames[0]).size());
    }
}