package com.sinosteel.domain;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.databind.ser.Serializers;
import org.junit.Test;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;
/**
 * @author SongJunju
 */

/**
 * 测试方案
 */
@Entity
@Table(name = "TBL_SYS_TESTPLANS")
public class TestPlan extends BaseEntity {


    /**
     * 详细字段未定
     * 暂时先用来存储
     */
    @Column(name = "BODY")
    private String body;

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    /**
     * processInstanceID
     */
    @Column(name = "PROCESS_INSTANCE_ID")
    private String processInstanceID;

    public String getProcessInstanceID() {
        return processInstanceID;
    }

    public void setProcessInstanceID(String processInstanceID) {
        this.processInstanceID = processInstanceID;
    }

    /**
     * 连接Project的外键
     */
    @OneToOne(mappedBy = "testPlan")
    @JSONField(serialize = false)
    private Project project;

    public Project getProject(){
        return project;
    }
    public void setProject(Project project){
        this.project = project;
    }
}