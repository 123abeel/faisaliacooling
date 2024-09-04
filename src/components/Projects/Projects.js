import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import rf from "../../Assets/Projects/refrigeratorrepair.jpeg";
import freezer from "../../Assets/Projects/freezer.jpeg";
import maintainenece from "../../Assets/Projects/refmaintainence.jpeg";
import ice from "../../Assets/Projects/ice.jpeg";
import appliance from "../../Assets/Projects/appliance.jpeg";
import troubleshoot from "../../Assets/Projects/refrigeratortroubleshooting.jpeg";
import replacingparts from "../../Assets/Projects/replacingparts.jpeg";
import compressor from "../../Assets/Projects/compressor.jpeg";
import ref1 from "../../Assets/Projects/ref1.jpg";
import ref2 from "../../Assets/Projects/ref2.jpg";
import ref3 from "../../Assets/Projects/ref3.jpg";
import ref4 from "../../Assets/Projects/ref4.jpg";
import ref5 from "../../Assets/Projects/ref5.jpg";
import ref6 from "../../Assets/Projects/ref6.jpg";
import ref7 from "../../Assets/Projects/ref7.jpg";
import ref8 from "../../Assets/Projects/ref8.jpg";
import ref9 from "../../Assets/Projects/ref9.jpg";
import ref10 from "../../Assets/Projects/ref10.jpg";
import ref11 from "../../Assets/Projects/ref11.jpg";
import ref12 from "../../Assets/Projects/ref12.jpg";
import ref13 from "../../Assets/Projects/ref13.jpg";
import ref14 from "../../Assets/Projects/ref14.jpg";
import ref15 from "../../Assets/Projects/ref15.jpg";
import ref16 from "../../Assets/Projects/ref16.jpg";
import ref17 from "../../Assets/Projects/ref17.jpg";
import ref18 from "../../Assets/Projects/ref18.jpg";
import ref19 from "../../Assets/Projects/ref19.jpg";
import ref20 from "../../Assets/Projects/ref20.jpg";
import ref21 from "../../Assets/Projects/ref21.jpg";
import ref22 from "../../Assets/Projects/ref22.jpg";
import ref23 from "../../Assets/Projects/ref23.jpg";
import ref24 from "../../Assets/Projects/ref24.jpg";
import ref26 from "../../Assets/Projects/ref26.jpg";
import WhatsAppButton from "../Home/WhatsAppButton"; // Import the WhatsAppButton component
import CallLogButton from "../Home/CallLogButton"; // Import the CallLogButton component

// Custom CSS for image sizing
const styles = {
  projectImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '250px',
    objectFit: 'cover',
  },
};

function ProjectCard({ imgPath, title, description, imgClass }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} className={imgClass} style={styles.projectImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Refrigerator and Freezer <strong className="purple">Repair Services</strong>
        </h1>
        <p style={{ color: "white" }}>
          If your refrigerator or freezer is not cooling or has stopped working altogether, it's crucial to find a reliable repair service. Our expert technicians specialize in refrigerator and freezer repairing in Obhur-al-Shamaliya, ensuring your appliance is up and running in no time.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rf}
              title="Refrigerator Repair"
              description="We handle all types of refrigerator problems, from minor issues to major repairs, including refrigerator compressor repair and refrigerator ice maker repair."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freezer}
              title="Freezer Repairs"
              description="Whether it's a freezer compressor problem or a general issue, our technicians provide comprehensive freezer repair services."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maintainenece}
              title="Fridge Maintenance"
              description="Regular maintenance services for your fridge to prevent future breakdowns."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ice}
              title="Ice Maker Repair"
              description="Expert repair services for ice makers in your refrigerator."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appliance}
              title="Appliance Repair Service"
              description="Comprehensive repair services for all your home appliances, including washers and dryers."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={troubleshoot}
              title="Refrigerator Troubleshoot"
              description="Diagnose and troubleshoot common refrigerator problems like refrigerator not cooling or fridge not working."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={replacingparts}
              title="Fridge Replacement Parts"
              description="We provide high-quality refrigerator repair parts and fridge replacement parts to ensure long-lasting solutions."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compressor}
              title="Compressor Gas Filling"
              description="Expert refrigerator compressor gas filling and repair services, ensuring your fridge and freezer are efficiently cooling."
              imgClass="project-image"
            />
          </Col>
        </Row>

        <h2 className="project-heading" style={{ paddingTop: "20px" }}>
          Our <strong className="purple">Recent Works</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref1}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref2}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref3}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref4}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref5}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref6}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref7}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref8}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref9}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref10}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref11}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref12}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref13}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref14}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref15}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref16}
              imgClass="project-image"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref18}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref19}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref20}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref21}
              imgClass="project-image"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref23}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref24}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref26}
              imgClass="project-image"
            />
          </Col>
        </Row>
        <WhatsAppButton /> {/* Add the WhatsAppButton component */}
        <CallLogButton /> {/* Add the CallLogButton component */}
      </Container>

      {/* Box at the end of the content */}
      <div className="fixed-content-box">
        <p>refrigerator freezer repair
