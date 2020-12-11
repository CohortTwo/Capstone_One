/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package package1;

import member.Member;

/**
 *
 * @author kentwooi
 */
public class nonMember {
    
    public static void main(String[] args) {
        
        Member newObj = new Member(100,450,203,"wooi");
        
        
        newObj.price = 456;
        
        newObj.vNo = 100;   
        newObj.dob = 123;
        newObj.mName = "kent";
        
    }   
}
