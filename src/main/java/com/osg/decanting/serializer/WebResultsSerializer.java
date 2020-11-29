package com.osg.decanting.serializer;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.redprairie.moca.MocaResults;
import com.redprairie.moca.RowIterator;
import java.io.IOException;
import java.util.Map;

public class WebResultsSerializer extends JsonSerializer<WebResults> {
  public void serialize(WebResults webRes, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
    jgen.writeStartObject();
    jgen.writeNumberField("status", webRes.getStatus());
    jgen.writeStringField("message", webRes.getMessage());
    if (webRes.getTotalRows() >= 0)
      jgen.writeNumberField("total", webRes.getTotalRows()); 
    jgen.writeFieldName("data");
    jgen.writeStartArray();
    for (Object data : webRes.getData())
      writeObject(data, jgen); 
    jgen.writeEndArray();
    jgen.writeEndObject();
  }
  
  private void writeObject(Object object, JsonGenerator jgen) throws JsonGenerationException, IOException {
	  if (object instanceof Map) {
      Map<?, ?> map = (Map<?, ?>)object;
      for (Map.Entry<?, ?> entry : map.entrySet()) {
        jgen.writeStartObject();
        jgen.writeObjectField("name", entry.getKey());
        jgen.writeObjectField("value", entry.getValue());
        jgen.writeEndObject();
      } 
    } else if (object instanceof MocaResults) {
      MocaResults res = (MocaResults)object;
      RowIterator iter = res.getRows();
      while (iter.next()) {
        jgen.writeStartObject();
        for (int j = 0; j < res.getColumnCount(); j++)
          jgen.writeObjectField(res.getColumnName(j), iter.getValue(j)); 
        jgen.writeEndObject();
      } 
    } else {
      jgen.writeObject(object);
    } 
  }
}
