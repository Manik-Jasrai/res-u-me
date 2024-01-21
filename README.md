# res-u-me
Make sure to have pip, python, node correctly installed on your system

to launch the project:
first clone the github repo
git clone https://github.com/Manik-Jasrai/res-u-me.git

then run the following commands
cd .\Backend\python-script
pip install -r requirements

cd .\Backend\
npm i
npm run dev

cd .\Frontend\jobs-finder-frontend\
npm i
npm run dev

then open http://localhost:5173/

**res-u-me** helps professionals by providing them job opportunities from trusted sources (like LinkedIn) that match the skills and abilities in their resume.
All the user has to do is upload their resume in a pdf or docx file and they are shown a list of possible jobs that they may apply to, along with other relevant information.

We have used a Machine Learning Model to first extract the relevant portions of the user's resume. This involved fine-tuning a pre-trained Large Language Model (BERT) on a [dataset](https://www.kaggle.com/datasets/dataturks/resume-entities-for-ner) of resumes already tagged with relevant information. This was done through Named Entity Recognition.
The next step includes sending this extracted information to another Machine Learning model which returns the potential job categories/roles. This was trained as a K-Nearest Neighbor classifier model from scikit-learn using this [dataset](https://www.kaggle.com/datasets/gauravduttakiit/resume-dataset).
Then finally, live job listings are fetched from LinkedIn based on these roles and then shown to the user.

The project was built using the MERN stack along with several python libraries for AI/ML like transformers, sklearn, pandas.

Future Prospects include:
-adding a cosine similarity between the users resume and the fetched job description to give the user a metric sense of how well their resume matches the job requirements. 
-including more sources like naukri.com etc
-improving the accuracy of the ML models