refrigerator maintenance
refrigerator repair
fridge freezer repairs
fridge problems
ge refrigerator repair
freezer repairs
appliance repair service
ice maker repair
refrigerator ice maker repair
refrigerator problems
refrigerator repair parts
fridge repair
appliance parts refrigerator
fridge repair parts
fridge replacement parts
fridge maintenance
fridge service
fix refrigerator
fix fridge
refrigerator service
freezer service
freezer fridge repair
find refrigerator
freezer fridge
appliances refrigerator
ge refrigerator problems
refrigerator troubleshoot
refrigerator cost
home refrigerator repair
fridge refrigerator
refrigerator and freezer repair
refrigerator repair service
general electric refrigerator problems
maytag refrigerator problems
freezer repair service
refrigerator replacement
fridge replacement
refrigerator search
refrigerator compressor repair
refrigerator repair man
refrigerator repair shop
refrigerator repair company
lg refrigerator problems
refrigerator offer
fridge not working
refrig repair
refrigerator not cooling
refrigerator not
refrigerator not working
fridge repair services
ge refrigerator not cooling
appliance fridge
freezer compressor repair
good refrigerator
replace refrigerator compressor
fridge and freezer repair
samsung fridge repairs
samsung refrigerator repair
appliance refrigerator repair
washer and dryer repair service
small refrigerator repair
maytag refrigerator not cooling
refrigerator expert
fridge technician
freezer technician
refrigerator repair cost
samsung fridge freezer repairs
samsung freezer repair
maytag fridge problems
samsung refrigerator problems
samsung fridge problems
refrigerator compressor not working
refrigerator support
refrigerator maintenance service
lg fridge troubleshoot
samsung refrigerator fix
samsung refrigerator troubleshoot
samsung refrigerator repair service
fix refrigerator compressor
fridge compressor not working
fridge repair cost
samsung fridge fix
fridge door repair
ge refrigerator fix
refrigerator technicians
refrigerator repair problems
fridge compressor problem
fridge compressor repair
refrigerator broke
fridge broke
freezer compressor problems
bosch refrigerator problems
refrigerator repair technician
lg fridge problems
fridge electrician
refrigerator number
refrigerator does not work
fridge freezer not cooling
refrigerator repair and service
fridge gas leak repair
refrigerator repair near me
refrigerator mechanics
refrigerator service near me
fridge repair near me
refrigerator repair service near me
refrigerator technician near me
damaged refrigerators
lg fridge compressor not working
lg fridge not cooling
lg fridge not working
lg refrigerator not cooling
lg refrigerator not working
repair lg refrigerator
ge refrigerator maintenance
repair maytag refrigerator
ثلاجات عرض
fridge repair service near me
refrigerator repairman in my area
samsung fridge maintenance
samsung refrig repair
fridge ice maker repair
home refrigerator service
كيفية صيانة الثلاجات المنزلية
صيانة ثلاجات ادميرال
samsung refrigerator not working
صيانة ثلاجة كريازى 14 قدم
ice maker repair cost
replace refrigerator
fridge appliance repair
توكيل صيانة ثلاجات توشيبا
خدمة صيانة ثلاجات توشيبا
صيانة توشيبا العربى ثلاجات
ge fridge not working
fix fridge door
fridge repair company
freezer repair service near me
اصلاح مروحة الفريزر
ثلاجات باناسونيك
ge refrigerator repairman
lg fridge maintenance
lg refrigerator maintenance
lg refrigerator troubleshoot
refrigerator maintenance and repair
مركز صيانة ثلاجات دايو
fridge regas
refrigerator compressor cost
refrigerator regassing
samsung freezer service
fridge service centre
fridge tech
refrigerator cooling
replacement parts refrigerator
تصليح الثلاجة المنزلية
ثلاجات سامسونج
مصلح ثلاجات
رقم صيانة ثلاجات شارب
مركز صيانة ثلاجات شارب
صيانة ثلاجات وستنجهاوس
صيانة الغانم ثلاجات
صيانة ثلاجات وايت بوينت
freezer repair near me
صيانة ثلاجات اريستون
رقم صيانة ثلاجات وايت ويل
صيانة ثلاجات وايت ويل
مركز صيانة ثلاجات وايت ويل
maytag fridge freezer problems
ارقام صيانة توشيبا العربى ثلاجات
صيانة دايو ثلاجات
fridge repair shop
repair refrigerator door
عروض ثلاجات
صيانة ثلاجة توشيبا 14 قدم
service freezer
refrigerator refrigerators
freezer mechanic
fridge mechanics
اصلاح الثلاجة المنزلية
refrigerator repair nearby
صيانة ثلاجات زانوسي
refrigerator gas leak repair cost
مركز صيانة ثلاجات توشيبا
صيانة ثلاجات بيكو
repair lg fridge
refrigerator type
refrigerator specialist
common refrigerator repairs
fridge breakdown
fridge specialist
refrigerator regas
samsung refrigerator technician
refrigerator will not turn on
compressor repairing
common fridge problems
samsung fridge technician
fridge repair mechanic
مركز صيانة ثلاجات جنرال اليكتريك
refrigerator mechanic
صيانة ثلاجات
cost to replace refrigerator compressor
refrigerator and freezer not cooling
refrigerator compressor repair cost
رقم تليفون صيانة توشيبا العربى ثلاجات
refrigerator not cooling repair
صيانة ثلاجة توشيبا نوفروست
lg top freezer refrigerator problems
refrigerator broke down
صيانة ثلاجات اندست
صيانة الثلاجات بالصور
صيانة ثلاجات فريجيدير
if refrigerator not cooling
fridge gas leak repair cost
refrigerator disassembly
fridge issues
رقم صيانة ثلاجات كريازى
صيانة ثلاجات كلفينيتور
fridge freezer compressor repair
lg fridge freezer problems
خدمة عملاء شارب ثلاجات
fridge and freezer not cooling
common refrigerator problems
صيانة ثلاجات سامسونج
ge refrigerator issues
ارقام صيانة ثلاجات كريازى
صيانة ثلاجات هيتاشي
تصليح ثلاجات حولي
refrigerator stops cooling
fridge freezer repairs near me
تصليح افران
اعطال ثلاجات ال جي
رقم صيانة ثلاجات ال جي
fridge freezer fridge not working
life of refrigerator
refrigerator repair home service
fridge cooling problem
refrigerator cooling problem
صيانة ثلاجات جولدى
صيانه ثلاجه توشيبا
lg refrigerator problems not cooling
صيانة الثلاجات النوفروست
صيانة ثلاجة lg
appliance fridge repair
lg refrigerator issues
fridge stops cooling
mechanic fridge
ارقام صيانة توشيبا ثلاجات
ثلاجة توشيبا 14 قدم
صيانة ثلاجات سيمنس
مراكز صيانة الثلاجات
رقم صيانة ثلاجات lg
صيانه الثلاجه
ثلاجات بيكو
ثلاجة بيكو
the best brand of refrigerator
صيانة كلفينيتور الجفالي
خدمة عملاء توشيبا ثلاجات
اعطال ثلاجة كريازى نوفروست
ثلاجات هاير
صيانة ثلاجات الجفالي
refrigerator not cooling freezer works
repair fridge near me
فني ثلاجات
fridge not cooling down
صيانة ثلاجات ال جي جدة
صيانة ثلاجات سامسونج جدة
ثلاجات ال جي
reason refrigerator not cooling
refrigerator not cooling properly
صيانه ايبرنا
refrigerator breakdown
ثلاجة تبريد
nearby refrigerator repair
fridge not cooling properly
صيانة ال جي ثلاجات
fix fridge near me
service for fridge
fix refrigerator near me
refrigerator repair shop near me
fridge freezer fixer
fridge freezer mechanic
refrigerator fridge repair
صيانة ثلاجات سانيو
refrigerator freezer repair near me
freezer and refrigerator repair
cost to replace compressor in fridge
صيانة سامسونج ثلاجات
مركز صيانة ثلاجات
توكيل ثلاجات توشيبا العربى
freezer service near me
freezer technician near me
صيانة ثلاجات فيليبس
توكيل توشيبا ثلاجات
اصلاح ثلاجات
ارقام صيانة ثلاجات سامسونج
رقم صيانة ثلاجات سامسونج
صيانة ثلاجات باساب
توكيل شارب ثلاجات
اصلاح ثلاجة سامسونج
صيانة ديب فريزر سامسونج
freezer working but fridge not cooling
fridge not cooling freezer working
refrigerator not working at all
fridge service near me
صيانة فريزرات
مركز صيانة ثلاجات lg
service fridge near me
اعطال ثلاجة كريازى
صيانة شركة كريازى للثلاجات
appliance repair fridge
تصليح الثلاجة كريازى
رقم كريازى للثلاجات
مصنع كريازى للثلاجات
fridge service repair
صيانة ثلاجة بيكو
repair freezer near me
service refrigerator near me
صيانة ثلاجات يونيفرسال
ثلاجات سانيو
common fridge repairs
صيانة ثلاجات يونيون اير
إصلاح الثلاجة
if your refrigerator is not cooling
fridge repair nearby
صيانة ثلاجات باناسونيك
ge refrigerator not working
ge fridge stopped working
تصليح ثلاجات جدة
if fridge is not cooling
ثلاجة ميتاج
freezer repair shop
fridge cooling not working
new lg refrigerator not cooling
صيانة ثلاجات الحساوي
repair refrigerator service
fix fridge compressor
refrig parts
صيانة ثلاجات lg
صيانة ثلاجات ال جي
صيانة ثلاجة جنرال اليكتريك
fridge repair and service
fridge repair number
fridge repair shop near me
fridge repair technician near me
fridge service and repair
if refrigerator
توكيل ثلاجات دايو
cost to fix fridge
مركز صيانه ثلاجات كريازى
refrigerator ice maker repair service
near me fridge repair
refrigerator and freezer repair near me
repair fridge not cooling
ثلاجة سامسونج بابين
fridge freezer technician near me
رقم تصليح ثلاجات
صيانة ثلاجات وايت وستنجهاوس
اصلاح الثلاجة
تعليم تصليح الثلاجات
تصليح ثلاجات القرين
fridge freezer maintenance
fridge not cooling
common refrigerator problems not cooling
مصلح برادات
صيانة ثلاجات ويرلبول
صيانة ثلاجات نورج
the refrigerator is not cooling
samsung support refrigerator
fridge working but not cooling
fridge repair at home
refrigerator fix near me
best refrigerator service
refrigerator service nearby
رقم صيانة ثلاجات بيكو
fridge maintenance service
fridge technician near me
lg refrigerator stopped working
samsung fridge freezer maintenance
ثلاجات صغيرة
repair fridge freezer near me
lg fridge cooling problem
صيانة شارب ثلاجات
refrigerator home service
home refrigerator repair near me
fridge and freezer repairs near me
order refrigerator
fridge re gas
fridge refurbishment
fix lg refrigerator
refrigerator issues
مركز صيانة ثلاجات فيليبس
fridge malfunction
اصلاح ثلاجات توشيبا
fix lg fridge
refrigerator freezer not cooling
اصلاح ثلاجة lg
اعطال ثلاجات lg
مركز صيانة ثلاجات ال جي
رقم صيانة ثلاجات هيتاشي
cost to fix refrigerator compressor
refrigerator not working but light is on
refrigerator compressor maintenance
اصلاح الثلاجة توشيبا
اصلاح الثلاجة كريازى
اصلاح باب ثلاجة
اصلاح ثلاجة هيتاشي
تصليح ثلاجات وغسالات
صيانة الثلاجات والغسالات
صيانة ثلاجة توشيبا 3 باب
صيانة ثلاجة فيدرال
صيانة ثلاجة فيستل
problem refrigerator not cooling
fridge service repair near me
local fridge repair near me
near fridge repair
صيانة توشيبا الساحل الشمالي
صيانه ثلاجات دايو
lg refrigerator cooling problem
refrigerator freezer working but not fridge
freezer service and repair
fridge does not work
fridge refrigerator repair
refrig not cooling
lg fridge issues
رقم صيانة توشيبا العربى ثلاجات
توكيل ثلاجات وايت ويل
توكيل ايبرنا ديب فريزر
samsung refrigerator repair company
samsung repair for refrigerator
fridge is on but not cooling
fridge not cooling at all
samsung refrigerator maintenance
fridge mechanic near me
مركز صيانة ثلاجات كلفينيتور
fridge maintenance near me
fridge repair near by
refrigerator specialist near me
refrigerator company near me
refrigerator maintenance near me
ثلاجات ناشيونال
صيانه ثلاجه
قطع غيار ثلاجات دايو
the fridge is not cooling
ارقام صيانة الثلاجات
صيانة ثلاجات يونيون
صيانة lg ثلاجات
refrigerator repair close to me
توكيل ثلاجات lg
مهندس ثلاجات
مركز صيانة ثلاجات بوش
رقم تليفون صيانة ثلاجات كريازى
رقم صيانة كريازى للثلاجات
ge fridge maintenance
فريزر صغير
refrigerator stops working
refrigerator not cooling down
اعطال ثلاجة هيتاشي
a good refrigerator
freezer mechanic near me
freezer repair shop near me
refrigerator wont turn on
refrigerator brand refrigerator
refrigerator teardown
fridge freezer broke
refrigerator isnt cooling
the fridge is not working
تصليح كاوتش الثلاجة
كيفية تصليح ثلاجة توشيبا
samsung freezer fix
samsung support fridge
repair on refrigerator
fix fridge not cooling
refrigerator defrost repair cost
lg not cooling
refrigerator section not cooling
common refrigerator issues
refrigerator mechanic near me
خدمة عملاء سامسونج ثلاجات
fridge is not working properly
اصلاح ثلاجات سامسونج
توكيل سامسونج ثلاجات
refrigerator malfunction
repair ge fridge
تصليح ديب فريزر
lg fridge door repair
samsung refrigerator broken
cost to repair fridge compressor
fridge isnt cooling
our refrigerator is not cooling
refrigerator service center near me
refrigerator not working properly
lg refrigerator timer problem
reason of refrigerator not cooling
lg refrigerator compressor replacement
رقم خدمة صيانة ثلاجات توشيبا العربى
ثلاجة عرض
ثلاجة فريزر
ثلاجة كلفينيتور
ثلاجة مع فريزر
ارقام صيانة ثلاجات توشيبا
اصلاح الثلاجات
اصلاح ثلاجات كريازى
اعطال الثلاجات المنزلية
اعطال ثلاجة توشيبا
تصليح برادات
تصليح ثلاجات
تصليح ثلاجات كريازى
تصليح فريزرات
تليفون صيانة كريازى للثلاجات
ثلاجات توشيبا
رقم صيانة ثلاجات توشيبا
صيانة البرادات
صيانة الثلاجات المنزلية
صيانة الثلاجة المنزلية
صيانة برادات
صيانة توشيبا ثلاجات
صيانة ثلاجات توشيبا
صيانة ثلاجات كريازى
فني تصليح ثلاجات
مراكز صيانة ثلاجات توشيبا العربى
fridge cooling
محل صيانة ثلاجات
fridge not coming on
lg refrigerator price in saudi arabia
samsung refrigerator saudi arabia
ارقام صيانة ثلاجات شارب
رقم صيانة شارب للثلاجات
فني ثلاجة
فني ثلاجه
رقم صيانة وايت ويل ثلاجات
صيانة وايت ويل ثلاجات
تصليح فريزر
مركز صيانة ثلاجات بيكو
ضمان ثلاجات سامسونج
خدمة عملاء ثلاجات توشيبا
fridge repairing centre
صيانة ثلاجة هاير
صيانة ثلاجة هايسنس
صيانة ثلاجات توشيبا العربي
fridge samsung repair
شركة تصليح ثلاجات
near me refrigerator repair
صيانة ثلاجات بيبسي
توكيل ثلاجات هيتاشي
صيانة ثلاجات ايبرنا
اعطال ثلاجة
اعطال ثلاجة اريستون
تصليح ثلاجة اريستون
شركة صيانة ثلاجات
تصليح ثلاجة الكتروستار
اعطال ثلاجة وايت ويل
اعطال ثلاجة دايو
اصلاح ثلاجة ايديال
اعطال ثلاجة زانوسي
صيانة سامسونج للثلاجات
اصلاح ثلاجة بيكو
تصليح ثلاجات بيكو
fridge not cooling reasons
ارقام تصليح ثلاجات
اعطال ثلاجة بوش
صيانة ديب فريزر بوش
تصليح ثلاجات سامسونج
اعطال ثلاجة ويرلبول
اعطال ثلاجة هايسنس
refrigerator has power but not cooling
fridge service centre near me
if the refrigerator is not cooling
رقم صيانة سامسونج ثلاجات
توشيبا صيانة ثلاجات
صيانه ثلاجات بوش
fridge wont turn on
best refrigerator repair service near me
الجفالي لصيانة الثلاجات
تصليح كاوتش باب الثلاجة
technician refrigerator repair
fridge compressor repair near me
near me freezer repair
ضمان ثلاجات هيتاشي
gas refrigerator repair near me
if refrigerator is not cooling
freezer working but refrigerator not cooling
تصليح ثلاجات الحساوي
refrigerator not cooling what to do
تصليح ثلاجات الاحمدي
مركز صيانة ثلاجات هيتاشي
fix compressor on fridge
ارقام صيانة شركة كريازى للثلاجات
وكيل ثلاجات جيبسون
صيانة فريزر كلفينيتور
freezer working but not fridge
fridge freezer working but not fridge
repair samsung refrigerator problems
مركز صيانة ثلاجات سامسونج
تصليح ثلاجة ايديال
اعطال ثلاجة وايت بوينت
رقم صيانة ال جي ثلاجات
خدمة عملاء ثلاجات lg
freezer cooling but refrigerator not
فني ثلاجات حولي
ارقام صيانة ثلاجات
صيانة زانوسي ثلاجات
تصليح موتور الثلاجة
كهربائي ثلاجات
fridge will not turn on
فني صيانة ثلاجات
تصليح ثلاجات ال جي
fridge wont start
صيانة كريازى ثلاجات
refrigerator repair center near me
رقم توشيبا للثلاجات
رقم شارب للثلاجات
freezer works but fridge does not
fridge repair contact number
ديب فريزر دايو
freezer fix near me
freezer maintenance near me
مركز تصليح ثلاجات
near by refrigerator repair
تصليح ثلاجات توشيبا
توكيل سامسونج للثلاجات
مركز اصلاح ثلاجات
refrigerator regas near me
اصلاح ثلاجه
تصليح ثلاجه
فني برادات
fridge repair near by me
توشيبا ثلاجات صيانة
تصليح باب الثلاجه
refrigerator repair & services
رقم مصلح ثلاجات
cooling issue in fridge
lg fridge and freezer not cooling
رقم تليفون صيانة ثلاجات توشيبا
رقم خدمة عملاء ثلاجات توشيبا
اعطال توشيبا ثلاجات
nearby refrigerator repair shop
fridge contact number
تصليح ثلاجة شارب
رقم تليفون صيانة ثلاجات وايت ويل
صيانة الغسالات والثلاجات
فني ثلاجات جدة
maintenance on refrigerator
رقم صيانة ثلاجات يونيون اير
رقم صيانة ثلاجات توشيبا العربي
صيانة ثلاجات ناشيونال الكتريك
refrigerator nearby
محل تصليح ثلاجات
ورشة تصليح ثلاجات
ارقام صيانة ثلاجات توشيبا العربي
اعطال ثلاجات توشيبا العربى
توكيل ثلاجات باساب
شركة شارب ثلاجات
صيانة ثلاجات شارب
fix refrigerator not cooling
refrigerator fix cost
refrigerator not coming on
fridge not working but light on
lg refrigerator compressor replacement cost
refrigerator inside
صيانة بيكو ثلاجات
refrigerator on but not cooling
refrigerator working but not cooling
refrigerator repair near by me
cost to replace refrigerator door
رقم توكيل سامسونج للثلاجات
صيانة ثلاجات جيبسون
صيانة ثلاجات دانسات
صيانة ثلاجات عرض
صيانة ثلاجات فالكون
صيانة ثلاجات ليبهر
صيانة ثلاجات ناشيونال
صيانة ثلاجات هايسنس
صيانة ثلاجة توشيبا 16 قدم
صيانة ثلاجة كريازى 14 قدم نوفروست
صيانة ثلاجة كريازى 16 قدم نوفروست
صيانة ثلاجة كريازى نوفروست
صيانة ثلاجات جدة
shop fridge repair
fridge fridge repair
توكيل صيانة ثلاجات وايت وستنجهاوس
رقم شركة كريازى للثلاجات
fridge repair home service near me
صيانة ثلاجات الغانم
صيانة ثلاجات سوبر جنرال
صيانة ثلاجات ميديا
صيانة ثلاجة سامسونج نوفروست
تصليح ثلاجات lg
refrigerator does not cool but freezer works
bosch refrigerator stopped working
freezer working but fridge not working
refrigerator cooling issue
refrigerator cooling not working
توكيل دايو للثلاجات
تصليح ثلاجة هيتاشي
صيانة توشيبا للثلاجات
صيانة جولدي ثلاجات
مركز صيانة توشيبا ثلاجات
مركز صيانة ثلاجات جولدي
fridge not working freezer working
typical life of a refrigerator
refrigerator refrigerator repair
refrigerator temperature high
مركز صيانة ثلاجات وايت بول
وكيل ثلاجات توشيبا
nearby fridge repairing
شركه كريازى للثلاجات
near me fridge repair shop
refrigerator mechanic number
مركز صيانة ثلاجات عرض
fridge door repair near me
fridge repair mechanic near me
رقم تليفون شركة سامسونج للثلاجات
common problems with ge refrigerators
refrigerator temperature not cooling
fix freezer compressor
كلفينيتور صيانة
رقم توكيل شارب ثلاجات
صيانة ثلاجات ايسبرج
refrigerator repair centre near me
if a fridge is not cooling
اصلاح ثلاجة ال جي
صيانة ثلاجات توشيبا 16001
تصليح ثلاجات اكتوبر
صيانة جميع انواع الثلاجات
تصليح ثلاجات عرض
فني ثلاجات سامسونج
صيانة ثلاجات كبيرة
refrigerator service at home
refrigerator door repair near me
صيانة الفريزر
refrigerator does not turn on
صيانة ثلاجات شارب العربي
رقم صيانة ثلاجات هاير
اعطال الثلاجة lg
فني صيانة ثلاجات سامسونج
فني اصلاح ثلاجات
فني صيانه ثلاجات
repair of refrigerator near me
service repair for refrigerator
shop fridge repair near me
freezer door repair near me
lg fridge and freezer not working
lg freezer working but not fridge
fridge light on but not working
رقم ضمان ثلاجات توشيبا
توكيل lg ثلاجات
رقم شركة شارب ثلاجات
اعطال ثلاجة كريازى 16 قدم
رقم شركه توشيبا للثلاجات
خدمة صيانة كريازى للثلاجات
تصليح الثلاجات في المنزل
ارقام مراكز صيانة ثلاجات كريازى
ضمان ثلاجة وايت ويل
fridge repair near me contact number
freezer company near me
تصليح ثلاجات الرياض
fridge mechanic contact number
refrigerator mechanic nearby
nearby fridge mechanic
call refrigerator
رقم فني تصليح ثلاجات
fridge has power but not cooling
شركة daewoo ثلاجات
شركة كلفينيتور للثلاجات
تصليح ثلاجات غاز
وكيل ثلاجات هاير
رقم شركة سامسونج لصيانة الثلاجات
رقم صيانة سامسونج للثلاجات
refrigerator workshop
any fridge repair near me
شركة جبسون للثلاجات
ضمان ثلاجة وايت بوينت
fridge appliances near me
رقم صيانة توشيبا للثلاجات
fixing a fridge compressor
اصلاح ثلاجة كريازى نوفروست
تصليح ثلاجة كوندور
fridge cooling issue
رقم شركة توشيبا للثلاجات
فني تبريد ثلاجات
سامسونج صيانة الثلاجات
رقم تليفون صيانة ثلاجات شارب
fridge light on but fridge not working
fridge cooling is not working
if compressor is not working in refrigerator
if fridge not cooling
مركز خدمة صيانة ثلاجات كريازى
طريقة تصليح الثلاجة
محل تصليح ثلاجات وغسالات
خدمة صيانة توشيبا ثلاجة
تصليح الثلاجة توشيبا
رقم صيانة زانوسي ثلاجات
رقم شركة سامسونج للثلاجات
صيانة الجفالي ثلاجات
تصليح ثلاجات كبد
ارقام صيانه توشيبا للثلاجات
common issues with refrigerators
قطع غيار ثلاجات زانوسي
صيانة سامسونج ثلاجات جدة
خدمة عملاء lg ثلاجات
i have a refrigerator
refrigerator me
تصليح فريزر الثلاجة
خدمة توشيبا ثلاجات
fridge parts replacement
رقم صيانة الغانم ثلاجات
ضمان توشيبا ثلاجات
fridge servicing at home
رقم صيانه شارب للثلاجات
repair shop for refrigerator near me
كيفية اصلاح ثلاجة سامسونج
كيفية تصليح الثلاجة المنزلية
freezer is working but fridge is not cooling
تصليح ثلاجات باكستاني
fridge not running but light is on
fridge is not turning on
refrigerator is working but not cooling
طريقة تصليح باب الثلاجة
fridge down not cooling
refrigerator down not cooling
شركة دايو ثلاجات
رقم خدمة عملاء ثلاجات شارب
refrigerator not working but freezer working
اصلاح ثلاجات جدة
مهندس ثلاجات جدة
fridge not powering on
refrigerator not powering on
if a refrigerator stops cooling
cooling is not happening in refrigerator
refrigerator repair stores near me
مدة ضمان ثلاجات توشيبا
مهندس ثلاجات سامسونج
عامل تصليح ثلاجات
مهندس صيانة ثلاجات
اقرب محل تصليح ثلاجات
cooling issues in refrigerator
refrigerator ksa
رقم صيانه lg ثلاجات
صيانة البرادات المنزلية
lg compressor replacement cost
تصليح ثلاجة eniem
home service refrigerator repair near me
تصليح ثلاجات شمال الرياض
قطع ثلاجة سامسونج
فني ثلاجات منزلية
وكيل ثلاجات electrolux
لتصليح الثلاجات
رقم شركة ال جي ثلاجات
order a fridge
معلم تصليح ثلاجات
ثلاجة هوت بوينت
وكيل ثلاجة دايو
رقم توكيل توشيبا ثلاجات
فني صيانة ثلاجات حولي
reasons for fridge not working
ارقام مصلحين ثلاجات
مصلح ثلاجات جدة
common reasons refrigerator not cooling
fridge making ice but not cooling
فني صيانة ثلاجات جدة
صيانة ثلاجات كلفينيتور الجفالي
صيانة ثلاجات هام
فنى ثلاجات
fridge not cooling problem
قطع غيار ثلاجة lg
محل تصليح برادات
ورشه تصليح ثلاجات ومكيفات
تصليح مروحة الثلاجة
صيانه ال جي للثلاجات
fridge mechanic shop near me
كيفية تصليح لمبة الثلاجة
تصليح مروحة الفريزر
refrigerator repair near me contact number
اعطال الثلاجة شارب
فني ثلاجات ال جي
وكيل سامسونج ثلاجات
fridge not working but freezer working
refrigerator not cooling reason
شركة سامسونج صيانة ثلاجات
freezer not cooling but light is on
ضمان توشيبا 16001
fixing compressor on refrigerator
تصليح البراد
cost to replace a compressor on a refrigerator
تصليح خبطات باب الثلاجة
جنرال الكتريك ثلاجات
electrodomestic repair near me
تصليح تايمر ثلاجة توشيبا
ضمان ثلاجات توشيبا العربى
fridge less cooling
تصليح باب ثلاجة
ترموستات ثلاجة كلفينيتور
رقم توكيل lg ثلاجات
رقم خدمة عملاء توشيبا العربي ثلاجات
تصليح الثلاجة في المنزل
اصلاح البرادات المنزلية
near fridge repair shop
شركه ال جي ثلاجات صيانة
فني ثلاجات فلبيني
صيانه وستنجهاوس ثلاجات
إصلاح ثلاجات منزلية
damage fridge shop near me
اعطال الثلاجة جولدي
technician for refrigerator near me
فني تصليح ثلاجات جدة
reasons why fridge is not cooling
ارقام شركه توشيبا للثلاجات
صيانة ثلاجات يونيون ار
محل اصلاح ثلاجات
تصليح تبريد الثلاجة
تصلح ثلاجة
ارقام شركة كريازى للثلاجات
اسعار تصليح الثلاجات
ثلاجة goldi
سانيو ثلاجة
fixing a refrigerator compressor
تصليح ثلاجة beko
إصلاح فريزر الثلاجة
اصلاح ثلاجة whirlpool
تصلح الثلاجة
صيانة تبريد ثلاجات
lg refrigerator saudi arabia
reasons why my fridge is not cooling
كيفية اصلاح ثلاجة بيكو
fridge restore
رقم تليفون كريازى ثلاجات
lg refrigerator ksa
هيتاشي ثلاجة صيانة
مدة ضمان ثلاجة وايت بوينت
تصليح درج الثلاجة
ادوات صيانة الثلاجات
اعطال الثلاجات التوشيبا النوفروست
كيفية اصلاح ثلاجة لا تبرد
كيفية اصلاح فريزر الثلاجة
reasons fridge is not cooling
fridge not cooling what is the problem
تصليح طباخات وافران غاز ثلاجات
fridge on fridge freezer not working
صيانة برادات الحساوي
تغيير لمبة ثلاجة وايت ويل
شحن فريون ثلاجة كريازى
شركه هيتاشي للثلاجات
شركه شارب للثلاجات
صيانة الحساوي للثلاجات
samsung refrigerator ksa
الغانم تصليح ثلاجات
فني ثلاجات فلبيني جدة
fridge ksa
أسعار تصليح الثلاجات
fridge repairing fridge repairing
تصليح ثلاجات و طباخات
الديب لقطع غيار الثلاجات والغسالات
تصليح شبر الثلاجه
تصليح مكيفات غسالات ثلاجات
مركز صيانة ثلاجات صيانة اعطال غسالات
هاتف تصليح ثلاجات
صيانة الجي lg صيانة ثلاجات وغسالات
تصليح باب البراد
تصليح ثقب الثلاجة
تصليح خرم الفريزر
طريقة اصلاح كاوتش باب الثلاجة
كيفية تصليح ثلاجة كوندور
كيفية تصليح موتور الثلاجة
فني تصليح غسالات نشافات ثلاجات فريزرات برادات طباخات
الاعتماد لتصليح وصيانة الغسالات والثلاجات والافران
best refrigerator in saudi arabia
lg refrigerator price in ksa
اصلاح ثلاجة كوندور
كيفية اصلاح ثلاجة lg
fridge is not cooling reason
تغيير كاوتش باب ثلاجة كريازى
refrigerator fridge not cooling properly
freezer ksa
refrigerator in ksa
freezer jeddah
refrigerator jeddah
fridge saudi arabia
samsung fridge ksa
best refrigerator brand in saudi arabia
صيانة ثلاجات دايو
refrigerator saudi
refrigerator in saudi arabia</p>
      </div>
    </Container>
  );
}

export default Projects;
