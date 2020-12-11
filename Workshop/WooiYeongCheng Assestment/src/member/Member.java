
package member;




public class Member {
    
    public int price;
    protected int dob; 
    int vNo;
    private String mName;

    Member() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String toString() {
        return "Member{" + "price=" + price + ", dob=" + dob + ", vNo=" + vNo + ", mName=" + mName + '}';
    }
    

    public Member(int price, int dob, int vNo, String mName) {
        this.price = price;
        this.dob = dob;
        this.vNo = vNo;
        this.mName = mName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDob() {
        return dob;
    }

    public void setDob(int dob) {
        this.dob = dob;
    }

    public int getvNo() {
        return vNo;
    }

    public void setvNo(int vNo) {
        this.vNo = vNo;
    }

    public String getmName() {
        return mName;
    }

    public void setmName(String mName) {
        this.mName = mName;
    }

    
    
    public static void main(String[] args) {
        
        Member a = new Member(100,450,203,"wooi");
        System.out.println(a);
        
        
    }
    
}
